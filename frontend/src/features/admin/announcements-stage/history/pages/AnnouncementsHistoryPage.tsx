import { FunctionComponent, useMemo, useState } from 'react';
import { Archive, Megaphone, PenLine, Radio, Shuffle, Trophy, CalendarClock } from 'lucide-react';
import AdminModuleHistory from '../../../shared/admin-module-history/AdminModuleHistory';
import type { AdminHistoryRowDisplay } from '../../../shared/admin-module-history/adminHistoryTypes';
import {
  AnnouncementsTimelineRow,
  AnnouncementsTimelineStatus,
  announcementsHistorySeed,
} from '../data/announcementsHistoryMock';

function statusLabel(s: AnnouncementsTimelineStatus): string {
  switch (s) {
    case 'announcement_created':
      return 'Created announcement';
    case 'announcement_published':
      return 'Published';
    case 'deadline_adjusted':
      return 'Edited deadline';
    case 'audience_changed':
      return 'Target audience';
    case 'announcement_archived':
      return 'Archived';
    case 'competition_rollout':
      return 'Competition update';
    case 'interview_wave':
      return 'Interview wave';
    default:
      return s;
  }
}

function badgeClass(s: AnnouncementsTimelineStatus): string {
  switch (s) {
    case 'announcement_archived':
      return 'bg-gainsboro text-dimgray';
    case 'announcement_published':
    case 'competition_rollout':
      return 'bg-papayawhip text-darkorchid';
    case 'deadline_adjusted':
      return 'bg-lavender-200 text-slateblue';
    case 'audience_changed':
      return 'bg-lavender-100 text-darkorchid';
    case 'announcement_created':
      return 'bg-honeydew text-seagreen';
    case 'interview_wave':
      return 'bg-mistyrose text-firebrick';
    default:
      return 'bg-gainsboro text-dimgray';
  }
}

function circleClass(s: AnnouncementsTimelineStatus): string {
  switch (s) {
    case 'announcement_archived':
      return 'bg-gainsboro';
    case 'announcement_published':
    case 'competition_rollout':
      return 'bg-papayawhip';
    case 'deadline_adjusted':
      return 'bg-lavender-200';
    case 'audience_changed':
      return 'bg-lavender-100';
    case 'announcement_created':
      return 'bg-honeydew';
    case 'interview_wave':
      return 'bg-mistyrose';
    default:
      return 'bg-gainsboro';
  }
}

function glyph(row: AnnouncementsTimelineRow) {
  const props = { className: 'h-5 w-5 shrink-0', strokeWidth: 2, 'aria-hidden': true as const };
  switch (row.status) {
    case 'announcement_created':
      return <PenLine {...props} color="#016630" />;
    case 'announcement_published':
      return <Megaphone {...props} color="#6e11b0" />;
    case 'deadline_adjusted':
      return <CalendarClock {...props} color="#193cb8" />;
    case 'audience_changed':
      return <Shuffle {...props} color="#6e11b0" />;
    case 'announcement_archived':
      return <Archive {...props} color="#4a5565" />;
    case 'competition_rollout':
      return <Trophy {...props} color="#b45309" />;
    case 'interview_wave':
      return <Radio {...props} color="#9f0712" />;
    default:
      return <Megaphone {...props} color="#4a5565" />;
  }
}

function toDisplay(row: AnnouncementsTimelineRow): AdminHistoryRowDisplay {
  return {
    id: row.id,
    glyph: glyph(row),
    badgeLabel: statusLabel(row.status),
    badgeClassName: badgeClass(row.status),
    circleBgClassName: circleClass(row.status),
    actorName: row.actorName,
    headline: row.headline,
    metaLine: row.venueOrChannel,
    date: row.date,
    time: row.time,
  };
}

const AnnouncementsHistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [audienceScope, setAudienceScope] = useState('all');
  const [lifecycle, setLifecycle] = useState('all');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return announcementsHistorySeed.filter((row) => {
      if (audienceScope !== 'all' && row.audienceScope !== audienceScope) return false;
      if (lifecycle !== 'all' && row.lifecycle !== lifecycle) return false;
      if (!q) return true;
      return `${row.actorName} ${row.headline} ${row.venueOrChannel} ${statusLabel(row.status)}`
        .toLowerCase()
        .includes(q);
    });
  }, [search, audienceScope, lifecycle]);

  const audienceOpts = [...new Set(announcementsHistorySeed.map((r) => r.audienceScope))].map((v) => ({
    value: v,
    label: v,
  }));

  return (
    <AdminModuleHistory
      searchValue={search}
      onSearchChange={setSearch}
      filters={[
        {
          ariaLabel: 'Target audience filter',
          placeholderOptionLabel: 'Audience',
          value: audienceScope,
          onChange: setAudienceScope,
          options: audienceOpts.map((o) => ({ ...o })),
        },
        {
          ariaLabel: 'Publication lifecycle filter',
          placeholderOptionLabel: 'Lifecycle',
          value: lifecycle,
          onChange: setLifecycle,
          options: [
            { value: 'scheduled', label: 'Scheduled' },
            { value: 'live', label: 'Live' },
            { value: 'archived', label: 'Archived' },
          ],
        },
      ]}
      rows={filtered.map(toDisplay)}
    />
  );
};

export default AnnouncementsHistoryPage;
