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
      <div className="-m-5 bg-gray-50 px-5 pb-8 pt-5 font-inter md:-m-6 md:px-6">
        <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
          <EncadrantsSummaryGrid />
          <EncadrantsTablePanel rows={encadrantsMockRows} query={query} onQueryChange={setQuery} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllEncadrantsPage;
