import { FunctionComponent, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface DocumentsRequestsToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
  documentTypes: string[];
  documentTypeFilter: 'all' | string;
  onDocumentTypeFilterChange: (value: 'all' | string) => void;
}

const DocumentsRequestsToolbar: FunctionComponent<DocumentsRequestsToolbarProps> = ({
  query,
  onQueryChange,
  placeholder = 'Search documents...',
  documentTypes,
  documentTypeFilter,
  onDocumentTypeFilterChange,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    detailsRef.current?.removeAttribute('open');
  };

  const label = documentTypeFilter === 'all' ? 'All types' : documentTypeFilter;

  return (
    <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:flex-nowrap lg:items-center">
      <div className="relative min-h-9 min-w-0 flex-1 lg:min-w-[10rem]">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
          strokeWidth={1.75}
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search documents"
          className="font-inter box-border h-9 w-full rounded-lg border-0 bg-whitesmoke py-1 pl-9 pr-3 text-num-14 leading-5 text-gray placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
        />
      </div>

      <details
        ref={detailsRef}
        className="group relative w-full min-w-0 shrink-0 lg:w-auto lg:min-w-[11rem]"
      >
        <summary
          className="flex h-9 min-h-9 cursor-pointer list-none items-center justify-between gap-3 rounded-lg border border-solid border-[#e0e0e0] bg-white px-3 font-inter text-num-14 font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa] [&::-webkit-details-marker]:hidden"
          aria-label="Filter by document type"
          aria-haspopup="listbox"
        >
          <span className="min-w-0 flex-1 truncate text-left">{label}</span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-slategray-100 transition-transform group-open:rotate-180"
            strokeWidth={1.75}
            aria-hidden
          />
        </summary>
        <div
          role="listbox"
          aria-label="Document types"
          className="absolute right-0 z-50 mt-1 min-w-full max-w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-solid border-[#e0e0e0] bg-white py-1 font-inter shadow-sm"
        >
          <button
            type="button"
            role="option"
            aria-selected={documentTypeFilter === 'all'}
            className="block w-full truncate px-3 py-2 text-left text-num-14 leading-5 text-[#0a0a0a] hover:bg-whitesmoke"
            onClick={() => {
              onDocumentTypeFilterChange('all');
              closeDropdown();
            }}
          >
            All types
          </button>
          {documentTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="option"
              aria-selected={documentTypeFilter === type}
              className="block w-full truncate px-3 py-2 text-left text-num-14 leading-5 text-[#0a0a0a] hover:bg-whitesmoke"
              onClick={() => {
                onDocumentTypeFilterChange(type);
                closeDropdown();
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </details>
    </div>
  );
};

export default DocumentsRequestsToolbar;
