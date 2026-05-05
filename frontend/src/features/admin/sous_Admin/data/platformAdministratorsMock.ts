import type { PlatformAdministratorRow } from '../types/platformAdministrators';

export type { PlatformAdministratorRow, PlatformAdminRoleVariant } from '../types/platformAdministrators';

export const platformAdministratorsRows: PlatformAdministratorRow[] = [
  {
    id: '1',
    name: 'Karim El Amrani',
    roleLabel: 'Admin Stage',
    roleVariant: 'stage',
    permissionLabel: 'Internship Management',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Nadia Benjelloun',
    roleLabel: 'Admin Finance',
    roleVariant: 'finance',
    permissionLabel: 'Financial Operations',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Hassan Tazi',
    roleLabel: 'Admin Documents',
    roleVariant: 'documents',
    permissionLabel: 'Document Validation',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Samira Idrissi',
    roleLabel: 'Admin Communication',
    roleVariant: 'communication',
    permissionLabel: 'Announcements & Notifications',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Omar Khalil',
    roleLabel: 'Admin Stage',
    roleVariant: 'stage',
    permissionLabel: 'Internship Management',
    status: 'Active'
  }
];
