import { FunctionComponent, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';
import { announcementsMockData } from '../data/announcementsMockData';

const ViewAnnouncementPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const row = useMemo(
    () => announcementsMockData.find((a) => a.id === id),
    [id]
  );

  return (
    <AdminLayout>
      <div className="mx-auto max-w-[1600px] space-y-5 font-inter">
        <button
          type="button"
          onClick={() => navigate('/admin/announcements')}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-[rgba(0,0,0,0.1)] bg-white px-4 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#fafafa]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          <span className="leading-5">Back to Announcements</span>
        </button>

        <div className="box-border flex w-full flex-col gap-4 rounded-[14px] border border-solid border-[rgba(0,0,0,0.1)] bg-white px-6 py-6 text-left text-[#0a0a0a]">
          {row ? (
            <>
              <h1 className="m-0 text-base font-medium leading-4">{row.title}</h1>
              <dl className="m-0 grid gap-2 text-sm text-slategray-100">
                <div>
                  <dt className="inline font-medium text-[#0a0a0a]">Type: </dt>
                  <dd className="inline">{row.type}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[#0a0a0a]">Target: </dt>
                  <dd className="inline">{row.targetAudience}</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-[#0a0a0a]">Date: </dt>
                  <dd className="inline">{row.date}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => navigate(`/admin/announcements/${row.id}/edit`)}
                className="mt-2 inline-flex h-9 w-fit items-center rounded-lg bg-[#030213] px-4 text-sm font-medium text-white hover:opacity-90"
              >
                Edit
              </button>
            </>
          ) : (
            <p className="m-0 text-slategray-100">Announcement not found.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ViewAnnouncementPage;
