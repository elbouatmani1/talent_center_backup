import { FunctionComponent } from 'react';
import type { StudentStatItem } from '../data/studentDashboardMock';
import { studentStatColorMap, studentStatIconMap } from '../data/studentDashboardMock';

interface StudentDashboardStatCardProps {
  stat: StudentStatItem;
  onClick?: () => void;
}

const StudentDashboardStatCard: FunctionComponent<StudentDashboardStatCardProps> = ({
  stat,
  onClick,
}) => {
  const Icon = studentStatIconMap[stat.iconKey];
  const bgColor = studentStatColorMap[stat.iconKey];

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative box-border flex h-[114px] w-full cursor-pointer flex-col items-stretch overflow-hidden rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white text-left text-sm text-[#717182] shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[box-shadow,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgba(0,0,0,0.12)] hover:shadow-[0_10px_32px_rgba(16,24,40,0.08)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/30 focus-visible:ring-offset-2"
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#155dfc]/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      />
      <div className="box-border flex min-h-0 w-full flex-1 items-center justify-between gap-3 p-4 sm:gap-5 sm:p-6">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 sm:gap-2">
          <span className="line-clamp-2 text-[13px] font-medium leading-5 sm:text-sm">{stat.label}</span>
          <span className="text-[28px] font-bold tabular-nums leading-8 tracking-tight text-[#101828] sm:text-3xl sm:leading-9">
            {stat.value}
          </span>
        </div>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12 ${bgColor}`}
        >
          {Icon != null && (
            <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
          )}
        </div>
      </div>
    </button>
  );
};

export default StudentDashboardStatCard;
