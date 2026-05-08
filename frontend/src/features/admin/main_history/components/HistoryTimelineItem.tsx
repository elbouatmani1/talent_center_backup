import { FunctionComponent } from 'react';
import { Eye, History } from 'lucide-react';
import {
  HISTORY_ACTION_BADGE_CLASS,
  HISTORY_ACTION_LABEL,
} from '../constants/historyConstants';
import type { HistoryActionRow } from '../types';

interface HistoryTimelineItemProps {
  row: HistoryActionRow;
}

const HistoryTimelineItem: FunctionComponent<HistoryTimelineItemProps> = ({ row }) => {
  const [date, time] = row.timestamp.split(' ');
  const actionLabel = HISTORY_ACTION_LABEL[row.actionType].toLowerCase();
  const formattedDate = date?.includes('-') ? date.split('-').reverse().join('/') : date;

  return (
    <div className="flex min-h-0 w-full min-w-0 flex-col gap-3 rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white p-3 transition hover:bg-neutral-50 sm:min-h-[76px] sm:flex-row sm:items-center sm:gap-4 sm:p-4">
      <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#193cb8] opacity-100 sm:h-10 sm:w-10">
          <History className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-[22px] items-center rounded-lg border border-[rgba(0,0,0,0.1)] px-2 py-0.5 text-xs font-medium leading-4 text-[#0a0a0a]">
              {row.module}
            </span>
            <span
              className={`inline-flex h-[22px] items-center rounded-lg px-2 py-0.5 text-xs font-medium leading-4 ${HISTORY_ACTION_BADGE_CLASS[row.actionType]}`}
            >
              {actionLabel}
            </span>
          </div>

          <p className="break-words text-sm font-medium leading-5 text-[#0a0a0a]">{row.title}</p>
          <p className="text-xs leading-4 text-[#717182]">
            {row.actor} {formattedDate ? `• ${formattedDate}` : ''} {time ?? ''}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-[#0a0a0a] transition hover:bg-neutral-100 hover:underline sm:ml-auto sm:w-auto sm:justify-end sm:bg-transparent sm:py-0"
        onClick={() => console.log('View details', row.id)}
      >
        <Eye className="h-4 w-4 shrink-0" />
        <span className="whitespace-nowrap">View Details</span>
      </button>
    </div>
  );
};

export default HistoryTimelineItem;
