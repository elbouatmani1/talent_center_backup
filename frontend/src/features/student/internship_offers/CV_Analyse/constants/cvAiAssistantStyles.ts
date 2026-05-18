/** Tokens UI premium — AI CV Assistant (violet, glass léger, transitions). */

const cardBase =
  'box-border w-full min-w-0 overflow-hidden rounded-2xl border border-solid border-[#e5e7eb]/70 bg-white/95 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_16px_rgba(124,58,237,0.04)] backdrop-blur-sm transition-[box-shadow,border-color,transform] duration-200 ease-out hover:border-[#ddd6fe]/80 hover:shadow-[0_4px_20px_rgba(124,58,237,0.08)] max-[429px]:rounded-xl';

export const CV_ASSISTANT_CARD = `${cardBase} p-5 max-[429px]:p-4`;

export const CV_ASSISTANT_YOUR_CV_CARD = `${cardBase} px-5 py-4 max-[429px]:px-4 max-[429px]:py-3.5 sm:py-5`;

export const CV_ASSISTANT_MAIN_PANEL =
  'box-border flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-solid border-[#e5e7eb]/60 bg-gradient-to-br from-white via-white to-[#faf5ff]/40 shadow-[0_4px_24px_rgba(124,58,237,0.06),0_1px_3px_rgba(16,24,40,0.04)] ring-1 ring-[#f5f3ff]/80 max-[429px]:rounded-xl';

export const CV_ASSISTANT_SECTION_TITLE =
  'm-0 text-[15px] font-semibold tracking-tight text-[#0f172a] sm:text-base';

export const CV_ASSISTANT_SECTION_LABEL =
  'm-0 text-xs font-medium uppercase tracking-wide text-[#94a3b8]';

export const CV_ASSISTANT_CV_PREVIEW =
  'box-border flex w-full min-w-0 items-center gap-3 rounded-xl border border-solid border-[#e0e7ff]/80 bg-gradient-to-r from-[#eff6ff]/90 to-[#f5f3ff]/50 py-2.5 pl-3 pr-4 transition-colors duration-200 sm:gap-3 sm:pl-3.5 sm:pr-5';

export const CV_ASSISTANT_ICON_BOX =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[#155dfc] shadow-[0_1px_4px_rgba(21,93,252,0.12)] ring-1 ring-[#dbeafe]/60';

export const CV_ASSISTANT_CONTEXT_PILL =
  'inline-flex max-w-full items-center rounded-full border border-solid border-[#e9d5ff]/60 bg-gradient-to-r from-[#f3e8ff] to-[#ede9fe]/80 px-3.5 py-1.5 text-[13px] font-medium leading-5 text-[#6d28d9] shadow-sm sm:text-sm';

export const CV_ASSISTANT_EDIT_BTN =
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-transparent text-[#6b7280] transition-all duration-200 hover:border-[#e9d5ff] hover:bg-[#faf5ff] hover:text-[#7c3aed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/20';

export const CV_ASSISTANT_PROGRESS_TRACK =
  'h-2.5 w-full overflow-hidden rounded-full bg-[#f1f5f9] ring-1 ring-inset ring-[#e2e8f0]/50';

export const CV_ASSISTANT_PROGRESS_FILL =
  'h-full rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] shadow-[0_0_8px_rgba(124,58,237,0.35)] transition-[width] duration-700 ease-out';

export const CV_ASSISTANT_SCORE_VALUE =
  'bg-gradient-to-br from-[#10b981] to-[#059669] bg-clip-text text-2xl font-bold leading-8 text-transparent';

export const CV_ASSISTANT_HEADER_ICON =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] shadow-[0_4px_16px_rgba(124,58,237,0.4)] ring-2 ring-[#ede9fe] ring-offset-2 ring-offset-white sm:h-12 sm:w-12';

export const CV_ASSISTANT_BETA_BADGE =
  'inline-flex shrink-0 items-center gap-1 rounded-full border border-solid border-[#e9d5ff]/50 bg-gradient-to-r from-[#faf5ff] to-[#f3e8ff] px-2.5 py-1 text-xs font-semibold leading-4 text-[#7c3aed] shadow-sm';

export const CV_ASSISTANT_MESSAGE_BUBBLE =
  'min-w-0 flex-1 rounded-2xl border border-solid border-[#ede9fe]/70 bg-gradient-to-br from-[#fafafa] via-white to-[#faf5ff]/30 px-4 py-4 shadow-[0_2px_12px_rgba(16,24,40,0.04)] sm:px-5 sm:py-5';

export const CV_ASSISTANT_AVATAR_ICON =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] shadow-[0_2px_10px_rgba(124,58,237,0.35)] ring-2 ring-[#ede9fe] ring-offset-2 ring-offset-[#fafafa] sm:h-10 sm:w-10';

export const CV_ASSISTANT_SCORE_BADGE =
  'inline-flex items-center rounded-lg bg-gradient-to-r from-[#f3e8ff] to-[#ede9fe] px-2 py-0.5 text-sm font-bold text-[#7c3aed]';

export const CV_ASSISTANT_LIST_ITEM_STRENGTH =
  'flex items-start gap-2.5 rounded-xl border border-solid border-[#bbf7d0]/50 bg-[#f0fdf4]/60 px-3 py-2.5 text-sm leading-5 text-[#374151] transition-colors duration-150';

export const CV_ASSISTANT_LIST_ITEM_IMPROVE =
  'flex items-start gap-2.5 rounded-xl border border-solid border-[#fde68a]/50 bg-[#fffbeb]/60 px-3 py-2.5 text-sm leading-5 text-[#374151] transition-colors duration-150';

export const CV_ASSISTANT_SUGGESTION_PILL =
  'inline-flex min-h-[38px] max-w-full items-center rounded-full border border-solid border-[#e5e7eb]/80 bg-white/90 px-4 py-2 text-left text-[13px] font-medium leading-5 text-[#374151] shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-200 hover:-translate-y-px hover:border-[#c4b5fd] hover:bg-[#faf5ff] hover:shadow-[0_4px_12px_rgba(124,58,237,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/25 active:translate-y-0 sm:text-sm';

export const CV_ASSISTANT_INPUT_WRAP =
  'relative flex w-full min-w-0 items-stretch overflow-hidden rounded-xl border border-solid border-[#e5e7eb]/80 bg-white/95 shadow-[0_2px_8px_rgba(16,24,40,0.04)] transition-[border-color,box-shadow] duration-200 focus-within:border-[#c4b5fd] focus-within:shadow-[0_0_0_3px_rgba(124,58,237,0.12),0_4px_12px_rgba(124,58,237,0.08)]';

export const CV_ASSISTANT_TEXTAREA =
  'box-border min-h-[56px] w-full min-w-0 flex-1 resize-none border-0 bg-transparent py-3.5 pl-4 pr-[112px] text-sm leading-6 text-[#101828] placeholder:text-[#94a3b8] focus:outline-none max-[429px]:min-h-[72px] max-[429px]:py-3 max-[429px]:pl-3.5 max-[429px]:pr-3.5 max-[429px]:text-[13px]';

export const CV_ASSISTANT_SEND_BUTTON =
  'absolute right-2 top-1/2 inline-flex h-10 min-w-[92px] -translate-y-1/2 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] px-4 text-sm font-semibold leading-5 text-white shadow-[0_2px_8px_rgba(124,58,237,0.35)] transition-all duration-200 hover:from-[#6d28d9] hover:to-[#5b21b6] hover:shadow-[0_4px_14px_rgba(124,58,237,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/40 max-[429px]:relative max-[429px]:right-auto max-[429px]:top-auto max-[429px]:h-10 max-[429px]:w-full max-[429px]:translate-y-0';

export const CV_ASSISTANT_BTN_SECONDARY =
  'inline-flex h-10 min-h-[44px] min-w-0 items-center justify-center rounded-xl border border-solid border-[#e5e7eb] bg-white px-5 text-sm font-medium leading-5 text-[#475569] shadow-sm transition-all duration-200 hover:border-[#cbd5e1] hover:bg-[#f8fafc] hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/15 max-[429px]:w-full';

export const CV_ASSISTANT_BTN_OUTLINE_PURPLE =
  'inline-flex h-10 min-h-[44px] min-w-0 items-center justify-center gap-2 rounded-xl border border-solid border-[#7c3aed]/80 bg-white px-5 text-sm font-semibold leading-5 text-[#7c3aed] shadow-sm transition-all duration-200 hover:border-[#6d28d9] hover:bg-[#faf5ff] hover:shadow-[0_4px_12px_rgba(124,58,237,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/25 max-[429px]:w-full';

export const CV_ASSISTANT_REFRESH_BUTTON =
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-solid border-[#e5e7eb]/80 bg-white text-[#6b7280] shadow-sm transition-all duration-200 hover:-translate-y-px hover:border-[#c4b5fd] hover:bg-[#faf5ff] hover:text-[#7c3aed] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/20 active:translate-y-0';
