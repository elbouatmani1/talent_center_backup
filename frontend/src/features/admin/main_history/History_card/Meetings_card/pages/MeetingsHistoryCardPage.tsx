import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import MeetingsStatsGrid from '../components/MeetingsStatsGrid';
import MeetingsTimelineList from '../components/MeetingsTimelineList';

const MeetingsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <MeetingsStatsGrid />
        <MeetingsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default MeetingsHistoryCardPage;
