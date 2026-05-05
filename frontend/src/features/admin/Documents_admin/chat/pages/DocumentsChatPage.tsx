import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import { documentsParticipants, documentsInitialMessages } from '../data/documentsChatMock';

const DocumentsChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={documentsParticipants}
    initialMessages={documentsInitialMessages}
    participantSubtitle="validation desk"
    searchPlaceholder="Search files or reviewers"
    composerPlaceholder="Add a clarification..."
  />
);

export default DocumentsChatPage;
