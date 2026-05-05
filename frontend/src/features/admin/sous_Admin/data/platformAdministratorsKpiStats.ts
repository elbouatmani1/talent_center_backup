import { UserCog, Briefcase, DollarSign, FileText, Megaphone } from 'lucide-react';
import type { PlatformAdministratorsKpiStat } from '../types/platformAdministrators';

/** Cartes récapitulatives au-dessus du tableau (maquette). */
export const platformAdministratorsKpiStats: PlatformAdministratorsKpiStat[] = [
  { label: 'Total Admins', value: 12, Icon: UserCog, iconBgClass: 'bg-[#a855f7]' },
  { label: 'Admin Stage', value: 3, Icon: Briefcase, iconBgClass: 'bg-[#3b82f6]' },
  { label: 'Admin Finance', value: 2, Icon: DollarSign, iconBgClass: 'bg-[#22c55e]' },
  { label: 'Admin Documents', value: 4, Icon: FileText, iconBgClass: 'bg-[#f97316]' },
  { label: 'Admin Communication', value: 3, Icon: Megaphone, iconBgClass: 'bg-[#6366f1]' }
];
