import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import CreateInternshipOfferForm from '../components/CreateInternshipOfferForm';

const CreateInternshipOfferPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="space-y-5">
        <button
          type="button"
          onClick={() => navigate('/admin/internship-offers')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center font-inter text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5">Back to Offers</span>
        </button>

        <div className="box-border flex w-full flex-col items-start gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter text-base text-[#0a0a0a]">
          <div className="relative h-[70px] w-full shrink-0">
            <h1 className="absolute left-6 top-[22px] font-inter text-base font-medium leading-4">Create Internship Offer</h1>
            <p className="absolute left-6 top-11 font-inter text-base font-normal leading-6 text-slategray-100">
              Fill in all the details to create a new internship offer
            </p>
          </div>
          <CreateInternshipOfferForm />
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateInternshipOfferPage;
