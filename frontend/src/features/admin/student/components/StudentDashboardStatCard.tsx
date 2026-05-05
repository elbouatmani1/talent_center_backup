import { FunctionComponent, MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

interface StudentDashboardStatCardProps {
  label: string;
  value: number;
  IconComponent: LucideIcon;
  iconBgClass: string;
  valueSuffix?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const formatInt = (n: number) => new Intl.NumberFormat('en-US').format(n);

const StudentDashboardStatCard: FunctionComponent<StudentDashboardStatCardProps> = ({
  label,
  value,
  IconComponent,
  iconBgClass,
  valueSuffix,
  onClick
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`${label}: ${formatInt(value)}${valueSuffix ?? ''}`}
    className="relative box-border flex h-[114px] w-full cursor-pointer touch-manipulation flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-sans text-sm text-[#717182] shadow-sm outline-none transition-[transform,box-shadow] duration-150 hover:shadow-md active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[#2b7fff] focus-visible:ring-offset-2"
  >
    <span className="pointer-events-none box-border flex min-h-0 w-full flex-1 items-center justify-between gap-5 p-6">
      <span className="flex min-w-0 flex-1 flex-col items-start gap-2">
        <span className="flex min-h-[1.25rem] w-full items-start self-stretch">
          <span className="relative line-clamp-2 shrink-0 font-medium leading-5 text-[#717182]">{label}</span>
        </span>
        <span className="relative flex min-h-[2.25rem] w-full items-start self-stretch text-3xl font-bold leading-9 tracking-tight text-[#0a0a0a] tabular-nums">
          <span className="relative shrink-0">
            {valueSuffix ? `${formatInt(value)}${valueSuffix}` : formatInt(value)}
          </span>
        </span>
      </span>
      <span
        className={`box-border flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] ${iconBgClass}`}
      >
        <IconComponent className="relative h-6 w-6 text-white" strokeWidth={1.75} />
      </span>
    </span>
  </button>
);

export default StudentDashboardStatCard;
