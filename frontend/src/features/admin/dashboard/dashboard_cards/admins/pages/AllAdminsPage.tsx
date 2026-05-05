import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import AdminsSearchFilterBar from '../components/AdminsSearchFilterBar';
import AdminsCardHeader from '../components/AdminsCardHeader';
import AdminsCardContent from '../components/AdminsCardContent';
import { TOTAL_ADMINS_COUNT, adminsMockRows } from '../data/adminsMockData';

const AllAdminsPage: FunctionComponent = () => {
  const totalFormatted = TOTAL_ADMINS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <AdminsSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <AdminsCardHeader totalFormatted={totalFormatted} />
          <AdminsCardContent admins={adminsMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllAdminsPage;
