import { FunctionComponent } from 'react';
import { studentDashboardStats } from '../data/studentDashboardMock';
import StudentDashboardStatCard from './StudentDashboardStatCard';

const StudentDashboardStatsGrid: FunctionComponent = () => {
  return (
    <div
      id="student-stats"
      className="grid grid-cols-2 gap-3 max-[359px]:grid-cols-1 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-4"
    >
      {studentDashboardStats.map((stat) => (
        <StudentDashboardStatCard
          key={stat.label}
          stat={stat}
          onClick={() => {
            /* placeholder — futures sous-routes */
          }}
        />
      ))}
    </div>
  );
};

export default StudentDashboardStatsGrid;
