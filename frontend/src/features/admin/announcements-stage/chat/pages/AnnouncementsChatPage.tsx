import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import {
  announcementsParticipants,
  announcementsInitialMessages,
} from '../data/announcementsChatMock';

const AnnouncementsChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={announcementsParticipants}
    initialMessages={announcementsInitialMessages}
    participantSubtitle="moderator channel"
    searchPlaceholder="Search teams or campaigns"
    composerPlaceholder="Relay an update..."
  />
);

export default AnnouncementsChatPage;
