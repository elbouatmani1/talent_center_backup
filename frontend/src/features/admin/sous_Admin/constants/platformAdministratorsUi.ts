import type { PlatformAdminRoleVariant } from '../types/platformAdministrators';

export const PLATFORM_ADMIN_ROLE_BADGE_CLASS: Record<PlatformAdminRoleVariant, string> = {
  stage:
    'inline-flex items-center justify-center rounded-num-8 bg-lavender-200 px-2 py-num-2 text-num-12 font-medium leading-num-16 text-slateblue',
  finance:
    'inline-flex items-center justify-center rounded-num-8 bg-honeydew px-2 py-num-2 text-num-12 font-medium leading-num-16 text-seagreen',
  documents:
    'inline-flex items-center justify-center rounded-num-8 bg-papayawhip px-2 py-num-2 text-num-12 font-medium leading-num-16 text-darkred',
  communication:
    'inline-flex items-center justify-center rounded-num-8 bg-lavender-100 px-2 py-num-2 text-num-12 font-medium leading-num-16 text-darkorchid'
};

export const PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS =
  'inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 text-num-14 font-medium leading-num-20 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]';

/** Bouton primaire — tableau principal « Platform Administrators » (Manage Permissions). */
export const PLATFORM_ADMIN_PRIMARY_ACTION_BTN_MAIN_TABLE_CLASS =
  'inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#101828] px-2.5 text-num-14 font-medium leading-num-20 text-white transition-colors hover:bg-[#1e2939]';

/** Liste « All Administrators » — bouton Permissions. */
export const PLATFORM_ADMIN_PRIMARY_ACTION_BTN_SUBLIST_ALL_CLASS =
  'inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#101828] px-2.5 text-num-14 font-medium leading-num-20 text-white transition-colors hover:bg-[#1e2939]';

/** Listes filtrées par rôle — bouton Permissions. */
export const PLATFORM_ADMIN_PRIMARY_ACTION_BTN_SUBLIST_ROLE_CLASS =
  'inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-num-8 bg-[#0a0a0a] px-2.5 text-num-14 font-medium leading-num-20 text-white transition-colors hover:bg-[#171717]';
