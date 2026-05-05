import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import { srfParticipants, srfInitialMessages } from '../data/srfChatMock';

const SRFChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={srfParticipants}
    initialMessages={srfInitialMessages}
    participantSubtitle="billing liaison"
    searchPlaceholder="Search students or vouchers"
    composerPlaceholder="Log a treasury note..."
  />
);

export default SRFChatPage;
