import { FunctionComponent, ReactNode, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';
import type { DocumentRequestStatus } from '../../types';
import { documentRequestsMockData } from '../../data/documentRequestsMockData';
import DocumentsRequestsTable from '../../components/DocumentsRequestsTable';

export type DocumentsListStatusFilter = 'all' | DocumentRequestStatus;

interface DocumentsFilteredListPageProps {
  statusFilter: DocumentsListStatusFilter;
  overviewCards: ReactNode;
}

const DocumentsFilteredListPage: FunctionComponent<DocumentsFilteredListPageProps> = ({
  statusFilter,
  overviewCards,
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(() => {
    const base =
      statusFilter === 'all'
        ? documentRequestsMockData
        : documentRequestsMockData.filter((r) => r.status === statusFilter);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((row) => {
      const cls = row.studentClass?.toLowerCase() ?? '';
      return (
        row.documentType.toLowerCase().includes(q) ||
        row.studentName.toLowerCase().includes(q) ||
        cls.includes(q) ||
        row.submissionDate.includes(q) ||
        row.status.toLowerCase().includes(q)
      );
    });
  }, [query, statusFilter]);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/documents')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Documents</span>
        </button>

        {overviewCards}

        <DocumentsRequestsTable
          rows={filteredRows}
          query={query}
          onQueryChange={setQuery}
          compactHeader
          showClassColumn
          searchPlaceholder="Search documents or students..."
        />
      </div>
    </AdminLayout>
  );
};

export default DocumentsFilteredListPage;
