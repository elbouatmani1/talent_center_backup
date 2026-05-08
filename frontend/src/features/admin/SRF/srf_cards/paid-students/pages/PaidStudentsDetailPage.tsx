import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import PaidStudentsKpiCards from '../components/PaidStudentsKpiCards';
import PaidStudentsDetailTable from '../components/PaidStudentsDetailTable';

const PaidStudentsDetailPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/srf')}
          className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-solid border-[#e5e7eb] bg-white px-4 font-inter text-sm font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          Back to SRF
        </button>
        <PaidStudentsKpiCards />
        <PaidStudentsDetailTable />
      </div>
    </AdminLayout>
  );
};

export default PaidStudentsDetailPage;
