/** Tokens UI — Interview Simulator. */

export const IS_MAIN_PAGE =
  'flex h-full min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden bg-white';

export const IS_HEADER =
  'flex shrink-0 items-center gap-3 border-b border-solid border-[#f3f4f6] px-5 py-4 sm:gap-4 sm:px-6 sm:py-5 max-[429px]:px-4 max-[429px]:py-3.5';

export const IS_HEADER_ICON =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] shadow-[0_4px_14px_rgba(124,58,237,0.35)] sm:h-12 sm:w-12';

export const IS_BODY =
  'flex min-h-0 min-w-0 flex-1 flex-col px-5 py-6 sm:px-6 sm:py-8 max-[429px]:px-4 max-[429px]:py-5';

export const IS_AVATAR_ICON =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] shadow-[0_2px_8px_rgba(124,58,237,0.3)] sm:h-11 sm:w-11';

export const IS_MESSAGE_BUBBLE =
  'min-w-0 flex-1 rounded-xl border border-solid border-[#e5e7eb] bg-white px-4 py-4 sm:rounded-2xl sm:px-5 sm:py-5';

export const IS_ACTIONS_SECTION =
  'mt-8 flex w-full min-w-0 flex-1 flex-col items-center justify-start sm:mt-10 max-[429px]:mt-6';

export const IS_ACTIONS_INNER =
  'flex w-full min-w-0 max-w-[520px] flex-col gap-3 sm:gap-3.5';

export const IS_ACTION_BTN_BASE =
  'inline-flex h-12 w-full min-w-0 items-center justify-center gap-2.5 rounded-xl border border-solid px-4 text-sm font-semibold leading-5 transition-[background-color,border-color,box-shadow,transform] duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 active:scale-[0.99] max-[429px]:h-11 max-[429px]:text-[13px]';

export const IS_ACTION_BTN_UPLOAD =
  `${IS_ACTION_BTN_BASE} border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] hover:border-[#93c5fd] hover:bg-[#dbeafe] focus-visible:ring-[#2563eb]/25`;

export const IS_ACTION_BTN_OFFER =
  `${IS_ACTION_BTN_BASE} border-[#ddd6fe] bg-[#f5f3ff] text-[#7c3aed] hover:border-[#c4b5fd] hover:bg-[#ede9fe] focus-visible:ring-[#7c3aed]/25`;

export const IS_ACTION_BTN_COMPANY =
  `${IS_ACTION_BTN_BASE} border-[#bbf7d0] bg-[#f0fdf4] text-[#16a34a] hover:border-[#86efac] hover:bg-[#dcfce7] focus-visible:ring-[#16a34a]/25`;
