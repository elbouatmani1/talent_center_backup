import { FunctionComponent, useMemo, useState } from 'react';
import { CircleUserRound, Clock3, Eye, Funnel, Pencil, Plus, Search, Trash2, X } from 'lucide-react';
import { studentsRows } from '../data/studentsHistoryMock';
import type { StudentsHistoryActionType, StudentsHistoryRow } from '../types';

const actionBadgeClass: Record<StudentsHistoryActionType, string> = {
  update: 'bg-[#dbeafe] text-[#193cb8]',
  create: 'bg-[#dcfce7] text-[#016630]',
  delete: 'bg-[#fee9eb] text-[#b4232d]',
};

const actionIcon = (type: StudentsHistoryActionType) => {
  if (type === 'create') return <Plus className="h-4 w-4" strokeWidth={2} />;
  if (type === 'delete') return <Trash2 className="h-4 w-4" strokeWidth={2} />;
  return <Pencil className="h-4 w-4" strokeWidth={2} />;
};

const StudentsTimelineList: FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState<StudentsHistoryRow | null>(null);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studentsRows;
    return studentsRows.filter((row: StudentsHistoryRow) =>
      [row.module, row.title, row.actor, row.actionType, row.timestamp].join(' ').toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
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
                  {actionIcon(row.actionType)}
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md border border-[rgba(0,0,0,0.1)] px-2 py-0.5 text-xs font-medium leading-4 text-[#0a0a0a]">
                      {row.module}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium leading-4 ${actionBadgeClass[row.actionType]}`}
                    >
                      {row.actionType}
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
                onClick={() => setSelectedRow(row)}
              >
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedRow ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.35)] p-4">
          <div className="w-full max-w-[680px] overflow-hidden rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white shadow-xl">
            <div className="flex items-start justify-between border-b border-[rgba(0,0,0,0.08)] px-5 py-4">
              <div>
                <h3 className="text-xl font-semibold leading-7 text-[#0a0a0a]">Activity Details</h3>
                <p className="mt-1 text-sm leading-5 text-[#717182]">Complete information about this action</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRow(null)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#717182] hover:bg-neutral-100"
                aria-label="Close details modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 px-5 py-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a]">
                    <span className="text-[#9ca3af]">{actionIcon(selectedRow.actionType)}</span>
                    Module
                  </p>
                  <p className="text-sm text-[#0a0a0a]">{selectedRow.module}</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a]">
                    <Pencil className="h-4 w-4 text-[#9ca3af]" />
                    Action Type
                  </p>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium leading-4 ${actionBadgeClass[selectedRow.actionType]}`}
                  >
                    {selectedRow.actionType}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a]">
                    <CircleUserRound className="h-4 w-4 text-[#9ca3af]" />
                    Performed By
                  </p>
                  <p className="text-sm text-[#0a0a0a]">{selectedRow.actor}</p>
                </div>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a]">
                    <Clock3 className="h-4 w-4 text-[#9ca3af]" />
                    Timestamp
                  </p>
                  <p className="text-sm text-[#0a0a0a]">{selectedRow.timestamp}</p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-[#0a0a0a]">Action Description</h4>
                <p className="mt-1 text-sm leading-5 text-[#0a0a0a]">{selectedRow.title}</p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-[#0a0a0a]">Details</h4>
                <p className="mt-1 text-sm leading-5 text-[#717182]">
                  Updated account information and academic profile metadata.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-[rgba(0,0,0,0.08)] px-5 py-3">
              <button
                type="button"
                onClick={() => setSelectedRow(null)}
                className="inline-flex h-8 items-center justify-center rounded-md border border-[rgba(0,0,0,0.1)] text-sm font-medium text-[#0a0a0a] hover:bg-neutral-50"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-[rgba(0,0,0,0.1)] text-sm font-medium text-[#0a0a0a] hover:bg-neutral-50"
              >
                <Eye className="h-4 w-4" />
                View Related Entity
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudentsTimelineList;
