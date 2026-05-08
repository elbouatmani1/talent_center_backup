import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { historyStatsMock } from '../data/historyMockData';
import HistoryStatCard from './HistoryStatCard';

const HistoryStatsGrid: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {historyStatsMock.map((item) => (
        <HistoryStatCard
          key={item.key}
          item={item}
          onClick={() => {
            if (item.key === 'total_actions') {
              navigate('/admin/history/total-actions');
              return;
            }
            if (item.key === 'students') {
              navigate('/admin/history/students');
              return;
            }
            if (item.key === 'admins') {
              navigate('/admin/history/admins');
              return;
            }
            if (item.key === 'encadrants') {
              navigate('/admin/history/encadrants');
              return;
            }
            if (item.key === 'internship_offers') {
              navigate('/admin/history/internship-offers');
              return;
            }
            if (item.key === 'applications') {
              navigate('/admin/history/applications');
              return;
            }
            if (item.key === 'announcements') {
              navigate('/admin/history/announcements');
              return;
            }
            if (item.key === 'documents') {
              navigate('/admin/history/documents');
              return;
            }
            if (item.key === 'srf') {
              navigate('/admin/history/srf');
              return;
            }
            if (item.key === 'chat') {
              navigate('/admin/history/chat');
              return;
            }
            if (item.key === 'reports') {
              navigate('/admin/history/reports');
              return;
            }
            if (item.key === 'tasks') {
              navigate('/admin/history/tasks');
              return;
            }
            if (item.key === 'meetings') {
              navigate('/admin/history/meetings');
              return;
            }
            console.log('History stat clicked', item.key);
          }}
        />
      ))}
    </section>
  );
};

export default HistoryStatsGrid;
