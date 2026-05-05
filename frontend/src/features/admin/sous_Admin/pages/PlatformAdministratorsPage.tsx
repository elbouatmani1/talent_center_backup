import { FunctionComponent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';
import { platformAdministratorsRows } from '../data/platformAdministratorsMock';
import PlatformAdministratorsKpiSection from '../components/PlatformAdministratorsKpiSection';
import PlatformAdministratorsToolbar from '../components/PlatformAdministratorsToolbar';
import PlatformAdministratorsMainTable from '../components/PlatformAdministratorsMainTable';

const PlatformAdministratorsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return platformAdministratorsRows;
    return platformAdministratorsRows.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.roleLabel.toLowerCase().includes(q) ||
        r.permissionLabel.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 px-0 pb-8 pt-0 font-inter md:px-0">
        <PlatformAdministratorsKpiSection />

        <div className="box-border flex w-full min-w-0 flex-col gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left text-base text-[#0a0a0a] shadow-sm">
          <PlatformAdministratorsToolbar
            query={query}
            onQueryChange={setQuery}
            onCreateAdmin={() => navigate('/admin/admins/create-administrator')}
          />
          <PlatformAdministratorsMainTable rows={filteredRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default PlatformAdministratorsPage;
