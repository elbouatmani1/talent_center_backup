import { FunctionComponent } from 'react';

interface StudentsCardHeaderProps {
  totalFormatted: string;
}

const StudentsCardHeader: FunctionComponent<StudentsCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">All Students ({totalFormatted})</div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Complete list of registered students</div>
    </div>
  );
};

export default StudentsCardHeader;
