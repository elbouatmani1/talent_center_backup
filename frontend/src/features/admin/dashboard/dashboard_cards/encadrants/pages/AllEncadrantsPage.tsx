import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import EncadrantsSearchFilterBar from '../components/EncadrantsSearchFilterBar';
import EncadrantsCardHeader from '../components/EncadrantsCardHeader';
import EncadrantsCardContent from '../components/EncadrantsCardContent';
import { TOTAL_ENCADRANTS_COUNT, encadrantsMockRows } from '../data/encadrantsMockData';

const AllEncadrantsPage: FunctionComponent = () => {
  const totalFormatted = TOTAL_ENCADRANTS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <EncadrantsSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <EncadrantsCardHeader totalFormatted={totalFormatted} />
          <EncadrantsCardContent encadrants={encadrantsMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllEncadrantsPage;
