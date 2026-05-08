import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import AllAnnouncementsCardHeader from '../components/AllAnnouncementsCardHeader';
import AllAnnouncementsSearchToolbar from '../components/AllAnnouncementsSearchToolbar';
import AllAnnouncementsTableContent from '../components/AllAnnouncementsTableContent';
import {
  ALL_ANNOUNCEMENTS_COUNT,
  allAnnouncementsRows,
  type AllAnnouncementsTypeFilter,
} from '../data/allAnnouncementsMockData';

const AllAnnouncementsListPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<AllAnnouncementsTypeFilter>('all');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allAnnouncementsRows.filter((row) => {
      const matchType = typeFilter === 'all' || row.type === typeFilter;
      if (!q) return matchType;
      const matchQuery =
        row.title.toLowerCase().includes(q) ||
        row.type.toLowerCase().includes(q) ||
        row.targetAudience.toLowerCase().includes(q) ||
        row.date.includes(q);
      return matchType && matchQuery;
    });
  }, [query, typeFilter]);

  const totalFormatted = ALL_ANNOUNCEMENTS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/announcements')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Announcement</span>
        </button>
        <div className="flex w-full min-w-0 flex-col rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white">
          <AllAnnouncementsCardHeader totalFormatted={totalFormatted} />
          <AllAnnouncementsSearchToolbar
            query={query}
            onQueryChange={setQuery}
            typeFilter={typeFilter}
            onTypeFilterChange={setTypeFilter}
          />
          <AllAnnouncementsTableContent rows={filteredRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllAnnouncementsListPage;
