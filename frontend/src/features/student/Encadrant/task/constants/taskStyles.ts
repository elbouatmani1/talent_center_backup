/** Tokens UI — module Task Encadrant. */

export const TASK_TAB_BAR =
  'flex w-full min-w-0 gap-1 overflow-x-auto rounded-[12px] bg-[#f3f4f6] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

export const TASK_TAB_ACTIVE =
  'shrink-0 rounded-[10px] bg-white px-3 py-2 font-inter text-[13px] font-medium leading-5 text-[#0a0a0a] shadow-[0_1px_3px_rgba(16,24,40,0.08)] max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const TASK_TAB_INACTIVE =
  'shrink-0 rounded-[10px] bg-transparent px-3 py-2 font-inter text-[13px] font-medium leading-5 text-[#717182] transition-colors hover:text-[#0a0a0a] max-[429px]:px-2.5 max-[429px]:text-[12px]';

export const TASK_PROGRESS_FILL = 'h-full rounded-full bg-[#030213] transition-[width] duration-300';

export const TASK_PROGRESS_TRACK = 'h-2.5 w-full overflow-hidden rounded-full bg-[#e5e7eb] sm:h-3';
