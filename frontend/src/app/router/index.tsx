import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Auth Pages
import LoginPage from '../../features/auth/pages/LoginPage';
import ConfirmIdentityPage from '../../features/auth/pages/ConfirmIdentityPage';
import CompleteProfilePage from '../../features/auth/pages/CompleteProfilePage';
import CallbackPage from '../../features/auth/pages/CallbackPage';

// Admin Pages
import AdminDashboardPage from '../../features/admin/pages/AdminDashboardPage';
import InternshipOffersPage from '../../features/admin/offres-stage/pages/InternshipOffersPage';
import CreateInternshipOfferPage from '../../features/admin/offres-stage/pages/CreateInternshipOfferPage';
import ViewInternshipOfferPage from '../../features/admin/offres-stage/pages/ViewInternshipOfferPage';
import AllInternshipOffersListPage from '../../features/admin/pages/AllInternshipOffersListPage';
import InternshipActiveOffersListPage from '../../features/admin/pages/InternshipActiveOffersListPage';
import InternshipExpiredOffersListPage from '../../features/admin/pages/InternshipExpiredOffersListPage';
import InternshipDraftOffersListPage from '../../features/admin/pages/InternshipDraftOffersListPage';
import InternshipClosedOffersListPage from '../../features/admin/pages/InternshipClosedOffersListPage';
import InternshipOffersWithApplicationsListPage from '../../features/admin/pages/InternshipOffersWithApplicationsListPage';
import InternshipOffersChatPage from '../../features/admin/pages/InternshipOffersChatPage';
import InternshipOffersHistoryPage from '../../features/admin/pages/InternshipOffersHistoryPage';
import AnnouncementsPage from '../../features/admin/announcements-stage/pages/AnnouncementsPage';
import AllAnnouncementsListPage from '../../features/admin/pages/AllAnnouncementsListPage';
import ActiveAnnouncementsListPage from '../../features/admin/pages/ActiveAnnouncementsListPage';
import CreateAnnouncementPage from '../../features/admin/announcements-stage/pages/CreateAnnouncementPage';
import ViewAnnouncementPage from '../../features/admin/announcements-stage/pages/ViewAnnouncementPage';
import EditAnnouncementPage from '../../features/admin/announcements-stage/pages/EditAnnouncementPage';
import AnnouncementsChatPage from '../../features/admin/announcements-stage/chat/pages/AnnouncementsChatPage';
import AnnouncementsHistoryPage from '../../features/admin/announcements-stage/history/pages/AnnouncementsHistoryPage';
import DocumentsPage from '../../features/admin/Documents_admin/pages/DocumentsPage';
import AllDocumentsListPage from '../../features/admin/Documents_admin/Documents_cards/all-documents/pages/AllDocumentsListPage';
import PendingDocumentsListPage from '../../features/admin/Documents_admin/Documents_cards/pending-documents/pages/PendingDocumentsListPage';
import ValidatedDocumentsListPage from '../../features/admin/Documents_admin/Documents_cards/validated-documents/pages/ValidatedDocumentsListPage';
import RejectedDocumentsListPage from '../../features/admin/Documents_admin/Documents_cards/rejected-documents/pages/RejectedDocumentsListPage';
import DocumentsChatPage from '../../features/admin/Documents_admin/chat/pages/DocumentsChatPage';
import DocumentsHistoryPage from '../../features/admin/Documents_admin/history/pages/DocumentsHistoryPage';
import StudentFinancialStatusPage from '../../features/admin/SRF/pages/StudentFinancialStatusPage';
import PaidStudentsDetailPage from '../../features/admin/SRF/srf_cards/paid-students/pages/PaidStudentsDetailPage';
import UnpaidStudentsDetailPage from '../../features/admin/SRF/srf_cards/unpaid-students/pages/UnpaidStudentsDetailPage';
import PartiallyPaidDetailPage from '../../features/admin/SRF/srf_cards/partially-paid/pages/PartiallyPaidDetailPage';
import PendingValidationDetailPage from '../../features/admin/SRF/srf_cards/pending-validation/pages/PendingValidationDetailPage';
import LatePaymentsDetailPage from '../../features/admin/SRF/srf_cards/late-payments/pages/LatePaymentsDetailPage';
import BlockedStudentsDetailPage from '../../features/admin/SRF/srf_cards/blocked-students/pages/BlockedStudentsDetailPage';
import ExemptedStudentsDetailPage from '../../features/admin/SRF/srf_cards/exempted-students/pages/ExemptedStudentsDetailPage';
import SRFChatPage from '../../features/admin/SRF/chat/pages/SRFChatPage';
import EncadrantChatPage from '../../features/admin/encadrant/chat/pages/EncadrantChatPage';
import EncadrantReportsPage from '../../features/admin/encadrant/reports/pages/EncadrantReportsPage';
import StudentChatPage from '../../features/admin/student/chat/pages/StudentChatPage';
import SousAdminChatPage from '../../features/admin/sous_Admin/pages/SousAdminChatPage';
import AllStudentsPage from '../../features/admin/pages/AllStudentsPage';
import TotalStudentsListPage from '../../features/admin/student/student_cards/total_students/pages/TotalStudentsListPage';
import ActiveStudentsListPage from '../../features/admin/student/student_cards/active_students/pages/ActiveStudentsListPage';
import WithoutInternshipListPage from '../../features/admin/student/student_cards/without_internship/pages/WithoutInternshipListPage';
import WithInternshipListPage from '../../features/admin/student/student_cards/with_internship/pages/WithInternshipListPage';
import EngagementLevelListPage from '../../features/admin/student/student_cards/engagement_level/pages/EngagementLevelListPage';
import AllEncadrantsPage from '../../features/admin/pages/AllEncadrantsPage';
import AddEncadrantPage from '../../features/admin/encadrant/pages/AddEncadrantPage';
import AllEncadrantsListPage from '../../features/admin/encadrant/encadrant_cards/all-encadrants/pages/AllEncadrantsListPage';
import EncadrantsByAssignedStudentsListPage from '../../features/admin/encadrant/encadrant_cards/assigned-students/pages/EncadrantsByAssignedStudentsListPage';
import ReportsInProgressListPage from '../../features/admin/encadrant/encadrant_cards/reports-in-progress/pages/ReportsInProgressListPage';
import UpcomingMeetingsListPage from '../../features/admin/encadrant/encadrant_cards/upcoming-meetings/pages/UpcomingMeetingsListPage';
import AllAdminsPage from '../../features/admin/pages/AllAdminsPage';
import DashboardStudentsPage from '../../features/admin/pages/DashboardStudentsPage';
import DashboardEncadrantsPage from '../../features/admin/pages/DashboardEncadrantsPage';
import DashboardAdminsPage from '../../features/admin/pages/DashboardAdminsPage';
import AllAdministratorsListPage from '../../features/admin/sous_Admin/pages/AllAdministratorsListPage';
import StageAdministratorsListPage from '../../features/admin/sous_Admin/pages/StageAdministratorsListPage';
import FinanceAdministratorsListPage from '../../features/admin/sous_Admin/pages/FinanceAdministratorsListPage';
import DocumentsAdministratorsListPage from '../../features/admin/sous_Admin/pages/DocumentsAdministratorsListPage';
import CommunicationAdministratorsListPage from '../../features/admin/sous_Admin/pages/CommunicationAdministratorsListPage';
import CreateAdministratorPage from '../../features/admin/sous_Admin/pages/CreateAdministratorPage';
import StudentsWithoutInternshipPage from '../../features/admin/pages/StudentsWithoutInternshipPage';
import ActiveInternshipOffersPage from '../../features/admin/pages/ActiveInternshipOffersPage';
import OngoingApplicationsPage from '../../features/admin/pages/OngoingApplicationsPage';
import DocumentsPendingValidationPage from '../../features/admin/pages/DocumentsPendingValidationPage';
import StudentsUnpaidSrfPage from '../../features/admin/pages/StudentsUnpaidSrfPage';

// Student Pages
import StudentDashboardPage from '../../features/student/pages/StudentDashboardPage';

// CV Pages
import CVListPage from '../../features/cv/pages/CVListPage';
import CVEditorPage from '../../features/cv/pages/CVEditorPage';
import PublicCvPage from '../../features/cv/pages/PublicCvPage';

// Hooks
import { useAuth } from '../../features/auth/hooks/useAuth';

// Guards
import { GuestGuard } from './guards/GuestGuard';
import { OnboardingGuard } from './guards/OnboardingGuard';
import { AuthGuard } from './guards/AuthGuard';

const DashboardRedirect = () => {
  const { user } = useAuth();
  const userRole = user?.role?.toUpperCase();

  // Frontend-only admin mode: redirect directly to admin dashboard
  if (import.meta.env.VITE_FRONTEND_ONLY_ADMIN === 'true') {
    return <Navigate to="/admin-dashboard" replace />;
  }

  if (userRole === 'STUDENT') {
    return <Navigate to="/student-dashboard" replace />;
  }

  // Admin and other roles go to admin dashboard
  return <Navigate to="/admin-dashboard" replace />;
};

export const router = createBrowserRouter([
  {
    path: '/callback',
    element: <CallbackPage />
  },

  {
    path: '/cv/public/:token',
    element: <PublicCvPage />
  },

  {
    element: <GuestGuard />,
    children: [
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
  {
    element: <OnboardingGuard />,
    children: [
      {
        path: '/confirm-identity',
        element: <ConfirmIdentityPage />
      },
      {
        path: '/complete-profile',
        element: <CompleteProfilePage />
      }
    ]
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: '/',
        element: <DashboardRedirect />
      },
      {
        path: '/student-dashboard',
        element: <StudentDashboardPage />
      },
      {
        path: '/admin-dashboard',
        element: <AdminDashboardPage />
      },
      {
        path: '/admin/dashboard/students',
        element: <DashboardStudentsPage />
      },
      {
        path: '/admin/dashboard/encadrants',
        element: <DashboardEncadrantsPage />
      },
      {
        path: '/admin/dashboard/admins',
        element: <DashboardAdminsPage />
      },
      {
        path: '/admin/internship-offers',
        element: <InternshipOffersPage />
      },
      {
        path: '/admin/internship-offers/create',
        element: <CreateInternshipOfferPage />
      },
      {
        path: '/admin/internship-offers/all',
        element: <AllInternshipOffersListPage />
      },
      {
        path: '/admin/internship-offers/active',
        element: <InternshipActiveOffersListPage />
      },
      {
        path: '/admin/internship-offers/expired',
        element: <InternshipExpiredOffersListPage />
      },
      {
        path: '/admin/internship-offers/draft',
        element: <InternshipDraftOffersListPage />
      },
      {
        path: '/admin/internship-offers/closed',
        element: <InternshipClosedOffersListPage />
      },
      {
        path: '/admin/internship-offers/with-applications',
        element: <InternshipOffersWithApplicationsListPage />
      },
      {
        path: '/admin/internship-offers/chat',
        element: <InternshipOffersChatPage />
      },
      {
        path: '/admin/internship-offers/history',
        element: <InternshipOffersHistoryPage />
      },
      {
        path: '/admin/announcements',
        element: <AnnouncementsPage />
      },
      {
        path: '/admin/announcements/create',
        element: <CreateAnnouncementPage />
      },
      {
        path: '/admin/announcements/all',
        element: <AllAnnouncementsListPage />
      },
      {
        path: '/admin/announcements/active',
        element: <ActiveAnnouncementsListPage />
      },
      {
        path: '/admin/announcements/chat',
        element: <AnnouncementsChatPage />
      },
      {
        path: '/admin/announcements/history',
        element: <AnnouncementsHistoryPage />
      },
      {
        path: '/admin/announcements/:id/edit',
        element: <EditAnnouncementPage />
      },
      {
        path: '/admin/announcements/:id',
        element: <ViewAnnouncementPage />
      },
      {
        path: '/admin/documents',
        element: <DocumentsPage />
      },
      {
        path: '/admin/documents/all',
        element: <AllDocumentsListPage />
      },
      {
        path: '/admin/documents/pending',
        element: <PendingDocumentsListPage />
      },
      {
        path: '/admin/documents/validated',
        element: <ValidatedDocumentsListPage />
      },
      {
        path: '/admin/documents/rejected',
        element: <RejectedDocumentsListPage />
      },
      {
        path: '/admin/documents/chat',
        element: <DocumentsChatPage />
      },
      {
        path: '/admin/documents/history',
        element: <DocumentsHistoryPage />
      },
      {
        path: '/admin/srf/paid-students',
        element: <PaidStudentsDetailPage />
      },
      {
        path: '/admin/srf/unpaid-students',
        element: <UnpaidStudentsDetailPage />
      },
      {
        path: '/admin/srf/partially-paid',
        element: <PartiallyPaidDetailPage />
      },
      {
        path: '/admin/srf/pending-validation',
        element: <PendingValidationDetailPage />
      },
      {
        path: '/admin/srf/late-payments',
        element: <LatePaymentsDetailPage />
      },
      {
        path: '/admin/srf/blocked-students',
        element: <BlockedStudentsDetailPage />
      },
      {
        path: '/admin/srf/exempted-students',
        element: <ExemptedStudentsDetailPage />
      },
      {
        path: '/admin/srf',
        element: <StudentFinancialStatusPage />
      },
      {
        path: '/admin/srf/chat',
        element: <SRFChatPage />
      },
      {
        path: '/admin/encadrant/chat',
        element: <EncadrantChatPage />
      },
      {
        path: '/admin/encadrant/reports',
        element: <EncadrantReportsPage />
      },
      {
        path: '/admin/student/chat',
        element: <StudentChatPage />
      },
      {
        path: '/admin/sous-admin/chat',
        element: <SousAdminChatPage />
      },
      {
        path: '/admin/internship-offers/:id',
        element: <ViewInternshipOfferPage />
      },
      {
        path: '/admin/students/total-students',
        element: <TotalStudentsListPage />
      },
      {
        path: '/admin/students/active-students',
        element: <ActiveStudentsListPage />
      },
      {
        path: '/admin/students/without-internship',
        element: <WithoutInternshipListPage />
      },
      {
        path: '/admin/students/with-internship',
        element: <WithInternshipListPage />
      },
      {
        path: '/admin/students/engagement-level',
        element: <EngagementLevelListPage />
      },
      {
        path: '/admin/students',
        element: <AllStudentsPage />
      },
      {
        path: '/admin/encadrants',
        element: <AllEncadrantsPage />
      },
      {
        path: '/admin/encadrants/new',
        element: <AddEncadrantPage />
      },
      {
        path: '/admin/encadrants/all',
        element: <AllEncadrantsListPage />
      },
      {
        path: '/admin/encadrants/assigned-students',
        element: <EncadrantsByAssignedStudentsListPage />
      },
      {
        path: '/admin/encadrants/reports-in-progress',
        element: <ReportsInProgressListPage />
      },
      {
        path: '/admin/encadrants/upcoming-meetings',
        element: <UpcomingMeetingsListPage />
      },
      {
        path: '/admin/admins/stage-administrators',
        element: <StageAdministratorsListPage />
      },
      {
        path: '/admin/admins/finance-administrators',
        element: <FinanceAdministratorsListPage />
      },
      {
        path: '/admin/admins/documents-administrators',
        element: <DocumentsAdministratorsListPage />
      },
      {
        path: '/admin/admins/communication-administrators',
        element: <CommunicationAdministratorsListPage />
      },
      {
        path: '/admin/admins/create-administrator',
        element: <CreateAdministratorPage />
      },
      {
        path: '/admin/admins/all-administrators',
        element: <AllAdministratorsListPage />
      },
      {
        path: '/admin/admins',
        element: <AllAdminsPage />
      },
      {
        path: '/admin/students-without-internship',
        element: <StudentsWithoutInternshipPage />
      },
      {
        path: '/admin/active-internship-offers',
        element: <ActiveInternshipOffersPage />
      },
      {
        path: '/admin/ongoing-applications',
        element: <OngoingApplicationsPage />
      },
      {
        path: '/admin/documents-pending-validation',
        element: <DocumentsPendingValidationPage />
      },
      {
        path: '/admin/students-unpaid-srf',
        element: <StudentsUnpaidSrfPage />
      },
      {
        path: '/cv',
        element: <CVListPage />
      },
      {
        path: '/cv/:id/edit',
        element: <CVEditorPage />
      },
      {
        path: '/cv-editor',
        element: <CVEditorPage />
      }
    ]
  }
]);
