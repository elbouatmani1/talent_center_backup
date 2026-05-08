import { FunctionComponent } from 'react';
import { announcementsStats } from '../data/announcementsMockData';
import AnnouncementStatCard from './AnnouncementStatCard';

interface AnnouncementsStatsProps {
  onStatCardClick: (label: string) => void;
}

const AnnouncementsStats: FunctionComponent<AnnouncementsStatsProps> = ({ onStatCardClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {announcementsStats.map((stat) => (
        <AnnouncementStatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          onClick={() => onStatCardClick(stat.label)}
        />
      ))}
    </div>
  );
};

export default AnnouncementsStats;
