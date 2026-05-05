import { FunctionComponent } from 'react';
import { adminMockData } from '../data/adminMockData';
import { DASHBOARD_CARD_INTERACTIVE_CLASS } from '../constants/dashboardCardInteractive';

const CARD_CHART_MIN_H = 300;

/** Drawing height for stacked bars — aligns roughly with dashed horizontal grid bands */
const CHART_BAR_AREA_PX = 220;

const legendItems = [
  { label: 'Applications', dotClass: 'bg-[#06b6d4]', textClass: 'text-[#06b6d4]' },
  { label: 'Documents', dotClass: 'bg-[#eab308]', textClass: 'text-[#eab308]' },
  { label: 'Announcements', dotClass: 'bg-[#8b5cf6]', textClass: 'text-[#8b5cf6]' },
  { label: 'Student Activity', dotClass: 'bg-[#3b82f6]', textClass: 'text-[#3b82f6]' },
] as const;

const ActivityOverview: FunctionComponent = () => {
  const { labels, data } = adminMockData.activityChart;
  const maxValue = 120;

  const handleCardClick = () => {
    console.log('Activity Overview card');
  };

  const barHeightPx = (value: number) =>
    value <= 0 ? 0 : Math.max((Math.min(value, maxValue) / maxValue) * CHART_BAR_AREA_PX, 2);

  const keys = ['applications', 'documents', 'announcements', 'studentActivity'] as const;
  const seriesColors = {
    applications: 'bg-[#06b6d4]',
    documents: 'bg-[#eab308]',
    announcements: 'bg-[#8b5cf6]',
    studentActivity: 'bg-[#3b82f6]',
  } as const;

  return (
    <div
      role="presentation"
      onClick={handleCardClick}
      className={`w-full max-w-full relative rounded-[14px] bg-white border border-solid border-[rgba(0,0,0,0.1)] box-border flex flex-col items-stretch gap-6 text-left text-base font-sans overflow-hidden h-full min-h-0 ${DASHBOARD_CARD_INTERACTIVE_CLASS}`}
    >
      {/* Figma CardHeader — h-[70px], px 24 → px-6, title leading-4, subtitle leading-6 slategray */}
      <div className="w-full shrink-0 min-h-[70px] box-border px-6 pt-[22px] pb-2 text-[#0a0a0a]">
        <h2 className="text-base font-medium leading-4">Activity Overview</h2>
        <p className="mt-[6px] text-base font-normal leading-6 text-[#717182]">
          Platform activity over the last 7 days
        </p>
      </div>

      {/* Figma CardContent — ~300px chart stack, px-6 */}
      <div className="w-full overflow-x-hidden min-w-0 px-6 pb-6 box-border">
        <div className="w-full relative min-h-[300px]" style={{ minHeight: CARD_CHART_MIN_H }}>
          <div className="flex gap-3 min-w-0 items-start">
            <div className="flex h-[220px] w-9 shrink-0 flex-col justify-between pb-px text-right font-sans text-[12px] tabular-nums leading-none text-[#666]">
              <span>120</span>
              <span>90</span>
              <span>60</span>
              <span>30</span>
              <span>0</span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="relative h-[220px] w-full shrink-0">
                <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-between pt-px">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full border-t border-dashed border-neutral-300" />
                  ))}
                </div>

                <div className="absolute inset-x-0 bottom-0 top-px z-[1] grid grid-cols-7 items-end gap-x-10 sm:gap-x-14 pb-px">
                  {labels.map((dayLabel, index) => (
                    <div
                      key={dayLabel}
                      className={`relative flex min-h-0 justify-center place-self-stretch self-end ${
                        index > 0 ? 'border-l border-dashed border-neutral-300' : ''
                      }`}
                    >
                      <div className={`flex max-w-[4.875rem] w-full items-end gap-0 ${index > 0 ? 'pl-px' : ''}`}>
                        {keys.map((k) => {
                          const v = data[k][index];
                          const hPx = barHeightPx(v);
                          return (
                            <div
                              key={k}
                              title={`${k}: ${v}`}
                              style={{ height: hPx }}
                              className={`min-w-0 flex-1 basis-1/4 rounded-none ${seriesColors[k]}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-px grid w-full grid-cols-7 gap-x-10 border-t border-dashed border-neutral-300 sm:gap-x-14">
                {labels.map((dayLabel) => (
                  <span
                    key={`x-${dayLabel}`}
                    className="flex min-h-[28px] items-center justify-center text-center font-sans text-[12px] font-normal leading-tight text-[#666]"
                  >
                    {dayLabel}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend — colored label text like Figma (skyblue/goldenrod/…) */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-6 pt-4 border-t border-[rgba(0,0,0,0.1)]">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 shrink-0">
              <span className={`w-3.5 h-3.5 shrink-0 rounded-sm ${item.dotClass}`} aria-hidden />
              <span className={`text-base font-normal leading-6 whitespace-nowrap ${item.textClass}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
