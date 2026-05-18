import { FunctionComponent } from 'react';
import { Bell, Menu } from 'lucide-react';

interface StudentHeaderProps {
  onMenuClick?: () => void;
  title?: string;
  subtitle?: string;
}

/** En-tête aligné sur le export Figma (titres, couleurs, cloche, profil, avatar). */
const StudentHeader: FunctionComponent<StudentHeaderProps> = ({
  onMenuClick,
  title = 'Smart Global Dashboard',
  subtitle = 'Digital Talent Center',
}) => {
  return (
    <header className="relative z-10 box-border flex min-h-[76px] w-full shrink-0 flex-none items-center justify-between gap-4 border-b border-solid border-neutral-200 bg-white px-4 py-2 font-inter text-left sm:h-[76px] sm:gap-5 sm:px-8 sm:py-0">
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="-ml-1 inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-[#101828] hover:bg-neutral-100 lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-start gap-1 text-[#101828]">
          <h1 className="m-0 min-h-0 w-full whitespace-normal break-words text-xl font-semibold leading-7 text-[#101828]">
            {title}
          </h1>
          <p className="m-0 min-h-0 w-full truncate text-xs font-normal leading-5 text-[#6a7282]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative flex h-10 shrink-0 items-center justify-end gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[10px] text-[#101828] transition-colors hover:bg-neutral-100"
        >
          <Bell className="h-5 w-5" strokeWidth={2} />
          <span className="absolute left-4 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#fb2c36] text-center text-xs font-medium leading-4 text-white">
            5
          </span>
        </button>

        <div className="hidden min-w-0 flex-col items-end gap-1 text-right text-sm text-[#101828] sm:flex">
          <span className="max-w-[180px] truncate font-medium leading-5">Sarah Alami</span>
          <span className="max-w-[180px] truncate text-xs font-normal leading-5 text-[#6a7282]">
            Master in Management
          </span>
        </div>

        <div className="box-border flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-solid border-[#bedbff] text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#155dfc] to-[#1447e6]">
            <span className="text-base font-medium leading-6">SA</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;
