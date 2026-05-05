import { FunctionComponent, useMemo, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { documentRequestsMockData } from '../data/documentRequestsMockData';
import DocumentsStats from '../Documents_cards/components/DocumentsStats';
import DocumentsRequestsTable from '../components/DocumentsRequestsTable';

const DocumentsPage: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return documentRequestsMockData;
    return documentRequestsMockData.filter(
      (row) =>
        row.documentType.toLowerCase().includes(q) ||
        row.studentName.toLowerCase().includes(q) ||
        row.submissionDate.includes(q) ||
        row.status.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 font-inter">
        <DocumentsStats />
        <DocumentsRequestsTable rows={filteredRows} query={query} onQueryChange={setQuery} />
      </div>
    </AdminLayout>
  );
};

export default DocumentsPage;
