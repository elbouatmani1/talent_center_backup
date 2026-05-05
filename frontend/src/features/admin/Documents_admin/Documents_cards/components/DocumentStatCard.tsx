import { FunctionComponent } from 'react';
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  LucideIcon,
} from 'lucide-react';

interface DocumentStatCardProps {
  label: string;
  value: string;
  icon: 'FileText' | 'Clock' | 'CheckCircle' | 'XCircle';
  onClick?: () => void;
}

const iconMap: Record<DocumentStatCardProps['icon'], LucideIcon> = {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
};

const colorMap: Record<DocumentStatCardProps['icon'], string> = {
  FileText: 'bg-[#2b7fff]',
  Clock: 'bg-[#eab308]',
  CheckCircle: 'bg-[#22c55e]',
  XCircle: 'bg-[#fb2c36]',
};

const DocumentStatCard: FunctionComponent<DocumentStatCardProps> = ({
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
      className="relative box-border flex h-[114px] w-full cursor-pointer flex-col rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-sans text-sm text-[#717182] transition-shadow hover:shadow-md"
    >
      <span className="box-border flex min-h-0 w-full flex-1 items-center justify-between gap-5 p-6">
        <span className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <span className="flex min-h-[1.25rem] w-full items-start self-stretch">
            <span className="relative line-clamp-2 shrink-0 font-medium leading-5">{label}</span>
          </span>
          <span className="relative flex min-h-[2.25rem] w-full items-start self-stretch text-3xl font-bold leading-9 tracking-tight text-[#0a0a0a] tabular-nums">
            <span className="relative shrink-0">{value}</span>
          </span>
        </span>
        <span
          className={`box-border flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] ${bgColor}`}
        >
          {Icon && <Icon className="relative h-6 w-6 text-white" strokeWidth={1.75} />}
        </span>
      </span>
    </button>
  );
};

export default DocumentStatCard;
