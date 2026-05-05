import { FunctionComponent } from 'react';
import type { ApplicationStatus, OngoingApplicationRow } from '../data/ongoingApplicationsMockData';

interface OngoingApplicationsCardContentProps {
  rows: OngoingApplicationRow[];
}

const statusBadgeClass = (status: ApplicationStatus): string => {
  if (status === 'pending') {
    return 'bg-amber-100 text-amber-800';
  }
  return 'bg-honeydew text-seagreen';
};

const OngoingApplicationsCardContent: FunctionComponent<OngoingApplicationsCardContentProps> = ({ rows }) => {
  return (
    <div className="w-full px-6 pb-6 font-inter text-left text-sm text-[#0a0a0a]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5 text-slategray-100">
                Student
              </th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Offer</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Score</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row.student}-${row.offer}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{row.student}</td>
                <td className="py-3 px-4 align-middle text-sm font-normal leading-5">{row.offer}</td>
                <td className="py-3 px-4 align-middle text-sm font-normal leading-5 tabular-nums">{row.score}</td>
                <td className="py-3 px-4 align-middle">
                  <span
                    className={`inline-flex items-center justify-center rounded-lg px-2 py-0.5 text-xs font-medium leading-4 capitalize ${statusBadgeClass(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OngoingApplicationsCardContent;
