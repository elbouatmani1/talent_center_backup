import { FunctionComponent } from 'react';
import AdminLayout from '../components/AdminLayout';
import DashboardStats from '../components/DashboardStats';
import CriticalAlerts from '../components/CriticalAlerts';
import RecentActivity from '../components/RecentActivity';
import ActivityOverview from '../components/ActivityOverview';

const AdminDashboardPage: FunctionComponent = () => {
  return (
    <AdminLayout>
      <div className="max-w-[1600px] mx-auto space-y-5 md:space-y-6 pb-6">
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
          <CriticalAlerts />
          <RecentActivity />
        </div>

        <ActivityOverview />
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
