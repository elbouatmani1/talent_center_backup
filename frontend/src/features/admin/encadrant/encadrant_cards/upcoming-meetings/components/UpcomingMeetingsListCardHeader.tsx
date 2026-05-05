import { FunctionComponent } from 'react';

interface UpcomingMeetingsListCardHeaderProps {
  totalFormatted: string;
}

const UpcomingMeetingsListCardHeader: FunctionComponent<UpcomingMeetingsListCardHeaderProps> = ({
  totalFormatted
}) => (
  <div className="w-full px-6 pt-6 font-inter text-left">
    <div className="text-base font-semibold leading-4 text-[#0a0a0a]">Upcoming Meetings ({totalFormatted})</div>
    <div className="mt-1 text-base leading-6 text-slategray-100">Detailed view of supervisors</div>
  </div>
);

export default UpcomingMeetingsListCardHeader;
