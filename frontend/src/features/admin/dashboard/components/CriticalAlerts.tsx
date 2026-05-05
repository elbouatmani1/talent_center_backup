import { FunctionComponent, MouseEvent } from 'react';
import { AlertTriangle } from 'lucide-react';
import { adminMockData } from '../data/adminMockData';
import DashboardCardTitle from './DashboardCardTitle';
import { DASHBOARD_CARD_INTERACTIVE_CLASS } from '../constants/dashboardCardInteractive';

const CriticalAlerts: FunctionComponent = () => {
  const handleAlertClick = (alertId: string) => {
    console.log(`Clicked on alert ${alertId}`);
    // Placeholder for navigation or action
  };

  const handleCardClick = () => {
    console.log('Critical Alerts card');
  };

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      className={`w-full relative rounded-[14px] bg-white border border-solid border-[rgba(0,0,0,0.1)] box-border flex flex-col items-stretch gap-6 text-left text-base text-[#0a0a0a] font-sans h-full min-h-0 ${DASHBOARD_CARD_INTERACTIVE_CLASS}`}
    >
      <div className="w-full shrink-0 min-h-[74px] relative px-6 pt-6 box-border flex flex-col">
        <DashboardCardTitle
          icon={<AlertTriangle className="text-[#fb2c36]" strokeWidth={1.75} aria-hidden />}
          title="Critical Alerts"
          subtitle="Issues requiring immediate attention"
        />
      </div>

      <div className="w-full flex flex-col gap-3 px-6 pb-6 pt-0 box-border text-sm flex-1 min-h-0">
        {adminMockData.alerts.map((alert) => {
          const isHigh = alert.priority === 'High';
          const rowBg = isHigh ? 'bg-[#fef2f2]' : 'bg-[#fff7ed]';
          const borderL = isHigh ? 'border-l-[#fb2c36]' : 'border-l-[#ff6900]';
          const badgeBg = isHigh ? 'bg-[#d4183d]' : 'bg-[#ff6900]';

          return (
            <button
              type="button"
              key={alert.id}
              className={`group w-full self-stretch relative min-h-[46px] h-[46px] rounded-[10px] border-l-[4px] border-solid ${borderL} ${rowBg} box-border flex flex-col items-stretch justify-center py-3 pl-4 pr-3 text-left cursor-pointer transition-[opacity,transform] duration-150 hover:opacity-95 active:scale-[0.998] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.12)] focus-visible:ring-offset-0`}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                handleAlertClick(alert.id);
              }}
            >
              <div className="self-stretch min-h-[22px] flex flex-row items-center justify-between gap-5">
                <span className="relative leading-5 font-medium min-w-0 flex-1 text-left text-[#0a0a0a] truncate pr-2">
                  {alert.message}
                </span>
                <span
                  className={`min-h-[22px] rounded-lg shrink-0 flex items-center justify-center py-0.5 px-2 box-border text-xs text-white leading-4 font-medium ${badgeBg}`}
                >
                  {alert.priority}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CriticalAlerts;
