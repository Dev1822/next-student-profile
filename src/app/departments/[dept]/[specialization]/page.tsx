import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { departments } from "@/data/campusData";
import { students } from "@/data/students";

export function generateStaticParams() {
  return departments.flatMap((d) =>
    d.specializations.map((s) => ({
      dept: d.slug,
      specialization: s.slug,
    }))
  );
}

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ dept: string; specialization: string }>;
}) {
  const { dept: deptParam, specialization: specParam } = await params;
  const decodedDept = decodeURIComponent(deptParam).toLowerCase();
  const decodedSpec = decodeURIComponent(specParam).toLowerCase();

  const department = departments.find(
    (d) =>
      d.slug.toLowerCase() === decodedDept ||
      d.name.toLowerCase() === decodedDept
  );

  if (!department) {
    notFound();
  }

  const specialization = department.specializations.find(
    (s) =>
      s.slug.toLowerCase() === decodedSpec ||
      s.name.toLowerCase() === decodedSpec
  );

  if (!specialization) {
    notFound();
  }

  const specStudents = students.filter(
    (s) =>
      s.departmentSlug === department.slug &&
      s.specializationSlug === specialization.slug
  );

  return (
    <div className="w-full">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
            <Link href="/departments" className="hover:text-slate-600">
              Departments
            </Link>
            <span>/</span>
            <Link
              href={`/departments/${department.slug}`}
              className="hover:text-slate-600"
            >
              {department.name}
            </Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">
              {specialization.name}
            </span>
          </div>

          <Link
            href={`/departments/${department.slug}`}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to {department.name} Department</span>
          </Link>
        </div>

        <Link
          href="/"
          className="text-xs text-slate-500 hover:text-slate-800 self-start sm:self-auto inline-flex items-center gap-1"
        >
          <span>View all students</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main Specialization Banner */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {specialization.name}
              </h1>
              <span className="text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded px-2.5 py-0.5 font-medium">
                Specialization under {department.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed">
              {specialization.description}
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Department Track
            </div>
            <div className="text-sm font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded px-2.5 py-1 mt-1 inline-block">
              {specialization.track}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 my-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <div className="text-[10px] font-semibold text-slate-400">
              Academic Lead
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">
              {specialization.academicLead}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-400">
              Primary Core Lab
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">
              {specialization.primaryCoreLab}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-400">
              Total Enrollment
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">
              {specialization.totalEnrollment}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-400">
              Curriculum Cycle
            </div>
            <div className="text-xs font-semibold text-slate-800 mt-1">
              {specialization.curriculumCycle}
            </div>
          </div>
        </div>
      </div>

      {/* Students in this Specialization */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-slate-900">
              Students in this Specialization
            </h2>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              {specStudents.length}
            </span>
          </div>

          <div className="text-xs text-slate-500">
            Filtered by Track:{" "}
            <span className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {specialization.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center justify-center font-bold text-xs ${student.avatarColor}`}
                    >
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {student.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">
                        {student.studentCode}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200 rounded px-2 py-0.5">
                    Year {student.studyYear.replace(/[^0-9]/g, "")}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600">
                  {student.specializationFocus}
                </span>
                <Link
                  href={`/students/${student.id}`}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  <span>View profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
