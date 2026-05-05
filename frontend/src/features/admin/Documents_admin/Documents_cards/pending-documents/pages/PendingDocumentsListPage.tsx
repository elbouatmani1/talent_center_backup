import { FunctionComponent } from 'react';
import DocumentsFilteredListPage from '../../shared/DocumentsFilteredListPage';
import PendingDocumentsOverviewCards from '../components/PendingDocumentsOverviewCards';

const PendingDocumentsListPage: FunctionComponent = () => {
  return (
    <DocumentsFilteredListPage
      statusFilter="Pending"
      overviewCards={<PendingDocumentsOverviewCards />}
    />
  );
};

export default PendingDocumentsListPage;
