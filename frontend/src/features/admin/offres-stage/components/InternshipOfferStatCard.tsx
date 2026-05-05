import { FunctionComponent } from 'react';
import {
  Briefcase,
  CheckCircle,
  XCircle,
  FileText,
  Clock,
  Users,
  TrendingUp,
  Award,
  LucideIcon,
} from 'lucide-react';

interface InternshipOfferStatCardProps {
  label: string;
  value: string;
  icon: string;
  onClick?: () => void;
}

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase,
  CheckCircle,
  XCircle,
  FileText,
  Clock,
  Users,
  TrendingUp,
  Award,
};

const colorMap: { [key: string]: string } = {
  Briefcase: 'bg-[#2b7fff]',
  CheckCircle: 'bg-[#22c55e]',
  XCircle: 'bg-[#fb2c36]',
  FileText: 'bg-[#eab308]',
  Clock: 'bg-[#6b7280]',
  Users: 'bg-[#8b5cf6]',
  TrendingUp: 'bg-[#6366f1]',
  Award: 'bg-[#06b6d4]',
};

const InternshipOfferStatCard: FunctionComponent<InternshipOfferStatCardProps> = ({
  label,
  value,
  icon,
  onClick,
}) => {
  const Icon = iconMap[icon];
  const bgColor = colorMap[icon] || 'bg-[#2b7fff]';

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-[114px] relative rounded-[14px] bg-white border border-solid border-[rgba(0,0,0,0.1)] box-border flex flex-col items-stretch text-left text-sm text-[#717182] font-sans transition-shadow hover:shadow-md cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-between p-6 box-border gap-5 min-w-0 w-full">
        <div className="min-w-0 flex flex-col items-start gap-2 flex-1">
          <div className="self-stretch min-h-[1.25rem] flex items-start">
            <span className="relative leading-5 shrink-0 font-medium line-clamp-2">{label}</span>
          </div>
          <div className="self-stretch relative min-h-[2.25rem] flex items-start text-3xl font-bold text-[#0a0a0a] leading-9 tracking-tight tabular-nums">
            <span className="relative shrink-0">{value}</span>
          </div>
        </div>
        <div className={`h-12 w-12 shrink-0 rounded-[10px] flex items-center justify-center box-border ${bgColor}`}>
          {Icon && <Icon className="h-6 w-6 relative text-white" strokeWidth={1.75} />}
        </div>
      </div>
    </button>
  );
};

export default InternshipOfferStatCard;
