import TodoFilters from '@/components/TodoFilters';
import TodoItem from '@/components/TodoItem';
import { createTodo } from '@/app/actions';
import { prisma } from '@/lib/prisma';

function buildWhere(filter) {
  if (filter === 'active') return { completed: false };
  if (filter === 'completed') return { completed: true };
  return {};
}

function buildOrderBy(sort) {
  if (sort === 'oldest') return { createdAt: 'asc' };
  if (sort === 'alphabetical') return { title: 'asc' };
  return { createdAt: 'desc' };
}

export default async function HomePage({ searchParams }) {
  const filter = searchParams?.filter || 'all';
  const sort = searchParams?.sort || 'newest';

  const todos = await prisma.todo.findMany({
    where: buildWhere(filter),
    orderBy: buildOrderBy(sort),
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Issue #17</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">OpenClaw Test 2 Fresh Task E</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Next.js App Router / Tailwind CSS / Prisma / SQLite で、個人用 Todo アプリを最小構成で実装。
          追加、編集、完了切り替え、削除、filter、sort、軽量 DB 永続化に対応しています。
        </p>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-8">
        <form action={createTodo} className="flex flex-col gap-3 sm:flex-row">
          <input
            name="title"
            type="text"
            placeholder="新しいタスクを入力"
            className="min-w-0 flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
          />
          <button className="rounded-2xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500">
            追加
          </button>
        </form>

        <TodoFilters />
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-8">
        {todos.length === 0 ? (
          <p className="text-sm text-slate-500">まだタスクがないよ。最初の Todo を追加してみて。</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
