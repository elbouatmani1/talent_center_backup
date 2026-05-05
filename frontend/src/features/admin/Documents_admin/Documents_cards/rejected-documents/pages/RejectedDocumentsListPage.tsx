import { FunctionComponent } from 'react';
import DocumentsFilteredListPage from '../../shared/DocumentsFilteredListPage';
import RejectedDocumentsOverviewCards from '../components/RejectedDocumentsOverviewCards';

const RejectedDocumentsListPage: FunctionComponent = () => {
  return (
    <DocumentsFilteredListPage
      statusFilter="Rejected"
      overviewCards={<RejectedDocumentsOverviewCards />}
    />
  );
};

export default RejectedDocumentsListPage;
