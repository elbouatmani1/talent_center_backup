import { FunctionComponent } from 'react';

interface ActiveOffersCardHeaderProps {
  totalFormatted: string;
}

const ActiveOffersCardHeader: FunctionComponent<ActiveOffersCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">Active Offers ({totalFormatted})</div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Current internship opportunities</div>
    </div>
  );
};

export default ActiveOffersCardHeader;
