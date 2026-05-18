import { FunctionComponent } from 'react';
import { Bell, Building2 } from 'lucide-react';
import { studentAnnouncementRows } from '../../data/studentDashboardMock';
import type { StudentAnnouncementRow } from '../../data/studentDashboardMock';
import StudentSectionHeader from '../StudentSectionHeader';
import {
  STUDENT_EMPTY_STATE,
  STUDENT_SURFACE_CARD,
  STUDENT_SURFACE_CARD_INTERACTIVE,
} from '../../constants/studentDashboardStyles';

const badgeStyles: Record<
  StudentAnnouncementRow['badgeVariant'],
  { container: string; label: string }
> = {
  interview: {
    container: 'border border-solid border-[#e9d4ff] bg-[#f3e8ff]',
    label: 'text-[#8200db]',
  },
  pending: {
    container: 'border border-solid border-[#fff085] bg-[#fef9c2]',
    label: 'text-[#a65f00]',
  },
  info: {
    container: 'border border-solid border-neutral-200 bg-neutral-100',
    label: 'text-[#101828]',
  },
};

const AnnouncementCard: FunctionComponent<{ row: StudentAnnouncementRow }> = ({ row }) => {
  const badge = badgeStyles[row.badgeVariant];

  return (
    <article
      className={`${STUDENT_SURFACE_CARD} ${STUDENT_SURFACE_CARD_INTERACTIVE} box-border flex w-full min-w-0 flex-col gap-3 p-[17px] transition-[box-shadow,border-color,transform] duration-200`}
    >
      <div className="flex w-full min-w-0 items-start justify-between gap-3">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <h3 className="w-full text-base font-semibold leading-[27px] text-[#101828] sm:text-[18px]">
            {row.title}
          </h3>
          <div className="flex min-w-0 items-center gap-2 text-[14px] font-medium leading-5 text-[#4a5565]">
            <Building2 className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span className="truncate">{row.company}</span>
          </div>
        </div>
        <span
          className={`inline-flex h-[22px] shrink-0 items-center justify-center rounded-lg px-2 py-0.5 text-[12px] font-medium leading-4 ${badge.container} ${badge.label}`}
        >
          {row.badgeLabel}
        </span>
      </div>
      <p className="w-full text-[14px] font-medium leading-5 text-[#4a5565]">{row.snippet}</p>
    </article>
  );
};

/**
 * Section « Your Announcements » (Figma) : titre hors carte, cartes annonces individuelles.
 */
const StudentAnnouncementsCard: FunctionComponent = () => {
  return (
    <section
      id="student-announcements"
      aria-label="Your Announcements"
      className="flex w-full flex-col items-stretch gap-4 text-left font-inter text-[#101828]"
    >
      <StudentSectionHeader
        icon={<Bell className="h-[18px] w-[18px] text-[#ea580c]" strokeWidth={1.75} aria-hidden />}
        iconClassName="bg-[#fff7ed] text-[#ea580c]"
        title="Your Announcements"
        action={{ label: 'View All', onClick: () => console.log('View all announcements') }}
      />

      {studentAnnouncementRows.length === 0 ? (
        <div className={STUDENT_EMPTY_STATE}>
          <p className="text-sm font-medium text-[#4a5565]">No announcements yet</p>
          <p className="text-xs text-[#6a7282]">Invitations and updates will show up here.</p>
        </div>
      ) : (
        <div className="flex w-full flex-col items-stretch gap-3">
          {studentAnnouncementRows.map((row) => (
            <AnnouncementCard key={row.id} row={row} />
          ))}
        </div>
      )}
    </section>
  );
};

export default StudentAnnouncementsCard;
