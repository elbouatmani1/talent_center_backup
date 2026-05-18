import { FunctionComponent, useMemo, useState } from 'react';
import {
  Bell,
  Bookmark,
  CalendarClock,
  Eye,
  MessageSquare,
  UserCheck,
  X,
} from 'lucide-react';
import StudentModuleHistory from '../../../internship_offers/history/components/StudentModuleHistory';
import type { HistoryRowDisplay } from '../../../internship_offers/history/types';
import {
  studentAnnouncementsHistoryTimelineSeed,
  StudentAnnouncementsHistoryRow,
  StudentAnnouncementsHistoryStatus,
} from '../data/studentAnnouncementsHistoryMock';

function statusLabel(status: StudentAnnouncementsHistoryStatus): string {
  switch (status) {
    case 'viewed_announcement':
      return 'Viewed';
    case 'read_announcement':
      return 'Read';
    case 'saved_announcement':
      return 'Saved';
    case 'dismissed_announcement':
      return 'Dismissed';
    case 'replied_in_chat':
      return 'Chat reply';
    case 'event_registered':
      return 'Registered';
    case 'deadline_reminder':
      return 'Deadline';
    default:
      return status;
  }
}

function statusBadgeClass(status: StudentAnnouncementsHistoryStatus): string {
  switch (status) {
    case 'viewed_announcement':
    case 'read_announcement':
      return 'bg-lavender-100 text-darkorchid';
    case 'saved_announcement':
      return 'bg-lavender-200 text-slateblue';
    case 'event_registered':
      return 'bg-honeydew text-seagreen';
    case 'replied_in_chat':
      return 'bg-honeydew text-seagreen';
    case 'deadline_reminder':
      return 'bg-mistyrose text-firebrick';
    case 'dismissed_announcement':
      return 'bg-gainsboro text-dimgray';
    default:
      return 'bg-gainsboro text-dimgray';
  }
}

function statusCircleClass(status: StudentAnnouncementsHistoryStatus): string {
  switch (status) {
    case 'viewed_announcement':
    case 'read_announcement':
      return 'bg-lavender-100';
    case 'saved_announcement':
      return 'bg-lavender-200';
    case 'event_registered':
    case 'replied_in_chat':
      return 'bg-honeydew';
    case 'deadline_reminder':
      return 'bg-mistyrose';
    case 'dismissed_announcement':
      return 'bg-gainsboro';
    default:
      return 'bg-gainsboro';
  }
}

function glyphFor(row: StudentAnnouncementsHistoryRow) {
  const status = row.status;
  const iconProps = { className: 'h-5 w-5 shrink-0', strokeWidth: 2, 'aria-hidden': true as const };
  switch (status) {
    case 'viewed_announcement':
      return <Eye {...iconProps} color="#6e11b0" />;
    case 'read_announcement':
      return <Bell {...iconProps} color="#6e11b0" />;
    case 'saved_announcement':
      return <Bookmark {...iconProps} color="#193cb8" />;
    case 'dismissed_announcement':
      return <X {...iconProps} color="#4a5565" />;
    case 'replied_in_chat':
      return <MessageSquare {...iconProps} color="#016630" />;
    case 'event_registered':
      return <UserCheck {...iconProps} color="#016630" />;
    case 'deadline_reminder':
      return <CalendarClock {...iconProps} color="#9f0712" />;
    default:
      return <Bell {...iconProps} color="#4a5565" />;
  }
}

function rowToDisplay(row: StudentAnnouncementsHistoryRow): HistoryRowDisplay {
  return {
    id: row.id,
    glyph: glyphFor(row),
    badgeLabel: statusLabel(row.status),
    badgeClassName: statusBadgeClass(row.status),
    circleBgClassName: statusCircleClass(row.status),
    actorName: row.actorName,
    headline: row.headline,
    metaLine: row.channel,
    date: row.date,
    time: row.time,
  };
}

const HistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [activityType, setActivityType] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return studentAnnouncementsHistoryTimelineSeed.filter((row) => {
      if (activityType !== 'all' && row.activityCategory !== activityType) return false;
      if (priorityFilter !== 'all' && row.priority !== priorityFilter) return false;
      if (!q) return true;
      const hay = [
        row.actorName,
        row.headline,
        row.channel,
        statusLabel(row.status),
        row.activityCategory,
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [search, activityType, priorityFilter]);

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
            { value: 'events', label: 'Events' },
            { value: 'deadlines', label: 'Deadlines' },
            { value: 'competitions', label: 'Competitions' },
            { value: 'general', label: 'General' },
            { value: 'chat', label: 'Chat' },
          ],
        },
        {
          ariaLabel: 'Priority',
          placeholderOptionLabel: 'Priority',
          value: priorityFilter,
          onChange: setPriorityFilter,
          options: [
            { value: 'high', label: 'High' },
            { value: 'medium', label: 'Medium' },
            { value: 'low', label: 'Low' },
          ],
        },
      ]}
      rows={rows.map(rowToDisplay)}
      emptyMessage="No announcement activity matches your filters."
    />
  );
};

export default HistoryPage;
