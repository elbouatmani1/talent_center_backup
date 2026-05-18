/** Styles — page View All Announcements. */

/** Barre utilitaire — pas de carte englobante. */
export const ALL_ANNOUNCEMENTS_FILTER_BAR =
  'flex w-full min-w-0 flex-col gap-2 overflow-x-hidden sm:flex-row sm:items-center sm:gap-2.5';

export const ALL_ANNOUNCEMENTS_FILTER_ACTIONS =
  'grid w-full min-w-0 grid-cols-2 gap-2 sm:contents';

export const ALL_ANNOUNCEMENTS_SEARCH_INPUT =
  'box-border h-9 min-h-9 w-full min-w-0 rounded-full border border-solid border-[#e5e7eb] bg-white py-0 pl-9 pr-3 text-[13px] font-medium leading-5 text-[#101828] shadow-[0_1px_2px_rgba(16,24,40,0.04)] placeholder:text-[#9ca3af] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#c7d2fe] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] max-[429px]:text-[12px] max-[429px]:pl-8 sm:flex-1 sm:pl-10 sm:text-sm';

export const ALL_ANNOUNCEMENTS_FILTER_BTN =
  'inline-flex h-9 w-full min-w-0 items-center justify-center gap-1.5 rounded-full border border-solid border-[#e5e7eb] bg-white px-2.5 text-[13px] font-medium leading-5 text-[#364153] shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition-[border-color,background-color,box-shadow] duration-200 hover:border-[#d0d5dd] hover:bg-[#fafafa] focus-visible:ring-2 focus-visible:ring-[#7c3aed]/20 max-[429px]:gap-1 max-[429px]:px-2 max-[429px]:text-[12px] sm:w-auto sm:shrink-0 sm:px-3 sm:text-sm';

export const ALL_ANNOUNCEMENTS_FILTER_BTN_OPEN =
  'border-[#c7d2fe] bg-[#faf5ff] text-[#4c1d95] shadow-[0_0_0_1px_rgba(139,92,246,0.08)]';

export const RECOMMENDED_CARD_SURFACE =
  'relative box-border flex w-full min-w-0 flex-col gap-3 overflow-visible rounded-[14px] border border-solid border-[#ddd6fe] bg-white p-4 text-left shadow-[0_0_0_1px_rgba(139,92,246,0.06),0_4px_18px_rgba(139,92,246,0.08)] sm:p-5';

export const LIST_CARD_SURFACE =
  'relative box-border flex w-full min-w-0 flex-col gap-3 overflow-visible rounded-[14px] border border-solid border-[rgba(0,0,0,0.08)] bg-white p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-5';

export const MATCH_SCORE_BADGE =
  'inline-flex shrink-0 items-center justify-center rounded-full border border-solid border-[#ddd6fe] bg-[#f5f3ff] px-2.5 py-0.5 text-xs font-semibold leading-none text-[#7c3aed]';

export const PRIORITY_BADGE_BASE =
  'inline-flex shrink-0 items-center justify-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold leading-none';

export const PRIORITY_BADGE_URGENT =
  `${PRIORITY_BADGE_BASE} border-[#fecaca] bg-[#fef2f2] text-[#dc2626]`;

export const PRIORITY_BADGE_IMPORTANT =
  `${PRIORITY_BADGE_BASE} border-[#fed7aa] bg-[#fff7ed] text-[#ea580c]`;

export const PRIORITY_BADGE_NORMAL =
  `${PRIORITY_BADGE_BASE} border-[#e5e7eb] bg-[#f9fafb] text-[#6b7280]`;

export const ANNOUNCEMENT_MENU_PANEL =
  'absolute right-0 top-[calc(100%+6px)] z-50 w-[min(100vw-2rem,220px)] min-w-[200px] overflow-hidden rounded-[12px] border border-solid border-[#e5e7eb] bg-white py-1 shadow-[0_10px_40px_rgba(15,23,42,0.12)]';

export const ANNOUNCEMENT_MENU_ITEM =
  'flex w-full min-w-0 cursor-pointer items-center gap-2.5 border-0 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-[#364153] outline-none transition-colors hover:bg-white focus-visible:bg-white active:bg-white';
