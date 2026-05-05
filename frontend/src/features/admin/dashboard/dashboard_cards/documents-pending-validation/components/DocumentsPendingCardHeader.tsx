import { FunctionComponent } from 'react';

interface DocumentsPendingCardHeaderProps {
  totalFormatted: string;
}

const DocumentsPendingCardHeader: FunctionComponent<DocumentsPendingCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">
        Documents Pending Validation ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Documents awaiting admin review</div>
    </div>
  );
};

export default DocumentsPendingCardHeader;
