import { FunctionComponent, MouseEvent } from 'react';
import { Eye, FileText, Users, UserPlus } from 'lucide-react';
import type { EncadrantRow } from '../../../data/encadrantsMockData';
import AdminMobileRowCard from '../../../../shared/AdminMobileRowCard';

interface EncadrantListTableContentProps {
  rows: EncadrantRow[];
}

const viewDetailsBtnClass =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const manageStudentsBtnClass =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#030213] px-2.5 font-inter text-num-14 font-medium leading-5 text-white transition-opacity hover:opacity-90';

const btnMobile = (c: string) => `${c} w-full justify-center sm:w-auto`;

const EncadrantListTableContent: FunctionComponent<EncadrantListTableContentProps> = ({ rows }) => {
  const stopBtn = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className="w-full px-4 pb-6 pt-4 font-inter text-left text-num-14 leading-5 text-[#101828] sm:px-6">
      <div className="space-y-3 lg:hidden">
        {rows.length === 0 ? (
          <p className="py-8 text-center text-sm text-slategray-100">No encadrants match your filters.</p>
        ) : (
          rows.map((row, index) => (
            <AdminMobileRowCard
              key={`${row.name}-${index}`}
              title={row.name}
              fields={[
                { label: 'Department', value: row.department },
                {
                  label: 'Students assigned',
                  value: (
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      {row.studentsAssigned}
                    </span>
                  )
                },
                {
                  label: 'Reports in progress',
                  value: (
                    <span className="inline-flex items-center gap-1.5">
                      <FileText className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      {row.reportsInProgress}
                    </span>
                  )
                }
              ]}
              actions={
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap" onClick={stopBtn}>
                  <button type="button" className={btnMobile(viewDetailsBtnClass)}>
                    <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span>View Details</span>
                  </button>
                  <button type="button" className={btnMobile(manageStudentsBtnClass)}>
                    <UserPlus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    <span>Manage Students</span>
                  </button>
                </div>
              }
            />
          ))
        )}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5 text-slategray-100">Name</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Department</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Students Assigned</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Reports in Progress</th>
              <th className="py-2.5 pl-4 pr-2 text-right text-sm font-medium leading-5 text-slategray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-sm text-slategray-100">
                  No encadrants match your filters.
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr
                  key={`${row.name}-${index}`}
                  className="cursor-pointer border-b border-[rgba(0,0,0,0.1)] last:border-b-0 hover:bg-[#fafafa]"
                  onClick={() => {}}
                >
                  <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5 text-[#0a0a0a]">{row.name}</td>
                  <td className="py-3 px-4 align-middle text-sm leading-5">{row.department}</td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center gap-1.5 text-sm leading-5">
                      <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      <span>{row.studentsAssigned}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center gap-1.5 text-sm leading-5">
                      <FileText className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      <span>{row.reportsInProgress}</span>
                    </div>
                  </td>
                  <td className="py-3 pl-4 pr-2 text-right align-middle">
                    <div className="flex flex-wrap items-center justify-end gap-2" onClick={stopBtn}>
                      <button type="button" className={viewDetailsBtnClass}>
                        <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        <span>View Details</span>
                      </button>
                      <button type="button" className={manageStudentsBtnClass}>
                        <UserPlus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                        <span>Manage Students</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EncadrantListTableContent;
