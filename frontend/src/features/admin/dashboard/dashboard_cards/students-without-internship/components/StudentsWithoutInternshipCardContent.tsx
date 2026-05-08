import { FunctionComponent } from 'react';
import type { StudentWithoutInternshipRow } from '../data/studentsWithoutInternshipMockData';
import AdminMobileRowCard from '../../../../shared/AdminMobileRowCard';

interface StudentsWithoutInternshipCardContentProps {
  rows: StudentWithoutInternshipRow[];
}

const assignBtn =
  'inline-flex min-h-9 w-full items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900 sm:w-auto';

const StudentsWithoutInternshipCardContent: FunctionComponent<StudentsWithoutInternshipCardContentProps> = ({
  rows,
}) => {
  return (
    <div className="w-full px-4 pb-6 font-inter text-left text-sm text-[#0a0a0a] sm:px-6">
      <div className="space-y-3 lg:hidden">
        {rows.map((row, index) => (
          <AdminMobileRowCard
            key={`${row.name}-${index}`}
            title={row.name}
            fields={[
              { label: 'Class', value: row.classLevel },
              { label: 'Field', value: row.field }
            ]}
            actions={
              <button type="button" className={assignBtn}>
                Assign Offer
              </button>
            }
          />
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Name</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Class</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Field</th>
              <th className="py-2.5 pl-4 pr-2 text-right text-sm font-medium leading-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row.name}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{row.name}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{row.classLevel}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{row.field}</td>
                <td className="py-3 pl-4 pr-2 text-right align-middle">
                  <button
                    type="button"
                    className="inline-flex min-h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
                  >
                    Assign Offer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsWithoutInternshipCardContent;
