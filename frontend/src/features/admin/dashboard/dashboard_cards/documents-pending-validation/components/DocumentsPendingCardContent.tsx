import { FunctionComponent } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { DocumentPendingRow } from '../data/documentsPendingValidationMockData';
import AdminMobileRowCard from '../../../../shared/AdminMobileRowCard';

interface DocumentsPendingCardContentProps {
  rows: DocumentPendingRow[];
}

const actionButtonClass =
  'inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-2.5 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

const btnMobile = `${actionButtonClass} w-full sm:w-auto`;

const DocumentsPendingCardContent: FunctionComponent<DocumentsPendingCardContentProps> = ({ rows }) => {
  return (
    <div className="w-full px-4 pb-6 font-inter text-left text-sm text-[#0a0a0a] sm:px-6">
      <div className="space-y-3 lg:hidden">
        {rows.map((row, index) => (
          <AdminMobileRowCard
            key={`${row.documentType}-${row.student}-${index}`}
            title={row.documentType}
            meta={row.student}
            fields={[{ label: 'Date', value: <span className="tabular-nums">{row.date}</span> }]}
            actions={
              <>
                <button type="button" className={btnMobile}>
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                  <span>Approve</span>
                </button>
                <button type="button" className={btnMobile}>
                  <XCircle className="h-4 w-4 shrink-0" aria-hidden />
                  <span>Reject</span>
                </button>
              </>
            }
          />
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Document Type</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Student</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Date</th>
              <th className="py-2.5 pl-4 pr-2 text-right text-sm font-medium leading-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row.documentType}-${row.student}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{row.documentType}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{row.student}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5 tabular-nums">{row.date}</td>
                <td className="py-3 pl-4 pr-2 text-right align-middle">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button type="button" className={actionButtonClass}>
                      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                      <span>Approve</span>
                    </button>
                    <button type="button" className={actionButtonClass}>
                      <XCircle className="h-4 w-4 shrink-0" aria-hidden />
                      <span>Reject</span>
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
};

export default DocumentsPendingCardContent;
