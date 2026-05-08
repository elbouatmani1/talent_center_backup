import { FunctionComponent } from 'react';
import type { HistoryActionRow } from '../types';
import HistoryTimelineItem from './HistoryTimelineItem';

interface HistoryTimelineListProps {
  rows: HistoryActionRow[];
}

const HistoryTimelineList: FunctionComponent<HistoryTimelineListProps> = ({ rows }) => {
  if (rows.length === 0) {
    return (
      <div className="rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white p-10 text-center">
        <p className="text-sm font-medium text-[#717182]">No history entries match your filters.</p>
      </div>
    );
  }

  return (
    <>
      {rows.map((row) => (
        <HistoryTimelineItem key={row.id} row={row} />
      ))}
    </>
  );
};

export default HistoryTimelineList;
