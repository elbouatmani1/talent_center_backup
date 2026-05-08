import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import TasksStatsGrid from '../components/TasksStatsGrid';
import TasksTimelineList from '../components/TasksTimelineList';

const TasksHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <TasksStatsGrid />
        <TasksTimelineList />
      </div>
    </AdminLayout>
  );
};

export default TasksHistoryCardPage;
