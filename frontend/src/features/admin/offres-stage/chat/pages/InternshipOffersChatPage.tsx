import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import {
  internshipOffersParticipants,
  internshipOffersInitialMessages,
} from '../data/internshipOffersChatMock';

const InternshipOffersChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={internshipOffersParticipants}
    initialMessages={internshipOffersInitialMessages}
    participantSubtitle="online"
    searchPlaceholder="Search companies or interns"
    composerPlaceholder="Draft a moderator reply..."
  />
);

export default InternshipOffersChatPage;
