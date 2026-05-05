import { FunctionComponent } from 'react';

interface EncadrantsCardHeaderProps {
  totalFormatted: string;
}

const EncadrantsCardHeader: FunctionComponent<EncadrantsCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">All Encadrants ({totalFormatted})</div>
      <div className="mt-1 text-base leading-6 text-slategray-100">List of supervisors</div>
    </div>
  );
};

export default EncadrantsCardHeader;
