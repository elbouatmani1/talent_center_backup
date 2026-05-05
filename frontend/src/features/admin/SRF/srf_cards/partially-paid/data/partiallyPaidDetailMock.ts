import type { LucideIcon } from 'lucide-react';
import { Clock, DollarSign, CheckCircle2, AlertTriangle } from 'lucide-react';

export interface PartiallyPaidKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const partiallyPaidKpis: PartiallyPaidKpi[] = [
  { label: 'Partially Paid', valueDisplay: '34', Icon: Clock },
  { label: 'Avg. Payment', valueDisplay: '8,500 MAD', Icon: DollarSign },
  { label: 'Total Collected', valueDisplay: '289K MAD', Icon: CheckCircle2 },
  { label: 'Total Remaining', valueDisplay: '221K MAD', Icon: AlertTriangle },
];

export interface PartiallyPaidStudentRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const partiallyPaidDetailRows: PartiallyPaidStudentRow[] = [
  {
    id: '1',
    studentName: 'Amina Khalil',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 10000,
    remaining: 5000,
  },
  {
    id: '2',
    studentName: 'Karim El Fassi',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 7500,
    remaining: 7500,
  },
  {
    id: '3',
    studentName: 'Mehdi Lamrani',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 12000,
    remaining: 3000,
  },
];
