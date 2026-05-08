import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import ChatStatsGrid from '../components/ChatStatsGrid';
import ChatTimelineList from '../components/ChatTimelineList';

const ChatHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <ChatStatsGrid />
        <ChatTimelineList />
      </div>
    </AdminLayout>
  );
};

export default ChatHistoryCardPage;
