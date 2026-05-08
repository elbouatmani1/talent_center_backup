import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import ApplicationsStatsGrid from '../components/ApplicationsStatsGrid';
import ApplicationsTimelineList from '../components/ApplicationsTimelineList';

const ApplicationsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <ApplicationsStatsGrid />
        <ApplicationsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default ApplicationsHistoryCardPage;
