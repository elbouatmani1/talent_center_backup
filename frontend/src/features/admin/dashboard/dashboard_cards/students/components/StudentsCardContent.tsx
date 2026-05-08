import { FunctionComponent } from 'react';
import { Eye } from 'lucide-react';
import type { StudentRow } from '../data/studentsMockData';
import AdminMobileRowCard from '../../../../shared/AdminMobileRowCard';

interface StudentsCardContentProps {
  students: StudentRow[];
}

const viewBtn =
  'inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-medium leading-5 transition-colors hover:bg-[#fafafa] sm:w-auto';

const StudentsCardContent: FunctionComponent<StudentsCardContentProps> = ({ students }) => {
  return (
    <div className="w-full px-4 pb-6 font-inter text-left text-sm text-[#0a0a0a] sm:px-6">
      <div className="space-y-3 lg:hidden">
        {students.map((student, index) => (
          <AdminMobileRowCard
            key={`${student.name}-${index}`}
            title={student.name}
            badges={
              <span className="inline-flex items-center justify-center rounded-lg bg-honeydew px-2 py-0.5 text-xs font-medium leading-4 text-seagreen">
                {student.status}
              </span>
            }
            fields={[
              { label: 'Class', value: student.classLevel },
              { label: 'Field', value: student.field }
            ]}
            actions={
              <button type="button" className={viewBtn}>
                <Eye className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-sm">View</span>
              </button>
            }
          />
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Name</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Class</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Field</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Status</th>
              <th className="py-2.5 pl-4 pr-2 text-right text-sm font-medium leading-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={`${student.name}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{student.name}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{student.classLevel}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{student.field}</td>
                <td className="py-3 px-4 align-middle">
                  <span className="inline-flex items-center justify-center rounded-lg bg-honeydew px-2 py-0.5 text-xs font-medium leading-4 text-seagreen">
                    {student.status}
                  </span>
                </td>
                <td className="py-3 pl-4 pr-2 text-right align-middle">
                  <button
                    type="button"
                    className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-medium leading-5 transition-colors hover:bg-[#fafafa]"
                  >
                    <Eye className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-sm">View</span>
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

export default StudentsCardContent;
