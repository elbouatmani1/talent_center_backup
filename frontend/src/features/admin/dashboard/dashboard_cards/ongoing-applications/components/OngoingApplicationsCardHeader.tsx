import { FunctionComponent } from 'react';

interface OngoingApplicationsCardHeaderProps {
  totalFormatted: string;
}

const OngoingApplicationsCardHeader: FunctionComponent<OngoingApplicationsCardHeaderProps> = ({
  totalFormatted,
}) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">
        Ongoing Applications ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">
        Student applications to internship offers
      </div>
    </div>
  );
};

export default OngoingApplicationsCardHeader;
