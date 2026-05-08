import { FunctionComponent } from 'react';
import { Calendar, Clock, FileText, XCircle, LucideIcon } from 'lucide-react';

const overviewStats: { label: string; value: string; icon: LucideIcon }[] = [
  { label: 'Total Rejected', value: '58', icon: XCircle },
  { label: 'This Month', value: '15', icon: Calendar },
  { label: 'Resubmitted', value: '23', icon: FileText },
  { label: 'Pending Resubmission', value: '35', icon: Clock },
];

const RejectedDocumentsOverviewCards: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {overviewStats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="relative box-border flex h-[114px] w-full flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.08)] bg-white text-left font-sans text-sm text-[#717182] shadow-sm"
        >
          <div className="box-border flex min-h-0 w-full flex-1 items-center justify-between gap-5 p-6">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
              <span className="line-clamp-2 font-medium leading-5">{label}</span>
              <span className="text-3xl font-bold leading-9 tracking-tight text-[#0a0a0a] tabular-nums">
                {value}
              </span>
            </div>
            <div className="box-border flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#2b7fff]">
              <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RejectedDocumentsOverviewCards;
