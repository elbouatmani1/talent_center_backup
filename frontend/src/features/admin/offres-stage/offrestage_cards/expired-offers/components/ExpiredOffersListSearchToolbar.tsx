import { FunctionComponent } from 'react';
import { Search } from 'lucide-react';

interface ExpiredOffersListSearchToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  companyFilter: string;
  onCompanyFilterChange: (value: string) => void;
  companyOptions: string[];
}

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

const ExpiredOffersListSearchToolbar: FunctionComponent<ExpiredOffersListSearchToolbarProps> = ({
  query,
  onQueryChange,
  companyFilter,
  onCompanyFilterChange,
  companyOptions,
}) => {
  return (
    <div className="flex flex-col gap-3 border-b border-[rgba(0,0,0,0.1)] px-6 py-4 sm:flex-row sm:items-center">
      <div className="relative min-w-0 flex-1">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
          strokeWidth={1.75}
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search offers..."
          className="font-inter h-10 w-full rounded-lg border-0 bg-whitesmoke py-2 pl-10 pr-4 text-sm leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
        />
      </div>

      <select
        aria-label="Filter by company"
        value={companyFilter}
        onChange={(e) => onCompanyFilterChange(e.target.value)}
        className="box-border h-10 min-w-[11rem] shrink-0 cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white py-2 pl-3 pr-9 font-inter text-sm font-medium leading-5 text-[#0a0a0a] bg-[length:1rem] bg-[right_0.625rem_center] bg-no-repeat"
        style={{ backgroundImage: chevronSvg }}
      >
        <option value="all">All companies</option>
        {companyOptions.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpiredOffersListSearchToolbar;
