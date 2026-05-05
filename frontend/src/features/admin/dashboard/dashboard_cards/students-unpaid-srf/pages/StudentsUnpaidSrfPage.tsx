import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import StudentsUnpaidSrfSearchFilterBar from '../components/StudentsUnpaidSrfSearchFilterBar';
import StudentsUnpaidSrfCardHeader from '../components/StudentsUnpaidSrfCardHeader';
import StudentsUnpaidSrfCardContent from '../components/StudentsUnpaidSrfCardContent';
import { STUDENTS_UNPAID_SRF_COUNT, studentsUnpaidSrfMockRows } from '../data/studentsUnpaidSrfMockData';

const StudentsUnpaidSrfPage: FunctionComponent = () => {
  const totalFormatted = STUDENTS_UNPAID_SRF_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <StudentsUnpaidSrfSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <StudentsUnpaidSrfCardHeader totalFormatted={totalFormatted} />
          <StudentsUnpaidSrfCardContent rows={studentsUnpaidSrfMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentsUnpaidSrfPage;
