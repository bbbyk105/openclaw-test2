'use client';

import { useState } from 'react';
import { deleteTodo, toggleTodo, updateTodo } from '@/app/actions';

export default function TodoItem({ todo }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <form action={toggleTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <input type="hidden" name="completed" value={String(todo.completed)} />
          <button type="submit" className="flex items-center">
            <input type="checkbox" checked={todo.completed} readOnly className="h-4 w-4" />
          </button>
        </form>

        {editing ? (
          <form action={updateTodo} className="flex min-w-0 flex-1 gap-2">
            <input type="hidden" name="id" value={todo.id} />
            <input
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2"
            />
            <button type="submit" onClick={() => setEditing(false)} className="rounded-xl bg-emerald-100 px-3 py-2 text-sm text-emerald-700">
              保存
            </button>
          </form>
        ) : (
          <span className={`truncate ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {!editing && (
          <button type="button" onClick={() => setEditing(true)} className="rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700">
            編集
          </button>
        )}
        <form action={deleteTodo}>
          <input type="hidden" name="id" value={todo.id} />
          <button type="submit" className="rounded-xl bg-rose-100 px-3 py-2 text-sm text-rose-700">
            削除
          </button>
        </form>
      </div>
    </li>
  );
}
