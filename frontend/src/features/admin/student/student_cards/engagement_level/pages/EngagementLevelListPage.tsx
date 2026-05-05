import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../../../components/AdminLayout';
import EngagementLevelStatGrid from '../components/EngagementLevelStatGrid';
import EngagementMetricsSection from '../components/EngagementMetricsSection';
import EngagementLevelTableSection from '../components/EngagementLevelTableSection';
import { engagementLevelTableRows } from '../data/engagementLevelTableRows';

const EngagementLevelListPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [fieldFilter, setFieldFilter] = useState('all');

  const fieldOptions = useMemo(
    () => [...new Set(engagementLevelTableRows.map((r) => r.field))].sort(),
    []
  );

  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return engagementLevelTableRows.filter((s) => {
      const matchField = fieldFilter === 'all' || s.field === fieldFilter;
      if (!q) return matchField;
      const matchQuery =
        s.name.toLowerCase().includes(q) ||
        s.classLevel.toLowerCase().includes(q) ||
        s.field.toLowerCase().includes(q) ||
        s.engagementLevel.toLowerCase().includes(q);
      return matchField && matchQuery;
    });
  }, [query, fieldFilter]);

  return (
    <AdminLayout>
      <div className="-m-5 bg-gray-50 px-5 pb-8 pt-5 font-inter md:-m-6 md:px-6">
        <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
          <button
            type="button"
            onClick={() => navigate('/admin/students')}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="leading-5">Back to Students</span>
          </button>
          <EngagementLevelStatGrid />
          <EngagementMetricsSection />
          <EngagementLevelTableSection
            students={filteredStudents}
            query={query}
            onQueryChange={setQuery}
            fieldFilter={fieldFilter}
            onFieldFilterChange={setFieldFilter}
            fieldOptions={fieldOptions}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default EngagementLevelListPage;
