import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import StudentsWithoutInternshipSearchFilterBar from '../components/StudentsWithoutInternshipSearchFilterBar';
import StudentsWithoutInternshipCardHeader from '../components/StudentsWithoutInternshipCardHeader';
import StudentsWithoutInternshipCardContent from '../components/StudentsWithoutInternshipCardContent';
import {
  STUDENTS_WITHOUT_INTERNSHIP_COUNT,
  studentsWithoutInternshipMockRows,
} from '../data/studentsWithoutInternshipMockData';

const StudentsWithoutInternshipPage: FunctionComponent = () => {
  const totalFormatted = STUDENTS_WITHOUT_INTERNSHIP_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <StudentsWithoutInternshipSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <StudentsWithoutInternshipCardHeader totalFormatted={totalFormatted} />
          <StudentsWithoutInternshipCardContent rows={studentsWithoutInternshipMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default StudentsWithoutInternshipPage;
