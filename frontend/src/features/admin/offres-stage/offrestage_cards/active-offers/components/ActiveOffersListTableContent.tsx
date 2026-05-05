import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Users } from 'lucide-react';
import type { ActiveOfferListRow } from '../data/activeOffersOnlyMockData';

interface ActiveOffersListTableContentProps {
  offers: ActiveOfferListRow[];
}

const actionBtn =
  'inline-flex h-8 items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-num-20 text-[#101828] hover:bg-[#fafafa]';

const ActiveOffersListTableContent: FunctionComponent<ActiveOffersListTableContentProps> = ({
  offers,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 pb-6 pt-4 font-inter text-left text-num-14 leading-num-20 text-[#101828]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.1)]">
              <th className="py-2.5 pl-2 pr-4 text-left text-sm font-medium leading-5 text-slategray-100">Title</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Company</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Status</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Applicants</th>
              <th className="py-2.5 px-4 text-left text-sm font-medium leading-5 text-slategray-100">Deadline</th>
              <th className="py-2.5 px-4 text-right text-sm font-medium leading-5 text-slategray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-sm text-slategray-100">
                  No offers match your filters.
                </td>
              </tr>
            ) : (
              offers.map((offer) => (
                <tr key={offer.id} className="border-b border-[rgba(0,0,0,0.1)] last:border-b-0">
                  <td className="py-3 pl-2 pr-4 align-middle text-sm font-medium leading-5 text-[#0a0a0a]">{offer.title}</td>
                  <td className="py-3 px-4 align-middle text-sm leading-5">{offer.company}</td>
                  <td className="py-3 px-4 align-middle">
                    <span className="inline-flex rounded-lg bg-honeydew px-2 py-0.5 text-xs font-medium leading-4 text-seagreen">
                      {offer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex items-center gap-1.5 text-sm leading-5">
                      <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      <span>{offer.applicants}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 align-middle text-sm leading-5">{offer.deadline}</td>
                  <td className="py-3 px-4 align-middle">
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <button
                        type="button"
                        className={actionBtn}
                        onClick={() => navigate(`/admin/internship-offers/${offer.id}`)}
                      >
                        <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        <span>View</span>
                      </button>
                      <button type="button" className={actionBtn} onClick={() => console.log('Edit offer:', offer.id)}>
                        <Edit className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        <span>Edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveOffersListTableContent;
