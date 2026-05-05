import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import OngoingApplicationsSearchFilterBar from '../components/OngoingApplicationsSearchFilterBar';
import OngoingApplicationsCardHeader from '../components/OngoingApplicationsCardHeader';
import OngoingApplicationsCardContent from '../components/OngoingApplicationsCardContent';
import {
  ONGOING_APPLICATIONS_COUNT,
  ongoingApplicationsMockRows,
} from '../data/ongoingApplicationsMockData';

const OngoingApplicationsPage: FunctionComponent = () => {
  const totalFormatted = ONGOING_APPLICATIONS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <OngoingApplicationsSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <OngoingApplicationsCardHeader totalFormatted={totalFormatted} />
          <OngoingApplicationsCardContent rows={ongoingApplicationsMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default OngoingApplicationsPage;
