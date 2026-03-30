'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function TodoFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'all';
  const sort = searchParams.get('sort') || 'newest';

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {['all', 'active', 'completed'].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => updateParam('filter', value)}
            className={`rounded-full px-4 py-2 text-sm ${
              filter === value ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <select
        value={sort}
        onChange={(event) => updateParam('sort', event.target.value)}
        className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700"
      >
        <option value="newest">newest</option>
        <option value="oldest">oldest</option>
        <option value="alphabetical">alphabetical</option>
      </select>
    </div>
  );
}
