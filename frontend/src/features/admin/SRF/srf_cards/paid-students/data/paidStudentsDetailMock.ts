import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Calendar, DollarSign, TrendingUp } from 'lucide-react';

export interface PaidStudentsKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const paidStudentsKpis: PaidStudentsKpi[] = [
  { label: 'Total Paid', valueDisplay: '1,102', Icon: CheckCircle2 },
  { label: 'This Month', valueDisplay: '234', Icon: Calendar },
  { label: 'Total Amount', valueDisplay: '16.5M MAD', Icon: DollarSign },
  { label: 'Completion Rate', valueDisplay: '88%', Icon: TrendingUp },
];

export interface PaidStudentDetailRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const paidStudentsDetailRows: PaidStudentDetailRow[] = [
  {
    id: '1',
    studentName: 'Sarah Alami',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
  {
    id: '2',
    studentName: 'Omar Benjelloun',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
  {
    id: '3',
    studentName: 'Salma Benkirane',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
];
