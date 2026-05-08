import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import AdminsStatsGrid from '../components/AdminsStatsGrid';
import AdminsTimelineList from '../components/AdminsTimelineList';

const AdminsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <AdminsStatsGrid />
        <AdminsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default AdminsHistoryCardPage;
