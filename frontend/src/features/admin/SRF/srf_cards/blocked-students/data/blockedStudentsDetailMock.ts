import type { LucideIcon } from 'lucide-react';
import { Ban, Clock, DollarSign, CheckCircle2 } from 'lucide-react';

export interface BlockedStudentsKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const blockedStudentsKpis: BlockedStudentsKpi[] = [
  { label: 'Blocked', valueDisplay: '5', Icon: Ban },
  { label: 'Pending Resolution', valueDisplay: '5', Icon: Clock },
  { label: 'Total Debt', valueDisplay: '75K MAD', Icon: DollarSign },
  { label: 'Unblocked This Month', valueDisplay: '2', Icon: CheckCircle2 },
];

export interface BlockedStudentDetailRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const blockedStudentsDetailRows: BlockedStudentDetailRow[] = [
  {
    id: '1',
    studentName: 'Nadia Serraj',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 0,
    remaining: 15000,
  },
];
