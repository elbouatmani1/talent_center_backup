import type { LucideIcon } from 'lucide-react';
import { XCircle, Calendar, DollarSign, AlertTriangle } from 'lucide-react';

export interface UnpaidStudentsKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const unpaidStudentsKpis: UnpaidStudentsKpi[] = [
  { label: 'Total Unpaid', valueDisplay: '89', Icon: XCircle },
  { label: 'Due This Week', valueDisplay: '23', Icon: Calendar },
  { label: 'Total Outstanding', valueDisplay: '1.3M MAD', Icon: DollarSign },
  { label: 'At Risk', valueDisplay: '45', Icon: AlertTriangle },
];

export interface UnpaidStudentDetailRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const unpaidStudentsDetailRows: UnpaidStudentDetailRow[] = [
  {
    id: '1',
    studentName: 'Youssef Benani',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 0,
    remaining: 15000,
  },
  {
    id: '2',
    studentName: 'Leila Mansouri',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 0,
    remaining: 15000,
  },
];
