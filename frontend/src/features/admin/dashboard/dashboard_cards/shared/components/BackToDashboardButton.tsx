import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToDashboardButton: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/admin-dashboard')}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center font-inter text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
    >
      <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
      <span className="leading-5">Back to Dashboard</span>
    </button>
  );
};

export default BackToDashboardButton;
