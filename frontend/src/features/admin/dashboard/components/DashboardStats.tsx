import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminMockData } from '../data/adminMockData';
import DashboardStatCard from './DashboardStatCard';

const DashboardStats: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (label: string) => {
    if (label === 'Total Students') {
      navigate('/admin/dashboard/students');
      return;
    }
    if (label === 'Total Encadrants') {
      navigate('/admin/dashboard/encadrants');
      return;
    }
    if (label === 'Total Admins') {
      navigate('/admin/dashboard/admins');
      return;
    }
    if (label === 'Students without internship') {
      navigate('/admin/students-without-internship');
      return;
    }
    if (label === 'Active internship offers') {
      navigate('/admin/active-internship-offers');
      return;
    }
    if (label === 'Ongoing applications') {
      navigate('/admin/ongoing-applications');
      return;
    }
    if (label === 'Documents pending validation') {
      navigate('/admin/documents-pending-validation');
      return;
    }
    if (label === 'Students with unpaid SRF') {
      navigate('/admin/students-unpaid-srf');
      return;
    }
    console.log(`Clicked on ${label}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {adminMockData.stats.map((stat, index) => (
        <DashboardStatCard
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          onClick={() => handleCardClick(stat.label)}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
