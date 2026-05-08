import { FunctionComponent } from 'react';
import { Bell, Menu } from 'lucide-react';

interface AdminHeaderProps {
  onMenuClick?: () => void;
}

const AdminHeader: FunctionComponent<AdminHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="relative z-10 flex h-14 shrink-0 flex-none items-center justify-between border-b border-solid border-neutral-200 bg-white px-3 sm:h-[72px] sm:px-6">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="-ml-1 inline-flex items-center justify-center rounded-lg p-2 text-[#0a0a0a] hover:bg-neutral-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
        <h1 className="truncate text-lg font-bold leading-tight tracking-tight text-[#0a0a0a] sm:text-xl">
          Digital Talent Center
        </h1>
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          aria-label="Notifications"
          className="relative cursor-pointer rounded-lg p-1.5 text-[#0a0a0a] transition-colors hover:bg-neutral-100"
        >
          <Bell className="h-5 w-5" strokeWidth={2} />
          <span className="absolute right-0 top-0 h-[1.125rem] min-w-[1.125rem] rounded-full bg-[#fb2c36] px-0.5 text-center text-[10px] font-semibold leading-[1.125rem] text-white">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 border-l border-neutral-200 pl-2 sm:gap-3 sm:pl-2">
          <span className="hidden text-sm font-semibold whitespace-nowrap text-[#0a0a0a] sm:inline">
            Super Admin Management
          </span>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#8b5cf6] text-xs font-semibold text-white shadow-sm ring-2 ring-white hover:brightness-105">
            SA
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
