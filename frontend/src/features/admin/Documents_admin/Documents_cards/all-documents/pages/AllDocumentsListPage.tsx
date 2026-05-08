import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import { documentRequestsMockData } from '../../../data/documentRequestsMockData';
import DocumentsRequestsTable from '../../../components/DocumentsRequestsTable';
import AllDocumentsOverviewCards from '../components/AllDocumentsOverviewCards';

const AllDocumentsListPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return documentRequestsMockData;
    return documentRequestsMockData.filter((row) => {
      const cls = row.studentClass?.toLowerCase() ?? '';
      return (
        row.documentType.toLowerCase().includes(q) ||
        row.studentName.toLowerCase().includes(q) ||
        cls.includes(q) ||
        row.submissionDate.includes(q) ||
        row.status.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/documents')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Documents</span>
        </button>

        <AllDocumentsOverviewCards />

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

export default AllDocumentsListPage;
