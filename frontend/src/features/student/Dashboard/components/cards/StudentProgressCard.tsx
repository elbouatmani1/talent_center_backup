import { FunctionComponent } from 'react';
import { LineChart } from 'lucide-react';
import { studentProgressMetrics } from '../../data/studentDashboardMock';
import StudentSectionHeader from '../StudentSectionHeader';
import {
  STUDENT_SECONDARY_BUTTON,
  STUDENT_SURFACE_CARD,
} from '../../constants/studentDashboardStyles';

const barFillClass = (key: string): string => {
  if (key === 'profile') return 'bg-gradient-to-r from-[#155dfc] to-[#1447e6]';
  if (key === 'cv') return 'bg-gradient-to-r from-[#00a63e] to-[#008236]';
  return 'bg-gradient-to-r from-[#9810fa] to-[#8200db]';
};

const StudentProgressCard: FunctionComponent = () => {
  return (
    <section
      id="student-progress"
      aria-label="Your Progress"
      className="flex w-full flex-col items-stretch gap-4 text-left font-inter text-[#101828]"
    >
      <StudentSectionHeader
        icon={<LineChart className="h-[18px] w-[18px] text-[#16a34a]" strokeWidth={1.75} aria-hidden />}
        iconClassName="bg-[#f0fdf4] text-[#16a34a]"
        title="Your Progress"
      />

      <div
        className={`${STUDENT_SURFACE_CARD} box-border flex w-full flex-col items-stretch gap-5 px-4 pb-4 pt-5 sm:px-[21px] sm:pb-[21px] sm:pt-[21px]`}
      >
        <div className="flex w-full flex-col items-stretch gap-5">
          {studentProgressMetrics.map((m) => (
            <div key={m.key} className="flex w-full flex-col items-stretch gap-2">
              <div className="flex min-h-5 w-full items-center justify-between gap-4">
                <span className="min-w-0 truncate text-[14px] font-medium leading-5 text-[#4a5565]">
                  {m.label}
                </span>
                <span className="shrink-0 rounded-md bg-[#f8fafc] px-1.5 py-0.5 text-[14px] font-bold tabular-nums leading-5 text-[#101828]">
                  {m.percent}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#e5e7eb]/90">
                <div
                  className={`h-2 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-[width] duration-500 ease-out ${barFillClass(m.key)}`}
                  style={{ width: `${m.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <button type="button" className={STUDENT_SECONDARY_BUTTON}>
          Improve Your Profile
        </button>
      </div>
    </section>
  );
};

export default StudentProgressCard;
