import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import EncadrantSummaryStatCard from './EncadrantSummaryStatCard';
import { ENCADRANT_CARD_ROUTES, encadrantsSummaryStats } from '../data/encadrantsMockData';

/** Grille de cartes stat : chaque carte ouvre la page détail correspondante (même ordre que les routes). */
const EncadrantsSummaryGrid: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-x-auto text-left font-inter text-num-14 text-slategray-100">
      <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 lg:content-start">
        {encadrantsSummaryStats.map((stat, index) => (
          <EncadrantSummaryStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            IconComponent={stat.Icon}
            iconBgClass={stat.iconBgClass}
            onClick={() => navigate(ENCADRANT_CARD_ROUTES[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default EncadrantsSummaryGrid;
