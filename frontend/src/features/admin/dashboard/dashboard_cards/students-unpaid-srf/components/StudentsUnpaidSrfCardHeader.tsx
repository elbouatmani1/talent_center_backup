import { FunctionComponent } from 'react';

interface StudentsUnpaidSrfCardHeaderProps {
  totalFormatted: string;
}

const StudentsUnpaidSrfCardHeader: FunctionComponent<StudentsUnpaidSrfCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">
        Students with Unpaid SRF ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Students with outstanding payments</div>
    </div>
  );
};

export default StudentsUnpaidSrfCardHeader;
