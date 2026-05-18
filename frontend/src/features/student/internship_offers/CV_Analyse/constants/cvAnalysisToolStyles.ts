import { STUDENT_SURFACE_CARD } from '../../constants/internshipOffersStyles';

export const CV_TOOL_SURFACE_CARD = STUDENT_SURFACE_CARD;

const toolCardBase =
  'box-border w-full min-w-0 overflow-hidden rounded-2xl border border-solid border-[#e5e7eb]/70 bg-white/95 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_16px_rgba(16,24,40,0.03)] backdrop-blur-sm transition-[box-shadow,border-color] duration-200 hover:border-[#e2e8f0] hover:shadow-[0_4px_20px_rgba(16,24,40,0.06)] max-[429px]:rounded-xl';

export const CV_TOOL_SECTION_CARD = `${toolCardBase} px-4 py-4 max-[429px]:px-3.5 max-[429px]:py-3.5 sm:px-5 sm:py-4`;

export const CV_TOOL_YOUR_CV_CARD = CV_TOOL_SECTION_CARD;

export const CV_TOOL_CONTEXT_CARD = CV_TOOL_SECTION_CARD;

export const CV_TOOL_PRIMARY_BUTTON =
  'inline-flex h-11 min-h-[44px] w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#155dfc] to-[#1447e6] px-4 text-[14px] font-semibold leading-5 text-white shadow-[0_2px_8px_rgba(21,93,252,0.3)] transition-all duration-200 hover:from-[#1447e6] hover:to-[#1d4ed8] hover:shadow-[0_4px_16px_rgba(21,93,252,0.35)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/35 focus-visible:ring-offset-2 max-[429px]:text-[13px]';

export const CV_TOOL_UPLOAD_LINK =
  'inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg border-0 bg-transparent p-0 text-[13px] font-medium leading-4 text-[#155dfc] transition-colors duration-200 hover:text-[#1447e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/25 sm:text-[14px] sm:leading-5';

export const CV_TOOL_CV_PREVIEW_CARD =
  'flex w-full min-w-0 items-center gap-2.5 rounded-xl border border-solid border-[#e5e7eb]/80 bg-gradient-to-r from-[#f9fafb] to-[#f8fafc] py-2.5 pl-3 pr-4 transition-colors duration-200 sm:gap-3 sm:py-2.5 sm:pl-3.5 sm:pr-[18px]';

export const CV_TOOL_CV_ICON_BOX =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#155dfc] shadow-[0_1px_4px_rgba(21,93,252,0.1)] ring-1 ring-[#dbeafe]/50';

export const CV_TOOL_ICON_BOX_BLUE =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]/50 text-[#155dfc] shadow-sm sm:h-10 sm:w-10 sm:rounded-[10px]';

export const CV_TOOL_CONTEXT_ROW =
  'flex w-full min-w-0 min-h-[44px] cursor-pointer items-center gap-2.5 rounded-xl border border-solid border-transparent px-3 py-2.5 text-left transition-all duration-200 hover:border-[#dbeafe] hover:bg-[#f8fafc] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155dfc]/25 sm:gap-3 sm:py-3';

export const CV_TOOL_CONTEXT_ROW_HIGHLIGHT =
  `${CV_TOOL_CONTEXT_ROW} border-[#bfdbfe]/80 bg-gradient-to-r from-[#eff6ff] to-[#f0f9ff]`;

export const CV_TOOL_CONTEXT_ROW_DEFAULT =
  `${CV_TOOL_CONTEXT_ROW} border-[#e5e7eb]/80 bg-white`;

export const CV_TOOL_CONTEXT_INPUT =
  'box-border h-10 min-h-[44px] w-full min-w-0 rounded-xl border border-solid border-[#e5e7eb]/80 bg-white px-3.5 text-sm leading-5 text-[#101828] shadow-sm placeholder:text-[#94a3b8] transition-[border-color,box-shadow] duration-200 focus:border-[#93c5fd] focus:outline-none focus:ring-2 focus:ring-[#155dfc]/15 sm:h-11';

export const CV_TOOL_READY_PANEL =
  `${CV_TOOL_SURFACE_CARD} flex w-full min-w-0 flex-col items-center justify-center rounded-2xl border-[#e5e7eb]/60 bg-gradient-to-br from-white via-white to-[#faf5ff]/30 px-4 py-10 text-center shadow-[0_4px_24px_rgba(124,58,237,0.06)] max-[429px]:px-3.5 max-[429px]:py-8 sm:px-8 sm:py-12 md:min-h-[380px] lg:min-h-[520px]`;

export const CV_TOOL_READY_ICON =
  'flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] shadow-[0_4px_20px_rgba(124,58,237,0.4)] ring-2 ring-[#ede9fe] ring-offset-2 ring-offset-white sm:h-14 sm:w-14';

export const CV_TOOL_PRO_TIP_BOX =
  'mt-5 w-full max-w-md rounded-xl border border-solid border-[#c4b5fd]/50 bg-gradient-to-br from-[#eff6ff] to-[#f5f3ff] px-4 py-3 text-left shadow-sm sm:mt-6 sm:px-5 sm:py-4';

export const CV_TOOL_SECTION_TITLE =
  'm-0 text-[15px] font-semibold tracking-tight text-[#0f172a] sm:text-base sm:leading-6';

export const CV_TOOL_SECTION_DESC =
  'm-0 mt-1.5 text-[13px] leading-[18px] text-[#64748b] sm:text-sm sm:leading-5';
