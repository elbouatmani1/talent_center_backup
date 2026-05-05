import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Eye, Pencil, Users } from 'lucide-react';
import type { AnnouncementRow, AnnouncementType } from '../../../types';

interface AllAnnouncementsTableContentProps {
  rows: AnnouncementRow[];
}

const typeClassName: Record<AnnouncementType, string> = {
  Event: 'bg-lavender-200 text-slateblue',
  Interview: 'bg-lavender-100 text-darkorchid',
  Info: 'bg-honeydew text-seagreen',
};

const actionBtn =
  'relative box-border flex h-8 shrink-0 cursor-pointer items-center justify-center rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-0 font-inter text-num-14 font-medium leading-num-20 text-[#0a0a0a] transition-colors hover:bg-whitesmoke';

const AllAnnouncementsTableContent: FunctionComponent<AllAnnouncementsTableContentProps> = ({
  rows,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full shrink-0 overflow-hidden px-6 pb-6 pt-4 text-left font-inter text-num-14 leading-num-20 text-[#0a0a0a]">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[880px] table-fixed border-collapse">
          <colgroup>
            <col className="w-[39%]" />
            <col className="w-[10%]" />
            <col className="w-[18%]" />
            <col className="w-[14%]" />
            <col className="w-[19%]" />
          </colgroup>
          <thead>
            <tr className="box-border h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
              <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20 text-slategray-100">
                Title
              </th>
              <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20 text-slategray-100">
                Type
              </th>
              <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20 text-slategray-100">
                Target Audience
              </th>
              <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20 text-slategray-100">
                Date
              </th>
              <th className="box-border py-2.5 pl-2 pr-2 text-right align-middle font-medium leading-num-20 text-slategray-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-sm text-slategray-100">
                  No announcements match your filters.
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`box-border min-h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] ${
                    index === rows.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <td className="box-border align-middle py-3 pl-2 pr-2 font-medium leading-num-20">
                    <span className="line-clamp-2">{row.title}</span>
                  </td>
                  <td className="box-border align-middle py-3 pl-2 pr-2">
                    <span
                      className={`inline-flex h-[22px] items-center justify-center rounded-num-8 px-2 py-0.5 text-[12px] font-medium leading-4 ${typeClassName[row.type]}`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="box-border align-middle py-3 pl-2 pr-2">
                    <div className="flex h-5 items-center gap-2 leading-num-20">
                      <Users className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      <span className="truncate font-normal">{row.targetAudience}</span>
                    </div>
                  </td>
                  <td className="box-border whitespace-nowrap align-middle py-3 pl-2 pr-2">
                    <div className="flex h-5 items-center gap-2 leading-num-20">
                      <Calendar className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      <span className="font-normal">{row.date}</span>
                    </div>
                  </td>
                  <td className="box-border align-middle py-2 pl-2 pr-2">
                    <div className="flex h-8 items-start justify-end gap-2 text-center">
                      <button
                        type="button"
                        className={`${actionBtn} w-[78px] sm:w-[79px]`}
                        onClick={() => navigate(`/admin/announcements/${row.id}`)}
                      >
                        <Eye className="absolute left-[11px] top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={1.75} aria-hidden />
                        <span className="pl-7">View</span>
                      </button>
                      <button
                        type="button"
                        className={`${actionBtn} w-[72px]`}
                        onClick={() => navigate(`/admin/announcements/${row.id}/edit`)}
                      >
                        <Pencil className="absolute left-[11px] top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={1.75} aria-hidden />
                        <span className="pl-7">Edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAnnouncementsTableContent;
