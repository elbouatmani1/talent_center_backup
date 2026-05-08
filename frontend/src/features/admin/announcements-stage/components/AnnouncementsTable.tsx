import { FunctionComponent } from 'react';
import { Calendar, Eye, Pencil, Trash2, User } from 'lucide-react';
import { AnnouncementRow, AnnouncementType } from '../types';
import AnnouncementsToolbar from './AnnouncementsToolbar';
import AdminMobileRowCard from '../../shared/AdminMobileRowCard';

/** Pastilles Figma : Event lavender-200 + slateblue, Interview lavender-100 + darkorchid, Info honeydew + seagreen */
const typeClassName: Record<AnnouncementType, string> = {
  Event: 'bg-lavender-200 text-slateblue',
  Interview: 'bg-lavender-100 text-darkorchid',
  Info: 'bg-honeydew text-seagreen',
};

const outlineBtn =
  'relative box-border flex h-8 shrink-0 cursor-pointer items-center justify-center gap-0 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-0 font-inter text-num-14 font-medium leading-num-20 text-[#0a0a0a] transition-colors hover:bg-whitesmoke';

const mobileActionBtn =
  'inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-white px-3 font-inter text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-whitesmoke sm:w-auto';

interface AnnouncementsTableProps {
  rows: AnnouncementRow[];
  query: string;
  onQueryChange: (value: string) => void;
  onCreate: () => void;
  onView: (row: AnnouncementRow) => void;
  onEdit: (row: AnnouncementRow) => void;
  onDelete: (row: AnnouncementRow) => void;
}

const AnnouncementsTable: FunctionComponent<AnnouncementsTableProps> = ({
  rows,
  query,
  onQueryChange,
  onCreate,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="box-border flex w-full min-w-0 flex-col items-start gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left font-inter text-num-14 leading-num-20 text-[#0a0a0a]">
      <div className="box-border flex min-h-[70px] w-full min-w-0 flex-col gap-5 px-4 pb-1.5 pt-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-h-10 max-w-[362px] flex-col items-start justify-center">
          <div className="relative self-stretch leading-4">
            <h2 className="m-0 shrink-0 font-medium leading-4 text-[#0a0a0a]">Announcements</h2>
          </div>
          <div className="relative mt-0 self-stretch leading-6 text-slategray-100">
            <p className="m-0 shrink-0 leading-6">
              Manage platform announcements and notifications
            </p>
          </div>
        </div>
        <AnnouncementsToolbar
          query={query}
          onQueryChange={onQueryChange}
          onCreate={onCreate}
        />
      </div>

      <div className="box-border w-full min-w-0 shrink-0 px-4 pb-6 pt-0 sm:px-6">
        <div className="space-y-3 lg:hidden">
          {rows.map((row) => (
            <AdminMobileRowCard
              key={row.id}
              title={row.title}
              badges={
                <span
                  className={`inline-flex h-[22px] min-w-0 items-center justify-center rounded-num-8 px-2 py-0.5 text-center text-[12px] font-medium leading-4 ${typeClassName[row.type]}`}
                >
                  {row.type}
                </span>
              }
              fields={[
                {
                  label: 'Audience',
                  value: (
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      {row.targetAudience}
                    </span>
                  )
                },
                {
                  label: 'Date',
                  value: (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                      {row.date}
                    </span>
                  )
                }
              ]}
              actions={
                <>
                  <button type="button" className={mobileActionBtn} onClick={() => onView(row)}>
                    <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    View
                  </button>
                  <button type="button" className={mobileActionBtn} onClick={() => onEdit(row)}>
                    <Pencil className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Edit
                  </button>
                  <button type="button" className={mobileActionBtn} onClick={() => onDelete(row)}>
                    <Trash2 className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                    Delete
                  </button>
                </>
              }
            />
          ))}
        </div>

        <div className="hidden w-full min-w-0 overflow-x-auto lg:block">
          <table className="w-full min-w-[880px] table-fixed border-collapse font-inter text-num-14 leading-num-20 text-[#0a0a0a]">
            <colgroup>
              <col className="w-[38%]" />
              <col className="w-[92px]" />
              <col className="w-[21%]" />
              <col className="w-[132px]" />
              <col className="w-[268px]" />
            </colgroup>
            <thead>
              <tr className="box-border h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
                <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20">
                  Title
                </th>
                <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20">
                  Type
                </th>
                <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20">
                  Target Audience
                </th>
                <th className="box-border py-2.5 pl-2 pr-2 text-left align-middle font-medium leading-num-20">
                  Date
                </th>
                <th className="box-border py-2.5 pl-2 pr-2 text-right align-middle font-medium leading-num-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="box-border h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
                >
                  <td className="box-border max-w-0 overflow-hidden text-ellipsis py-3 pl-2 pr-2 align-middle font-medium leading-num-20">
                    <span className="line-clamp-2">{row.title}</span>
                  </td>
                  <td className="box-border whitespace-nowrap py-3 pl-2 pr-2 align-middle">
                    <span
                      className={`inline-flex h-[22px] min-w-0 items-center justify-center rounded-num-8 px-2 py-0.5 text-center text-[12px] font-medium leading-4 ${typeClassName[row.type]}`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="box-border py-3 pl-2 pr-2 align-middle">
                    <div className="flex h-5 items-center gap-1.5 pl-0 leading-num-20">
                      <User className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} />
                      <span className="truncate font-normal">{row.targetAudience}</span>
                    </div>
                  </td>
                  <td className="box-border whitespace-nowrap py-3 pl-2 pr-2 align-middle">
                    <div className="flex h-5 items-center gap-1.5 leading-num-20">
                      <Calendar className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} />
                      <span className="font-normal">{row.date}</span>
                    </div>
                  </td>
                  <td className="box-border py-2 pl-2 pr-2 align-middle">
                    <div className="flex h-8 items-start justify-end gap-2 text-center">
                      <button
                        type="button"
                        className={`${outlineBtn} w-[79px]`}
                        onClick={() => onView(row)}
                      >
                        <Eye className="absolute left-[11px] top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={1.75} />
                        <span className="pl-7">View</span>
                      </button>
                      <button
                        type="button"
                        className={`${outlineBtn} w-[72px]`}
                        onClick={() => onEdit(row)}
                      >
                        <Pencil className="absolute left-[11px] top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={1.75} />
                        <span className="pl-7">Edit</span>
                      </button>
                      <button
                        type="button"
                        className={`${outlineBtn} w-[89px]`}
                        onClick={() => onDelete(row)}
                      >
                        <Trash2 className="absolute left-[11px] top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={1.75} />
                        <span className="pl-7">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsTable;
