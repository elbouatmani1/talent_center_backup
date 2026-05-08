import { FunctionComponent } from 'react';
import type { ActiveOfferRow } from '../data/activeOffersMockData';
import AdminMobileRowCard from '../../../../shared/AdminMobileRowCard';

interface ActiveOffersCardContentProps {
  offers: ActiveOfferRow[];
}

const ActiveOffersCardContent: FunctionComponent<ActiveOffersCardContentProps> = ({ offers }) => {
  return (
    <div className="w-full px-4 pb-6 font-inter text-left text-sm text-[#0a0a0a] sm:px-6">
      <div className="space-y-3 lg:hidden">
        {offers.map((offer, index) => (
          <AdminMobileRowCard
            key={`${offer.title}-${offer.company}-${index}`}
            title={offer.title}
            badges={
              <span className="inline-flex items-center justify-center rounded-lg bg-honeydew px-2 py-0.5 text-xs font-medium leading-4 text-seagreen">
                {offer.status}
              </span>
            }
            fields={[
              { label: 'Company', value: offer.company },
              { label: 'Applicants', value: <span className="tabular-nums">{offer.applicants}</span> }
            ]}
          />
        ))}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5">Title</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Company</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Applicants</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5">Status</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr
                key={`${offer.title}-${offer.company}-${index}`}
                className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5">{offer.title}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5">{offer.company}</td>
                <td className="py-3 px-4 align-middle text-sm leading-5 tabular-nums">{offer.applicants}</td>
                <td className="py-3 px-4 align-middle">
                  <span className="inline-flex items-center justify-center rounded-lg bg-honeydew px-2 py-0.5 text-xs font-medium leading-4 text-seagreen">
                    {offer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveOffersCardContent;
