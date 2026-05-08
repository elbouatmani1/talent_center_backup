import { FunctionComponent } from 'react';
import { Search, Plus, Filter } from 'lucide-react';

interface AnnouncementsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onCreate: () => void;
}

/** Barre d’actions — empilée sur mobile/tablette, ligne à partir de lg. */
const AnnouncementsToolbar: FunctionComponent<AnnouncementsToolbarProps> = ({
  query,
  onQueryChange,
  onCreate,
}) => {
  return (
    <div className="relative box-border flex w-full min-w-0 shrink-0 flex-col gap-3 font-inter text-num-14 text-white lg:h-9 lg:max-w-[506px] lg:flex-row lg:items-center lg:justify-end lg:gap-2">
      <div className="relative h-9 w-full min-w-0 shrink-0 text-left text-slategray-100 lg:w-64">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 z-[1] h-4 w-4 -translate-y-1/2 text-slategray-100"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search announcements..."
          aria-label="Search announcements"
          className="font-inter box-border h-9 w-full overflow-hidden rounded-lg border-0 bg-whitesmoke py-1 pl-9 pr-3 leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="flex w-full flex-wrap items-stretch justify-stretch gap-2 lg:w-auto lg:flex-nowrap lg:items-center lg:justify-end">
        <button
          type="button"
          aria-label="Filter announcements"
          className="box-border flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-[9px] py-0 text-[#0a0a0a] transition-colors hover:bg-whitesmoke"
        >
          <Filter className="relative h-4 w-4 text-slategray-100" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={onCreate}
          className="flex h-9 min-h-9 w-full min-w-0 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#030213] px-3 font-inter font-medium leading-5 text-white transition-opacity hover:opacity-90 lg:w-auto lg:min-w-[198px]"
        >
          <Plus className="relative h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          <span className="relative whitespace-nowrap">Create Announcement</span>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementsToolbar;
