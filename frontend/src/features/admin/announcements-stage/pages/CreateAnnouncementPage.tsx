import { FunctionComponent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

const labelClass =
  'flex items-center gap-1 font-inter text-num-14 font-medium leading-num-14 text-[#0a0a0a]';

const inputClass =
  'box-border h-10 w-full rounded-num-8 border-0 bg-whitesmoke px-3 py-2 font-inter text-num-14 leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]';

const chevronStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat' as const,
  backgroundPosition: 'right 12px center',
  backgroundSize: '1rem',
};

const RequiredMark = () => (
  <span className="font-medium text-[#dc2626]" aria-hidden>
    *
  </span>
);

const CreateAnnouncementPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [audience, setAudience] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [priority, setPriority] = useState('');
  const [visibility, setVisibility] = useState('');
  const [message, setMessage] = useState('');

  const handleDraft = (e: FormEvent) => {
    e.preventDefault();
  };

  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <AdminLayout>
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-5 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/announcements')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5">Back to Announcements</span>
        </button>

        <div className="box-border w-full rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white text-left text-[#0a0a0a]">
          <div className="px-6 pb-2 pt-6">
            <h1 className="m-0 text-base font-semibold leading-4">Create Announcement</h1>
            <p className="m-0 mt-1 text-base leading-6 text-slategray-100">
              Publish a new announcement to students and faculty
            </p>
          </div>

          <form
            className="box-border flex w-full flex-col gap-6 px-6 pb-6 pt-2"
            onSubmit={handlePublish}
            noValidate
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="announcement-title">
                  Announcement Title
                  <RequiredMark />
                </label>
                <input
                  id="announcement-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Career Fair 2026"
                  className={inputClass}
                  autoComplete="off"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="announcement-type">
                  Type
                  <RequiredMark />
                </label>
                <select
                  id="announcement-type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={`${inputClass} h-10 cursor-pointer appearance-none bg-whitesmoke py-2 pl-3 pr-10`}
                  style={chevronStyle}
                >
                  <option value="">Select type</option>
                  <option value="Event">Event</option>
                  <option value="Interview">Interview</option>
                  <option value="Info">Info</option>
                </select>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="target-audience">
                  Target Audience
                  <RequiredMark />
                </label>
                <select
                  id="target-audience"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className={`${inputClass} h-10 cursor-pointer appearance-none bg-whitesmoke py-2 pl-3 pr-10`}
                  style={chevronStyle}
                >
                  <option value="">Select audience</option>
                  <option value="All Students">All Students</option>
                  <option value="Final Year">Final Year</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="event-date">
                  Event/Deadline Date
                </label>
                <div className="relative">
                  <Calendar
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slategray-100"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    id="event-date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className={`${inputClass} pr-10`}
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="priority">
                  Priority
                  <RequiredMark />
                </label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className={`${inputClass} h-10 cursor-pointer appearance-none bg-whitesmoke py-2 pl-3 pr-10`}
                  style={chevronStyle}
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <label className={labelClass} htmlFor="visibility">
                  Visibility
                  <RequiredMark />
                </label>
                <select
                  id="visibility"
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className={`${inputClass} h-10 cursor-pointer appearance-none bg-whitesmoke py-2 pl-3 pr-10`}
                  style={chevronStyle}
                >
                  <option value="">Select visibility</option>
                  <option value="faculty-students">Students & Faculty</option>
                  <option value="students-only">Students only</option>
                  <option value="internal">Internal admins</option>
                </select>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label className={labelClass} htmlFor="message-content">
                Message Content
                <RequiredMark />
              </label>
              <textarea
                id="message-content"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write the announcement message that will be displayed to the target audience..."
                rows={5}
                className="box-border min-h-[120px] w-full resize-y rounded-num-8 border-0 bg-whitesmoke px-3 py-2 font-inter text-num-14 leading-6 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <label className={labelClass} htmlFor="attachments">
                Attachments (Optional)
              </label>
              <input
                id="attachments"
                type="file"
                multiple
                className="box-border w-full cursor-pointer rounded-num-8 border-0 bg-whitesmoke px-3 py-2 font-inter text-num-14 text-[#0a0a0a] file:mr-3 file:rounded-md file:border-0 file:bg-white file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-[#0a0a0a] focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
              />
              <p className="m-0 text-xs leading-4 text-slategray-100">
                Upload any relevant files (PDF, images, documents)
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={handleDraft}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white font-inter text-sm font-medium leading-5 text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
              >
                <FileText className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                Save as Draft
              </button>
              <button
                type="submit"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-num-8 bg-[#030213] font-inter text-sm font-medium leading-5 text-white transition-opacity hover:opacity-90"
              >
                <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                Publish Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateAnnouncementPage;
