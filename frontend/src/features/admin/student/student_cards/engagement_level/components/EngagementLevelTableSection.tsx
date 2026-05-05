import { FunctionComponent } from 'react';
import { Eye, Search } from 'lucide-react';
import type { EngagementBand, EngagementLevelTableRow } from '../data/engagementLevelTableRows';

const engagementBadgeClass: Record<EngagementBand, string> = {
  High:
    'inline-flex items-center justify-center rounded-num-8 bg-honeydew px-2 py-num-2 text-num-12 font-medium leading-num-16 text-seagreen',
  Medium:
    'inline-flex items-center justify-center rounded-num-8 bg-[#ffedd5] px-2 py-num-2 text-num-12 font-medium leading-num-16 text-[#c2410c]',
  Low:
    'inline-flex items-center justify-center rounded-num-8 bg-gainsboro px-2 py-num-2 text-num-12 font-medium leading-num-16 text-dimgray'
};

const viewDetailsBtn =
  'inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-3 text-num-14 font-medium leading-num-20 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

interface EngagementLevelTableSectionProps {
  students: EngagementLevelTableRow[];
  query: string;
  onQueryChange: (v: string) => void;
  fieldFilter: string;
  onFieldFilterChange: (v: string) => void;
  fieldOptions: string[];
}

const EngagementLevelTableSection: FunctionComponent<EngagementLevelTableSectionProps> = ({
  students,
  query,
  onQueryChange,
  fieldFilter,
  onFieldFilterChange,
  fieldOptions
}) => (
  <div className="box-border flex w-full min-w-0 flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white font-inter shadow-sm">
    <div className="border-b border-[rgba(0,0,0,0.08)] px-6 pb-4 pt-6">
      <h2 className="text-base font-medium leading-5 text-[#0a0a0a]">Students by Engagement Level</h2>
      <p className="mt-1 text-sm leading-6 text-slategray-100">
        Sorted by activity and participation metrics.
      </p>
    </div>
    <div className="flex flex-col gap-3 border-b border-[rgba(0,0,0,0.08)] px-4 py-4 sm:px-6 sm:flex-row sm:items-center">
      <div className="relative min-h-0 min-w-0 flex-1">
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
          className="box-border h-10 w-full rounded-lg border-0 bg-whitesmoke py-2 pl-10 pr-4 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-[#717182] outline-none ring-1 ring-inset ring-transparent focus:ring-[#d4d4d4]"
        />
      </div>
      <select
        aria-label="Filter by field of study"
        value={fieldFilter}
        onChange={(e) => onFieldFilterChange(e.target.value)}
        className="box-border h-10 min-w-[11rem] shrink-0 cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white py-2 pl-3 pr-9 text-num-14 font-medium leading-num-20 text-[#0a0a0a] bg-[length:1rem] bg-[right_0.625rem_center] bg-no-repeat"
        style={{ backgroundImage: chevronSvg }}
      >
        <option value="all">All fields</option>
        {fieldOptions.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>
    </div>

    <div className="overflow-x-auto px-4 pb-6 pt-2 sm:px-6">
      <div className="text-left text-num-14 font-inter text-[#0a0a0a]">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
              <th className="box-border py-[8.75px] pl-2 pr-4 text-left font-medium leading-num-20">Name</th>
              <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Class</th>
              <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Field</th>
              <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Activity Score</th>
              <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Engagement Level</th>
              <th className="box-border py-[8.75px] pl-4 pr-2 text-right font-medium leading-num-20">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-num-14 leading-num-20 text-slategray-100">
                  No students match your filters.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="min-h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
                >
                  <td className="box-border min-h-[49px] py-[13.5px] pl-2 pr-4 align-middle font-medium leading-num-20">
                    {student.name}
                  </td>
                  <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle leading-num-20">{student.classLevel}</td>
                  <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle leading-num-20">{student.field}</td>
                  <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle tabular-nums leading-num-20">
                    {student.activityScore.toFixed(1)}/10
                  </td>
                  <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle">
                    <span className={engagementBadgeClass[student.engagementLevel]}>{student.engagementLevel}</span>
                  </td>
                  <td className="box-border min-h-[49px] py-[8.5px] pl-4 pr-2 text-right align-middle">
                    <button type="button" className={viewDetailsBtn}>
                      <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default EngagementLevelTableSection;
