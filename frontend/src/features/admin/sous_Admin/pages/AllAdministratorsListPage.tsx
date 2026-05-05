import { FunctionComponent } from 'react';
import AdministratorFilteredListLayout from '../components/AdministratorFilteredListLayout';

const AllAdministratorsListPage: FunctionComponent = () => (
  <AdministratorFilteredListLayout filter="all" />
);

export default AllAdministratorsListPage;
