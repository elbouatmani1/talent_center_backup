import { FunctionComponent, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import StudentFinancialSummaryGrid from '../components/StudentFinancialSummaryGrid';
import StudentFinancialStatusTable from '../components/StudentFinancialStatusTable';
import { studentFinancialTableRows } from '../data/srfFinancialMock';

const StudentFinancialStatusPage: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 font-inter">
        <StudentFinancialSummaryGrid />
        <StudentFinancialStatusTable
          rows={studentFinancialTableRows}
          query={query}
          onQueryChange={setQuery}
        />
      </div>
    </AdminLayout>
  );
};

export default StudentFinancialStatusPage;
