import { FunctionComponent } from 'react';
import AdminLayout from '../../../../components/AdminLayout';
import BackToDashboardButton from '../../shared/components/BackToDashboardButton';
import DocumentsPendingSearchFilterBar from '../components/DocumentsPendingSearchFilterBar';
import DocumentsPendingCardHeader from '../components/DocumentsPendingCardHeader';
import DocumentsPendingCardContent from '../components/DocumentsPendingCardContent';
import {
  DOCUMENTS_PENDING_COUNT,
  documentsPendingValidationMockRows,
} from '../data/documentsPendingValidationMockData';

const DocumentsPendingValidationPage: FunctionComponent = () => {
  const totalFormatted = DOCUMENTS_PENDING_COUNT.toLocaleString('en-US');

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
        <BackToDashboardButton />
        <DocumentsPendingSearchFilterBar />
        <div className="flex w-full flex-col gap-6 rounded-[14px] border border-[rgba(0,0,0,0.1)] bg-white font-inter">
          <DocumentsPendingCardHeader totalFormatted={totalFormatted} />
          <DocumentsPendingCardContent rows={documentsPendingValidationMockRows} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DocumentsPendingValidationPage;
