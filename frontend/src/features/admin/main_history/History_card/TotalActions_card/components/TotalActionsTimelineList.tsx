import { FunctionComponent, useMemo, useState } from 'react';
import { Eye, Funnel, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { totalActionsRows } from '../data/totalActionsHistoryMock';
import type { TotalActionsHistoryRow } from '../types';

const actionBadgeClass: Record<TotalActionsHistoryRow['type'], string> = {
  update: 'bg-[#dbeafe] text-[#193cb8]',
  create: 'bg-[#dcfce7] text-[#016630]',
  delete: 'bg-[#fee9eb] text-[#b4232d]',
};

const actionIcon = (type: TotalActionsHistoryRow['type']) => {
  if (type === 'create') return <Plus className="h-4 w-4" strokeWidth={2} />;
  if (type === 'delete') return <Trash2 className="h-4 w-4" strokeWidth={2} />;
  return <Pencil className="h-4 w-4" strokeWidth={2} />;
};

const TotalActionsTimelineList: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return totalActionsRows;
    return totalActionsRows.filter((row) =>
      [row.module, row.title, row.actor, row.type, row.timestamp].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="w-full space-y-3 rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search activity..."
            className="h-10 w-full rounded-lg bg-whitesmoke py-1 pl-9 pr-3 text-sm text-[#0a0a0a] outline-none placeholder:text-[#717182]"
          />
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.1)] bg-white text-[#4b5563]"
          aria-label="Filter history"
        >
          <Funnel className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {rows.map((row) => (
          <article
            key={row.id}
            className="flex h-[74px] items-center justify-between gap-5 rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white px-4 py-3 font-inter transition-colors hover:bg-neutral-50"
          >
            <div className="flex min-w-0 items-center gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#2b7fff]">
                {actionIcon(row.type)}
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-[rgba(0,0,0,0.1)] px-2 py-0.5 text-xs font-medium leading-4 text-[#0a0a0a]">
                    {row.module}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium leading-4 ${actionBadgeClass[row.type]}`}
                  >
                    {row.type}
                  </span>
                </div>
                <p className="m-0 text-sm font-medium leading-5 text-[#0a0a0a]">{row.title}</p>
                <p className="m-0 text-xs leading-4 text-[#717182]">
                  {row.actor} • {row.timestamp}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-8 shrink-0 items-center gap-2 text-sm font-medium text-[#0A0A0A]"
            >
              <Eye className="h-4 w-4" />
              <span>View Details</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TotalActionsTimelineList;
