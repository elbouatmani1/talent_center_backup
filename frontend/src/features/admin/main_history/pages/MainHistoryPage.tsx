import { FunctionComponent, useMemo, useState } from 'react';
import AdminLayout from '../../dashboard/components/AdminLayout';
import { historyActionsMock } from '../data/historyMockData';
import HistoryFiltersBar from '../components/HistoryFiltersBar';
import HistoryStatsGrid from '../components/HistoryStatsGrid';
import HistoryTimelineList from '../components/HistoryTimelineList';

const MainHistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [moduleFilter, setModuleFilter] = useState('All Modules');
  const [actionFilter, setActionFilter] = useState('All Types');

  const filteredRows = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();

    return historyActionsMock.filter((row) => {
      if (moduleFilter !== 'All Modules' && row.module !== moduleFilter) return false;
      if (actionFilter !== 'All Types' && row.actionType !== actionFilter) return false;

      if (!normalizedQuery) return true;

      return [row.module, row.title, row.actor, row.actionType, row.status, row.priority, row.timestamp]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [actionFilter, moduleFilter, search]);

  const handleModuleChange = (value: string) => {
    console.log('History module filter changed', value);
    setModuleFilter(value);
  };

  const handleActionChange = (value: string) => {
    console.log('History action filter changed', value);
    setActionFilter(value);
  };

  const handleSearchChange = (value: string) => {
    console.log('History search changed', value);
    setSearch(value);
  };

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1228px] space-y-4 pb-4 font-inter sm:space-y-6 sm:pb-6">
        <HistoryStatsGrid />
        <section className="w-full min-w-0 overflow-hidden rounded-[14px] border border-neutral-200 bg-white">
          <HistoryFiltersBar
            search={search}
            moduleFilter={moduleFilter}
            actionFilter={actionFilter}
            onSearchChange={handleSearchChange}
            onModuleChange={handleModuleChange}
            onActionChange={handleActionChange}
          />
          <div className="flex min-w-0 flex-col gap-3 px-4 pb-4 pt-0 sm:gap-4 sm:px-6 sm:pb-6">
            <HistoryTimelineList rows={filteredRows} />
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default MainHistoryPage;
