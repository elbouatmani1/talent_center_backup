import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';

const InternshipOffersToolbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const [classFilter, setClassFilter] = useState('all');
  const [offerFilter, setOfferFilter] = useState('all');

  const handleCreateOfferClick = () => {
    navigate('/admin/internship-offers/create');
  };

  const selectClassName =
    'h-9 w-full min-w-0 shrink-0 cursor-pointer appearance-none rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white bg-[length:1rem] bg-[right_0.5rem_center] bg-no-repeat py-1 pl-3 pr-8 font-inter text-num-14 leading-5 text-gray lg:w-auto lg:min-w-[8rem]';

  return (
    <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-2">
      <div className="relative w-full min-w-0 shrink-0 lg:w-64">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
          strokeWidth={1.75}
        />
        <input
          type="search"
          placeholder="Search offers..."
          className="h-9 w-full rounded-lg border-0 bg-whitesmoke py-1 pl-9 pr-3 font-inter text-num-14 leading-5 text-slategray-100 placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
        />
      </div>

      <select
        id="internship-filter-classes"
        aria-label="Classes"
        value={classFilter}
        onChange={(e) => setClassFilter(e.target.value)}
        className={selectClassName}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        }}
      >
        <option value="all">All classes</option>
        <option value="ing">Engineering</option>
        <option value="mgt">Management</option>
        <option value="ds">Data Science</option>
      </select>

      <select
        id="internship-filter-offers"
        aria-label="Offers"
        value={offerFilter}
        onChange={(e) => setOfferFilter(e.target.value)}
        className={selectClassName}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        }}
      >
        <option value="all">All offers</option>
        <option value="active">Active</option>
        <option value="draft">Draft</option>
        <option value="expired">Expired</option>
        <option value="closed">Closed</option>
      </select>

      <button
        type="button"
        onClick={handleCreateOfferClick}
        className="flex h-9 w-full min-w-0 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#030213] px-3 font-inter text-num-14 font-medium leading-5 text-white hover:opacity-90 lg:w-auto"
      >
        <Plus className="h-4 w-4" strokeWidth={2} />
        Create Offer
      </button>
    </div>
  );
};

export default InternshipOffersToolbar;
