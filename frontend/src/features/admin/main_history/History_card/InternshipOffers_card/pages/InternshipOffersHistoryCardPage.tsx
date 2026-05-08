import { FunctionComponent } from 'react';
import AdminLayout from '../../../../dashboard/components/AdminLayout';
import BackToHistoryButton from '../components/BackToHistoryButton';
import InternshipOffersStatsGrid from '../components/InternshipOffersStatsGrid';
import InternshipOffersTimelineList from '../components/InternshipOffersTimelineList';

const InternshipOffersHistoryCardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full max-w-[1228px] space-y-3 pb-4 font-inter">
        <BackToHistoryButton />
        <InternshipOffersStatsGrid />
        <InternshipOffersTimelineList />
      </div>
    </AdminLayout>
  );
};

export default InternshipOffersHistoryCardPage;
