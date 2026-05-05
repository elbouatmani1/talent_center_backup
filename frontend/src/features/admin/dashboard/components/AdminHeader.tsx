import { FunctionComponent } from 'react';
import { Bell } from 'lucide-react';

const AdminHeader: FunctionComponent = () => {
  return (
    <header className="relative z-10 flex h-[72px] flex-none shrink-0 items-center justify-between border-b border-solid border-neutral-200 bg-white px-6">
      <h1 className="text-[#0a0a0a] text-xl font-bold leading-tight tracking-tight">Digital Talent Center</h1>

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Notifications"
          className="relative cursor-pointer rounded-lg p-1.5 text-[#0a0a0a] hover:bg-neutral-100 transition-colors"
        >
          <Bell className="w-5 h-5" strokeWidth={2} />
          <span className="absolute top-0 right-0 min-w-[1.125rem] h-[1.125rem] px-0.5 bg-[#fb2c36] rounded-full text-white text-[10px] font-semibold leading-[1.125rem] text-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-neutral-200">
          <span className="text-[#0a0a0a] text-sm font-semibold whitespace-nowrap hidden sm:inline">
            Super Admin Management
          </span>
          <div className="w-9 h-9 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:brightness-105 transition-[filter] shadow-sm ring-2 ring-white">
            SA
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
