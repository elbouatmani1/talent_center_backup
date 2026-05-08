import { FunctionComponent } from 'react';
import AdminLayout from '../components/AdminLayout';
import DashboardStats from '../components/DashboardStats';
import CriticalAlerts from '../components/CriticalAlerts';
import RecentActivity from '../components/RecentActivity';
import ActivityOverview from '../components/ActivityOverview';

const AdminDashboardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-4 pb-4 sm:space-y-5 md:space-y-6 sm:pb-5 md:pb-6">
        <DashboardStats />

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
          <CriticalAlerts />
          <RecentActivity />
        </div>

        <ActivityOverview />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
