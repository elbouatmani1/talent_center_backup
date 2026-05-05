import { FunctionComponent, useMemo, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import StudentsStatGrid from '../components/StudentsStatGrid';
import StudentsDashboardTable from '../components/StudentsDashboardTable';
import { studentsDashboardRows } from '../data/studentsDashboardMock';

const AllStudentsPage: FunctionComponent = () => {
  const [query, setQuery] = useState('');

  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studentsDashboardRows;
    return studentsDashboardRows.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.classLevel.toLowerCase().includes(q) ||
        s.field.toLowerCase().includes(q) ||
        s.internshipStatus.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <AdminLayout>
      <div className="-m-5 bg-gray-50 px-5 pb-8 pt-5 font-inter md:-m-6 md:px-6">
        <div className="mx-auto max-w-[1600px] space-y-5 pb-6">
          <StudentsStatGrid />
          <StudentsDashboardTable students={filteredStudents} query={query} onQueryChange={setQuery} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AllStudentsPage;
