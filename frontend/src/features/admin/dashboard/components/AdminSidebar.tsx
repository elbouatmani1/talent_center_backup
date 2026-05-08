import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Bell,
  History,
  FileText,
  DollarSign,
  UserCheck,
  Users,
  Shield,
  ChevronDown,
  MessageSquare,
  Clock,
  LucideIcon,
} from 'lucide-react';
import Icon from '../assets/Icon.svg';

interface MenuItem {
  label: string;
  icon: LucideIcon;
  expandable?: boolean;
  children?: string[];
}

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Internship Offers', icon: Briefcase, expandable: true, children: ['Chat', 'History'] },
  { label: 'Announcements', icon: Bell, expandable: true, children: ['Chat', 'History'] },
  { label: 'History', icon: History },
  { label: 'Documents', icon: FileText, expandable: true, children: ['Chat', 'History'] },
  { label: 'SRF', icon: DollarSign, expandable: true, children: ['Chat'] },
  { label: 'Encadrant', icon: UserCheck, expandable: true, children: ['Chat', 'Reports'] },
  { label: 'Student', icon: Users, expandable: true, children: ['Chat'] },
  { label: 'Admin', icon: Shield, expandable: true, children: ['Chat'] },
];

const subIconMap: Record<string, LucideIcon> = {
  Chat: MessageSquare,
  History: Clock,
  Reports: FileText,
};

interface SidebarMenuButtonProps {
  active: boolean;
  icon: LucideIcon;
  label: string;
  expandable?: boolean;
  expanded?: boolean;
  onClick: () => void;
}

const SidebarMenuButton: FunctionComponent<SidebarMenuButtonProps> = ({
  active,
  icon: IconComponent,
  label,
  expandable,
  expanded,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full box-border relative h-8 shrink-0 overflow-hidden rounded-lg flex items-center p-2 gap-2 text-left text-sm font-medium text-[#171717] transition-colors ${
        active ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70'
      }`}
    >
      <IconComponent className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
      <div className="min-w-0 flex-1 flex items-center">
        <span className="relative leading-5 truncate">{label}</span>
      </div>
      {expandable && (
        <ChevronDown
          className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform ${expanded ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      )}
    </button>
  );
};

interface SidebarSubButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarSubButton: FunctionComponent<SidebarSubButtonProps> = ({ label, active, onClick }) => {
  const SubIcon = subIconMap[label] ?? MessageSquare;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full box-border h-8 shrink-0 rounded-lg flex items-center p-2 gap-2 text-left text-sm font-medium text-[#171717] transition-colors ${
        active ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70'
      }`}
    >
      <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
      <span className="leading-5 truncate">{label}</span>
    </button>
  );
};

/** Routes des écrans liés aux cartes KPI / dashboard_cards — la nav reste sur « Dashboard ». */
const isAdminDashboardCardDetailPath = (pathname: string): boolean => {
  if (pathname.startsWith('/admin/dashboard/')) return true;
  return (
    pathname === '/admin/students-without-internship' ||
    pathname === '/admin/active-internship-offers' ||
    pathname === '/admin/ongoing-applications' ||
    pathname === '/admin/documents-pending-validation' ||
    pathname === '/admin/students-unpaid-srf'
  );
};

const getActiveSectionFromPath = (pathname: string): string => {
  if (pathname === '/admin-dashboard') return 'Dashboard';
  if (isAdminDashboardCardDetailPath(pathname)) return 'Dashboard';
  if (pathname === '/admin/history' || pathname.startsWith('/admin/history/')) return 'History';
  if (pathname === '/admin/internship-offers' || pathname.startsWith('/admin/internship-offers/')) {
    return 'Internship Offers';
  }
  if (pathname === '/admin/announcements' || pathname.startsWith('/admin/announcements/')) {
    return 'Announcements';
  }
  if (pathname === '/admin/documents' || pathname.startsWith('/admin/documents/')) {
    return 'Documents';
  }
  if (pathname === '/admin/srf' || pathname.startsWith('/admin/srf/')) return 'SRF';
  if (pathname.startsWith('/admin/encadrant')) return 'Encadrant';
  if (pathname.startsWith('/admin/student')) return 'Student';
  if (pathname === '/admin/admins' || pathname.startsWith('/admin/admins/')) return 'Admin';
  if (pathname.startsWith('/admin/sous-admin/')) return 'Admin';
  return 'Dashboard';
};

/** Section whose children routes match the pathname — sidebar stays expanded without flash. */
const sectionToExpandForPath = (pathname: string): string | null => {
  if (isAdminDashboardCardDetailPath(pathname)) return null;
  if (pathname === '/admin/internship-offers' || pathname.startsWith('/admin/internship-offers/')) {
    return 'Internship Offers';
  }
  if (pathname === '/admin/announcements' || pathname.startsWith('/admin/announcements/')) {
    return 'Announcements';
  }
  if (pathname === '/admin/documents' || pathname.startsWith('/admin/documents/')) {
    return 'Documents';
  }
  if (pathname === '/admin/srf' || pathname.startsWith('/admin/srf/')) return 'SRF';
  if (pathname.startsWith('/admin/encadrant')) return 'Encadrant';
  if (pathname.startsWith('/admin/student')) return 'Student';
  if (pathname === '/admin/admins' || pathname.startsWith('/admin/admins/')) return 'Admin';
  if (pathname.startsWith('/admin/sous-admin/')) return 'Admin';
  return null;
};

const getChildPath = (section: string, child: string): string | undefined => {
  if (section === 'Internship Offers') {
    if (child === 'Chat') return '/admin/internship-offers/chat';
    if (child === 'History') return '/admin/internship-offers/history';
  }
  if (section === 'Announcements') {
    if (child === 'Chat') return '/admin/announcements/chat';
    if (child === 'History') return '/admin/announcements/history';
  }
  if (section === 'Documents') {
    if (child === 'Chat') return '/admin/documents/chat';
    if (child === 'History') return '/admin/documents/history';
  }
  if (section === 'SRF' && child === 'Chat') return '/admin/srf/chat';
  if (section === 'Encadrant' && child === 'Chat') return '/admin/encadrant/chat';
  if (section === 'Encadrant' && child === 'Reports') return '/admin/encadrant/reports';
  if (section === 'Student' && child === 'Chat') return '/admin/student/chat';
  if (section === 'Admin' && child === 'Chat') return '/admin/sous-admin/chat';
  return undefined;
};

interface AdminSidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const AdminSidebar: FunctionComponent<AdminSidebarProps> = ({ mobileOpen, onMobileClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  /** Sections opened while not on a matching child route. */
  const [manuallyExpanded, setManuallyExpanded] = useState<string[]>([]);
  /** Sections the user collapsed while still on a matching child route. */
  const [manuallyCollapsed, setManuallyCollapsed] = useState<string[]>([]);
  /** Standalone items (e.g. top-level History) with no route — highlight only, cleared on navigation. */
  const [primaryNavOverride, setPrimaryNavOverride] = useState<string | null>(null);

  /** Route wins after navigation; override covers items without a URL (e.g. History). */
  const activeSection = primaryNavOverride ?? getActiveSectionFromPath(pathname);
  const routeExpandedSection = sectionToExpandForPath(pathname);

  useEffect(() => {
    setPrimaryNavOverride(null);
  }, [pathname]);

  useEffect(() => {
    if (routeExpandedSection) {
      setManuallyCollapsed((prev) => prev.filter((l) => l !== routeExpandedSection));
    }
  }, [routeExpandedSection]);

  useEffect(() => {
    onMobileClose();
  }, [pathname, onMobileClose]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isSectionExpanded = (label: string) => {
    const keptOpenByRoute =
      routeExpandedSection === label && !manuallyCollapsed.includes(label);
    const openedByUser = manuallyExpanded.includes(label);
    return keptOpenByRoute || openedByUser;
  };

  const toggleSectionExpand = (label: string) => {
    if (routeExpandedSection === label) {
      setManuallyCollapsed((prev) =>
        prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
      );
    } else {
      setManuallyExpanded((prev) =>
        prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
      );
    }
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onMobileClose}
        className={`fixed inset-0 z-40 bg-[rgba(15,23,42,0.4)] transition-opacity lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[260px] flex-none flex-col overflow-hidden border-r border-solid border-neutral-200/80 bg-[#f5f5f5] transition-transform duration-200 ease-out lg:relative lg:z-auto lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="box-border flex h-14 flex-none items-center gap-3 border-b border-solid border-neutral-200 px-4 sm:h-[72px]">
        <div className="w-9 h-9 bg-[#2b7fff] rounded-lg flex items-center justify-center shrink-0 shadow-sm">
          <img src={Icon} alt="Digital Talent Center" className="w-5 h-5" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[#171717] text-sm font-semibold leading-tight tracking-tight font-sans">Digital Talent</span>
          <span className="text-[#717182] text-xs font-medium leading-tight font-sans">Center</span>
        </div>
      </div>

      <nav className="flex-1 px-2 py-3 flex flex-col gap-1 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => {
          const ItemIconComponent = item.icon;
          const isActive = activeSection === item.label;
          const isExpanded = isSectionExpanded(item.label);

          return (
            <div key={item.label} className="w-full min-w-0">
              <SidebarMenuButton
                active={isActive}
                icon={ItemIconComponent}
                label={item.label}
                expandable={item.expandable}
                expanded={isExpanded}
                onClick={() => {
                  if (item.label === 'Internship Offers') {
                    navigate('/admin/internship-offers');
                  } else if (item.label === 'Announcements') {
                    navigate('/admin/announcements');
                  } else if (item.label === 'Documents') {
                    navigate('/admin/documents');
                  } else if (item.label === 'SRF') {
                    navigate('/admin/srf');
                  } else if (item.label === 'Encadrant') {
                    navigate('/admin/encadrants');
                  } else if (item.label === 'Student') {
                    navigate('/admin/students');
                  } else if (item.label === 'Admin') {
                    navigate('/admin/admins');
                  } else if (item.label === 'Dashboard') {
                    navigate('/admin-dashboard');
                  } else if (item.label === 'History') {
                    navigate('/admin/history');
                  } else if (!item.expandable) {
                    setPrimaryNavOverride(item.label);
                  }
                  if (item.expandable) {
                    toggleSectionExpand(item.label);
                  }
                }}
              />

              {item.expandable && isExpanded && (
                <div className="mt-1 ml-[15px] flex flex-col gap-1 border-l border-[#d4d4d4] pl-3 min-w-0">
                  {item.children?.map((child) => {
                    const subPath = getChildPath(item.label, child);
                    const isSubActive = subPath !== undefined && pathname === subPath;
                    const handleChildClick =
                      subPath !== undefined ? () => navigate(subPath) : undefined;
                    return (
                      <SidebarSubButton
                        key={child}
                        label={child}
                        active={isSubActive}
                        onClick={handleChildClick}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

        <div className="h-3 shrink-0 flex-none" />
      </aside>
    </>
  );
};

export default AdminSidebar;
