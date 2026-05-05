import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, XCircle, DollarSign, TrendingUp } from 'lucide-react';

export interface LatePaymentsKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const latePaymentsKpis: LatePaymentsKpi[] = [
  { label: 'Late Payments', valueDisplay: '23', Icon: AlertTriangle },
  { label: 'Overdue > 30 Days', valueDisplay: '8', Icon: XCircle },
  { label: 'Total Overdue', valueDisplay: '345K MAD', Icon: DollarSign },
  { label: 'Average Debt', valueDisplay: '15K MAD', Icon: TrendingUp },
];

export interface LatePaymentStudentRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const latePaymentsDetailRows: LatePaymentStudentRow[] = [
  {
    id: '1',
    studentName: 'Fatima Zahra',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 5000,
    remaining: 10000,
  },
  {
    id: '2',
    studentName: 'Rachid Alaoui',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 3000,
    remaining: 12000,
  },
];
