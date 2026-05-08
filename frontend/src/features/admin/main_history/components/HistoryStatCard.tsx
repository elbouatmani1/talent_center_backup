import { FunctionComponent } from 'react';
import {
  Bell,
  BriefcaseBusiness,
  CheckSquare,
  Clock3,
  DollarSign,
  FileText,
  GraduationCap,
  MessageCircleMore,
  PenSquare,
  ReceiptText,
  Shield,
  Users,
  Video,
} from 'lucide-react';
import type { HistoryStatItem } from '../types';

interface HistoryStatCardProps {
  item: HistoryStatItem;
  onClick?: () => void;
}

const iconClassName = 'h-6 w-6 relative text-white opacity-100';

const iconByType = {
  activity: <Clock3 className={iconClassName} strokeWidth={2.4} aria-hidden />,
  users: <Users className={iconClassName} strokeWidth={2.4} aria-hidden />,
  shield: <Shield className={iconClassName} strokeWidth={2.4} aria-hidden />,
  graduation: <GraduationCap className={iconClassName} strokeWidth={2.4} aria-hidden />,
  briefcase: <BriefcaseBusiness className={iconClassName} strokeWidth={2.4} aria-hidden />,
  file: <FileText className={iconClassName} strokeWidth={2.4} aria-hidden />,
  receipt: <DollarSign className={iconClassName} strokeWidth={2.4} aria-hidden />,
  message: <MessageCircleMore className={iconClassName} strokeWidth={2.4} aria-hidden />,
} as const;

const iconByCardKey: Record<string, JSX.Element> = {
  total_actions: <Clock3 className={iconClassName} strokeWidth={2.4} aria-hidden />,
  students: <GraduationCap className={iconClassName} strokeWidth={2.4} aria-hidden />,
  admins: <Users className={iconClassName} strokeWidth={2.4} aria-hidden />,
  encadrants: <Users className={iconClassName} strokeWidth={2.4} aria-hidden />,
  internship_offers: <BriefcaseBusiness className={iconClassName} strokeWidth={2.4} aria-hidden />,
  applications: <PenSquare className={iconClassName} strokeWidth={2.4} aria-hidden />,
  announcements: <Bell className={iconClassName} strokeWidth={2.4} aria-hidden />,
  documents: <ReceiptText className={iconClassName} strokeWidth={2.4} aria-hidden />,
  srf: <DollarSign className={iconClassName} strokeWidth={2.4} aria-hidden />,
  chat: <MessageCircleMore className={iconClassName} strokeWidth={2.4} aria-hidden />,
  reports: <PenSquare className={iconClassName} strokeWidth={2.4} aria-hidden />,
  tasks: <CheckSquare className={iconClassName} strokeWidth={2.4} aria-hidden />,
  meetings: <Video className={iconClassName} strokeWidth={2.4} aria-hidden />,
};

const iconBgByCardKey: Record<string, string> = {
  total_actions: 'bg-[#3b82f6]',
  students: 'bg-[#a855f7]',
  admins: 'bg-[#22c55e]',
  encadrants: 'bg-[#6366f1]',
  internship_offers: 'bg-[#06b6d4]',
  applications: 'bg-[#f97316]',
  announcements: 'bg-[#ec4899]',
  documents: 'bg-[#eab308]',
  srf: 'bg-[#ef4444]',
  chat: 'bg-[#14b8a6]',
  reports: 'bg-[#8b5cf6]',
  tasks: 'bg-[#84cc16]',
  meetings: 'bg-[#d946ef]',
};

const HistoryStatCard: FunctionComponent<HistoryStatCardProps> = ({ item, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-[98px] w-full cursor-pointer flex-col items-start rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left text-sm text-[#717182] font-sans transition-shadow hover:shadow-md"
    >
      <div className="box-border flex w-full flex-1 min-w-0 items-center justify-between gap-5 p-6">
        <div className="min-w-0 flex flex-1 flex-col items-start gap-1">
          <div className="min-h-4 self-stretch flex items-start">
            <span className="relative leading-4 font-medium truncate">{item.label}</span>
          </div>
          <div className="relative min-h-7 self-stretch flex items-start text-[32px] font-bold leading-7 tracking-tight text-[#0a0a0a] tabular-nums">
            <span className="relative shrink-0">{item.value}</span>
          </div>
        </div>
        <div className="h-10 w-10 shrink-0">
          <div
            className={`relative h-10 w-full rounded-[10px] box-border flex items-center justify-center px-2.5 py-0 [&_svg]:!text-white [&_svg]:!opacity-100 ${
              iconBgByCardKey[item.key] ?? 'bg-[#2b7fff]'
            }`}
          >
            {iconByCardKey[item.key] ?? iconByType[item.icon]}
          </div>
        </div>
      </div>
    </button>
  );
};

export default HistoryStatCard;
