import type { LucideIcon } from 'lucide-react';
import { Send, Clock, Users, CheckCircle2, XCircle } from 'lucide-react';

export interface StudentStatItem {
  label: string;
  value: string;
  iconKey: 'sent' | 'pending' | 'interviews' | 'accepted' | 'rejected';
}

export const studentStatIconMap: Record<StudentStatItem['iconKey'], LucideIcon> = {
  sent: Send,
  pending: Clock,
  interviews: Users,
  accepted: CheckCircle2,
  rejected: XCircle,
};

export const studentStatColorMap: Record<StudentStatItem['iconKey'], string> = {
  sent: 'bg-[#2b7fff]',
  pending: 'bg-[#eab308]',
  interviews: 'bg-[#8b5cf6]',
  accepted: 'bg-[#22c55e]',
  rejected: 'bg-[#fb2c36]',
};

export const studentDashboardStats: StudentStatItem[] = [
  { label: 'Applications Sent', value: '12', iconKey: 'sent' },
  { label: 'Pending', value: '7', iconKey: 'pending' },
  { label: 'Interviews', value: '3', iconKey: 'interviews' },
  { label: 'Accepted', value: '3', iconKey: 'accepted' },
  { label: 'Rejected', value: '2', iconKey: 'rejected' },
];

export type SmartAlertVariant = 'warning' | 'info' | 'success';

export interface StudentSmartAlert {
  id: string;
  variant: SmartAlertVariant;
  message: string;
  ctaLabel: string;
}

export const studentSmartAlerts: StudentSmartAlert[] = [
  {
    id: '1',
    variant: 'warning',
    message: "You haven't applied to any offers in the last 7 days",
    ctaLabel: 'View Offers',
  },
  {
    id: '2',
    variant: 'info',
    message: 'New internship offers matching your profile',
    ctaLabel: 'View Now',
  },
  {
    id: '3',
    variant: 'success',
    message: 'Your CV score improved to 82%',
    ctaLabel: 'View Details',
  },
];

export interface StudentRecommendedOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  matchPercent: number;
}

export const studentRecommendedOffers: StudentRecommendedOffer[] = [
  {
    id: 'o1',
    title: 'Digital Marketing Intern',
    company: 'Maroc Telecom',
    location: 'Casablanca',
    tags: ['Marketing', 'Digital', 'Strategy'],
    matchPercent: 95,
  },
  {
    id: 'o2',
    title: 'Business Analyst Intern',
    company: 'OCP Group',
    location: 'Casablanca',
    tags: ['Analytics', 'Business', 'Data'],
    matchPercent: 88,
  },
  {
    id: 'o3',
    title: 'Brand Management Intern',
    company: 'Coca-Cola Maroc',
    location: 'Casablanca',
    tags: ['Branding', 'Marketing', 'Consumer'],
    matchPercent: 85,
  },
];

export interface StudentAnnouncementRow {
  id: string;
  title: string;
  snippet: string;
  company: string;
  badgeLabel: string;
  badgeVariant: 'interview' | 'pending' | 'info';
}

export const studentAnnouncementRows: StudentAnnouncementRow[] = [
  {
    id: 'a1',
    title: 'Interview Invitation - Marketing Position',
    snippet: 'Congratulations! You have been selected for an interview...',
    company: 'Maroc Telecom',
    badgeLabel: 'Interview',
    badgeVariant: 'interview',
  },
  {
    id: 'a2',
    title: 'Application Status Update',
    snippet: 'Your application for Business Development Intern is under review...',
    company: 'OCP Group',
    badgeLabel: 'Pending',
    badgeVariant: 'pending',
  },
];

export interface StudentProgressMetric {
  key: string;
  label: string;
  percent: number;
  barClass: string;
}

export const studentProgressMetrics: StudentProgressMetric[] = [
  { key: 'profile', label: 'Profile Completion', percent: 85, barClass: 'bg-[#2b7fff]' },
  { key: 'cv', label: 'CV Score', percent: 82, barClass: 'bg-[#1d4ed8]' },
  { key: 'activity', label: 'Activity Level', percent: 90, barClass: 'bg-[#8b5cf6]' },
];

export type StudentActivityIconKey = 'message' | 'application' | 'announcement';

export interface StudentActivityItem {
  id: string;
  action: string;
  time: string;
  iconKey: StudentActivityIconKey;
}

export const studentRecentActivity: StudentActivityItem[] = [
  {
    id: 'r1',
    action: 'New message from Maroc Telecom HR Team',
    time: '2 hours ago',
    iconKey: 'message',
  },
  {
    id: 'r2',
    action: 'Your application to OCP Group was viewed',
    time: '5 hours ago',
    iconKey: 'application',
  },
  {
    id: 'r3',
    action: 'New interview announcement from Attijariwafa Bank',
    time: '1 day ago',
    iconKey: 'announcement',
  },
];
