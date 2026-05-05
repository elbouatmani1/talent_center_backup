import { FunctionComponent } from 'react';
import {
  Users,
  UserCheck,
  Shield,
  AlertCircle,
  Briefcase,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';

interface DashboardStatCardProps {
  label: string;
  value: string;
  icon: string;
  onClick?: () => void;
}

const iconMap: { [key: string]: LucideIcon } = {
  Users,
  UserCheck,
  Shield,
  AlertCircle,
  Briefcase,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
};

const colorMap: { [key: string]: string } = {
  Users: 'bg-[#2b7fff]',
  UserCheck: 'bg-[#8b5cf6]',
  Shield: 'bg-[#22c55e]',
  AlertCircle: 'bg-[#f97316]',
  Briefcase: 'bg-[#4f46e5]',
  FileText: 'bg-[#eab308]',
  TrendingUp: 'bg-[#06b6d4]',
  Clock: 'bg-[#f59e0b]',
  DollarSign: 'bg-[#fb2c36]',
};

const DashboardStatCard: FunctionComponent<DashboardStatCardProps> = ({ label, value, icon, onClick }) => {
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

export default DashboardStatCard;
