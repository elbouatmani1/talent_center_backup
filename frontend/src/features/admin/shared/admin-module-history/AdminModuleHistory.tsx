import { FunctionComponent } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import AdminLayout from '../../dashboard/components/AdminLayout';
import type { AdminHistoryRowDisplay, AdminHistoryFilterConfig } from './adminHistoryTypes';

const selectFieldClass =
  'h-9 min-w-[140px] cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white pl-3 pr-9 text-left text-sm font-medium text-[#0a0a0a] outline-none ring-0 focus:border-[rgba(0,0,0,0.18)]';

export interface AdminModuleHistoryProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters: readonly [AdminHistoryFilterConfig, AdminHistoryFilterConfig];
  rows: AdminHistoryRowDisplay[];
  emptyMessage?: string;
}

const AdminModuleHistory: FunctionComponent<AdminModuleHistoryProps> = ({
  searchValue,
  onSearchChange,
  filters,
  rows,
  emptyMessage = 'No activities match your filters.',
}) => (
  <AdminLayout>
    <div className="font-inter -mx-5 -my-5 flex min-h-0 flex-1 flex-col bg-white pb-8 text-left md:-mx-6 md:-my-6">
      <header className="shrink-0 px-5 pb-5 pt-3 md:px-6 md:pb-6 md:pt-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <div className="relative min-w-0 flex-1 basis-0 sm:min-w-[200px]">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slategray-100"
              strokeWidth={1.75}
              aria-hidden
            />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search"
              className="box-border h-9 w-full rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white py-0 pl-10 pr-3 text-sm font-medium text-[#0a0a0a] placeholder:text-slategray-100 outline-none focus:border-[rgba(0,0,0,0.18)]"
            />
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {filters.map((f) => (
              <div key={f.ariaLabel} className="relative">
                <select
                  value={f.value}
                  onChange={(e) => f.onChange(e.target.value)}
                  className={selectFieldClass}
                  aria-label={f.ariaLabel}
                >
                  <option value="all">{f.placeholderOptionLabel}</option>
                  {f.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
                  strokeWidth={2}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 pt-6 md:px-6">
        <div className="relative">
          <div className="absolute bottom-0 left-[23px] top-2 w-0.5 bg-gainsboro" aria-hidden />

          <div className="relative space-y-4">
            {rows.map((row) => (
              <div key={row.id} className="relative flex items-start gap-0">
                <div className="relative z-[1] flex w-12 shrink-0 justify-center">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-[0px_0px_0px_4px_#fff] ${row.circleBgClassName}`}
                  >
                    {row.glyph}
                  </div>
                </div>

                <div className="min-w-0 flex-1 pl-4">
                  <div className="box-border flex h-20 min-h-[5rem] flex-col justify-start rounded-[10px] border border-solid border-[rgba(0,0,0,0.1)] bg-white px-[17px] pb-px pt-[17px]">
                    <div className="flex min-h-[46px] items-start justify-between gap-2">
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <div className="flex min-h-[22px] flex-wrap items-center gap-2">
                          <div
                            className={`inline-flex h-[22px] shrink-0 items-center justify-center rounded-lg px-2 py-0.5 text-xs font-medium leading-4 ${row.badgeClassName}`}
                          >
                            {row.badgeLabel}
                          </div>
                          <span className="truncate text-sm font-medium leading-5 text-[#0a0a0a]">
                            {row.actorName}
                          </span>
                        </div>
                        <div className="text-sm leading-5 text-[#0a0a0a]">
                          <span className="font-medium">{row.headline}</span>
                          <span className="text-slategray-100"> • {row.metaLine}</span>
                        </div>
                      </div>
                      <div className="flex h-8 shrink-0 flex-col items-end text-right text-xs font-medium leading-4 text-slategray-100">
                        <span className="whitespace-nowrap">{row.date}</span>
                        <span className="whitespace-nowrap">{row.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {rows.length === 0 ? (
            <p className="py-12 text-center text-sm font-medium text-slategray-100">{emptyMessage}</p>
          ) : null}
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default AdminModuleHistory;
