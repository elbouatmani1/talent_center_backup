import { FunctionComponent } from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackToAdminButtonProps {
  onClick: () => void;
}

const BackToAdminButton: FunctionComponent<BackToAdminButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
  >
    <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
    <span className="leading-5">Back to Admin</span>
  </button>
);

export default BackToAdminButton;
