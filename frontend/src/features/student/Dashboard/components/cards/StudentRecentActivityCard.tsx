import { FunctionComponent, MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Activity, Bell, FileText, MessageSquare } from 'lucide-react';
import {
  studentRecentActivity,
  type StudentActivityIconKey,
} from '../../data/studentDashboardMock';
import StudentSectionHeader from '../StudentSectionHeader';
import {
  STUDENT_EMPTY_STATE,
  STUDENT_SECONDARY_BUTTON,
  STUDENT_SURFACE_CARD,
} from '../../constants/studentDashboardStyles';

const activityIconConfig: Record<
  StudentActivityIconKey,
  { Icon: LucideIcon; iconClass: string; iconBg: string }
> = {
  message: { Icon: MessageSquare, iconClass: 'text-[#155dfc]', iconBg: 'bg-[#eff6ff]' },
  application: { Icon: FileText, iconClass: 'text-[#9810fa]', iconBg: 'bg-[#f3e8ff]' },
  announcement: { Icon: Bell, iconClass: 'text-[#ea580c]', iconBg: 'bg-[#fff7ed]' },
};

const ActivityRow: FunctionComponent<{
  iconKey: StudentActivityIconKey;
  action: string;
  time: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}> = ({ iconKey, action, time, onClick }) => {
  const { Icon, iconClass, iconBg } = activityIconConfig[iconKey];

  return (
    <button
      type="button"
      onClick={onClick}
      className="-mx-2 m-0 flex w-full min-w-0 appearance-none items-start gap-3 rounded-xl border-0 bg-transparent px-2 py-2 text-left transition-colors hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/25 focus-visible:ring-offset-0"
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ring-1 ring-black/[0.04] ${iconBg}`}
        aria-hidden
      >
        <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={1.75} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
        <span className="w-full text-[14px] font-medium leading-5 text-[#101828]">{action}</span>
        <span className="text-[12px] font-normal leading-4 text-[#6a7282]">{time}</span>
      </span>
    </button>
  );
};

/**
 * Section « Recent Activity » (Figma) : titre hors carte, conteneur blanc bordé gainsboro.
 */
const StudentRecentActivityCard: FunctionComponent = () => {
  return (
    <section
      id="student-activity"
      aria-label="Recent Activity"
      className="flex w-full flex-col items-stretch gap-4 text-left font-inter text-[#101828]"
    >
      <StudentSectionHeader
        icon={<Activity className="h-[18px] w-[18px] text-[#155dfc]" strokeWidth={1.75} aria-hidden />}
        iconClassName="bg-[#eff6ff] text-[#155dfc]"
        title="Recent Activity"
      />

      <div
        className={`${STUDENT_SURFACE_CARD} box-border flex w-full flex-col items-start gap-4 px-4 pb-4 pt-5 sm:px-[21px] sm:pb-[21px] sm:pt-[21px]`}
      >
        {studentRecentActivity.length === 0 ? (
          <div className={STUDENT_EMPTY_STATE}>
            <p className="text-sm font-medium text-[#4a5565]">No recent activity</p>
            <p className="text-xs text-[#6a7282]">Your updates will appear here.</p>
          </div>
        ) : (
          <ul className="m-0 flex w-full list-none flex-col gap-1 p-0">
          {studentRecentActivity.map((row) => (
            <ActivityRow
              key={row.id}
              iconKey={row.iconKey}
              action={row.action}
              time={row.time}
              onClick={() => {
                console.log('activity', row.id);
              }}
            />
          ))}
          </ul>
        )}

        <button type="button" className={STUDENT_SECONDARY_BUTTON}>
          View All Activity
        </button>
      </div>
    </section>
  );
};

export default StudentRecentActivityCard;
