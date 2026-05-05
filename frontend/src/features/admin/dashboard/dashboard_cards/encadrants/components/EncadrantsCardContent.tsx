import { FunctionComponent } from 'react';
import { Eye } from 'lucide-react';
import type { EncadrantRow } from '../data/encadrantsMockData';

interface EncadrantsCardContentProps {
  encadrants: EncadrantRow[];
}

const EncadrantsCardContent: FunctionComponent<EncadrantsCardContentProps> = ({ encadrants }) => {
  return (
    <div className="w-full px-6 pb-6 font-inter text-left text-sm text-[#0a0a0a]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Name</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Department</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Students Assigned</th>
              <th className="py-2.5 pl-4 pr-2 text-right text-sm font-medium leading-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {encadrants.map((encadrant, index) => (
              <tr
                key={`${encadrant.name}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{encadrant.name}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{encadrant.department}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5 tabular-nums">
                  {encadrant.studentsAssigned}
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

export default EncadrantsCardContent;
