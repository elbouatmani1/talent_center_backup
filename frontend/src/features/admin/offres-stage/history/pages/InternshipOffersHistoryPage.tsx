import { FunctionComponent, useMemo, useState } from 'react';
import {
  Briefcase,
  Check,
  FilePenLine,
  SendHorizontal,
  UserPlus,
  X,
  User,
  CalendarClock,
  Megaphone,
} from 'lucide-react';
import AdminModuleHistory from '../../../shared/admin-module-history/AdminModuleHistory';
import type { AdminHistoryRowDisplay } from '../../../shared/admin-module-history/adminHistoryTypes';
import {
  internshipOffersHistoryTimelineSeed,
  InternshipOffersTimelineRow,
  InternshipOffersTimelineStatus,
} from '../data/internshipOffersHistoryMock';

function statusLabel(status: InternshipOffersTimelineStatus): string {
  switch (status) {
    case 'applied':
      return 'Applied';
    case 'accepted':
      return 'Accepted';
    case 'rejected':
      return 'Rejected';
    case 'offer_created':
      return 'Offer drafted';
    case 'offer_edited':
      return 'Offer edited';
    case 'offer_published':
      return 'Offer published';
    case 'offer_expired':
      return 'Offer expired';
    case 'candidate_assigned':
      return 'Candidate assigned';
    case 'cv_sent':
      return 'CV forwarded';
    default:
      return status;
  }
}

function statusBadgeClass(status: InternshipOffersTimelineStatus): string {
  switch (status) {
    case 'applied':
      return 'bg-lavender-200 text-slateblue';
    case 'accepted':
      return 'bg-honeydew text-seagreen';
    case 'rejected':
      return 'bg-mistyrose text-firebrick';
    case 'offer_created':
      return 'bg-lavender-100 text-darkorchid';
    case 'offer_edited':
    case 'offer_published':
      return 'bg-papayawhip text-darkorchid';
    case 'offer_expired':
      return 'bg-gainsboro text-dimgray';
    case 'candidate_assigned':
      return 'bg-lavender-100 text-darkorchid';
    case 'cv_sent':
      return 'bg-honeydew text-seagreen';
    default:
      return 'bg-gainsboro text-dimgray';
  }
}

function statusCircleClass(status: InternshipOffersTimelineStatus): string {
  switch (status) {
    case 'applied':
      return 'bg-lavender-200';
    case 'accepted':
      return 'bg-honeydew';
    case 'rejected':
      return 'bg-mistyrose';
    case 'offer_created':
      return 'bg-lavender-100';
    case 'offer_edited':
    case 'offer_published':
      return 'bg-papayawhip';
    case 'offer_expired':
      return 'bg-gainsboro';
    case 'candidate_assigned':
      return 'bg-lavender-100';
    case 'cv_sent':
      return 'bg-honeydew';
    default:
      return 'bg-gainsboro';
  }
}

function glyphFor(row: InternshipOffersTimelineRow) {
  const status = row.status;
  const iconProps = { className: 'h-5 w-5 shrink-0', strokeWidth: 2, 'aria-hidden': true as const };
  switch (status) {
    case 'applied':
      return <User {...iconProps} color="#193cb8" />;
    case 'accepted':
      return <Check {...iconProps} color="#016630" />;
    case 'rejected':
      return <X {...iconProps} color="#9f0712" />;
    case 'offer_created':
      return <Briefcase {...iconProps} color="#6e11b0" />;
    case 'offer_edited':
      return <FilePenLine {...iconProps} color="#6e11b0" />;
    case 'offer_published':
      return <Megaphone {...iconProps} color="#6e11b0" />;
    case 'offer_expired':
      return <CalendarClock {...iconProps} color="#4a5565" />;
    case 'candidate_assigned':
      return <UserPlus {...iconProps} color="#0369a1" />;
    case 'cv_sent':
      return <SendHorizontal {...iconProps} color="#0e7490" />;
    default:
      return <User {...iconProps} color="#4a5565" />;
  }
}

function rowToDisplay(row: InternshipOffersTimelineRow): AdminHistoryRowDisplay {
  return {
    id: row.id,
    glyph: glyphFor(row),
    badgeLabel: statusLabel(row.status),
    badgeClassName: statusBadgeClass(row.status),
    circleBgClassName: statusCircleClass(row.status),
    actorName: row.actorName,
    headline: row.headline,
    metaLine: row.company,
    date: row.date,
    time: row.time,
  };
}

const InternshipOffersHistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [studentClass, setStudentClass] = useState('all');
  const [expireOffer, setExpireOffer] = useState('all');

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return internshipOffersHistoryTimelineSeed.filter((row) => {
      if (studentClass !== 'all') {
        if (row.studentClass != null && row.studentClass !== studentClass) return false;
      }
      if (expireOffer !== 'all' && row.offerExpiry !== expireOffer) return false;
      if (!q) return true;
      const hay = [row.actorName, row.headline, row.company, statusLabel(row.status), row.studentClass ?? '']
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [search, studentClass, expireOffer]);

  return (
    <AdminModuleHistory
      searchValue={search}
      onSearchChange={setSearch}
      filters={[
        {
          ariaLabel: 'Student cohort',
          placeholderOptionLabel: 'Student class',
          value: studentClass,
          onChange: setStudentClass,
          options: [
            { value: '1st year', label: '1st year' },
            { value: '2nd year', label: '2nd year' },
            { value: '3rd year', label: '3rd year' },
          ],
        },
        {
          ariaLabel: 'Offer expiry',
          placeholderOptionLabel: 'Expire offer',
          value: expireOffer,
          onChange: setExpireOffer,
          options: [
            { value: 'active', label: 'Active' },
            { value: 'expiring_soon', label: 'Expiring soon' },
            { value: 'expired', label: 'Expired' },
          ],
        },
      ]}
      rows={rows.map(rowToDisplay)}
    />
  );
};

export default InternshipOffersHistoryPage;
