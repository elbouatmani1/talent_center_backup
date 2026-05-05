import { FunctionComponent } from 'react';
import { latePaymentsKpis } from '../data/latePaymentsDetailMock';

const cardBorder = 'border border-solid border-[#e5e7eb]';

const LatePaymentsKpiCards: FunctionComponent = () => (
  <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
    {latePaymentsKpis.map(({ label, valueDisplay, Icon }) => (
      <div
        key={label}
        className={`relative box-border flex min-h-[110px] w-full flex-col rounded-[14px] bg-white ${cardBorder}`}
      >
        <div className="box-border flex min-h-[110px] w-full flex-1 items-center justify-between gap-5 p-6">
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-2">
            <span className="text-sm font-medium leading-5 text-slategray-100">{label}</span>
            <span className="text-3xl font-bold leading-9 tracking-tight text-[#0a0a0a] tabular-nums">
              {valueDisplay}
            </span>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb]">
            <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default LatePaymentsKpiCards;
