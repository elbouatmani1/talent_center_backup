import { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

interface AdminLayoutProps {
  children: ReactNode;
  /** Le contenu prend toute la hauteur du main sans scroll externe (ex. chat plein cadre). */
  mainFillHeight?: boolean;
}

const AdminLayout: FunctionComponent<AdminLayoutProps> = ({ children, mainFillHeight }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa]">
      <AdminSidebar mobileOpen={mobileNavOpen} onMobileClose={closeMobileNav} />
      <div className="flex min-w-0 flex-1 flex-col bg-[#fafafa]">
        <AdminHeader onMenuClick={() => setMobileNavOpen(true)} />
        <main
          className={`min-h-0 min-w-0 flex-1 overflow-x-hidden p-3 sm:p-5 md:p-6 ${mainFillHeight ? 'flex min-h-0 flex-col overflow-y-hidden' : 'overflow-y-auto'}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
