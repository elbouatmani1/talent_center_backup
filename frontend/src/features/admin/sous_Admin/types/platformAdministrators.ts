import type { LucideIcon } from 'lucide-react';

export type PlatformAdminRoleVariant = 'stage' | 'finance' | 'documents' | 'communication';

export interface PlatformAdministratorRow {
  id: string;
  name: string;
  roleLabel: string;
  roleVariant: PlatformAdminRoleVariant;
  permissionLabel: string;
  status: 'Active';
}

export interface PlatformAdministratorsKpiStat {
  label: string;
  value: number;
  Icon: LucideIcon;
  iconBgClass: string;
}

/** Filtre des pages liste (tous les admins ou par rôle). */
export type AdministratorListFilter = 'all' | PlatformAdminRoleVariant;
