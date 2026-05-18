import { FunctionComponent, ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { STUDENT_SECTION_LINK } from '../constants/studentDashboardStyles';

interface StudentSectionHeaderProps {
  icon: ReactNode;
  iconClassName: string;
  title: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/** En-tête de section — icône dans pastille, titre, lien optionnel. */
const StudentSectionHeader: FunctionComponent<StudentSectionHeaderProps> = ({
  icon,
  iconClassName,
  title,
  action,
}) => {
  return (
    <div className="flex min-h-7 w-full items-center justify-between gap-3">
      <div className="flex min-w-0 flex-1 items-center gap-2.5">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ${iconClassName}`}
        >
          {icon}
        </span>
        <h2 className="truncate text-lg font-semibold tracking-tight text-[#101828]">{title}</h2>
      </div>
      {action != null && (
        <button type="button" onClick={action.onClick} className={STUDENT_SECTION_LINK}>
          {action.label}
          <ChevronRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
            aria-hidden
          />
        </button>
      )}
    </div>
  );
};

export default StudentSectionHeader;
