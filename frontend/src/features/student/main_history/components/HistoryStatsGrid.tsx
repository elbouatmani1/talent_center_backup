import { FunctionComponent } from 'react';
import { studentHistoryStatsMock } from '../data/historyMockData';
import HistoryStatCard from './HistoryStatCard';

const HistoryStatsGrid: FunctionComponent = () => {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {studentHistoryStatsMock.map((item) => (
        <HistoryStatCard
          key={item.key}
          item={item}
          onClick={() => console.log('Student history stat clicked', item.key)}
        />
      ))}
    </section>
  );
};

export default HistoryStatsGrid;
