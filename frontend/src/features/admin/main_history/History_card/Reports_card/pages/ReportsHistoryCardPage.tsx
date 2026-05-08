import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import ReportsStatsGrid from '../components/ReportsStatsGrid';
import ReportsTimelineList from '../components/ReportsTimelineList';

const ReportsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <ReportsStatsGrid />
        <ReportsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default ReportsHistoryCardPage;
