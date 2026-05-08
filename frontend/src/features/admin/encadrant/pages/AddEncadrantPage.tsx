import { FormEvent, FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const chevronStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 12px center',
  backgroundSize: '1rem'
};

const labelClass =
  'font-inter text-num-14 font-medium leading-num-14 text-[#0a0a0a]';

const inputFieldClass =
  'box-border h-9 w-full rounded-num-8 border-0 bg-whitesmoke py-num-4 pl-num-12 pr-num-12 font-inter text-sm leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]';

const selectFieldClass =
  'box-border h-10 w-full cursor-pointer appearance-none rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white py-2 pl-3 pr-10 font-inter text-sm leading-5 text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)] bg-[length:1rem] bg-[right_0.625rem_center] bg-no-repeat';

const RequiredMark = () => (
  <span className="ml-0.5 font-medium text-[#dc2626]" aria-hidden>
    *
  </span>
);

const AddEncadrantPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [maxStudents, setMaxStudents] = useState('15');
  const [bio, setBio] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/encadrants')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5">Back to Encadrants</span>
        </button>

        <div className="box-border flex w-full min-h-[586px] max-w-[1243px] flex-col items-start gap-6 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left text-base text-[#0a0a0a]">
          <div className="relative h-[70px] w-full shrink-0 px-6">
            <h1 className="absolute left-6 top-[22px] m-0 font-inter text-base font-medium leading-4">Add New Encadrant</h1>
            <p className="absolute left-6 top-11 m-0 font-inter text-base font-normal leading-6 text-slategray-100">
              Register a new supervisor to the platform
            </p>
          </div>

          <form
            className="box-border flex w-full flex-1 flex-col items-start gap-6 px-6 pb-6 pt-0 text-sm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid w-full min-w-0 max-w-full grid-cols-1 gap-6 gap-x-6 md:grid-cols-2">
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-first-name">
                    First Name
                    <RequiredMark />
                  </label>
                </div>
                <input
                  id="enc-first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g., Ahmed"
                  className={inputFieldClass}
                  autoComplete="given-name"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-last-name">
                    Last Name
                    <RequiredMark />
                  </label>
                </div>
                <input
                  id="enc-last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g., Bennani"
                  className={inputFieldClass}
                  autoComplete="family-name"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-email">
                    Email Address
                    <RequiredMark />
                  </label>
                </div>
                <input
                  id="enc-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., ahmed.bennani@university.ma"
                  className={inputFieldClass}
                  autoComplete="email"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-phone">
                    Phone Number
                  </label>
                </div>
                <input
                  id="enc-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., +212 6 XX XX XX XX"
                  className={inputFieldClass}
                  autoComplete="tel"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-department">
                    Department
                    <RequiredMark />
                  </label>
                </div>
                <select
                  id="enc-department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className={selectFieldClass}
                  style={chevronStyle}
                >
                  <option value=""> </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="AI & Data Science">AI &amp; Data Science</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Networks & Security">Networks &amp; Security</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                </select>
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-role">
                    Role/Title
                    <RequiredMark />
                  </label>
                </div>
                <select
                  id="enc-role"
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  className={selectFieldClass}
                  style={chevronStyle}
                >
                  <option value=""> </option>
                  <option value="Professor">Professor</option>
                  <option value="Associate Professor">Associate Professor</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Lecturer">Lecturer</option>
                </select>
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-specialization">
                    Specialization
                  </label>
                </div>
                <input
                  id="enc-specialization"
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="e.g., Machine Learning, Cloud Computing"
                  className={inputFieldClass}
                  autoComplete="off"
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-2">
                <div className="flex h-3.5 items-center">
                  <label className={labelClass} htmlFor="enc-max-students">
                    Maximum Students
                  </label>
                </div>
                <input
                  id="enc-max-students"
                  type="number"
                  min={1}
                  value={maxStudents}
                  onChange={(e) => setMaxStudents(e.target.value)}
                  className={inputFieldClass}
                />
              </div>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-2">
              <div className="flex h-3.5 items-center">
                <label className={labelClass} htmlFor="enc-bio">
                  Bio/Experience (Optional)
                </label>
              </div>
              <textarea
                id="enc-bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Brief description of expertise and experience"
                rows={3}
                className="box-border min-h-[80px] w-full resize-y rounded-num-8 border-0 bg-whitesmoke py-num-4 pl-num-12 pr-num-12 font-inter text-sm leading-6 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="box-border flex h-[52px] w-full min-w-0 items-start gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/admin/encadrants')}
                className="box-border flex h-9 min-w-0 flex-[0.9428] items-center justify-center rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white px-4 py-2 text-center font-inter text-sm font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-2 rounded-num-8 bg-[#030213] px-4 py-2 text-center font-inter text-sm font-medium leading-5 text-white transition-opacity hover:opacity-90"
              >
                <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                Add Encadrant
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddEncadrantPage;
