import { FunctionComponent } from 'react';
import AdminLayout from '../../components/AdminLayout';
import InternshipOffersStats from '../components/InternshipOffersStats';
import InternshipOffersTable from '../components/InternshipOffersTable';

const InternshipOffersPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <InternshipOffersStats />

        {/* Table */}
        <InternshipOffersTable />
      </div>
    </AdminLayout>
  );
};

export default InternshipOffersPage;
