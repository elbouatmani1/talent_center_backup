import { FunctionComponent } from 'react';
import AdminLayout from '../../../components/AdminLayout';
import EncadrantReportsStatGrid from '../components/EncadrantReportsStatGrid';
import EncadrantReportsTableSection from '../components/EncadrantReportsTableSection';

const EncadrantReportsPage: FunctionComponent = () => (
  <AdminLayout>
    <div className="-m-5 bg-gray-50 px-5 pb-8 pt-5 font-inter md:-m-6 md:px-6">
      <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-col space-y-5 pb-6">
        <EncadrantReportsStatGrid />
        <EncadrantReportsTableSection />
      </div>
    </div>
  </AdminLayout>
);

export default EncadrantReportsPage;
