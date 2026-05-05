import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Edit, Trash2, UserPlus } from 'lucide-react';
import { InternshipOffer } from '../types';

interface InternshipOfferActionsProps {
  offer: InternshipOffer;
}

const InternshipOfferActions: FunctionComponent<InternshipOfferActionsProps> = ({ offer }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/admin/internship-offers/${offer.id}`);
  };

  const handleEdit = () => {
    console.log('Edit offer:', offer.id);
  };

  const handleDelete = () => {
    console.log('Delete offer:', offer.id);
  };

  const handleAssign = () => {
    console.log('Assign offer:', offer.id);
  };

  const outlineBtn =
    'inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-2.5 font-inter text-num-14 font-medium leading-num-20 text-gray hover:bg-white';

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <button type="button" onClick={handleView} className={outlineBtn}>
        <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        <span className="hidden sm:inline">View</span>
      </button>
      <button type="button" onClick={handleEdit} className={outlineBtn}>
        <Edit className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        <span className="hidden sm:inline">Edit</span>
      </button>
      <button type="button" onClick={handleDelete} className={outlineBtn}>
        <Trash2 className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        <span className="hidden sm:inline">Delete</span>
      </button>
      <button
        type="button"
        onClick={handleAssign}
        className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-[#030213] px-2.5 font-inter text-num-14 font-medium leading-num-20 text-white hover:opacity-90"
      >
        <UserPlus className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        <span>Assign</span>
      </button>
    </div>
  );
};

export default InternshipOfferActions;
