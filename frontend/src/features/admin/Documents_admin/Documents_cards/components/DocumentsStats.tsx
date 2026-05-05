import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { documentRequestsStats } from '../../data/documentRequestsMockData';
import DocumentStatCard from './DocumentStatCard';

const DocumentsStats: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (label: string) => {
      if (label === 'Total Documents') {
        navigate('/admin/documents/all');
        return;
      }
      if (label === 'Pending') {
        navigate('/admin/documents/pending');
        return;
      }
      if (label === 'Validated') {
        navigate('/admin/documents/validated');
        return;
      }
      if (label === 'Rejected') {
        navigate('/admin/documents/rejected');
        return;
      }
    },
    [navigate]
  );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {documentRequestsStats.map((stat) => (
        <DocumentStatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          onClick={() => handleCardClick(stat.label)}
        />
      ))}
    </div>
  );
};

export default DocumentsStats;
