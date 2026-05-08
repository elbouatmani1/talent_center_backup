import { FunctionComponent, ReactNode } from 'react';

export interface AdminMobileRowCardField {
  label: string;
  value: ReactNode;
  /** When false, hide label on very narrow screens (optional). */
  compact?: boolean;
}

export interface AdminMobileRowCardProps {
  /** Primary heading line */
  title?: ReactNode;
  /** Row of badges / pills above title */
  badges?: ReactNode;
  /** Secondary line (muted) */
  meta?: ReactNode;
  /** Label / value rows */
  fields?: readonly AdminMobileRowCardField[];
  /** Footer actions (buttons) — full width stack on mobile */
  actions?: ReactNode;
  className?: string;
}

/**
 * Carte de ligne pour listes admin sur viewport &lt; lg (mobile + tablette).
 * Style aligné sur les cartes timeline History : bordure grise, fond blanc, espacement lisible.
 */
const AdminMobileRowCard: FunctionComponent<AdminMobileRowCardProps> = ({
  title,
  badges,
  meta,
  fields,
  actions,
  className = '',
}) => (
  <div
    className={`flex w-full min-w-0 flex-col gap-3 rounded-[10px] border border-[rgba(0,0,0,0.1)] bg-white p-3 shadow-sm sm:p-4 ${className}`}
  >
    {(badges || title || meta) && (
      <div className="min-w-0 space-y-2">
        {badges && <div className="flex flex-wrap items-center gap-2">{badges}</div>}
        {title != null && title !== '' && (
          <p className="break-words text-sm font-semibold leading-5 text-[#0a0a0a]">{title}</p>
        )}
        {meta != null && meta !== '' && (
          <p className="text-xs leading-4 text-[#717182]">{meta}</p>
        )}
      </div>
    )}

    {fields && fields.length > 0 && (
      <dl className="grid min-w-0 gap-2.5 text-sm">
        {fields.map(({ label, value, compact }) => (
          <div
            key={label}
            className={
              compact
                ? 'grid min-w-0 gap-0.5 sm:grid-cols-[minmax(0,6rem)_1fr] sm:items-start sm:gap-x-3'
                : 'grid min-w-0 gap-0.5 sm:grid-cols-[minmax(0,7.5rem)_1fr] sm:items-start sm:gap-x-3'
            }
          >
            <dt className="shrink-0 text-xs font-medium uppercase tracking-wide text-[#717182] sm:pt-0.5">
              {label}
            </dt>
            <dd className="min-w-0 break-words text-sm leading-5 text-[#0a0a0a]">{value}</dd>
          </div>
        ))}
      </dl>
    )}

    {actions != null && (
      <div className="flex w-full min-w-0 flex-col gap-2 border-t border-[rgba(0,0,0,0.06)] pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-2 sm:border-t-0 sm:pt-0">
        {actions}
      </div>
    )}
  </div>
);

export default AdminMobileRowCard;
