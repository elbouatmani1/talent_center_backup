import { FunctionComponent } from 'react';
import { Plus, Search } from 'lucide-react';

interface PlatformAdministratorsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onCreateAdmin: () => void;
}

const PlatformAdministratorsToolbar: FunctionComponent<PlatformAdministratorsToolbarProps> = ({
  query,
  onQueryChange,
  onCreateAdmin
}) => (
  <div className="flex flex-col gap-5 px-6 pb-1.5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
    <div className="flex min-h-[2.5rem] flex-col items-start justify-center">
      <h1 className="text-base font-medium leading-4">Platform Administrators</h1>
      <p className="mt-1 text-base leading-6 text-slategray-100">Manage admin users and their permissions</p>
    </div>
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-3">
      <div className="relative h-9 w-full sm:w-64">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
          strokeWidth={1.75}
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search admins..."
          className="box-border h-9 w-full rounded-num-8 border-0 bg-whitesmoke py-1 pl-9 pr-3 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-slategray-100 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)]"
        />
      </div>
      <button
        type="button"
        onClick={onCreateAdmin}
        className="inline-flex h-9 shrink-0 items-center justify-center gap-2 self-stretch rounded-num-8 bg-[#101828] px-3 text-center text-num-14 font-medium leading-num-20 text-white transition-colors hover:bg-[#1e2939] sm:self-auto"
      >
        <Plus className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
        Create Admin
      </button>
    </div>
  </div>
);

export default PlatformAdministratorsToolbar;
