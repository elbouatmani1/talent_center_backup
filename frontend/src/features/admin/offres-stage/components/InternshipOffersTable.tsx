import { FunctionComponent } from 'react';
import { Users } from 'lucide-react';
import { internshipOffersMockData } from '../data/internshipOffersMockData';
import InternshipOfferActions from './InternshipOfferActions';
import InternshipOffersToolbar from './InternshipOffersToolbar';
import AdminMobileRowCard from '../../shared/AdminMobileRowCard';

const statusClassName: { [key: string]: string } = {
  Active: 'bg-honeydew text-seagreen',
  Draft: 'bg-[#fef9c2] text-[#894b00]',
  Expired: 'bg-[#ffe2e2] text-[#9f0712]',
  Closed: 'bg-gainsboro text-dimgray',
};

const InternshipOffersTable: FunctionComponent = () => {
  return (
    <div className="box-border flex w-full min-w-0 flex-col gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter text-base text-gray">
      <div className="flex flex-col gap-5 px-4 pb-1.5 pt-6 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex min-w-0 flex-col gap-0">
          <h2 className="font-inter text-base font-medium leading-4 text-gray">Internship Offers</h2>
          <p className="mt-1 font-inter text-base font-normal leading-6 text-slategray-100">
            Manage all internship opportunities
          </p>
        </div>
        <InternshipOffersToolbar />
      </div>

      <div className="space-y-3 px-4 pb-6 sm:px-6 lg:hidden">
        {internshipOffersMockData.map((offer) => (
          <AdminMobileRowCard
            key={offer.id}
            title={offer.title}
            badges={
              <span
                className={`inline-flex min-h-[22px] items-center justify-center rounded-num-8 px-2 py-0.5 text-[12px] font-medium leading-4 ${
                  statusClassName[offer.status] ?? 'bg-whitesmoke text-dimgray'
                }`}
              >
                {offer.status}
              </span>
            }
            fields={[
              { label: 'Company', value: offer.company },
              {
                label: 'Applicants',
                value: (
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                    {offer.applicants}
                  </span>
                )
              },
              { label: 'Deadline', value: offer.deadline }
            ]}
            actions={
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end [&_button]:w-full sm:[&_button]:w-auto">
                <InternshipOfferActions offer={offer} />
              </div>
            }
          />
        ))}
      </div>

      <div className="hidden min-w-0 overflow-x-auto px-4 pb-6 lg:block lg:px-6">
        <table className="w-full min-w-[800px] border-collapse font-inter text-num-14 leading-num-20 text-gray">
          <thead>
            <tr className="border-b border-solid border-[rgba(0,0,0,0.1)]">
              <th className="px-2 py-2.5 text-left font-medium">Title</th>
              <th className="px-2 py-2.5 text-left font-medium">Company</th>
              <th className="px-2 py-2.5 text-left font-medium">Status</th>
              <th className="px-2 py-2.5 text-left font-medium">Applicants</th>
              <th className="px-2 py-2.5 text-left font-medium">Deadline</th>
              <th className="px-2 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {internshipOffersMockData.map((offer) => (
              <tr
                key={offer.id}
                className="border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="px-2 py-3 align-middle font-medium">{offer.title}</td>
                <td className="px-2 py-3 align-middle font-normal">{offer.company}</td>
                <td className="px-2 py-3 align-middle">
                  <span
                    className={`inline-flex min-h-[22px] items-center justify-center rounded-num-8 px-2 py-0.5 text-[12px] font-medium leading-4 ${
                      statusClassName[offer.status] ?? 'bg-whitesmoke text-dimgray'
                    }`}
                  >
                    {offer.status}
                  </span>
                </td>
                <td className="px-2 py-3 align-middle">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} />
                    <span>{offer.applicants}</span>
                  </div>
                </td>
                <td className="px-2 py-3 align-middle font-normal">{offer.deadline}</td>
                <td className="px-2 py-3 align-middle">
                  <InternshipOfferActions offer={offer} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternshipOffersTable;
