import { FunctionComponent, ReactNode } from 'react';

interface DashboardCardTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

/**
 * Shared section header aligned with Figma CardTitle: icon + title on one row (gap ~28px from icon origin),
 * optional subtitle below (text-sm, muted), flex layout (no absolute positioning).
 */
const DashboardCardTitle: FunctionComponent<DashboardCardTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="w-full text-left text-base text-[#0a0a0a] font-sans">
      <div className="w-full min-h-5 h-5 flex flex-row items-center gap-2 box-border">
        {icon != null && (
          <span className="shrink-0 w-5 h-5 flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5">
            {icon}
          </span>
        )}
        <h2 className="text-base font-medium leading-4 text-[#0a0a0a] min-w-0 truncate">{title}</h2>
      </div>
      {subtitle != null && subtitle !== '' && (
        <p className="mt-1 text-sm font-normal leading-5 text-[#717182]">{subtitle}</p>
      )}
    </div>
  );
};

export default DashboardCardTitle;
