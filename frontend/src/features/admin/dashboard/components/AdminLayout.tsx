import { FunctionComponent, ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

interface AdminLayoutProps {
  children: ReactNode;
  /** Le contenu prend toute la hauteur du main sans scroll externe (ex. chat plein cadre). */
  mainFillHeight?: boolean;
}

const AdminLayout: FunctionComponent<AdminLayoutProps> = ({ children, mainFillHeight }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#fafafa]">
      <AdminSidebar />
      <div className="flex flex-col flex-1 min-w-0 bg-[#fafafa]">
        <AdminHeader />
        <main
          className={`flex-1 min-h-0 overflow-x-hidden p-5 md:p-6 ${mainFillHeight ? 'flex min-h-0 flex-col overflow-y-hidden' : 'overflow-y-auto'}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
