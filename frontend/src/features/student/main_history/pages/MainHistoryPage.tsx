import { FunctionComponent, useMemo, useState } from 'react';
import StudentLayout from '../../components/StudentLayout';
import { STUDENT_HISTORY_STATUS_FILTER_MAP } from '../constants/historyConstants';
import { studentHistoryActionsMock } from '../data/historyMockData';
import HistoryFiltersBar from '../components/HistoryFiltersBar';
import HistoryStatsGrid from '../components/HistoryStatsGrid';
import HistoryTimelineList from '../components/HistoryTimelineList';

const MainHistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [moduleFilter, setModuleFilter] = useState('All Areas');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const filteredRows = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();
    const statusKey =
      STUDENT_HISTORY_STATUS_FILTER_MAP[
        statusFilter as keyof typeof STUDENT_HISTORY_STATUS_FILTER_MAP
      ];

    return studentHistoryActionsMock.filter((row) => {
      if (moduleFilter !== 'All Areas' && row.module !== moduleFilter) return false;
      if (statusKey && row.managementStatus !== statusKey) return false;

      if (!normalizedQuery) return true;

      return [
        row.module,
        row.title,
        row.detail,
        row.eventType,
        row.managementStatus,
        row.priority,
        row.timestamp,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [moduleFilter, search, statusFilter]);

  return (
    <StudentLayout headerTitle="History" headerSubtitle="Digital Talent Center">
      <div className="mx-auto w-full min-w-0 max-w-[1228px] space-y-4 pb-4 font-inter sm:space-y-6 sm:pb-6">
        <HistoryStatsGrid />
        <section className="w-full min-w-0 overflow-hidden rounded-[14px] border border-neutral-200 bg-white">
          <HistoryFiltersBar
            search={search}
            moduleFilter={moduleFilter}
            statusFilter={statusFilter}
            onSearchChange={setSearch}
            onModuleChange={setModuleFilter}
            onStatusChange={setStatusFilter}
          />
          <div className="flex min-w-0 flex-col gap-3 px-4 pb-4 pt-0 sm:gap-4 sm:px-6 sm:pb-6">
            <HistoryTimelineList rows={filteredRows} />
          </div>
        </section>
      </div>
    </StudentLayout>
  );
};

export default MainHistoryPage;
