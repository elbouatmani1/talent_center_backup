import { FunctionComponent } from 'react';
import AdminModuleChat from '../../shared/admin-module-chat/AdminModuleChat';
import { sousAdminParticipants, sousAdminInitialMessages } from '../data/sousAdminChatMock';

const SousAdminChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={sousAdminParticipants}
    initialMessages={sousAdminInitialMessages}
    participantSubtitle="elevated admins"
    searchPlaceholder="Search ops threads"
    composerPlaceholder="Post governance note..."
  />
);

export default SousAdminChatPage;
