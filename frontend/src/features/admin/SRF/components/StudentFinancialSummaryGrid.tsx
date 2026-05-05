import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import SRFSummaryStatCard from './SRFSummaryStatCard';
import { studentFinancialSummaryStats } from '../data/srfFinancialMock';

/** Disposition alignée sur Figma : ligne 1 = 4 cartes, ligne 2 = 3 cartes sous les 3 premières (colonne 4 vide). */
const StudentFinancialSummaryGrid: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-x-auto text-left font-inter text-num-14 text-slategray-100">
      <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-max lg:grid-cols-[repeat(4,299.3px)] lg:gap-x-[15.95px] lg:gap-y-4 lg:content-start">
        {studentFinancialSummaryStats.map((stat) => (
          <SRFSummaryStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            IconComponent={stat.Icon}
            iconBgClass={stat.iconBgClass}
            onClick={
              stat.label === 'Paid Students'
                ? () => navigate('/admin/srf/paid-students')
                : stat.label === 'Unpaid Students'
                  ? () => navigate('/admin/srf/unpaid-students')
                  : stat.label === 'Partially Paid'
                    ? () => navigate('/admin/srf/partially-paid')
                    : stat.label === 'Pending Validation'
                      ? () => navigate('/admin/srf/pending-validation')
                      : stat.label === 'Late Payments'
                        ? () => navigate('/admin/srf/late-payments')
                        : stat.label === 'Blocked Students'
                          ? () => navigate('/admin/srf/blocked-students')
                          : stat.label === 'Exempted Students'
                            ? () => navigate('/admin/srf/exempted-students')
                            : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default StudentFinancialSummaryGrid;
