import type { LucideIcon } from 'lucide-react';
import { Award, AlertTriangle, DollarSign } from 'lucide-react';

export interface ExemptedStudentsKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const exemptedStudentsKpis: ExemptedStudentsKpi[] = [
  { label: 'Exempted', valueDisplay: '20', Icon: Award },
  { label: 'Scholarship', valueDisplay: '15', Icon: Award },
  { label: 'Special Cases', valueDisplay: '5', Icon: AlertTriangle },
  { label: 'Total Exemption', valueDisplay: '300K MAD', Icon: DollarSign },
];

export interface ExemptedStudentDetailRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const exemptedStudentsDetailRows: ExemptedStudentDetailRow[] = [
  {
    id: '1',
    studentName: 'Hassan Tazi',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 0,
    remaining: 15000,
  },
];
