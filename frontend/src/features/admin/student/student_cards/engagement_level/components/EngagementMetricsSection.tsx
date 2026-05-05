import { FunctionComponent } from 'react';
import { LineChart } from 'lucide-react';

/** Placeholder « Engagement Metrics » calqué sur le composant Figma (carte + zone graphique en dégradé). */
const EngagementMetricsSection: FunctionComponent = () => (
  <div className="box-border flex w-full min-w-0 flex-col gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white px-6 pb-6 pt-6 font-inter text-base text-[#0a0a0a] shadow-sm">
    <div className="flex min-h-[70px] flex-col gap-1">
      <h2 className="text-base font-medium leading-4">Engagement Metrics</h2>
      <p className="text-base leading-6 text-slategray-100">
        Student activity and participation trends over time.
      </p>
    </div>
    <div className="flex flex-col items-stretch text-center text-sm text-slategray-100">
      <div
        className="flex min-h-64 w-full items-center justify-center rounded-[10px] border-2 border-dashed border-[rgba(0,0,0,0.1)] px-4 py-8"
        style={{
          background: 'linear-gradient(135deg, #eff6ff, #faf5ff)'
        }}
      >
        <div className="flex max-w-[298px] flex-col items-center gap-1">
          <LineChart className="h-12 w-12 shrink-0 text-slateblue" strokeWidth={1.5} aria-hidden />
          <div className="w-full text-sm font-normal leading-5 text-slategray-100">
            Engagement chart visualization
          </div>
          <div className="w-full text-xs leading-4 text-slategray-100">
            Activity trends, participation rates, and progress tracking
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EngagementMetricsSection;
