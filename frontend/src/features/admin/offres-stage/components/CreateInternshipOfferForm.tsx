import { FunctionComponent, FormEvent, useState } from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const labelClass =
  'flex h-3.5 items-center font-inter text-num-14 font-medium leading-num-14 text-[#0a0a0a]';

const inputClass =
  'box-border h-9 w-full rounded-num-8 border-0 bg-whitesmoke px-num-12 py-num-4 font-inter text-num-14 leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]';

const CreateInternshipOfferForm: FunctionComponent = () => {
  const [offerTitle, setOfferTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [offerType, setOfferType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [tags, setTags] = useState('');

  const handleDraft = (e: FormEvent) => {
    e.preventDefault();
    console.log('Save as draft');
  };

  const handlePublish = (e: FormEvent) => {
    e.preventDefault();
    console.log('Publish offer');
  };

  return (
    <form
      className="box-border flex w-full flex-col gap-6 px-6 pb-6 pt-0 text-left font-inter text-sm text-[#0a0a0a]"
      onSubmit={handlePublish}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="offer-title">
            Offer Title *
          </label>
          <input
            id="offer-title"
            type="text"
            value={offerTitle}
            onChange={(e) => setOfferTitle(e.target.value)}
            placeholder="e.g., Développeur Full Stack"
            className={inputClass}
            autoComplete="off"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="company">
            Company *
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g., TechCorp Morocco"
            className={inputClass}
            autoComplete="organization"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="location">
            Location *
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Casablanca, Morocco"
            className={inputClass}
            autoComplete="off"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="offer-type">
            Offer Type *
          </label>
          <select
            id="offer-type"
            value={offerType}
            onChange={(e) => setOfferType(e.target.value)}
            className={`${inputClass} h-10 cursor-pointer appearance-none bg-white py-2 pl-num-12 pr-10`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23717182' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '1rem',
            }}
          >
            <option value="">Select offer type</option>
            <option value="internship">Internship</option>
            <option value="pfe">PFE</option>
            <option value="alternance">Alternance</option>
          </select>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="deadline">
            Application Deadline *
          </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label className={labelClass} htmlFor="duration">
            Duration
          </label>
          <input
            id="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g., 3-6 months"
            className={inputClass}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="description">
          Description *
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the internship position, responsibilities, and requirements..."
          rows={2}
          className="box-border h-16 w-full resize-none overflow-y-auto rounded-num-8 border-0 bg-whitesmoke px-num-12 py-2 font-inter text-num-14 leading-5 text-[#0a0a0a] placeholder:text-slategray-100 focus:outline-none focus:ring-1 focus:ring-[rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="flex flex-col gap-2 text-slategray-100">
        <label className={`${labelClass} text-[#0a0a0a]`} htmlFor="skills">
          Required Skills *
        </label>
        <input
          id="skills"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., React, Node.js, TypeScript (comma-separated)"
          className={inputClass}
          autoComplete="off"
        />
        <p className="flex h-4 items-start text-xs leading-4">Enter skills separated by commas</p>
      </div>

      <div className="flex flex-col gap-2 text-slategray-100">
        <label className={`${labelClass} text-[#0a0a0a]`} htmlFor="tags">
          Tags (Optional)
        </label>
        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g., Full-time, Remote, AI, Data Science"
          className={inputClass}
          autoComplete="off"
        />
        <p className="flex h-4 items-start text-xs leading-4">Add tags to help students find this offer</p>
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <button
          type="button"
          onClick={handleDraft}
          className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-num-8 border border-solid border-[rgba(0,0,0,0.1)] bg-white font-inter text-sm font-medium leading-5 text-[#0a0a0a] hover:bg-[#fafafa]"
        >
          <FileText className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          Save as Draft
        </button>
        <button
          type="submit"
          className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-num-8 bg-[#030213] font-inter text-sm font-medium leading-5 text-white hover:opacity-90"
        >
          <CheckCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          Publish Offer
        </button>
      </div>
    </form>
  );
};

export default CreateInternshipOfferForm;
