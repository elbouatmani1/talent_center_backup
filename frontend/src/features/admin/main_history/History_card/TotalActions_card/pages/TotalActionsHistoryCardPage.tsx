import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import TotalActionsStatsGrid from '../components/TotalActionsStatsGrid';
import TotalActionsTimelineList from '../components/TotalActionsTimelineList';

const TotalActionsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <TotalActionsStatsGrid />
        <TotalActionsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default TotalActionsHistoryCardPage;
