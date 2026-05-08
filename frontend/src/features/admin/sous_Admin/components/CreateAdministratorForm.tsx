import { FunctionComponent } from 'react';
import { CheckCircle, Hexagon } from 'lucide-react';
import {
  CREATE_ADMIN_PERMISSION_LABELS_COL_A,
  CREATE_ADMIN_PERMISSION_LABELS_COL_B,
  CREATE_ADMIN_ROLE_OPTIONS,
  CREATE_ADMIN_SELECT_CHEVRON_SVG
} from '../constants/createAdministrator';

interface CreateAdministratorFormProps {
  fullName: string;
  email: string;
  role: string;
  phone: string;
  notes: string;
  permissions: Record<string, boolean>;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onNotesChange: (value: string) => void;
  onTogglePermission: (key: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const CreateAdministratorForm: FunctionComponent<CreateAdministratorFormProps> = ({
  fullName,
  email,
  role,
  phone,
  notes,
  permissions,
  onFullNameChange,
  onEmailChange,
  onRoleChange,
  onPhoneChange,
  onNotesChange,
  onTogglePermission,
  onCancel,
  onSubmit
}) => (
  <div className="rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white shadow-sm">
    <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
      <div className="mb-10">
        <h1 className="text-xl font-semibold leading-7 tracking-tight text-[#0a0a0a]">Create New Administrator</h1>
        <p className="mt-2 text-base leading-6 text-slategray-100">Add a new admin user with specific permissions</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[#0a0a0a]">
            Full Name <span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
            placeholder="e.g., Karim El Amrani"
            className="box-border h-11 w-full rounded-[10px] border-0 bg-whitesmoke px-3.5 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-slategray-100 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[#0a0a0a]">
            Email Address <span className="text-red-600">*</span>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="e.g., karim.amrani@dtc.ma"
            className="box-border h-11 w-full rounded-[10px] border-0 bg-whitesmoke px-3.5 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-slategray-100 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)]"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[#0a0a0a]">
            Admin Role <span className="text-red-600">*</span>
          </span>
          <select
            value={role}
            onChange={(e) => onRoleChange(e.target.value)}
            className={`box-border h-11 w-full cursor-pointer appearance-none rounded-[10px] border-0 bg-whitesmoke px-3.5 py-2 pr-10 text-num-14 leading-num-20 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)] bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat ${role ? 'text-[#0a0a0a]' : 'text-slategray-100'}`}
            style={{ backgroundImage: CREATE_ADMIN_SELECT_CHEVRON_SVG }}
          >
            {CREATE_ADMIN_ROLE_OPTIONS.map((opt) => (
              <option key={opt.value || 'placeholder'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-[#0a0a0a]">Phone Number</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="e.g., +212 6 XX XX XX XX"
            className="box-border h-11 w-full rounded-[10px] border-0 bg-whitesmoke px-3.5 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-slategray-100 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)]"
          />
        </label>
      </div>

      <div className="mt-10 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white px-5 py-6 sm:px-8 sm:py-8">
        <div className="mb-6 flex items-center gap-2.5">
          <Hexagon className="h-5 w-5 shrink-0 text-[#0a0a0a]" strokeWidth={1.75} aria-hidden />
          <h2 className="text-base font-semibold text-[#0a0a0a]">Permissions</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-x-12 sm:gap-y-4">
          <div className="flex flex-col gap-3">
            {CREATE_ADMIN_PERMISSION_LABELS_COL_A.map((label) => (
              <label key={label} className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={!!permissions[label]}
                  onChange={() => onTogglePermission(label)}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border border-[rgba(0,0,0,0.2)] bg-white text-[#0a0a0a] accent-[#0a0a0a] focus:ring-2 focus:ring-[#2b7fff] focus:ring-offset-0"
                />
                <span className="text-num-14 leading-num-20 text-[#0a0a0a]">{label}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {CREATE_ADMIN_PERMISSION_LABELS_COL_B.map((label) => (
              <label key={label} className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={!!permissions[label]}
                  onChange={() => onTogglePermission(label)}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border border-[rgba(0,0,0,0.2)] bg-white text-[#0a0a0a] accent-[#0a0a0a] focus:ring-2 focus:ring-[#2b7fff] focus:ring-offset-0"
                />
                <span className="text-num-14 leading-num-20 text-[#0a0a0a]">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <label className="mt-10 flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-[#0a0a0a]">Notes (Optional)</span>
        <input
          type="text"
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Additional information about this admin user"
          className="box-border h-11 w-full rounded-[10px] border-0 bg-whitesmoke px-3.5 text-num-14 leading-num-20 text-[#0a0a0a] placeholder:text-slategray-100 outline-none ring-1 ring-inset ring-transparent focus:ring-[rgba(0,0,0,0.15)]"
        />
      </label>
    </div>

    <div className="grid min-w-0 shrink-0 grid-cols-1 gap-4 border-t border-[rgba(0,0,0,0.08)] bg-white px-4 py-6 sm:px-10 md:grid-cols-2 lg:px-12">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex h-11 w-full items-center justify-center rounded-[10px] border border-solid border-[rgba(0,0,0,0.12)] bg-white text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[#0a0a0a] text-sm font-semibold text-white transition-colors hover:bg-[#171717]"
      >
        <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
        Create Admin
      </button>
    </div>
  </div>
);

export default CreateAdministratorForm;
