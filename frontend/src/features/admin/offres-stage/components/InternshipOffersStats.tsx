import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { internshipOffersStats } from '../data/internshipOffersMockData';
import InternshipOfferStatCard from './InternshipOfferStatCard';

const InternshipOffersStats: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (label: string) => {
    if (label === 'Total Offers') {
      navigate('/admin/internship-offers/all');
      return;
    }
    if (label === 'Active Offers') {
      navigate('/admin/internship-offers/active');
      return;
    }
    if (label === 'Expired Offers') {
      navigate('/admin/internship-offers/expired');
      return;
    }
    if (label === 'Draft Offers') {
      navigate('/admin/internship-offers/draft');
      return;
    }
    if (label === 'Closed Offers') {
      navigate('/admin/internship-offers/closed');
      return;
    }
    if (label === 'Total Applications') {
      navigate('/admin/internship-offers/with-applications');
      return;
    }
    console.log(`Clicked on ${label}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {internshipOffersStats.map((stat, index) => (
        <InternshipOfferStatCard
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

export default InternshipOffersStats;
