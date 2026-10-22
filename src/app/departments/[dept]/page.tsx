import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { departments } from "@/data/campusData";
import { students } from "@/data/students";

export function generateStaticParams() {
  return departments.map((d) => ({ dept: d.slug }));
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ dept: string }>;
}) {
  const { dept } = await params;
  const decodedDept = decodeURIComponent(dept).toLowerCase();

  const department = departments.find(
    (d) =>
      d.slug.toLowerCase() === decodedDept ||
      d.name.toLowerCase() === decodedDept
  );

  if (!department) {
    notFound();
  }

  const deptStudents = students.filter(
    (s) => s.department.toLowerCase() === department.name.toLowerCase()
  );

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
            <Link href="/departments" className="hover:text-slate-600">
              Departments
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">{department.name}</span>
          </div>

          <Link
            href="/departments"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all departments</span>
          </Link>
        </div>

        <Link
          href="/"
          className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1"
        >
          <span>View all students</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900">{department.name}</h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
          {department.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
          <span>{department.specializations.length} Specializations</span>
          <span>&middot;</span>
          <span>{department.enrolledStudentsCount} Enrolled Students</span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Available Specializations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {department.specializations.map((spec) => (
            <div
              key={spec.slug}
              className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-base">
                    {spec.name}
                  </h3>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                    {spec.track}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {spec.description}
                </p>
                <div className="text-xs text-slate-500 mt-3">
                  Academic Lead:{" "}
                  <span className="font-medium text-slate-700">
                    {spec.academicLead}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">{spec.totalEnrollment}</span>
                <Link
                  href={`/departments/${department.slug}/${spec.slug}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  <span>View specialization track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Students in {department.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deptStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm ${student.avatarColor}`}
                  >
                    {student.initials}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                    {student.studentCode}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  {student.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded px-2 py-0.5">
                    {student.department}
                  </span>
                  <span className="text-xs text-slate-500">
                    {student.studyYear}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <Link
                  href={`/students/${student.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>View profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
