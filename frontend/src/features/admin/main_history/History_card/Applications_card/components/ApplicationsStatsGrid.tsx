import { FunctionComponent } from 'react';
import { CheckSquare, Plus, X } from 'lucide-react';
import { applicationsStats } from '../data/applicationsHistoryMock';
import type { ApplicationsStatCard } from '../types';

const StatIcon: FunctionComponent<{ icon: ApplicationsStatCard['icon'] }> = ({ icon }) => {
  if (icon === 'submitted') return <Plus className="h-5 w-5" strokeWidth={2} />;
  if (icon === 'rejected') return <X className="h-5 w-5" strokeWidth={2} />;
  return <CheckSquare className="h-5 w-5" strokeWidth={2} />;
};

const ApplicationsStatsGrid: FunctionComponent = () => {
  return (
    <section className="mb-4 grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {applicationsStats.map((stat) => (
        <article
          key={stat.key}
          className="flex h-[98px] items-center justify-between gap-5 rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-6 text-sm text-[#717182] font-inter"
        >
          <div className="min-w-0 space-y-1">
            <p className="text-[14px] font-normal leading-5 text-[#717182]">{stat.label}</p>
            <p className="text-[34px] font-bold leading-9 text-[#0a0a0a]">{stat.value}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]">
            <StatIcon icon={stat.icon} />
          </span>
        </article>
      ))}
    </section>
  );
};

export default ApplicationsStatsGrid;
