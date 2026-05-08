import { FunctionComponent, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import EncadrantsSummaryGrid from '../components/EncadrantsSummaryGrid';
import EncadrantsTablePanel from '../components/EncadrantsTablePanel';
import { encadrantsMockRows } from '../data/encadrantsMockData';

/** Structure alignée sur `StudentFinancialStatusPage` (SRF) : grille de stats + tableau filtrable, fond gris léger. */
const AllEncadrantsPage: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  return (
    <AdminLayout>
      <div className="w-full bg-gray-50 px-3 pb-6 pt-3 font-inter sm:px-5 sm:pb-8 sm:pt-5 md:px-6">
        <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 pb-4 sm:space-y-5 sm:pb-6">
          <EncadrantsSummaryGrid />
          <EncadrantsTablePanel rows={encadrantsMockRows} query={query} onQueryChange={setQuery} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllEncadrantsPage;
