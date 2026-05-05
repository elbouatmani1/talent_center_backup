import { FunctionComponent } from 'react';
import AdminModuleChat from '../../../shared/admin-module-chat/AdminModuleChat';
import { studentDeskParticipants, studentDeskInitialMessages } from '../data/studentChatMock';

const StudentChatPage: FunctionComponent = () => (
  <AdminModuleChat
    participantsSeed={studentDeskParticipants}
    initialMessages={studentDeskInitialMessages}
    participantSubtitle="student success channel"
    searchPlaceholder="Search students or topics"
    composerPlaceholder="Reply as student affairs..."
  />
);

export default StudentChatPage;
