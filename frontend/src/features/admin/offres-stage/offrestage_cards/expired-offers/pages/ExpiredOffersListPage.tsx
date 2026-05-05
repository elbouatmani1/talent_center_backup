import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import ExpiredOffersListCardHeader from '../components/ExpiredOffersListCardHeader';
import ExpiredOffersListSearchToolbar from '../components/ExpiredOffersListSearchToolbar';
import ExpiredOffersListTableContent from '../components/ExpiredOffersListTableContent';
import {
  EXPIRED_OFFERS_LIST_COUNT,
  expiredOffersOnlyRows,
} from '../data/expiredOffersOnlyMockData';

const companyOptions = [...new Set(expiredOffersOnlyRows.map((r) => r.company))].sort();

const ExpiredOffersListPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [companyFilter, setCompanyFilter] = useState('all');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return expiredOffersOnlyRows.filter((row) => {
      const matchCompany = companyFilter === 'all' || row.company === companyFilter;
      if (!q) return matchCompany;
      const matchQuery =
        row.title.toLowerCase().includes(q) || row.company.toLowerCase().includes(q);
      return matchCompany && matchQuery;
    });
  }, [query, companyFilter]);

  const totalFormatted = EXPIRED_OFFERS_LIST_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/internship-offers')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Dashboard</span>
        </button>
        <div className="flex w-full flex-col rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white">
          <ExpiredOffersListCardHeader totalFormatted={totalFormatted} />
          <ExpiredOffersListSearchToolbar
            query={query}
            onQueryChange={setQuery}
            companyFilter={companyFilter}
            onCompanyFilterChange={setCompanyFilter}
            companyOptions={companyOptions}
          />
          <ExpiredOffersListTableContent offers={filteredRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ExpiredOffersListPage;
