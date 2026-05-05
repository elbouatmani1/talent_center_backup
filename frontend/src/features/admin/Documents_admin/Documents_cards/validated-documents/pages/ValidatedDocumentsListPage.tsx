import { FunctionComponent } from 'react';
import DocumentsFilteredListPage from '../../shared/DocumentsFilteredListPage';
import ValidatedDocumentsOverviewCards from '../components/ValidatedDocumentsOverviewCards';

const ValidatedDocumentsListPage: FunctionComponent = () => {
  return (
    <DocumentsFilteredListPage
      statusFilter="Validated"
      overviewCards={<ValidatedDocumentsOverviewCards />}
    />
  );
};

export default ValidatedDocumentsListPage;
