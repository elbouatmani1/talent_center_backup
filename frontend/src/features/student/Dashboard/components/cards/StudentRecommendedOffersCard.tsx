import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Star, Target } from 'lucide-react';
import { STUDENT_INTERNSHIP_OFFERS_PATH } from '../../../internship_offers/constants/routes';
import { studentRecommendedOffers } from '../../data/studentDashboardMock';
import type { StudentRecommendedOffer } from '../../data/studentDashboardMock';
import StudentSectionHeader from '../StudentSectionHeader';
import {
  STUDENT_EMPTY_STATE,
  STUDENT_PRIMARY_BUTTON,
  STUDENT_SURFACE_CARD,
  STUDENT_SURFACE_CARD_INTERACTIVE,
} from '../../constants/studentDashboardStyles';

const OfferCard: FunctionComponent<{ offer: StudentRecommendedOffer }> = ({ offer }) => {
  return (
    <article
      className={`${STUDENT_SURFACE_CARD} ${STUDENT_SURFACE_CARD_INTERACTIVE} box-border flex w-full min-w-0 flex-col items-start gap-6 px-4 pb-4 pt-5 sm:px-[21px] sm:pb-4 sm:pt-[21px]`}
    >
      <div className="flex w-full min-w-0 items-start justify-between gap-3 sm:gap-4">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
          <h3 className="w-full text-base font-semibold leading-[27px] text-[#101828] sm:text-[18px]">
            {offer.title}
          </h3>

          <div className="flex min-w-0 flex-wrap items-center gap-2 text-[14px] leading-5 text-[#4a5565]">
            <Building2 className="h-4 w-4 shrink-0 text-[#4a5565]" strokeWidth={1.75} aria-hidden />
            <span className="shrink-0">{offer.company}</span>
            <span className="shrink-0 text-[#99a1af]">•</span>
            <span className="shrink-0">{offer.location}</span>
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

        <div className="flex shrink-0 flex-col items-end gap-0.5 rounded-lg bg-[#fffbeb] px-2.5 py-1.5 ring-1 ring-[#fef3c7]/80">
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
        onClick={() => console.log('View offer', offer.id)}
      >
        View Details
      </button>
    </article>
  );
};

/**
 * Section « Recommended for You » (Figma) : titre hors carte, cartes offres individuelles bordées.
 */
const StudentRecommendedOffersCard: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <section
      id="student-recommended"
      aria-label="Recommended for You"
      className="flex w-full flex-col items-stretch gap-4 text-left font-inter text-[#101828]"
    >
      <StudentSectionHeader
        icon={<Target className="h-[18px] w-[18px] text-[#155dfc]" strokeWidth={1.75} aria-hidden />}
        iconClassName="bg-[#eff6ff] text-[#155dfc]"
        title="Recommended for You"
        action={{ label: 'View All', onClick: () => navigate(STUDENT_INTERNSHIP_OFFERS_PATH) }}
      />

      {studentRecommendedOffers.length === 0 ? (
        <div className={STUDENT_EMPTY_STATE}>
          <p className="text-sm font-medium text-[#4a5565]">No recommendations yet</p>
          <p className="text-xs text-[#6a7282]">Complete your profile to unlock personalized offers.</p>
        </div>
      ) : (
        <div className="flex w-full flex-col items-stretch gap-4">
          {studentRecommendedOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      )}
    </section>
  );
};

export default StudentRecommendedOffersCard;
