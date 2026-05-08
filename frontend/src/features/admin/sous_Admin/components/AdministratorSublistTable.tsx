import { FunctionComponent } from 'react';
import { Eye, Pencil, Shield } from 'lucide-react';
import type { PlatformAdministratorRow } from '../types/platformAdministrators';
import {
  PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS,
  PLATFORM_ADMIN_ROLE_BADGE_CLASS
} from '../constants/platformAdministratorsUi';
import AdminMobileRowCard from '../../shared/AdminMobileRowCard';

interface AdministratorSublistTableProps {
  rows: PlatformAdministratorRow[];
  primaryActionButtonClassName: string;
}

const AdministratorSublistTable: FunctionComponent<AdministratorSublistTableProps> = ({
  rows,
  primaryActionButtonClassName
}) => (
  <>
    <div className="space-y-3 px-3 pb-6 text-num-14 sm:px-5 md:px-6 lg:hidden">
      {rows.length === 0 ? (
        <p className="py-8 text-center text-slategray-100">No administrators match your search.</p>
      ) : (
        rows.map((row) => (
          <AdminMobileRowCard
            key={row.id}
            title={row.name}
            badges={
              <>
                <span className={PLATFORM_ADMIN_ROLE_BADGE_CLASS[row.roleVariant]}>{row.roleLabel}</span>
                <span className="inline-flex items-center justify-center rounded-num-8 bg-honeydew px-2 py-num-2 text-num-12 font-medium leading-num-16 text-seagreen">
                  {row.status}
                </span>
              </>
            }
            fields={[
              {
                label: 'Permissions',
                value: (
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                    {row.permissionLabel}
                  </span>
                )
              }
            ]}
            actions={
              <>
                <button type="button" className={`${PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS} w-full justify-center sm:w-auto`}>
                  <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  View
                </button>
                <button type="button" className={`${PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS} w-full justify-center sm:w-auto`}>
                  <Pencil className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  Edit
                </button>
                <button type="button" className={`${primaryActionButtonClassName} w-full justify-center sm:w-auto`}>
                  <Shield className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  Permissions
                </button>
              </>
            }
          />
        ))
      )}
    </div>

    <div className="hidden min-w-0 overflow-x-auto px-3 pb-6 text-num-14 sm:px-5 md:px-6 lg:block">
      <table className="w-full min-w-[900px] border-collapse">
        <thead>
          <tr className="h-10 border-b border-solid border-[rgba(0,0,0,0.1)]">
            <th className="box-border py-[8.75px] pl-2 pr-4 text-left font-medium leading-num-20">Name</th>
            <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Role</th>
            <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Permissions</th>
            <th className="box-border px-4 py-[8.75px] text-left font-medium leading-num-20">Status</th>
            <th className="box-border py-[8.75px] pl-4 pr-2 text-right font-medium leading-num-20">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-slategray-100">
                No administrators match your search.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                className="min-h-[49px] border-b border-solid border-[rgba(0,0,0,0.1)] last:border-b-0"
              >
                <td className="box-border min-h-[49px] py-[13.5px] pl-2 pr-4 align-middle font-semibold leading-num-20 text-[#0a0a0a]">
                  {row.name}
                </td>
                <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle">
                  <span className={PLATFORM_ADMIN_ROLE_BADGE_CLASS[row.roleVariant]}>{row.roleLabel}</span>
                </td>
                <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle leading-num-20">
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4 shrink-0 text-slategray-100" strokeWidth={1.75} aria-hidden />
                    {row.permissionLabel}
                  </span>
                </td>
                <td className="box-border min-h-[49px] px-4 py-[13.5px] align-middle">
                  <span className="inline-flex items-center justify-center rounded-num-8 bg-honeydew px-2 py-num-2 text-num-12 font-medium leading-num-16 text-seagreen">
                    {row.status}
                  </span>
                </td>
                <td className="box-border min-h-[49px] py-[8.5px] pl-4 pr-2 text-right align-middle">
                  <div className="flex flex-wrap items-start justify-end gap-2">
                    <button type="button" className={`${PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS} min-w-[78.7px]`}>
                      <Eye className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      View
                    </button>
                    <button type="button" className={`${PLATFORM_ADMIN_OUTLINE_ACTION_BTN_CLASS} min-w-[72.4px]`}>
                      <Pencil className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      Edit
                    </button>
                    <button type="button" className={`${primaryActionButtonClassName} min-w-[120px]`}>
                      <Shield className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                      Permissions
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </>
);

export default AdministratorSublistTable;
