import { FunctionComponent } from 'react';
import AdminLayout from '../../components/AdminLayout';
import InternshipOffersStats from '../components/InternshipOffersStats';
import InternshipOffersTable from '../components/InternshipOffersTable';

const InternshipOffersPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 pb-4 sm:space-y-6 sm:pb-6">
        <InternshipOffersStats />

        {/* Table */}
        <InternshipOffersTable />
      </div>
    </AdminLayout>
  );
};

export default InternshipOffersPage;
