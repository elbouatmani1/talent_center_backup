import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Plus, Search, UserPlus, FileText, Users } from 'lucide-react';
import type { EncadrantRow } from '../data/encadrantsMockData';

/** Styles boutons alignés Figma (rounded-num-8, h-8, border rgba comme gray-300 maquette). */
const viewDetailsBtnClass =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const manageStudentsBtnClass =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#030213] px-2.5 font-inter text-num-14 font-medium leading-5 text-white transition-opacity hover:opacity-90';

const TABLE_HEADINGS = [
  'Name',
  'Department',
  'Students Assigned',
  'Reports in Progress',
  'Actions'
] as const;

interface EncadrantsTablePanelProps {
  rows: EncadrantRow[];
  query: string;
  onQueryChange: (value: string) => void;
}

const EncadrantsTablePanel: FunctionComponent<EncadrantsTablePanelProps> = ({
  rows,
  query,
  onQueryChange
}) => {
  const navigate = useNavigate();
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const departmentOptions = useMemo(
    () => [...new Set(rows.map((r) => r.department))].sort(),
    [rows]
  );

  const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      const matchDept = departmentFilter === 'all' || r.department === departmentFilter;
      if (!q) return matchDept;
      const matchQuery =
        r.name.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q) ||
        String(r.studentsAssigned).includes(q) ||
        String(r.reportsInProgress).includes(q);
      return matchDept && matchQuery;
    });
  }, [rows, query, departmentFilter]);

  return (
    <div className="box-border flex w-full flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter shadow-sm">
      <div className="flex flex-col gap-5 px-4 pb-1.5 pt-6 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex min-w-0 flex-col gap-0">
          <h2 className="m-0 font-inter text-xl font-bold leading-7 tracking-tight text-[#0a0a0a]">Encadrants</h2>
          <p className="m-0 mt-1 font-inter text-sm leading-5 text-[#717182]">
            Manage supervisors and their assigned students
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:max-w-xl">
          <div className="relative flex flex-1 min-w-[12rem]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]" strokeWidth={1.75} />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search encadrants..."
              className="box-border h-10 w-full rounded-lg border-0 bg-[#f5f5f5] py-2 pl-9 pr-3 font-inter text-sm leading-5 text-[#0a0a0a] placeholder:text-[#717182] outline-none ring-1 ring-inset ring-transparent focus:ring-[#d4d4d4]"
            />
          </div>
          <select
            aria-label="Filter by department"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="box-border h-10 min-w-[11rem] shrink-0 cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white py-2 pl-3 pr-9 font-inter text-sm font-medium leading-5 text-[#0a0a0a] bg-[length:1rem] bg-[right_0.625rem_center] bg-no-repeat"
            style={{ backgroundImage: chevronSvg }}
          >
            <option value="all">All departments</option>
            {departmentOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => navigate('/admin/encadrants/new')}
            className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#030213] px-4 font-inter text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Plus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            Add Encadrant
          </button>
        </div>
      </div>

      <div className="overflow-x-auto px-4 pb-6 pt-0 sm:px-6">
        {/* Tableau calé sur export Figma CardContent (hauteur ligne ~49px, bordures gray-300 → rgba(0,0,0,0.1)) */}
        <div className="box-border w-full text-left font-inter text-num-14 leading-5 text-[#0a0a0a]">
          <div className="relative min-h-[284px] w-full min-w-[1195px] overflow-hidden">
            <table className="w-full min-w-[1195px] border-collapse font-inter">
              <thead>
                <tr className="box-border h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
                  {TABLE_HEADINGS.map((heading) => {
                    const isActions = heading === 'Actions';
                    return (
                      <th
                        key={heading}
                        className={`box-border py-2 pl-2 pr-2 text-num-14 font-medium leading-5 text-[#0a0a0a] ${
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
                {filteredRows.map((row, index) => (
                  <tr
                    key={`${row.name}-${index}`}
                    className={`box-border h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0`}
                  >
                    <td className="box-border max-w-[196px] py-[13.5px] pl-2 pr-2 align-middle text-num-14 font-medium leading-5 text-[#0a0a0a]">
                      {row.name}
                    </td>
                    <td className="box-border py-[13.5px] pl-2 pr-2 align-middle text-num-14 font-normal leading-5 text-[#0a0a0a]">
                      {row.department}
                    </td>
                    <td className="box-border py-[13.5px] pl-2 pr-2 align-middle">
                      <div className="flex h-5 items-center gap-2">
                        <Users className="h-4 w-4 shrink-0 text-[#0a0a0a]" strokeWidth={1.75} aria-hidden />
                        <span className="text-num-14 leading-5 text-[#0a0a0a] tabular-nums">{row.studentsAssigned}</span>
                      </div>
                    </td>
                    <td className="box-border py-[13.5px] pl-2 pr-2 align-middle">
                      <div className="flex h-5 items-center gap-2">
                        <FileText className="h-4 w-4 shrink-0 text-[#0a0a0a]" strokeWidth={1.75} aria-hidden />
                        <span className="text-num-14 leading-5 text-[#0a0a0a] tabular-nums">{row.reportsInProgress}</span>
                      </div>
                    </td>
                    <td className="box-border py-2 pl-2 pr-2 text-right align-middle">
                      <div className="flex h-8 items-start justify-end gap-2">
                        <button type="button" className={viewDetailsBtnClass}>
                          <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                          View Details
                        </button>
                        <button type="button" className={manageStudentsBtnClass}>
                          <UserPlus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                          Manage Students
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
    </div>
  );
};

export default EncadrantsTablePanel;
