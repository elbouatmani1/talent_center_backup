import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import SrfStatsGrid from '../components/SrfStatsGrid';
import SrfTimelineList from '../components/SrfTimelineList';

const SrfHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <SrfStatsGrid />
        <SrfTimelineList />
      </div>
    </AdminLayout>
  );
};

export default SrfHistoryCardPage;
