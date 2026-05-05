import type { ReactNode } from 'react';

export interface AdminHistoryRowDisplay {
  id: string;
  glyph: ReactNode;
  badgeLabel: string;
  badgeClassName: string;
  circleBgClassName: string;
  actorName: string;
  headline: string;
  metaLine: string;
  date: string;
  time: string;
}

export interface AdminHistoryFilterConfig {
  ariaLabel: string;
  placeholderOptionLabel: string;
  value: string;
  onChange: (next: string) => void;
  options: { value: string; label: string }[];
}
