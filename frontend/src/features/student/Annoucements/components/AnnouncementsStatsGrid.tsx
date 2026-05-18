import { FunctionComponent } from 'react';
import { announcementsStats } from '../data/announcementsMock';
import AnnouncementsStatCard from './AnnouncementsStatCard';

const AnnouncementsStatsGrid: FunctionComponent = () => {
  return (
    <div
      id="student-announcements-stats"
      className="grid w-full min-w-0 max-w-full grid-cols-1 gap-3 max-[429px]:gap-2.5 min-[360px]:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4"
    >
      {announcementsStats.map((stat) => (
        <AnnouncementsStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
};

export default AnnouncementsStatsGrid;
