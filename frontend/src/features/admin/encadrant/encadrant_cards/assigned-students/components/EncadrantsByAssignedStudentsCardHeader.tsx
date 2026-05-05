import { FunctionComponent } from 'react';

interface EncadrantsByAssignedStudentsCardHeaderProps {
  totalFormatted: string;
}

const EncadrantsByAssignedStudentsCardHeader: FunctionComponent<EncadrantsByAssignedStudentsCardHeaderProps> = ({
  totalFormatted
}) => (
  <div className="w-full px-6 pt-6 font-inter text-left">
    <div className="text-base font-semibold leading-4 text-[#0a0a0a]">
      Encadrants by Assigned Students ({totalFormatted})
    </div>
    <div className="mt-1 text-base leading-6 text-slategray-100">Detailed view of supervisors</div>
  </div>
);

export default EncadrantsByAssignedStudentsCardHeader;
