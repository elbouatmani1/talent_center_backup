import { FunctionComponent } from 'react';

interface StudentsWithoutInternshipCardHeaderProps {
  totalFormatted: string;
}

const StudentsWithoutInternshipCardHeader: FunctionComponent<StudentsWithoutInternshipCardHeaderProps> = ({
  totalFormatted,
}) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">
        Students Without Internship ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Students who need internship assignment</div>
    </div>
  );
};

export default StudentsWithoutInternshipCardHeader;
