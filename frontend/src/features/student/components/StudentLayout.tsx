import { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import StudentSidebar from './StudentSidebar';
import StudentHeader from './StudentHeader';

interface StudentLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  /** Supprime le padding du main — contenu bord à bord (gauche, droite, bas). */
  contentFlush?: boolean;
}

/** Même structure que `AdminLayout` : sidebar + colonne header + main scrollable. */
const StudentLayout: FunctionComponent<StudentLayoutProps> = ({
  children,
  headerTitle,
  headerSubtitle,
  contentFlush = false,
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa] font-sans">
      <StudentSidebar mobileOpen={mobileNavOpen} onMobileClose={closeMobileNav} />
      <div className="flex min-w-0 flex-1 flex-col bg-[#fafafa]">
        <StudentHeader
          onMenuClick={() => setMobileNavOpen(true)}
          title={headerTitle}
          subtitle={headerSubtitle}
        />
        <main
          className={
            contentFlush
              ? 'min-h-0 min-w-0 flex-1 overflow-hidden p-0'
              : 'min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-3 sm:p-5 md:p-6'
          }
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
