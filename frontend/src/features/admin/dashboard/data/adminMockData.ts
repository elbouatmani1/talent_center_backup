// Admin mock data for development
// This file will contain static data for admin dashboard components

export const adminMockData = {
  stats: [
    { label: 'Total Students', value: '1,245', icon: 'Users' },
    { label: 'Total Encadrants', value: '89', icon: 'UserCheck' },
    { label: 'Total Admins', value: '12', icon: 'Shield' },
    { label: 'Students without internship', value: '156', icon: 'AlertCircle' },
    { label: 'Active internship offers', value: '78', icon: 'Briefcase' },
    { label: 'Ongoing applications', value: '342', icon: 'TrendingUp' },
    { label: 'Documents pending validation', value: '45', icon: 'Clock' },
    { label: 'Students with unpaid SRF', value: '23', icon: 'DollarSign' },
  ],
  alerts: [
    { id: '1', message: '23 students have unpaid SRF fees', priority: 'High' },
    { id: '2', message: '45 documents awaiting validation', priority: 'Medium' },
    { id: '3', message: '156 students without assigned internship', priority: 'High' },
    { id: '4', message: '12 internship offers expiring this week', priority: 'Medium' },
  ],
  recentActivity: [
    { id: '1', action: 'New internship application', user: 'Sarah Alami', time: '2 minutes ago' },
    { id: '2', action: 'Document validated', user: 'Admin Finance', time: '15 minutes ago' },
    { id: '3', action: 'Announcement published', user: 'Admin Communication', time: '1 hour ago' },
    { id: '4', action: 'Student profile updated', user: 'Youssef Benani', time: '2 hours ago' },
    { id: '5', action: 'Encadrant assigned to student', user: 'Dr. Ahmed Bennani', time: '3 hours ago' },
  ],
  activityChart: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: {
      applications: [45, 52, 38, 67, 71, 23, 18],
      documents: [32, 28, 41, 35, 29, 15, 12],
      announcements: [12, 8, 15, 10, 18, 5, 3],
      studentActivity: [89, 95, 78, 103, 88, 45, 34],
    },
  },
  menuItems: [
    { label: 'Dashboard', icon: 'LayoutDashboard', expandable: false },
    { label: 'Internship Offers', icon: 'Briefcase', expandable: true, children: ['Chat', 'History'] },
    { label: 'Announcements', icon: 'Megaphone', expandable: true, children: ['Chat', 'History'] },
    { label: 'History', icon: 'History', expandable: false },
    { label: 'Documents', icon: 'FileText', expandable: true, children: ['Chat'] },
    { label: 'SRF', icon: 'DollarSign', expandable: true, children: ['Chat'] },
    { label: 'Encadrant', icon: 'UserCheck', expandable: true, children: ['Chat', 'Reports'] },
    { label: 'Student', icon: 'Users', expandable: true, children: ['Chat'] },
    { label: 'Admin', icon: 'Shield', expandable: true, children: ['Chat'] },
  ],
};
