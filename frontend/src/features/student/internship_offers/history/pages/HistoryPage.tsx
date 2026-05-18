import { FunctionComponent, useMemo, useState } from 'react';
import {
  Bookmark,
  CalendarClock,
  ExternalLink,
  Eye,
  FileText,
  MessageSquare,
  RefreshCw,
  Upload,
  User,
  Users,
} from 'lucide-react';
import StudentModuleHistory from '../components/StudentModuleHistory';
import type { HistoryRowDisplay } from '../types';
import {
  studentInternshipHistoryTimelineSeed,
  StudentInternshipHistoryRow,
  StudentInternshipHistoryStatus,
} from '../data/studentInternshipHistoryMock';

function statusLabel(status: StudentInternshipHistoryStatus): string {
  switch (status) {
    case 'viewed_offer':
      return 'Viewed offer';
    case 'saved_offer':
      return 'Saved offer';
    case 'applied':
      return 'Applied';
    case 'cv_uploaded':
      return 'CV uploaded';
    case 'cv_analysis_used':
      return 'CV Analysis';
    case 'interview_simulator_used':
      return 'Interview Simulator';
    case 'chat_question':
      return 'Chat question';
    case 'external_link_confirmed':
      return 'External link';
    case 'application_status_changed':
      return 'Status updated';
    case 'deadline_reminder':
      return 'Deadline reminder';
    default:
      return status;
  }
}

function statusBadgeClass(status: StudentInternshipHistoryStatus): string {
  switch (status) {
    case 'viewed_offer':
    case 'saved_offer':
      return 'bg-lavender-100 text-darkorchid';
    case 'applied':
    case 'cv_uploaded':
    case 'external_link_confirmed':
      return 'bg-lavender-200 text-slateblue';
    case 'cv_analysis_used':
    case 'interview_simulator_used':
      return 'bg-papayawhip text-darkorchid';
    case 'chat_question':
      return 'bg-honeydew text-seagreen';
    case 'application_status_changed':
      return 'bg-honeydew text-seagreen';
    case 'deadline_reminder':
      return 'bg-mistyrose text-firebrick';
    default:
      return 'bg-gainsboro text-dimgray';
  }
}

function statusCircleClass(status: StudentInternshipHistoryStatus): string {
  switch (status) {
    case 'viewed_offer':
    case 'saved_offer':
      return 'bg-lavender-100';
    case 'applied':
    case 'cv_uploaded':
    case 'external_link_confirmed':
      return 'bg-lavender-200';
    case 'cv_analysis_used':
    case 'interview_simulator_used':
      return 'bg-papayawhip';
    case 'chat_question':
    case 'application_status_changed':
      return 'bg-honeydew';
    case 'deadline_reminder':
      return 'bg-mistyrose';
    default:
      return 'bg-gainsboro';
  }
}

function glyphFor(row: StudentInternshipHistoryRow) {
  const status = row.status;
  const iconProps = { className: 'h-5 w-5 shrink-0', strokeWidth: 2, 'aria-hidden': true as const };
  switch (status) {
    case 'viewed_offer':
      return <Eye {...iconProps} color="#6e11b0" />;
    case 'saved_offer':
      return <Bookmark {...iconProps} color="#6e11b0" />;
    case 'applied':
      return <User {...iconProps} color="#193cb8" />;
    case 'cv_uploaded':
      return <Upload {...iconProps} color="#0e7490" />;
    case 'cv_analysis_used':
      return <FileText {...iconProps} color="#6e11b0" />;
    case 'interview_simulator_used':
      return <Users {...iconProps} color="#6e11b0" />;
    case 'chat_question':
      return <MessageSquare {...iconProps} color="#016630" />;
    case 'external_link_confirmed':
      return <ExternalLink {...iconProps} color="#193cb8" />;
    case 'application_status_changed':
      return <RefreshCw {...iconProps} color="#016630" />;
    case 'deadline_reminder':
      return <CalendarClock {...iconProps} color="#9f0712" />;
    default:
      return <User {...iconProps} color="#4a5565" />;
  }
}

function rowToDisplay(row: StudentInternshipHistoryRow): HistoryRowDisplay {
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

const HistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [activityType, setActivityType] = useState('all');
  const [expireOffer, setExpireOffer] = useState('all');

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return studentInternshipHistoryTimelineSeed.filter((row) => {
      if (activityType !== 'all' && row.activityCategory !== activityType) return false;
      if (expireOffer !== 'all' && row.offerExpiry !== expireOffer) return false;
      if (!q) return true;
      const hay = [
        row.actorName,
        row.headline,
        row.company,
        statusLabel(row.status),
        row.activityCategory,
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [search, activityType, expireOffer]);

  return (
    <StudentModuleHistory
      searchValue={search}
      onSearchChange={setSearch}
      filters={[
        {
          ariaLabel: 'Activity type',
          placeholderOptionLabel: 'Activity type',
          value: activityType,
          onChange: setActivityType,
          options: [
            { value: 'applications', label: 'Applications' },
            { value: 'saved', label: 'Saved offers' },
            { value: 'tools', label: 'Tools' },
            { value: 'chat', label: 'Chat' },
            { value: 'offers', label: 'Offers' },
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
      emptyMessage="No internship offer activity matches your filters."
    />
  );
};

export default HistoryPage;
