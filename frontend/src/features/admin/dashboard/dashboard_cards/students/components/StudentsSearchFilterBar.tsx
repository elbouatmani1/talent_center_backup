import { FunctionComponent, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

const StudentsSearchFilterBar: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative min-w-0 flex-1">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#717182]"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students..."
          className="font-inter h-10 w-full rounded-lg border border-[rgba(0,0,0,0.1)] bg-white py-2 pl-10 pr-4 text-sm text-[#0a0a0a] placeholder:text-[#717182] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow focus:border-[rgba(0,0,0,0.18)] focus:outline-none focus:ring-2 focus:ring-[rgba(0,0,0,0.06)]"
        />
      </div>
      <button
        type="button"
        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 font-inter text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
      >
        <SlidersHorizontal className="h-4 w-4 shrink-0" aria-hidden />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default StudentsSearchFilterBar;
