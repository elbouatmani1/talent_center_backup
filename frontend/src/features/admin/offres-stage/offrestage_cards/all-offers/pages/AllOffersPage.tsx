import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import AllOffersCardHeader from '../components/AllOffersCardHeader';
import AllOffersSearchToolbar from '../components/AllOffersSearchToolbar';
import AllOffersTableContent from '../components/AllOffersTableContent';
import {
  ALL_OFFERS_COUNT,
  allOffersRows,
  type AllOffersStatus,
} from '../data/allOffersMockData';

const AllOffersPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | AllOffersStatus>('all');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allOffersRows.filter((row) => {
      const matchStatus = statusFilter === 'all' || row.status === statusFilter;
      if (!q) return matchStatus;
      const matchQuery =
        row.title.toLowerCase().includes(q) || row.company.toLowerCase().includes(q);
      return matchStatus && matchQuery;
    });
  }, [query, statusFilter]);

  const totalFormatted = ALL_OFFERS_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/internship-offers')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Offers</span>
        </button>
        <div className="flex w-full min-w-0 flex-col rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white">
          <AllOffersCardHeader totalFormatted={totalFormatted} />
          <AllOffersSearchToolbar
            query={query}
            onQueryChange={setQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
          <AllOffersTableContent offers={filteredRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllOffersPage;
