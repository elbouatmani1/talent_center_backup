import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, Calendar, DollarSign, Clock } from 'lucide-react';

export interface PendingValidationKpi {
  label: string;
  valueDisplay: string;
  Icon: LucideIcon;
}

export const pendingValidationKpis: PendingValidationKpi[] = [
  { label: 'Pending', valueDisplay: '12', Icon: AlertTriangle },
  { label: 'Submitted Today', valueDisplay: '4', Icon: Calendar },
  { label: 'Total Amount', valueDisplay: '180K MAD', Icon: DollarSign },
  { label: 'Awaiting Action', valueDisplay: '12', Icon: Clock },
];

export interface PendingValidationRow {
  id: string;
  studentName: string;
  className: string;
  amountDue: number;
  amountPaid: number;
  remaining: number;
}

export const pendingValidationDetailRows: PendingValidationRow[] = [
  {
    id: '1',
    studentName: 'Mohamed Idrissi',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
  {
    id: '2',
    studentName: 'Houda Tazi',
    className: 'Master 2',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
  {
    id: '3',
    studentName: 'Yassine Berrada',
    className: 'Master 1',
    amountDue: 15000,
    amountPaid: 15000,
    remaining: 0,
  },
];
