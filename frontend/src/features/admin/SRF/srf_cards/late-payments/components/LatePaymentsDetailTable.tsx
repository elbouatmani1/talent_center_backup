import { FunctionComponent, useMemo, useState } from 'react';
import { Search, Eye, ChevronDown } from 'lucide-react';
import type { LatePaymentStudentRow } from '../data/latePaymentsDetailMock';
import { latePaymentsDetailRows } from '../data/latePaymentsDetailMock';

const mad = (n: number) => `${n} MAD`;

const borderRow = 'border-b border-solid border-[rgba(0,0,0,0.1)]';

const viewDetailsBtn =
  'inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-3 font-inter text-sm font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const remainingClass =
  'h-[49px] px-2 align-middle text-sm font-bold leading-5 tabular-nums text-firebrick md:px-4';

const LatePaymentsDetailTable: FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const [classFilter, setClassFilter] = useState<string>('all');

  const classOptions = useMemo(() => {
    const uniq = [...new Set(latePaymentsDetailRows.map((r) => r.className))].sort();
    return uniq;
  }, []);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return latePaymentsDetailRows.filter((r) => {
      if (classFilter !== 'all' && r.className !== classFilter) return false;
      if (!q) return true;
      return (
        r.studentName.toLowerCase().includes(q) ||
        r.className.toLowerCase().includes(q)
      );
    });
  }, [query, classFilter]);

  const headings = [
    'Student Name',
    'Class',
    'Amount Due',
    'Amount Paid',
    'Remaining',
    'Status',
    'Actions',
  ] as const;

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white font-inter">
      <div className="box-border flex w-full flex-col gap-6 px-6 pb-6 pt-6 text-left font-inter text-num-14 text-slategray-100">
        <div className="flex h-9 w-full flex-row items-center gap-2 sm:gap-3">
          <div className="relative min-h-0 flex-1">
            <Search
              className="pointer-events-none absolute left-[12px] top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search students..."
              className="box-border h-9 w-full rounded-lg border-0 bg-whitesmoke py-1 pl-9 pr-3 font-inter text-sm font-normal leading-5 text-[#0a0a0a] placeholder:text-slategray-100 outline-none focus:ring-2 focus:ring-[rgba(0,0,0,0.08)] focus:ring-offset-0"
            />
          </div>
          <div className="relative h-9 w-full shrink-0 sm:w-[180px]">
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              aria-label="Filter by class"
              className="box-border h-9 w-full cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white py-1 pl-3 pr-9 font-inter text-sm font-normal leading-5 text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
            >
              <option value="all">All classes</option>
              {classOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]"
              strokeWidth={1.75}
            />
          </div>
        </div>

        <div className="w-full min-w-0 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-[#0a0a0a]">
            <thead>
              <tr className={`h-10 ${borderRow}`}>
                {headings.map((h) => (
                  <th
                    key={h}
                    className={`align-middle px-2 py-2 pb-2 font-inter text-sm font-bold leading-5 text-[#0a0a0a] first:pl-0 last:pr-2 ${
                      h === 'Actions' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: LatePaymentStudentRow) => (
                <tr key={row.id} className={borderRow}>
                  <td className="h-[49px] align-middle pl-0 pr-4 text-sm font-bold leading-5">
                    {row.studentName}
                  </td>
                  <td className="h-[49px] px-2 align-middle text-sm font-bold leading-5 md:px-4">
                    {row.className}
                  </td>
                  <td className="h-[49px] px-2 align-middle text-sm font-bold leading-5 tabular-nums md:px-4">
                    {mad(row.amountDue)}
                  </td>
                  <td className="h-[49px] px-2 align-middle text-sm font-bold leading-5 tabular-nums md:px-4">
                    {mad(row.amountPaid)}
                  </td>
                  <td className={remainingClass}>{mad(row.remaining)}</td>
                  <td className="h-[49px] px-2 align-middle md:px-4">
                    <span className="inline-flex rounded-full bg-mistyrose px-2.5 py-1 font-inter text-xs font-medium leading-4 text-firebrick">
                      Late
                    </span>
                  </td>
                  <td className="h-[49px] pl-2 pr-0 align-middle text-right md:pl-4">
                    <div className="flex justify-end">
                      <button type="button" className={viewDetailsBtn}>
                        <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                        View Details
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatePaymentsDetailTable;
