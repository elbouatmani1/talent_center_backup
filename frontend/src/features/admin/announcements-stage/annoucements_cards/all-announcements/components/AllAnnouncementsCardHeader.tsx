import { FunctionComponent } from 'react';

interface AllAnnouncementsCardHeaderProps {
  totalFormatted: string;
}

const AllAnnouncementsCardHeader: FunctionComponent<AllAnnouncementsCardHeaderProps> = ({
  totalFormatted,
}) => {
  return (
    <div className="w-full px-6 pt-6 text-left font-inter">
      <div className="text-base font-semibold leading-4 text-[#0a0a0a]">
        All Announcements ({totalFormatted})
      </div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Filtered list of announcements</div>
    </div>
  );
};

export default AllAnnouncementsCardHeader;
