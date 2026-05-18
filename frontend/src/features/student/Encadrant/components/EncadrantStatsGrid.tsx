import { FunctionComponent } from 'react';
import { encadrantStats } from '../data/encadrantMock';
import EncadrantStatCard from './EncadrantStatCard';

const EncadrantStatsGrid: FunctionComponent = () => (
  <div
    id="student-encadrant-stats"
    className="grid w-full min-w-0 max-w-full grid-cols-1 gap-3 max-[429px]:gap-2.5 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4"
  >
    {encadrantStats.map((stat) => (
      <EncadrantStatCard key={stat.label} stat={stat} />
    ))}
  </div>
);

export default EncadrantStatsGrid;
