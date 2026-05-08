import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import StudentsSearchFilterBar from '../components/StudentsSearchFilterBar';
import StudentsCardHeader from '../components/StudentsCardHeader';
import StudentsCardContent from '../components/StudentsCardContent';
import { TOTAL_STUDENTS_COUNT, studentsMockRows } from '../data/studentsMockData';

const AllStudentsPage: FunctionComponent = () => {
  const totalFormatted = TOTAL_STUDENTS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <StudentsSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <StudentsCardHeader totalFormatted={totalFormatted} />
          <StudentsCardContent students={studentsMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllStudentsPage;
