import { FunctionComponent } from 'react';

interface OffersWithApplicationsListCardHeaderProps {
  totalFormatted: string;
}

const OffersWithApplicationsListCardHeader: FunctionComponent<
  OffersWithApplicationsListCardHeaderProps
> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-semibold leading-4 text-[#0a0a0a]">
        Offers with Applications ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Filtered list of internship offers</div>
    </div>
  );
};

export default OffersWithApplicationsListCardHeader;
