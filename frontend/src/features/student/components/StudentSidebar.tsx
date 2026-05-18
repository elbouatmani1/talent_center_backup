import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { STUDENT_INTERNSHIP_OFFERS_PATH } from '../internship_offers/constants/routes';
import { STUDENT_CV_ANALYSIS_TOOL_PATH } from '../internship_offers/CV_Analyse/constants/routes';
import { STUDENT_INTERVIEW_SIMULATOR_PATH } from '../internship_offers/interview_Simulator/constants/routes';
import { STUDENT_CHAT_PATH } from '../internship_offers/chat/constants/routes';
import { STUDENT_HISTORY_PATH } from '../internship_offers/history/constants/routes';
import { STUDENT_ANNOUNCEMENTS_PATH } from '../Annoucements/constants/routes';
import { STUDENT_ANNOUNCEMENTS_CHAT_PATH } from '../Annoucements/chat/constants/routes';
import { STUDENT_ANNOUNCEMENTS_HISTORY_PATH } from '../Annoucements/history/constants/routes';
import { STUDENT_MAIN_HISTORY_PATH } from '../main_history/constants/routes';
import {
  STUDENT_DOCUMENTS_CHAT_PATH,
  STUDENT_DOCUMENTS_PATH,
} from '../Documents/constants/routes';
import {
  STUDENT_ENCADRANT_AGENDA_PATH,
  STUDENT_ENCADRANT_CHAT_PATH,
  STUDENT_ENCADRANT_PATH,
  STUDENT_ENCADRANT_REPORT_PATH,
  STUDENT_ENCADRANT_TASK_PATH,
  STUDENT_ENCADRANT_WORKSPACE_PATH,
} from '../Encadrant/constants/routes';
import { STUDENT_SRF_CHAT_PATH, STUDENT_SRF_PATH } from '../SRF/constants/routes';
import {
  LayoutDashboard,
  Briefcase,
  Bell,
  FileText,
  DollarSign,
  UserCheck,
  ChevronRight,
  Users,
  MessageSquare,
  Clock,
  History,
  Calendar,
  CheckSquare,
  FilePenLine,
  LucideIcon,
} from 'lucide-react';
import Icon from '../assets/Icon.svg';

interface MenuItem {
  label: string;
  icon: LucideIcon;
}

interface SubMenuItem {
  label: string;
  icon: LucideIcon;
}

const internshipOffersSubmenu: SubMenuItem[] = [
  { label: 'CV Analysis', icon: FileText },
  { label: 'Interview Simulator', icon: Users },
  { label: 'Chat', icon: MessageSquare },
  { label: 'History', icon: Clock },
];

const announcementsSubmenu: SubMenuItem[] = [
  { label: 'Chat', icon: MessageSquare },
  { label: 'History', icon: Clock },
];

const documentsSubmenu: SubMenuItem[] = [{ label: 'Chat', icon: MessageSquare }];

const srfSubmenu: SubMenuItem[] = [{ label: 'Chat', icon: MessageSquare }];

const encadrantSubmenu: SubMenuItem[] = [
  { label: 'Chat', icon: MessageSquare },
  { label: 'Agenda', icon: Calendar },
  { label: 'Task', icon: CheckSquare },
  { label: 'Workspace', icon: Users },
  { label: 'Report', icon: FilePenLine },
];

const encadrantSubRouteByLabel: Record<string, string> = {
  Chat: STUDENT_ENCADRANT_CHAT_PATH,
  Agenda: STUDENT_ENCADRANT_AGENDA_PATH,
  Task: STUDENT_ENCADRANT_TASK_PATH,
  Workspace: STUDENT_ENCADRANT_WORKSPACE_PATH,
  Report: STUDENT_ENCADRANT_REPORT_PATH,
};

const resourceNav: MenuItem[] = [];

const navButtonBase =
  'relative box-border flex h-8 w-full min-h-[2rem] shrink-0 items-center gap-2 overflow-hidden rounded-lg p-2 text-left text-sm font-medium text-[#171717] transition-colors';

interface StudentSidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const STUDENT_DASHBOARD_PATH = '/student-dashboard';

const StudentSidebar: FunctionComponent<StudentSidebarProps> = ({ mobileOpen, onMobileClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const isMainHistoryRoute = pathname === STUDENT_MAIN_HISTORY_PATH;
  const isAnnouncementsChatRoute = pathname === STUDENT_ANNOUNCEMENTS_CHAT_PATH;
  const isAnnouncementsHistoryRoute = pathname === STUDENT_ANNOUNCEMENTS_HISTORY_PATH;
  const isAnnouncementsRoute =
    pathname === STUDENT_ANNOUNCEMENTS_PATH ||
    pathname.startsWith(`${STUDENT_ANNOUNCEMENTS_PATH}/`);
  const isAnnouncementsSectionRoute =
    isAnnouncementsRoute || isAnnouncementsChatRoute || isAnnouncementsHistoryRoute;

  const isDocumentsChatRoute = pathname === STUDENT_DOCUMENTS_CHAT_PATH;
  const isDocumentsRoute =
    pathname === STUDENT_DOCUMENTS_PATH || pathname.startsWith(`${STUDENT_DOCUMENTS_PATH}/`);
  const isDocumentsSectionRoute = isDocumentsRoute || isDocumentsChatRoute;
  const isSrfChatRoute = pathname === STUDENT_SRF_CHAT_PATH;
  const isSrfMainRoute = pathname === STUDENT_SRF_PATH;
  const isSrfSectionRoute =
    isSrfMainRoute || isSrfChatRoute || pathname.startsWith(`${STUDENT_SRF_PATH}/`);
  const isEncadrantChatRoute = pathname === STUDENT_ENCADRANT_CHAT_PATH;
  const isEncadrantAgendaRoute = pathname === STUDENT_ENCADRANT_AGENDA_PATH;
  const isEncadrantTaskRoute = pathname === STUDENT_ENCADRANT_TASK_PATH;
  const isEncadrantWorkspaceRoute = pathname === STUDENT_ENCADRANT_WORKSPACE_PATH;
  const isEncadrantReportRoute = pathname === STUDENT_ENCADRANT_REPORT_PATH;
  const isEncadrantMainRoute = pathname === STUDENT_ENCADRANT_PATH;
  const isEncadrantSectionRoute =
    isEncadrantMainRoute || pathname.startsWith(`${STUDENT_ENCADRANT_PATH}/`);

  const isInternshipChatRoute = pathname === STUDENT_CHAT_PATH;
  const isInternshipHistoryRoute = pathname === STUDENT_HISTORY_PATH;
  const isCvAnalysisToolRoute = pathname === STUDENT_CV_ANALYSIS_TOOL_PATH;
  const isInterviewSimulatorRoute = pathname === STUDENT_INTERVIEW_SIMULATOR_PATH;
  const isInternshipOffersSectionRoute =
    pathname === STUDENT_INTERNSHIP_OFFERS_PATH ||
    isCvAnalysisToolRoute ||
    isInterviewSimulatorRoute ||
    isInternshipChatRoute ||
    isInternshipHistoryRoute ||
    pathname.startsWith(`${STUDENT_INTERNSHIP_OFFERS_PATH}/`);

  const [internshipOffersOpen, setInternshipOffersOpen] = useState(isInternshipOffersSectionRoute);
  const [announcementsOpen, setAnnouncementsOpen] = useState(isAnnouncementsSectionRoute);
  const [documentsOpen, setDocumentsOpen] = useState(isDocumentsSectionRoute);
  const [srfOpen, setSrfOpen] = useState(isSrfSectionRoute);
  const [encadrantOpen, setEncadrantOpen] = useState(isEncadrantSectionRoute);
  const [activeInternshipSubNav, setActiveInternshipSubNav] = useState<string | null>(null);
  const [activeAnnouncementsSubNav, setActiveAnnouncementsSubNav] = useState<string | null>(null);
  const [activeDocumentsSubNav, setActiveDocumentsSubNav] = useState<string | null>(null);
  const [activeSrfSubNav, setActiveSrfSubNav] = useState<string | null>(null);
  const [activeEncadrantSubNav, setActiveEncadrantSubNav] = useState<string | null>(null);

  useEffect(() => {
    if (isInternshipOffersSectionRoute) {
      setInternshipOffersOpen(true);
    }
  }, [isInternshipOffersSectionRoute]);

  useEffect(() => {
    if (isAnnouncementsSectionRoute) {
      setAnnouncementsOpen(true);
    }
  }, [isAnnouncementsSectionRoute]);

  useEffect(() => {
    if (isDocumentsSectionRoute) {
      setDocumentsOpen(true);
    }
  }, [isDocumentsSectionRoute]);

  useEffect(() => {
    if (isSrfSectionRoute) {
      setSrfOpen(true);
    }
  }, [isSrfSectionRoute]);

  useEffect(() => {
    if (isEncadrantSectionRoute) {
      setEncadrantOpen(true);
    }
  }, [isEncadrantSectionRoute]);

  useEffect(() => {
    if (isCvAnalysisToolRoute) {
      setActiveInternshipSubNav('CV Analysis');
    }
  }, [isCvAnalysisToolRoute]);

  useEffect(() => {
    if (isInterviewSimulatorRoute) {
      setActiveInternshipSubNav('Interview Simulator');
    }
  }, [isInterviewSimulatorRoute]);

  useEffect(() => {
    if (isInternshipChatRoute) {
      setActiveInternshipSubNav('Chat');
    }
  }, [isInternshipChatRoute]);

  useEffect(() => {
    if (isInternshipHistoryRoute) {
      setActiveInternshipSubNav('History');
    }
  }, [isInternshipHistoryRoute]);

  useEffect(() => {
    if (isAnnouncementsChatRoute) {
      setActiveAnnouncementsSubNav('Chat');
    }
  }, [isAnnouncementsChatRoute]);

  useEffect(() => {
    if (isAnnouncementsHistoryRoute) {
      setActiveAnnouncementsSubNav('History');
    }
  }, [isAnnouncementsHistoryRoute]);

  useEffect(() => {
    if (isDocumentsChatRoute) {
      setActiveDocumentsSubNav('Chat');
    }
  }, [isDocumentsChatRoute]);

  useEffect(() => {
    if (isSrfChatRoute) {
      setActiveSrfSubNav('Chat');
    }
  }, [isSrfChatRoute]);

  useEffect(() => {
    if (isEncadrantChatRoute) setActiveEncadrantSubNav('Chat');
  }, [isEncadrantChatRoute]);

  useEffect(() => {
    if (isEncadrantAgendaRoute) setActiveEncadrantSubNav('Agenda');
  }, [isEncadrantAgendaRoute]);

  useEffect(() => {
    if (isEncadrantTaskRoute) setActiveEncadrantSubNav('Task');
  }, [isEncadrantTaskRoute]);

  useEffect(() => {
    if (isEncadrantWorkspaceRoute) setActiveEncadrantSubNav('Workspace');
  }, [isEncadrantWorkspaceRoute]);

  useEffect(() => {
    if (isEncadrantReportRoute) setActiveEncadrantSubNav('Report');
  }, [isEncadrantReportRoute]);

  useEffect(() => {
    onMobileClose();
  }, [location.pathname, onMobileClose]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const handleDashboardClick = useCallback(() => {
    navigate(STUDENT_DASHBOARD_PATH);
    onMobileClose();
  }, [navigate, onMobileClose]);

  const handleInternshipOffersClick = useCallback(() => {
    navigate(STUDENT_INTERNSHIP_OFFERS_PATH);
    setInternshipOffersOpen((prev) => (isInternshipOffersSectionRoute ? !prev : true));
  }, [navigate, isInternshipOffersSectionRoute]);

  const handleAnnouncementsClick = useCallback(() => {
    navigate(STUDENT_ANNOUNCEMENTS_PATH);
    setAnnouncementsOpen((prev) => (isAnnouncementsSectionRoute ? !prev : true));
  }, [navigate, isAnnouncementsSectionRoute]);

  const handleMainHistoryClick = useCallback(() => {
    navigate(STUDENT_MAIN_HISTORY_PATH);
    onMobileClose();
  }, [navigate, onMobileClose]);

  const handleDocumentsClick = useCallback(() => {
    navigate(STUDENT_DOCUMENTS_PATH);
    setDocumentsOpen((prev) => (isDocumentsSectionRoute ? !prev : true));
  }, [navigate, isDocumentsSectionRoute]);

  const handleSrfClick = useCallback(() => {
    navigate(STUDENT_SRF_PATH);
    setSrfOpen((prev) => (isSrfSectionRoute ? !prev : true));
  }, [navigate, isSrfSectionRoute]);

  const handleSrfSubNavClick = useCallback(
    (label: string) => {
      setActiveSrfSubNav(label);
      if (label === 'Chat') {
        navigate(STUDENT_SRF_CHAT_PATH);
      }
      onMobileClose();
    },
    [navigate, onMobileClose]
  );

  const handleEncadrantClick = useCallback(() => {
    navigate(STUDENT_ENCADRANT_PATH);
    setEncadrantOpen((prev) => (isEncadrantSectionRoute ? !prev : true));
  }, [navigate, isEncadrantSectionRoute]);

  const handleEncadrantSubNavClick = useCallback(
    (label: string) => {
      setActiveEncadrantSubNav(label);
      const path = encadrantSubRouteByLabel[label];
      if (path) navigate(path);
      onMobileClose();
    },
    [navigate, onMobileClose]
  );

  const handleInternshipSubNavClick = useCallback(
    (label: string) => {
      setActiveInternshipSubNav(label);
      if (label === 'CV Analysis') {
        navigate(STUDENT_CV_ANALYSIS_TOOL_PATH);
      } else if (label === 'Interview Simulator') {
        navigate(STUDENT_INTERVIEW_SIMULATOR_PATH);
      } else if (label === 'Chat') {
        navigate(STUDENT_CHAT_PATH);
      } else if (label === 'History') {
        navigate(STUDENT_HISTORY_PATH);
      }
      onMobileClose();
    },
    [navigate, onMobileClose]
  );

  const handleAnnouncementsSubNavClick = useCallback(
    (label: string) => {
      setActiveAnnouncementsSubNav(label);
      if (label === 'Chat') {
        navigate(STUDENT_ANNOUNCEMENTS_CHAT_PATH);
      } else if (label === 'History') {
        navigate(STUDENT_ANNOUNCEMENTS_HISTORY_PATH);
      }
      onMobileClose();
    },
    [navigate, onMobileClose]
  );

  const handleDocumentsSubNavClick = useCallback(
    (label: string) => {
      setActiveDocumentsSubNav(label);
      if (label === 'Chat') {
        navigate(STUDENT_DOCUMENTS_CHAT_PATH);
      }
      onMobileClose();
    },
    [navigate, onMobileClose]
  );

  const InternshipOffersNav: FunctionComponent = () => {
    const isParentHighlighted =
      pathname === STUDENT_INTERNSHIP_OFFERS_PATH &&
      !isCvAnalysisToolRoute &&
      !isInterviewSimulatorRoute &&
      !isInternshipChatRoute &&
      !isInternshipHistoryRoute;

    return (
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={handleInternshipOffersClick}
          aria-expanded={internshipOffersOpen}
          aria-controls="student-internship-offers-submenu"
          className={`${navButtonBase} cursor-pointer bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0] ${
            isParentHighlighted ? 'bg-[#eaeaea]' : internshipOffersOpen ? 'bg-[#eaeaea]/50' : ''
          }`}
        >
          <Briefcase className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
          <span className="min-w-0 flex-1 truncate leading-5">Internship Offers</span>
          <ChevronRight
            className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform duration-200 ease-out ${
              internshipOffersOpen ? 'rotate-90' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        {internshipOffersOpen && (
          <div
            id="student-internship-offers-submenu"
            className="mt-1 ml-[15px] flex min-w-0 flex-col gap-1 border-l border-[#d4d4d4] pl-3"
          >
            {internshipOffersSubmenu.map((sub) => {
              const SubIcon = sub.icon;
              const isSubActive =
                activeInternshipSubNav === sub.label ||
                (sub.label === 'CV Analysis' && isCvAnalysisToolRoute) ||
                (sub.label === 'Interview Simulator' && isInterviewSimulatorRoute) ||
                (sub.label === 'Chat' && isInternshipChatRoute) ||
                (sub.label === 'History' && isInternshipHistoryRoute);

              return (
                <button
                  key={sub.label}
                  type="button"
                  onClick={() => handleInternshipSubNavClick(sub.label)}
                  className={`${navButtonBase} cursor-pointer ${
                    isSubActive ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
                  }`}
                >
                  <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1 truncate leading-5">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const DocumentsNav: FunctionComponent = () => {
    const isParentHighlighted = isDocumentsRoute && !isDocumentsChatRoute;

    return (
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={handleDocumentsClick}
          aria-expanded={documentsOpen}
          aria-controls="student-documents-submenu"
          className={`${navButtonBase} cursor-pointer bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0] ${
            isParentHighlighted ? 'bg-[#eaeaea]' : documentsOpen ? 'bg-[#eaeaea]/50' : ''
          }`}
        >
          <FileText className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
          <span className="min-w-0 flex-1 truncate leading-5">Documents</span>
          <ChevronRight
            className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform duration-200 ease-out ${
              documentsOpen ? 'rotate-90' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        {documentsOpen && (
          <div
            id="student-documents-submenu"
            className="mt-1 ml-[15px] flex min-w-0 flex-col gap-1 border-l border-[#d4d4d4] pl-3"
          >
            {documentsSubmenu.map((sub) => {
              const SubIcon = sub.icon;
              const isSubActive =
                activeDocumentsSubNav === sub.label || (sub.label === 'Chat' && isDocumentsChatRoute);

              return (
                <button
                  key={sub.label}
                  type="button"
                  onClick={() => handleDocumentsSubNavClick(sub.label)}
                  className={`${navButtonBase} cursor-pointer ${
                    isSubActive ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
                  }`}
                >
                  <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1 truncate leading-5">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const SrfNav: FunctionComponent = () => {
    const isParentHighlighted = isSrfMainRoute && !isSrfChatRoute;

    return (
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={handleSrfClick}
          aria-expanded={srfOpen}
          aria-controls="student-srf-submenu"
          className={`${navButtonBase} cursor-pointer bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0] ${
            isParentHighlighted ? 'bg-[#eaeaea]' : srfOpen ? 'bg-[#eaeaea]/50' : ''
          }`}
        >
          <DollarSign className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
          <span className="min-w-0 flex-1 truncate leading-5">SRF (Finance)</span>
          <ChevronRight
            className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform duration-200 ease-out ${
              srfOpen ? 'rotate-90' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        {srfOpen && (
          <div
            id="student-srf-submenu"
            className="mt-1 ml-[15px] flex min-w-0 flex-col gap-1 border-l border-[#d4d4d4] pl-3"
          >
            {srfSubmenu.map((sub) => {
              const SubIcon = sub.icon;
              const isSubActive =
                activeSrfSubNav === sub.label || (sub.label === 'Chat' && isSrfChatRoute);

              return (
                <button
                  key={sub.label}
                  type="button"
                  onClick={() => handleSrfSubNavClick(sub.label)}
                  className={`${navButtonBase} cursor-pointer ${
                    isSubActive ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
                  }`}
                >
                  <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1 truncate leading-5">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const EncadrantNav: FunctionComponent = () => {
    const isParentHighlighted =
      isEncadrantMainRoute &&
      !isEncadrantChatRoute &&
      !isEncadrantAgendaRoute &&
      !isEncadrantTaskRoute &&
      !isEncadrantWorkspaceRoute &&
      !isEncadrantReportRoute;

    return (
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={handleEncadrantClick}
          aria-expanded={encadrantOpen}
          aria-controls="student-encadrant-submenu"
          className={`${navButtonBase} cursor-pointer bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0] ${
            isParentHighlighted ? 'bg-[#eaeaea]' : encadrantOpen ? 'bg-[#eaeaea]/50' : ''
          }`}
        >
          <UserCheck className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
          <span className="min-w-0 flex-1 truncate leading-5">Encadrant</span>
          <ChevronRight
            className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform duration-200 ease-out ${
              encadrantOpen ? 'rotate-90' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        {encadrantOpen && (
          <div
            id="student-encadrant-submenu"
            className="mt-1 ml-[15px] flex min-w-0 flex-col gap-1 border-l border-[#d4d4d4] pl-3"
          >
            {encadrantSubmenu.map((sub) => {
              const SubIcon = sub.icon;
              const isSubActive =
                activeEncadrantSubNav === sub.label ||
                (sub.label === 'Chat' && isEncadrantChatRoute) ||
                (sub.label === 'Agenda' && isEncadrantAgendaRoute) ||
                (sub.label === 'Task' && isEncadrantTaskRoute) ||
                (sub.label === 'Workspace' && isEncadrantWorkspaceRoute) ||
                (sub.label === 'Report' && isEncadrantReportRoute);

              return (
                <button
                  key={sub.label}
                  type="button"
                  onClick={() => handleEncadrantSubNavClick(sub.label)}
                  className={`${navButtonBase} cursor-pointer ${
                    isSubActive ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
                  }`}
                >
                  <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1 truncate leading-5">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const AnnouncementsNav: FunctionComponent = () => {
    const isParentHighlighted =
      isAnnouncementsRoute && !isAnnouncementsChatRoute && !isAnnouncementsHistoryRoute;

    return (
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={handleAnnouncementsClick}
          aria-expanded={announcementsOpen}
          aria-controls="student-announcements-submenu"
          className={`${navButtonBase} cursor-pointer bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0] ${
            isParentHighlighted ? 'bg-[#eaeaea]' : announcementsOpen ? 'bg-[#eaeaea]/50' : ''
          }`}
        >
          <Bell className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
          <span className="min-w-0 flex-1 truncate leading-5">Announcements</span>
          <ChevronRight
            className={`relative h-4 w-4 shrink-0 text-[#717182] transition-transform duration-200 ease-out ${
              announcementsOpen ? 'rotate-90' : ''
            }`}
            strokeWidth={1.5}
            aria-hidden
          />
        </button>

        {announcementsOpen && (
          <div
            id="student-announcements-submenu"
            className="mt-1 ml-[15px] flex min-w-0 flex-col gap-1 border-l border-[#d4d4d4] pl-3"
          >
            {announcementsSubmenu.map((sub) => {
              const SubIcon = sub.icon;
              const isSubActive =
                activeAnnouncementsSubNav === sub.label ||
                (sub.label === 'Chat' && isAnnouncementsChatRoute) ||
                (sub.label === 'History' && isAnnouncementsHistoryRoute);

              return (
                <button
                  key={sub.label}
                  type="button"
                  onClick={() => handleAnnouncementsSubNavClick(sub.label)}
                  className={`${navButtonBase} cursor-pointer ${
                    isSubActive ? 'bg-[#eaeaea]' : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
                  }`}
                >
                  <SubIcon className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                  <span className="min-w-0 flex-1 truncate leading-5">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
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
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-[min(100vw,260px)] max-w-[280px] flex-none flex-col overflow-hidden border-r border-solid border-neutral-200/80 bg-[#f5f5f5] transition-transform duration-200 ease-out sm:w-[260px] lg:relative lg:z-auto lg:max-w-none lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="box-border flex min-h-[72px] flex-none items-center gap-3.5 border-b border-solid border-neutral-200 px-4 py-3 sm:min-h-[80px] sm:gap-4 sm:px-5 sm:py-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2b7fff] shadow-md ring-1 ring-[#2563eb]/30 sm:h-12 sm:w-12">
            <img src={Icon} alt="Digital Talent Center" className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="flex min-w-0 flex-col gap-0 font-sans">
            <span className="text-[15px] font-bold leading-tight tracking-tight text-[#171717] sm:text-base">
              Digital Talent
            </span>
            <span className="pt-0.5 text-sm font-semibold leading-tight text-[#404040] sm:text-[15px]">
              ESCA Platform
            </span>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-3">
          <button
            type="button"
            onClick={handleDashboardClick}
            aria-current={pathname === STUDENT_DASHBOARD_PATH ? 'page' : undefined}
            className={`${navButtonBase} cursor-pointer ${
              pathname === STUDENT_DASHBOARD_PATH
                ? 'bg-[#eaeaea]'
                : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
            }`}
          >
            <LayoutDashboard className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
            <span className="min-w-0 flex-1 truncate leading-5">Dashboard</span>
          </button>

          <InternshipOffersNav />
          <AnnouncementsNav />

          <button
            type="button"
            onClick={handleMainHistoryClick}
            aria-current={isMainHistoryRoute ? 'page' : undefined}
            className={`${navButtonBase} cursor-pointer ${
              isMainHistoryRoute
                ? 'bg-[#eaeaea]'
                : 'bg-transparent hover:bg-[#eaeaea]/70 active:bg-[#e0e0e0]'
            }`}
          >
            <History className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
            <span className="min-w-0 flex-1 truncate leading-5">History</span>
          </button>

          <div className="pt-3">
            <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wide text-[#717182]">
              Resources
            </p>
            <div className="flex flex-col gap-1">
              <DocumentsNav />
              <SrfNav />
              <EncadrantNav />
              {resourceNav.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={`${navButtonBase} cursor-default bg-transparent hover:bg-transparent`}
                  >
                    <IconComponent className="relative h-4 w-4 shrink-0 text-[#171717]" strokeWidth={1.5} />
                    <span className="min-w-0 flex-1 truncate leading-5">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="h-3 shrink-0 flex-none" />
      </aside>
    </>
  );
};

export default StudentSidebar;
