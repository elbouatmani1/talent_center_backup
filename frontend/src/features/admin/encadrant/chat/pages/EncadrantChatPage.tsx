import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import { encadrantParticipants, encadrantInitialMessages } from '../data/encadrantChatMock';

const EncadrantChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={encadrantParticipants}
    initialMessages={encadrantInitialMessages}
    participantSubtitle="supervision coordinator"
    searchPlaceholder="Search mentors or cohorts"
    composerPlaceholder="Coordinate a supervision update..."
  />
);

export default EncadrantChatPage;
