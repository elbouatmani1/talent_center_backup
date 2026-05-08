import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDashboardStatCard from '../../student/components/StudentDashboardStatCard';
import { platformAdministratorsKpiStats } from '../data/platformAdministratorsKpiStats';
import { PLATFORM_ADMIN_KPI_LABEL_TO_PATH } from '../constants/platformAdministratorsNavigation';

const PlatformAdministratorsKpiSection: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-w-0 text-left font-inter text-num-14 text-slategray-100">
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-4 xl:gap-y-4">
        {platformAdministratorsKpiStats.map((stat) => (
          <StudentDashboardStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            IconComponent={stat.Icon}
            iconBgClass={stat.iconBgClass}
            onClick={() => {
              const path = PLATFORM_ADMIN_KPI_LABEL_TO_PATH[stat.label];
              if (path) navigate(path);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformAdministratorsKpiSection;
