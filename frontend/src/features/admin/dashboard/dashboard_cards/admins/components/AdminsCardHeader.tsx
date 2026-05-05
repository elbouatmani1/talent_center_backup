import { FunctionComponent } from 'react';

interface AdminsCardHeaderProps {
  totalFormatted: string;
}

const AdminsCardHeader: FunctionComponent<AdminsCardHeaderProps> = ({ totalFormatted }) => {
  return (
    <div className="w-full px-6 pt-6 font-inter text-left">
      <div className="text-base font-medium leading-4 text-[#0a0a0a]">All Admins ({totalFormatted})</div>
      <div className="mt-1 text-base leading-6 text-slategray-100">Platform administrators</div>
    </div>
  );
};

export default AdminsCardHeader;
