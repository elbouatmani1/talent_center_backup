import { FunctionComponent, MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, CheckCircle2, Sparkles } from 'lucide-react';
import { studentSmartAlerts } from '../../data/studentDashboardMock';
import type { SmartAlertVariant } from '../../data/studentDashboardMock';
import StudentSectionHeader from '../StudentSectionHeader';
import { STUDENT_EMPTY_STATE } from '../../constants/studentDashboardStyles';

const variantConfig: Record<
  SmartAlertVariant,
  {
    bg: string;
    border: string;
    text: string;
    iconWrap: string;
    Icon: LucideIcon;
    iconClass: string;
  }
> = {
  warning: {
    bg: 'bg-[#fefce8]',
    border: 'border-[#fff085]',
    text: 'text-[#894b00]',
    iconWrap: 'bg-white/70',
    Icon: AlertTriangle,
    iconClass: 'text-[#ca8a04]',
  },
  info: {
    bg: 'bg-[#eff6ff]',
    border: 'border-[#bedbff]',
    text: 'text-[#193cb8]',
    iconWrap: 'bg-white/70',
    Icon: Sparkles,
    iconClass: 'text-[#193cb8]',
  },
  success: {
    bg: 'bg-[#f0fdf4]',
    border: 'border-[#b9f8cf]',
    text: 'text-[#016630]',
    iconWrap: 'bg-white/70',
    Icon: CheckCircle2,
    iconClass: 'text-[#016630]',
  },
};

const StudentSmartAlertsCard: FunctionComponent = () => {
  const handleRowClick = (id: string) => {
    console.log('Smart alert', id);
  };

  return (
    <section
      id="student-alerts"
      aria-label="Smart Alerts"
      className="flex w-full flex-col items-stretch gap-4 text-left font-inter text-[#101828]"
    >
      <StudentSectionHeader
        icon={<Sparkles className="h-[18px] w-[18px] text-[#8b5cf6]" strokeWidth={1.75} aria-hidden />}
        iconClassName="bg-[#f3e8ff] text-[#8b5cf6]"
        title="Smart Alerts"
      />

      {studentSmartAlerts.length === 0 ? (
        <div className={STUDENT_EMPTY_STATE}>
          <p className="text-sm font-medium text-[#4a5565]">No alerts right now</p>
          <p className="text-xs text-[#6a7282]">You are all caught up on opportunities.</p>
        </div>
      ) : (
        <ul className="flex w-full list-none flex-col gap-3 p-0 m-0">
          {studentSmartAlerts.map((alert) => {
            const cfg = variantConfig[alert.variant];
            const RowIcon = cfg.Icon;
            return (
              <li key={alert.id} className="w-full">
                <button
                  type="button"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleRowClick(alert.id);
                  }}
                  className={`box-border flex min-h-[54px] w-full flex-row items-center justify-between gap-3 rounded-[10px] border border-solid px-3 py-3 text-left shadow-[0_1px_2px_rgba(16,24,40,0.03)] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(16,24,40,0.06)] active:translate-y-0 sm:gap-4 sm:px-4 ${cfg.bg} ${cfg.border} ${cfg.text} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/25 focus-visible:ring-offset-1`}
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${cfg.iconWrap}`}
                    >
                      <RowIcon className={`h-[18px] w-[18px] ${cfg.iconClass}`} strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className={`min-w-0 flex-1 text-[14px] font-medium leading-5 ${cfg.text}`}>
                      {alert.message}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-[13px] font-semibold leading-5 underline-offset-2 hover:underline sm:text-[14px] ${cfg.text}`}
                  >
                    {alert.ctaLabel}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default StudentSmartAlertsCard;
