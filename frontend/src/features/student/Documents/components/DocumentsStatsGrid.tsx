import { FunctionComponent } from 'react';
import { documentsStats } from '../data/documentsMock';
import DocumentsStatCard from './DocumentsStatCard';

const DocumentsStatsGrid: FunctionComponent = () => (
  <div
    id="student-documents-stats"
    className="grid w-full min-w-0 max-w-full grid-cols-1 gap-3 max-[429px]:gap-2.5 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4"
  >
    {documentsStats.map((stat) => (
      <DocumentsStatCard key={stat.label} stat={stat} />
    ))}
  </div>
);

export default DocumentsStatsGrid;
