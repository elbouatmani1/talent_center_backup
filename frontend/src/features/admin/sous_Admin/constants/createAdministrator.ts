export const CREATE_ADMIN_PERMISSION_LABELS_COL_A = [
  'Manage Internship Offers',
  'Create Announcements',
  'Financial Operations',
  'User Management'
] as const;

export const CREATE_ADMIN_PERMISSION_LABELS_COL_B = [
  'Manage Students',
  'Validate Documents',
  'Access Reports',
  'Platform Settings'
] as const;

export const CREATE_ADMIN_SELECT_CHEVRON_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

export const CREATE_ADMIN_ROLE_OPTIONS = [
  { value: '', label: 'Select role' },
  { value: 'Admin Stage', label: 'Admin Stage' },
  { value: 'Admin Finance', label: 'Admin Finance' },
  { value: 'Admin Documents', label: 'Admin Documents' },
  { value: 'Admin Communication', label: 'Admin Communication' }
] as const;
