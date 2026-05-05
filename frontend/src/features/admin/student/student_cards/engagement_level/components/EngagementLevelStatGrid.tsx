import { FunctionComponent } from 'react';
import StudentDashboardStatCard from '../../../components/StudentDashboardStatCard';
import { engagementLevelCardStats } from '../data/engagementLevelCardStats';

const EngagementLevelStatGrid: FunctionComponent = () => (
  <div className="relative w-full min-w-0 overflow-x-auto text-left font-inter text-num-14 text-slategray-100">
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-4">
      {engagementLevelCardStats.map((stat) => (
        <StudentDashboardStatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          IconComponent={stat.Icon}
          iconBgClass={stat.iconBgClass}
          valueSuffix={stat.valueSuffix}
          onClick={() => {}}
        />
      ))}
    </div>
  </div>
);

export default EngagementLevelStatGrid;
