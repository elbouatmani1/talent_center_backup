import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import AnnouncementsStatsGrid from '../components/AnnouncementsStatsGrid';
import AnnouncementsTimelineList from '../components/AnnouncementsTimelineList';

const AnnouncementsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <AnnouncementsStatsGrid />
        <AnnouncementsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default AnnouncementsHistoryCardPage;
