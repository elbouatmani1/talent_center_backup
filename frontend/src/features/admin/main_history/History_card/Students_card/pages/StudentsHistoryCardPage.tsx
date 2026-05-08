import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import StudentsStatsGrid from '../components/StudentsStatsGrid';
import StudentsTimelineList from '../components/StudentsTimelineList';

const StudentsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <StudentsStatsGrid />
        <StudentsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default StudentsHistoryCardPage;
