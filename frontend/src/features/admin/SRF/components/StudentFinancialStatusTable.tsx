import { FunctionComponent, useMemo } from 'react';
import { Search, Eye, CircleCheck, Filter } from 'lucide-react';
import type {
  StudentFinancialRowStatus,
  StudentFinancialTableRow,
} from '../data/srfFinancialMock';

const statusBadgeClasses: Record<StudentFinancialRowStatus, string> = {
  Paid: 'bg-emerald-50 text-emerald-800',
  Unpaid: 'bg-red-50 text-red-700',
  'Partially Paid': 'bg-orange-50 text-orange-700',
  'Pending Validation': 'bg-[#fef9c2] text-[#854d0e]',
  Late: 'bg-red-50 text-red-700',
};

/** Montants comme sur la maquette : pas de séparateur de milliers (ex. 15000 MAD). */
const mad = (n: number) => `${n} MAD`;

const viewDetailsBtnClass =
  'inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 py-2 font-inter text-sm font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const TABLE_HEADINGS = [
  'Student Name',
  'Class',
  'Amount Due',
  'Amount Paid',
  'Status',
  'Actions',
] as const;

interface StudentFinancialStatusTableProps {
  rows: StudentFinancialTableRow[];
  query: string;
  onQueryChange: (value: string) => void;
}

const StudentFinancialStatusTable: FunctionComponent<StudentFinancialStatusTableProps> = ({
  rows,
  query,
  onQueryChange,
}) => {
  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.studentName.toLowerCase().includes(q) ||
        r.className.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <div className="box-border flex w-full flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter shadow-sm">
      <div className="flex flex-col gap-5 px-4 pb-1.5 pt-6 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex min-w-0 flex-col gap-0">
          <h2 className="m-0 font-inter text-xl font-bold leading-7 tracking-tight text-[#0a0a0a]">
            Student Financial Status
          </h2>
          <p className="m-0 mt-1 font-inter text-sm leading-5 text-[#717182]">
            Track and manage student payment status
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:max-w-xl">
          <div className="relative flex flex-1 min-w-[12rem]">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search students..."
              className="box-border h-10 w-full rounded-lg border-0 bg-[#f5f5f5] py-2 pl-9 pr-3 font-inter text-sm leading-5 text-[#0a0a0a] placeholder:text-[#717182] outline-none ring-1 ring-inset ring-transparent focus:ring-[#d4d4d4]"
            />
          </div>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white text-[#171717] transition-colors hover:bg-[#fafafa]"
            aria-label="Filter"
          >
            <Filter className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto px-4 pb-6 pt-3 sm:px-6">
        <table className="w-full min-w-[760px] border-collapse font-inter">
          <thead>
            <tr className="border-b border-solid border-[rgba(0,0,0,0.08)]">
              {TABLE_HEADINGS.map((heading) => {
                const isActions = heading === 'Actions';
                return (
                  <th
                    key={heading}
                    className={`pb-4 pt-3 px-6 first:pl-0 last:pr-0 font-inter text-sm font-bold leading-5 text-[#0a0a0a] ${
                      isActions ? 'text-right' : 'text-left'
                    }`}
                  >
                    {heading}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id} className="border-b border-solid border-[rgba(0,0,0,0.06)]">
                <td className="px-6 py-6 pl-0 pr-6 text-left text-sm font-medium text-[#0a0a0a]">
                  {row.studentName}
                </td>
                <td className="px-6 py-6 text-left text-sm text-[#0a0a0a]">{row.className}</td>
                <td className="px-6 py-6 text-left text-sm tabular-nums text-[#0a0a0a]">
                  {mad(row.amountDue)}
                </td>
                <td className="px-6 py-6 text-left text-sm tabular-nums text-[#0a0a0a]">
                  {mad(row.amountPaid)}
                </td>
                <td className="px-6 py-6 text-left">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 font-inter text-xs font-semibold leading-4 ${statusBadgeClasses[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-6 pr-0 text-right align-middle">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button type="button" className={viewDetailsBtnClass}>
                      <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                      View Details
                    </button>
                    {row.status === 'Pending Validation' && (
                      <button
                        type="button"
                        className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#030213] px-3 py-2 font-inter text-sm font-medium leading-5 text-white transition-opacity hover:opacity-90"
                      >
                        <CircleCheck className="h-4 w-4 shrink-0" strokeWidth={2} />
                        Validate
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentFinancialStatusTable;
