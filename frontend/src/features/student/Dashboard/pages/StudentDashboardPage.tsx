import { FunctionComponent } from 'react';
import StudentLayout from '../../components/StudentLayout';
import StudentDashboardStatsGrid from '../components/StudentDashboardStatsGrid';
import StudentSmartAlertsCard from '../components/cards/StudentSmartAlertsCard';
import StudentProgressCard from '../components/cards/StudentProgressCard';
import StudentRecommendedOffersCard from '../components/cards/StudentRecommendedOffersCard';
import StudentRecentActivityCard from '../components/cards/StudentRecentActivityCard';
import StudentAnnouncementsCard from '../components/cards/StudentAnnouncementsCard';

const StudentDashboardPage: FunctionComponent = () => {
  return (
    <StudentLayout>
      <div
        id="student-root"
        className="mx-auto flex w-full min-w-0 max-w-[1600px] flex-col gap-6 scroll-mt-4 pb-2 font-inter sm:gap-8 sm:pb-4"
      >
        <section aria-label="Application statistics" className="min-w-0">
          <StudentDashboardStatsGrid />
        </section>

        <div className="grid min-w-0 grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-3">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8 lg:col-span-2">
            <StudentSmartAlertsCard />
            <StudentRecommendedOffersCard />
            <StudentAnnouncementsCard />
          </div>

          <aside className="flex min-w-0 flex-col gap-6 sm:gap-8 lg:col-span-1">
            <StudentProgressCard />
            <StudentRecentActivityCard />
          </aside>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboardPage;
