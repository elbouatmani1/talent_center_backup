import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDashboardStatCard from './StudentDashboardStatCard';
import { studentDashboardStats } from '../data/studentsDashboardMock';

const StudentsStatGrid: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-w-0 overflow-x-auto text-left font-inter text-num-14 text-slategray-100">
      <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
        {studentDashboardStats.map((stat) => (
          <StudentDashboardStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            IconComponent={stat.Icon}
            iconBgClass={stat.iconBgClass}
            valueSuffix={stat.valueSuffix}
            onClick={() => {
              if (stat.label === 'Total Students') {
                navigate('/admin/students/total-students');
              }
              if (stat.label === 'Active') {
                navigate('/admin/students/active-students');
              }
              if (stat.label === 'Without Internship') {
                navigate('/admin/students/without-internship');
              }
              if (stat.label === 'With Internship') {
                navigate('/admin/students/with-internship');
              }
              if (stat.label === 'Engagement Level') {
                navigate('/admin/students/engagement-level');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentsStatGrid;
