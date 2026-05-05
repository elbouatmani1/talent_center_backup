import { FunctionComponent } from 'react';
import type { SrfPaymentStatus, StudentUnpaidSrfRow } from '../data/studentsUnpaidSrfMockData';

interface StudentsUnpaidSrfCardContentProps {
  rows: StudentUnpaidSrfRow[];
}

const statusLabel = (status: SrfPaymentStatus): string => {
  if (status === 'partially_paid') return 'partially_paid';
  return 'unpaid';
};

const StudentsUnpaidSrfCardContent: FunctionComponent<StudentsUnpaidSrfCardContentProps> = ({ rows }) => {
  return (
    <div className="w-full px-6 pb-6 font-inter text-left text-sm text-[#0a0a0a]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Name</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Class</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Amount Due</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Status</th>
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
                <td className="py-3 px-4 align-middle text-sm leading-5 tabular-nums">{row.amountDue}</td>
                <td className="py-3 px-4 align-middle">
                  <span className="inline-flex items-center justify-center rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium leading-4 text-rose-800">
                    {statusLabel(row.status)}
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

export default StudentsUnpaidSrfCardContent;
