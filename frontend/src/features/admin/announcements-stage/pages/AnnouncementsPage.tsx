import { FunctionComponent, useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';
import { announcementsMockData } from '../data/announcementsMockData';
import { AnnouncementRow } from '../types';
import AnnouncementsStats from '../components/AnnouncementsStats';
import AnnouncementsTable from '../components/AnnouncementsTable';

const AnnouncementsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const tableSectionRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [rows, setRows] = useState<AnnouncementRow[]>(() => [...announcementsMockData]);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (row) =>
        row.title.toLowerCase().includes(q) ||
        row.type.toLowerCase().includes(q) ||
        row.targetAudience.toLowerCase().includes(q) ||
        row.date.includes(q)
    );
  }, [query, rows]);

  const scrollToTable = useCallback(() => {
    tableSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleStatCardClick = useCallback(
    (label: string) => {
      if (label === 'Total Announcements') {
        navigate('/admin/announcements/all');
        return;
      }
      if (label === 'Active Announcements') {
        navigate('/admin/announcements/active');
        return;
      }
      scrollToTable();
      if (label === 'Engagement Rate') {
        setQuery('Interview');
        return;
      }
      if (label === 'Avg Reach') {
        setQuery('Info');
        return;
      }
    },
    [navigate, scrollToTable]
  );

  const handleCreate = useCallback(() => {
    navigate('/admin/announcements/create');
  }, [navigate]);

  const handleView = useCallback(
    (row: AnnouncementRow) => {
      navigate(`/admin/announcements/${row.id}`);
    },
    [navigate]
  );

  const handleEdit = useCallback(
    (row: AnnouncementRow) => {
      navigate(`/admin/announcements/${row.id}/edit`);
    },
    [navigate]
  );

  const handleDelete = useCallback((row: AnnouncementRow) => {
    if (!window.confirm(`Supprimer l’annonce « ${row.title} » ?`)) {
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== row.id));
  }, []);

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 pb-4 font-inter sm:space-y-5 sm:pb-5">
        <AnnouncementsStats onStatCardClick={handleStatCardClick} />
        <div ref={tableSectionRef} id="announcements-table">
          <AnnouncementsTable
            rows={filteredRows}
            query={query}
            onQueryChange={setQuery}
            onCreate={handleCreate}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AnnouncementsPage;
