import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import DocumentsStatsGrid from '../components/DocumentsStatsGrid';
import DocumentsTimelineList from '../components/DocumentsTimelineList';

const DocumentsHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <DocumentsStatsGrid />
        <DocumentsTimelineList />
      </div>
    </AdminLayout>
  );
};

export default DocumentsHistoryCardPage;
