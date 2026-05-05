import { FunctionComponent, MouseEvent } from 'react';
import { Clock } from 'lucide-react';
import { adminMockData } from '../data/adminMockData';
import DashboardCardTitle from './DashboardCardTitle';
import { DASHBOARD_CARD_INTERACTIVE_CLASS } from '../constants/dashboardCardInteractive';

/** One activity row: Figma Container — dot at 8px from row top, copy block from 20px (8px dot + 12px gap). */
const RecentActivityRow: FunctionComponent<{
  action: string;
  meta: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}> = ({ action, meta, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group w-full relative min-h-9 text-left cursor-pointer rounded-lg py-1 box-border font-sans bg-transparent hover:bg-transparent transition-transform duration-150 active:scale-[0.998] flex items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff]/25 focus-visible:ring-offset-0"
  >
    <div className="rounded-full bg-[#2b7fff] w-2 h-2 shrink-0 mt-2" aria-hidden />
    <div className="flex-1 min-w-0 min-h-9 flex flex-col items-start text-sm text-[#0a0a0a]">
      <div className="self-stretch min-h-5 flex items-start">
        <span className="flex-1 min-w-0 relative leading-5 font-medium">{action}</span>
      </div>
      <div className="self-stretch min-h-4 flex items-start text-xs text-[#717182]">
        <span className="flex-1 min-w-0 relative leading-4">{meta}</span>
      </div>
    </div>
  </button>
);

const RecentActivity: FunctionComponent = () => {
  const handleActivityClick = (activityId: string) => {
    console.log(`Clicked on activity ${activityId}`);
    // Placeholder for navigation or action
  };

  const handleCardClick = () => {
    console.log('Recent Platform Activity card');
  };

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      className={`w-full relative rounded-[14px] bg-white border border-solid border-[rgba(0,0,0,0.1)] box-border flex flex-col items-stretch gap-6 text-left text-base text-[#0a0a0a] font-sans h-full min-h-0 ${DASHBOARD_CARD_INTERACTIVE_CLASS}`}
    >
      <div className="w-full shrink-0 min-h-[74px] relative px-6 pt-6 box-border flex flex-col">
        <DashboardCardTitle
          icon={<Clock className="text-[#2b7fff]" strokeWidth={1.75} aria-hidden />}
          title="Recent Platform Activity"
          subtitle="Latest actions across the platform"
        />
      </div>

      <div className="w-full flex flex-col gap-3 px-6 pb-6 pt-0 box-border text-sm flex-1 min-h-0">
        {adminMockData.recentActivity.map((activity) => (
          <RecentActivityRow
            key={activity.id}
            action={activity.action}
            meta={`${activity.user} • ${activity.time}`}
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              handleActivityClick(activity.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
