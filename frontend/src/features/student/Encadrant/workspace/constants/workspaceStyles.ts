/** Tokens UI — module Workspace Encadrant. */

export const WORKSPACE_TAB_BAR =
  'box-border flex w-full min-w-0 max-w-full gap-1 overflow-x-auto rounded-[12px] bg-[#f3f4f6] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

export const WORKSPACE_TAB_ACTIVE =
  'inline-flex max-w-full shrink-0 items-center gap-1.5 rounded-[10px] bg-white px-3 py-2 font-inter text-[13px] font-medium leading-5 text-[#0a0a0a] shadow-[0_1px_3px_rgba(16,24,40,0.08)] max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const WORKSPACE_TAB_INACTIVE =
  'inline-flex max-w-full shrink-0 items-center gap-1.5 rounded-[10px] bg-transparent px-3 py-2 font-inter text-[13px] font-medium leading-5 text-[#717182] transition-colors hover:text-[#0a0a0a] max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const WORKSPACE_SURFACE_CARD =
  'box-border flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[14px] border border-solid border-[rgba(0,0,0,0.08)] bg-white font-inter shadow-[0_1px_2px_rgba(16,24,40,0.04)]';

export const WORKSPACE_OUTLINE_BTN =
  'box-border inline-flex h-9 max-w-full min-w-0 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-3 py-2 font-inter text-[13px] font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa] max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const WORKSPACE_PRIMARY_BTN =
  'box-border inline-flex h-9 max-w-full min-w-0 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#030213] px-3 py-2 font-inter text-[13px] font-medium leading-5 text-white transition-opacity hover:opacity-90 max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const WORKSPACE_TOOLBAR_ROW =
  'flex w-full min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between';

export const WORKSPACE_TOOLBAR_ACTIONS =
  'flex min-w-0 max-w-full flex-wrap items-center gap-2';

export const WORKSPACE_TOOLBAR_GROUP =
  'box-border flex max-w-full min-w-0 flex-wrap items-center gap-0.5 overflow-x-auto rounded-[10px] bg-[#f5f5f5] p-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:flex-nowrap [&::-webkit-scrollbar]:hidden sm:gap-1';

export const WORKSPACE_TOOL_BTN =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#4b5563] transition-colors hover:bg-white hover:text-[#0a0a0a] sm:h-9 sm:w-9';

export const WORKSPACE_TOOL_BTN_ACTIVE =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#030213] text-white sm:h-9 sm:w-9';

export const WORKSPACE_ACTIVE_USERS_BADGE =
  'box-border inline-flex max-w-full min-w-0 shrink-0 items-center gap-1.5 self-start rounded-full border border-solid border-[#bbf7d0] bg-[#f0fdf4] px-2.5 py-1 font-inter text-[11px] font-medium leading-4 text-[#15803d] sm:self-auto sm:text-[12px]';

export const WORKSPACE_FIELD_INPUT =
  'box-border w-full min-w-0 max-w-full flex-1 rounded-xl border border-solid border-[rgba(0,0,0,0.06)] bg-[#f3f4f6] px-4 py-2.5 font-inter text-[14px] leading-5 text-[#0a0a0a] placeholder:text-[#9ca3af] focus:border-[rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-[rgba(3,2,19,0.08)]';

export const WORKSPACE_FIELD_TEXTAREA =
  'box-border min-h-[min(280px,40vh)] w-full min-w-0 max-w-full flex-1 resize-y overflow-x-hidden rounded-xl border border-solid border-[rgba(0,0,0,0.06)] bg-[#f3f4f6] p-4 font-mono text-[14px] leading-6 text-[#0a0a0a] placeholder:text-[#9ca3af] focus:border-[rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-[rgba(3,2,19,0.08)] sm:min-h-[min(320px,45vh)]';

export const WORKSPACE_DOCUMENT_ROW =
  'box-border flex w-full min-w-0 max-w-full flex-col gap-3 overflow-hidden rounded-xl border border-solid border-[rgba(0,0,0,0.08)] bg-white p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4';

export const WORKSPACE_FOOTER_ROW =
  'mt-4 flex w-full min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between';

export const WORKSPACE_DISCUSSION_FORM =
  'box-border flex w-full min-w-0 max-w-full flex-col gap-2 border-t border-solid border-[rgba(0,0,0,0.06)] pt-4 sm:flex-row sm:items-stretch';

export const WORKSPACE_MEETING_START_BTN =
  'box-border inline-flex h-10 max-w-full min-w-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#030213] px-4 py-2.5 font-inter text-[13px] font-medium leading-5 text-white transition-opacity hover:opacity-90 sm:h-10 sm:w-auto';

export const WORKSPACE_MEETING_LIVE_BADGE =
  'inline-flex max-w-full shrink-0 items-center gap-1.5 self-start rounded-full border border-solid border-[#fecaca] bg-[#fef2f2] px-2.5 py-1 font-inter text-[11px] font-semibold uppercase leading-4 tracking-wide text-[#dc2626] sm:self-auto sm:text-[12px]';

export const WORKSPACE_MEETING_CONTROL_BTN =
  'inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#030213] text-white transition-opacity hover:opacity-90';

export const WORKSPACE_MEETING_CONTROL_BTN_OUTLINE =
  'inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-solid border-[rgba(0,0,0,0.12)] bg-white text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

export const WORKSPACE_MEETING_CONTROL_BTN_END =
  'inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#ef4444] text-white transition-opacity hover:opacity-90';

export const WORKSPACE_MEETING_CONTROLS_ROW =
  'flex w-full min-w-0 max-w-full flex-wrap items-center justify-center gap-3';

export const WORKSPACE_MEETING_META_ROW =
  'flex w-full min-w-0 max-w-full flex-col items-center justify-center gap-2 text-[#717182] sm:flex-row sm:gap-6';
