import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Star } from 'lucide-react';
import { getInternshipOfferDetailsPath } from '../constants/routes';
import type { InternshipOffer } from '../types';
import {
  STUDENT_PRIMARY_BUTTON,
  STUDENT_SURFACE_CARD,
  STUDENT_SURFACE_CARD_INTERACTIVE,
} from '../constants/internshipOffersStyles';

interface InternshipOfferCardProps {
  offer: InternshipOffer;
}

const InternshipOfferCard: FunctionComponent<InternshipOfferCardProps> = ({ offer }) => {
  const navigate = useNavigate();

  return (
    <article
      className={`${STUDENT_SURFACE_CARD} ${STUDENT_SURFACE_CARD_INTERACTIVE} box-border flex w-full min-w-0 max-w-full flex-col items-start gap-5 overflow-hidden px-4 pb-4 pt-5 max-[429px]:gap-4 sm:gap-6 sm:px-[21px] sm:pb-4 sm:pt-[21px]`}
    >
      <div className="flex w-full min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <h3 className="w-full min-w-0 break-words text-base font-semibold leading-[27px] text-[#101828] sm:text-[18px]">
            {offer.title}
          </h3>

          <div className="flex min-w-0 max-w-full flex-wrap items-center gap-x-2 gap-y-1 text-[14px] leading-5 text-[#4a5565]">
            <Building2 className="h-4 w-4 shrink-0 text-[#4a5565]" strokeWidth={1.75} aria-hidden />
            <span className="min-w-0 break-words">{offer.company}</span>
            <span className="shrink-0 text-[#99a1af]">•</span>
            <span className="min-w-0 break-words">{offer.location}</span>
          </div>

          <div className="flex w-full flex-wrap gap-2">
            {offer.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-[22px] items-center justify-center rounded-lg border border-solid border-[#bedbff] bg-[#eff6ff] px-2 py-0.5 text-[12px] font-medium leading-4 text-[#1447e6]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-0.5 self-end rounded-lg bg-[#fffbeb] px-2.5 py-1.5 ring-1 ring-[#fef3c7]/80 sm:self-auto">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 shrink-0 fill-[#eab308] text-[#eab308]" aria-hidden />
            <span className="text-xl font-bold tabular-nums leading-7 text-[#101828] sm:text-2xl sm:leading-8">
              {offer.matchPercent}%
            </span>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-wide text-[#6a7282]">Match</span>
        </div>
      </div>

      <button
        type="button"
        className={STUDENT_PRIMARY_BUTTON}
        onClick={() => navigate(getInternshipOfferDetailsPath(offer.id))}
      >
        View Details
      </button>
    </article>
  );
};

export default InternshipOfferCard;

