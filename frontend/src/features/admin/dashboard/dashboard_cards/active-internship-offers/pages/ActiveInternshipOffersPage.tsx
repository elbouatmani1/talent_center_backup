import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import ActiveOffersSearchFilterBar from '../components/ActiveOffersSearchFilterBar';
import ActiveOffersCardHeader from '../components/ActiveOffersCardHeader';
import ActiveOffersCardContent from '../components/ActiveOffersCardContent';
import { ACTIVE_OFFERS_COUNT, activeOffersMockRows } from '../data/activeOffersMockData';

const ActiveInternshipOffersPage: FunctionComponent = () => {
  const totalFormatted = ACTIVE_OFFERS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <ActiveOffersSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <ActiveOffersCardHeader totalFormatted={totalFormatted} />
          <ActiveOffersCardContent offers={activeOffersMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ActiveInternshipOffersPage;
