import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import UpcomingMeetingsListCardHeader from '../components/UpcomingMeetingsListCardHeader';
import EncadrantListSearchToolbar from '../../shared/components/EncadrantListSearchToolbar';
import EncadrantListTableContent from '../../shared/components/EncadrantListTableContent';
import { encadrantsMockRows, encadrantsSummaryStats } from '../../../data/encadrantsMockData';

const departmentOptions = [...new Set(encadrantsMockRows.map((r) => r.department))].sort();

const UpcomingMeetingsListPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return encadrantsMockRows.filter((row) => {
      const matchDept = departmentFilter === 'all' || row.department === departmentFilter;
      if (!q) return matchDept;
      const matchQuery =
        row.name.toLowerCase().includes(q) ||
        row.department.toLowerCase().includes(q) ||
        String(row.studentsAssigned).includes(q) ||
        String(row.reportsInProgress).includes(q);
      return matchDept && matchQuery;
    });
  }, [query, departmentFilter]);

  const totalFormatted = encadrantsSummaryStats[3].value.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 pb-6 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/encadrants')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5 font-inter">Back to Encadrants</span>
        </button>
        <div className="flex w-full min-w-0 flex-col rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white">
          <UpcomingMeetingsListCardHeader totalFormatted={totalFormatted} />
          <EncadrantListSearchToolbar
            query={query}
            onQueryChange={setQuery}
            departmentFilter={departmentFilter}
            onDepartmentFilterChange={setDepartmentFilter}
            departmentOptions={departmentOptions}
          />
          <EncadrantListTableContent rows={filteredRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default UpcomingMeetingsListPage;
