import { FunctionComponent, useMemo, useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  Search
} from 'lucide-react';
import type { EncadrantReportRow, EncadrantReportStatus } from '../data/encadrantReportsMock';
import { encadrantReportsRows } from '../data/encadrantReportsMock';
import AdminMobileRowCard from '../../../shared/AdminMobileRowCard';

const statusBadgeClass: Record<EncadrantReportStatus, string> = {
  Submitted: 'bg-[#dbeafe] text-[#193cb8]',
  Pending: 'bg-[#fef9c2] text-[#894b00]',
  Approved: 'bg-honeydew text-seagreen',
  Overdue: 'bg-mistyrose text-firebrick'
};

const StatusIcon: FunctionComponent<{ status: EncadrantReportStatus }> = ({ status }) => {
  const cls = 'h-3 w-3 shrink-0';
  switch (status) {
    case 'Submitted':
      return <Clock className={cls} strokeWidth={2} aria-hidden />;
    case 'Pending':
      return <AlertCircle className={cls} strokeWidth={2} aria-hidden />;
    case 'Approved':
      return <CheckCircle className={cls} strokeWidth={2} aria-hidden />;
    case 'Overdue':
      return <AlertTriangle className={cls} strokeWidth={2} aria-hidden />;
    default:
      return null;
  }
};

const actionOutlineBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const approveBtnClass =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#030213] px-2.5 font-inter text-num-14 font-medium leading-5 text-white transition-opacity hover:opacity-90';

const btnMobile = (c: string) => `${c} w-full justify-center sm:w-auto`;

interface EncadrantReportsTableSectionProps {
  rows?: EncadrantReportRow[];
}

const EncadrantReportsTableSection: FunctionComponent<EncadrantReportsTableSectionProps> = ({
  rows = encadrantReportsRows
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.encadrant.toLowerCase().includes(q) ||
        r.student.toLowerCase().includes(q) ||
        r.reportType.toLowerCase().includes(q) ||
        r.status.toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <div className="box-border flex w-full min-h-[555px] min-w-0 flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left text-base text-[#0a0a0a] font-inter shadow-sm">
      <div className="box-border flex w-full shrink-0 flex-col gap-4 px-4 pb-1.5 pt-6 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-5">
        <div className="flex min-h-0 min-w-0 flex-col items-start lg:max-w-[420px]">
          <div className="relative flex min-h-[20px] w-full shrink-0 items-center gap-2">
            <FileText className="relative h-5 w-5 shrink-0 text-[#0a0a0a]" strokeWidth={1.75} aria-hidden />
            <span className="relative font-inter text-base font-medium leading-5 text-[#0a0a0a]">Encadrant Reports</span>
          </div>
          <div className="relative mt-1 w-full shrink-0 text-sm leading-6 text-slategray-100">
            Track and manage supervisor reports and evaluations
          </div>
        </div>
        <div className="flex w-full min-w-0 shrink-0 flex-col gap-2 lg:w-auto lg:max-w-none lg:flex-row lg:items-center lg:justify-end">
          <div className="relative h-9 min-w-0 flex-1 lg:max-w-[256px]">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
              strokeWidth={1.75}
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search reports..."
              className="box-border h-9 w-full rounded-num-8 border-0 bg-whitesmoke py-1 pl-9 pr-3 font-inter text-num-14 leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
            />
          </div>
          <button
            type="button"
            className="box-border flex h-9 w-9 shrink-0 items-center justify-center rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-[9px] py-0 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
            aria-label="Filter reports"
          >
            <Filter className="relative h-4 w-4" strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </div>

      <div className="box-border flex w-full min-w-0 flex-1 flex-col px-4 pb-6 pt-0 text-num-14 sm:px-6">
        <div className="space-y-3 lg:hidden">
          {filtered.map((row) => (
            <AdminMobileRowCard
              key={row.id}
              title={`${row.reportType}`}
              meta={`${row.encadrant} → ${row.student}`}
              badges={
                <span
                  className={`inline-flex h-[22px] items-center gap-1.5 rounded-num-8 px-2.5 text-xs font-medium leading-4 ${statusBadgeClass[row.status]}`}
                >
                  <StatusIcon status={row.status} />
                  {row.status}
                </span>
              }
              fields={[
                { label: 'Submitted', value: row.submittedDate },
                {
                  label: 'Due date',
                  value: (
                    <span className={row.status === 'Overdue' ? 'font-medium text-[#e7000b]' : ''}>{row.dueDate}</span>
                  )
                }
              ]}
              actions={
                <>
                  <button type="button" className={btnMobile(actionOutlineBtn)}>
                    <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    View
                  </button>
                  <button type="button" className={btnMobile(actionOutlineBtn)}>
                    <Download className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Download
                  </button>
                  {row.status === 'Submitted' && (
                    <button type="button" className={btnMobile(approveBtnClass)}>
                      <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      Approve
                    </button>
                  )}
                </>
              }
            />
          ))}
        </div>

        <div className="relative hidden min-h-[280px] w-full min-w-0 overflow-x-auto lg:block">
          <table className="w-full min-w-[1100px] border-collapse font-inter">
            <thead>
              <tr className="h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">Encadrant</th>
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">Student</th>
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">
                  Report Type
                </th>
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">Status</th>
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">
                  Submitted Date
                </th>
                <th className="box-border py-2 pl-2 pr-2 text-left text-sm font-semibold text-[#6b7280]">Due Date</th>
                <th className="box-border py-2 pl-2 pr-2 text-right text-sm font-semibold text-[#6b7280]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className="h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
                >
                  <td className="box-border max-w-[172px] py-[13.5px] pl-2 pr-2 align-middle text-num-14 font-medium leading-5 text-[#0a0a0a]">
                    {row.encadrant}
                  </td>
                  <td className="box-border py-[13.5px] pl-2 pr-2 align-middle text-num-14 leading-5 text-[#0a0a0a]">
                    {row.student}
                  </td>
                  <td className="box-border py-[13.5px] pl-2 pr-2 align-middle text-num-14 leading-5 text-[#0a0a0a]">
                    {row.reportType}
                  </td>
                  <td className="box-border py-[13.5px] pl-2 pr-2 align-middle">
                    <span
                      className={`inline-flex h-[22px] items-center gap-1.5 rounded-num-8 px-2.5 text-xs font-medium leading-4 ${statusBadgeClass[row.status]}`}
                    >
                      <StatusIcon status={row.status} />
                      {row.status}
                    </span>
                  </td>
                  <td className="box-border py-[13.5px] pl-2 pr-2 align-middle text-num-14 leading-5 text-[#0a0a0a]">
                    {row.submittedDate}
                  </td>
                  <td
                    className={`box-border py-[13.5px] pl-2 pr-2 align-middle text-num-14 leading-5 ${
                      row.status === 'Overdue' ? 'font-medium text-[#e7000b]' : 'text-[#0a0a0a]'
                    }`}
                  >
                    {row.dueDate}
                  </td>
                  <td className="box-border py-2 pl-2 pr-2 text-right align-middle">
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <button type="button" className={actionOutlineBtn}>
                        <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        View
                      </button>
                      <button type="button" className={actionOutlineBtn}>
                        <Download className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        Download
                      </button>
                      {row.status === 'Submitted' && (
                        <button type="button" className={approveBtnClass}>
                          <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                          Approve
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
    </div>
  );
};

export default EncadrantReportsTableSection;
