import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Check, Download, Eye, X } from 'lucide-react';
import { DocumentRequestRow, DocumentRequestStatus } from '../types';
import DocumentsRequestsToolbar from './DocumentsRequestsToolbar';

const statusClassName: Record<DocumentRequestStatus, string> = {
  Validated: 'bg-honeydew text-seagreen',
  Pending: 'bg-[#fef9c2] text-[#894b00]',
  Rejected: 'bg-mistyrose text-firebrick',
};

const viewBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-num-20 text-gray hover:bg-whitesmoke';

const downloadBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#030213] px-2.5 font-inter text-num-14 font-medium leading-num-20 text-white hover:opacity-90';

const approveBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-solid border-[#86efac] bg-white px-2.5 font-inter text-num-14 font-medium leading-num-20 text-seagreen hover:bg-honeydew';

const rejectBtn =
  'inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-solid border-[#fecaca] bg-white px-2.5 font-inter text-num-14 font-medium leading-num-20 text-firebrick hover:bg-mistyrose';

interface DocumentsRequestsTableProps {
  rows: DocumentRequestRow[];
  query: string;
  onQueryChange: (value: string) => void;
  title?: string;
  subtitle?: string;
  /** Barre recherche + filtre seulement (sans titre Document Requests). */
  compactHeader?: boolean;
  /** Colonne Class entre Student et Date. */
  showClassColumn?: boolean;
  searchPlaceholder?: string;
}

const DocumentsRequestsTable: FunctionComponent<DocumentsRequestsTableProps> = ({
  rows,
  query,
  onQueryChange,
  title = 'Document Requests',
  subtitle = 'Manage and validate student document requests',
  compactHeader = false,
  showClassColumn = false,
  searchPlaceholder,
}) => {
  const [documentTypeFilter, setDocumentTypeFilter] = useState<'all' | string>('all');

  const documentTypeOptions = useMemo(
    () => [...new Set(rows.map((r) => r.documentType))].sort((a, b) => a.localeCompare(b)),
    [rows]
  );

  useEffect(() => {
    if (
      documentTypeFilter !== 'all' &&
      !documentTypeOptions.includes(documentTypeFilter)
    ) {
      setDocumentTypeFilter('all');
    }
  }, [documentTypeFilter, documentTypeOptions]);

  const displayRows = useMemo(() => {
    if (documentTypeFilter === 'all') return rows;
    return rows.filter((r) => r.documentType === documentTypeFilter);
  }, [rows, documentTypeFilter]);

  return (
    <div className="box-border flex w-full flex-col gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter text-base text-gray shadow-sm">
      {compactHeader ? (
        <div className="border-b border-[rgba(0,0,0,0.06)] px-4 py-5 sm:px-6">
          <DocumentsRequestsToolbar
            query={query}
            onQueryChange={onQueryChange}
            placeholder={searchPlaceholder}
            documentTypes={documentTypeOptions}
            documentTypeFilter={documentTypeFilter}
            onDocumentTypeFilterChange={setDocumentTypeFilter}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-5 px-4 pb-1.5 pt-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex min-w-0 flex-col gap-0">
            <h2 className="m-0 font-inter text-xl font-bold leading-7 tracking-tight text-[#0a0a0a]">
              {title}
            </h2>
            <p className="m-0 mt-1 font-inter text-sm leading-5 text-slategray-100">{subtitle}</p>
          </div>
          <div className="w-full min-w-0 lg:flex-1">
            <DocumentsRequestsToolbar
              query={query}
              onQueryChange={onQueryChange}
              placeholder={searchPlaceholder}
              documentTypes={documentTypeOptions}
              documentTypeFilter={documentTypeFilter}
              onDocumentTypeFilterChange={setDocumentTypeFilter}
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto px-4 pb-6 pt-1 sm:px-6">
        <table
          className={`w-full border-collapse font-inter text-num-14 leading-num-20 text-gray ${showClassColumn ? 'min-w-[1000px]' : 'min-w-[900px]'}`}
        >
          <thead>
            <tr className="border-b border-solid border-[rgba(0,0,0,0.1)]">
              <th className="px-2 py-2.5 text-left font-medium text-slategray-100">Document Type</th>
              <th className="px-2 py-2.5 text-left font-medium text-slategray-100">Student</th>
              {showClassColumn && (
                <th className="px-2 py-2.5 text-left font-medium text-slategray-100">Class</th>
              )}
              <th className="px-2 py-2.5 text-left font-medium text-slategray-100">
                Submission Date
              </th>
              <th className="px-2 py-2.5 text-left font-medium text-slategray-100">Status</th>
              <th className="px-2 py-2.5 text-right font-medium text-slategray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="px-2 py-3 align-middle font-medium text-[#0a0a0a]">
                  {row.documentType}
                </td>
                <td className="px-2 py-3 align-middle font-normal text-darkslategray">
                  {row.studentName}
                </td>
                {showClassColumn && (
                  <td className="whitespace-nowrap px-2 py-3 align-middle font-normal text-darkslategray">
                    {row.studentClass ?? '—'}
                  </td>
                )}
                <td className="whitespace-nowrap px-2 py-3 align-middle font-normal text-darkslategray">
                  {row.submissionDate}
                </td>
                <td className="px-2 py-3 align-middle">
                  <span
                    className={`inline-flex min-h-[22px] items-center justify-center rounded-num-8 px-2 py-0.5 text-[12px] font-medium leading-4 ${statusClassName[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-2 py-3 align-middle">
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button type="button" className={viewBtn}>
                      <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      View
                    </button>

                    {row.status === 'Validated' && (
                      <button type="button" className={downloadBtn}>
                        <Download className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        Download
                      </button>
                    )}

                    {row.status === 'Pending' && (
                      <>
                        <button type="button" className={approveBtn}>
                          <Check className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                          Approve
                        </button>
                        <button type="button" className={rejectBtn}>
                          <X className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                          Reject
                        </button>
                      </>
                    )}
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

export default DocumentsRequestsTable;
