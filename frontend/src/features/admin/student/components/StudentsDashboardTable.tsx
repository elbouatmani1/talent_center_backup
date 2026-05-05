import { FunctionComponent } from 'react';
import { Eye, Pencil, Search, SlidersHorizontal, Upload, UserX } from 'lucide-react';
import type { InternshipStatus, StudentDashboardRow } from '../data/studentsDashboardMock';

const internshipBadgeClass: Record<InternshipStatus, string> = {
  Assigned: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-600/15',
  None: 'bg-red-50 text-red-800 ring-1 ring-red-600/15',
  Searching: 'bg-amber-50 text-amber-800 ring-1 ring-amber-600/20'
};

const outlineBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-2.5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

interface StudentsDashboardTableProps {
  students: StudentDashboardRow[];
  query: string;
  onQueryChange: (v: string) => void;
}

const StudentsDashboardTable: FunctionComponent<StudentsDashboardTableProps> = ({
  students,
  query,
  onQueryChange
}) => (
  <div className="box-border flex w-full min-w-0 flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white font-inter shadow-sm">
    <div className="flex flex-col gap-4 border-b border-[rgba(0,0,0,0.08)] px-4 pb-5 pt-6 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
      <div className="min-w-0">
        <h2 className="m-0 font-inter text-xl font-bold leading-7 tracking-tight text-[#0a0a0a]">Students</h2>
        <p className="m-0 mt-1 font-inter text-sm leading-5 text-[#717182]">
          Manage student profiles and internship status
        </p>
      </div>
      <div className="flex w-full min-w-0 flex-col gap-3 lg:max-w-3xl lg:flex-row lg:flex-wrap lg:items-center lg:justify-end">
        <div className="relative min-h-0 flex-1 lg:min-w-[220px] lg:max-w-xs">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search students..."
            className="box-border h-10 w-full rounded-lg border-0 bg-whitesmoke py-2 pl-10 pr-4 text-sm leading-5 text-[#0a0a0a] placeholder:text-[#717182] outline-none ring-1 ring-inset ring-transparent focus:ring-[#d4d4d4]"
          />
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-3 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
          >
            <SlidersHorizontal className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            Filter
          </button>
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-3 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
          >
            <Upload className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            Import Excel
          </button>
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <span className="text-base leading-none">+</span>
            Create Student
          </button>
        </div>
      </div>
    </div>

    <div className="overflow-x-auto px-4 pb-6 pt-2 sm:px-6">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-[rgba(0,0,0,0.1)]">
            <th className="py-3 pl-2 pr-4 text-xs font-semibold text-[#6b7280]">Name</th>
            <th className="py-3 px-4 text-xs font-semibold text-[#6b7280]">Class</th>
            <th className="py-3 px-4 text-xs font-semibold text-[#6b7280]">Field</th>
            <th className="py-3 px-4 text-xs font-semibold text-[#6b7280]">Internship Status</th>
            <th className="py-3 px-4 text-xs font-semibold text-[#6b7280]">Status</th>
            <th className="py-3 pl-4 pr-2 text-right text-xs font-semibold text-[#6b7280]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-[rgba(0,0,0,0.06)] last:border-b-0">
              <td className="py-3.5 pl-2 pr-4 align-middle font-medium text-[#0a0a0a]">{student.name}</td>
              <td className="py-3.5 px-4 align-middle text-[#0a0a0a]">{student.classLevel}</td>
              <td className="py-3.5 px-4 align-middle text-[#0a0a0a]">{student.field}</td>
              <td className="py-3.5 px-4 align-middle">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${internshipBadgeClass[student.internshipStatus]}`}
                >
                  {student.internshipStatus}
                </span>
              </td>
              <td className="py-3.5 px-4 align-middle">
                <span className="font-medium text-seagreen">{student.statusLabel}</span>
              </td>
              <td className="py-3.5 pl-4 pr-2 text-right align-middle">
                <div className="flex flex-wrap items-center justify-end gap-2">
                  <button type="button" className={outlineBtn}>
                    <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    View Profile
                  </button>
                  <button type="button" className={outlineBtn}>
                    <Pencil className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Edit
                  </button>
                  <button type="button" className={outlineBtn}>
                    <UserX className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Deactivate
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default StudentsDashboardTable;
