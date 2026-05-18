import type { ReactNode } from 'react';

export interface HistoryRowDisplay {
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

export interface HistoryFilterConfig {
  ariaLabel: string;
  placeholderOptionLabel: string;
  value: string;
  onChange: (next: string) => void;
  options: { value: string; label: string }[];
}
