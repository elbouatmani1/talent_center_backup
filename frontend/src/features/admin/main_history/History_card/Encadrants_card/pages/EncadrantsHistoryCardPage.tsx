import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import EncadrantsStatsGrid from '../components/EncadrantsStatsGrid';
import EncadrantsTimelineList from '../components/EncadrantsTimelineList';

const EncadrantsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <EncadrantsStatsGrid />
        <EncadrantsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default EncadrantsHistoryCardPage;
