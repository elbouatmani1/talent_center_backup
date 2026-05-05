import { FunctionComponent } from 'react';
import type { StudentWithoutInternshipRow } from '../data/studentsWithoutInternshipMockData';

interface StudentsWithoutInternshipCardContentProps {
  rows: StudentWithoutInternshipRow[];
}

const StudentsWithoutInternshipCardContent: FunctionComponent<StudentsWithoutInternshipCardContentProps> = ({
  rows,
}) => {
  return (
    <div className="w-full px-6 pb-6 font-inter text-left text-sm text-[#0a0a0a]">
      <div className="overflow-x-auto">
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
