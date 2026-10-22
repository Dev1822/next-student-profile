import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { students } from "@/data/students";

export function generateStaticParams() {
  return students.map((s) => ({ id: s.id }));
}

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <Link href="/" className="hover:text-slate-600">
            Students
          </Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{student.name}</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to students</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${student.avatarColor}`}
          >
            {student.initials}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{student.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                {student.studentCode}
              </span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 my-6"></div>

        <div className="grid grid-cols-2 gap-y-5 gap-x-6">
          <div>
            <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Department
            </div>
            <div className="text-sm font-semibold text-slate-800 mt-1">
              {student.department}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Study Year
            </div>
            <div className="text-sm font-semibold text-slate-800 mt-1">
              {student.studyYear}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Email
            </div>
            <a
              href={`mailto:${student.email}`}
              className="text-sm text-blue-600 hover:underline mt-1 block"
            >
              {student.email}
            </a>
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Enrolled
            </div>
            <div className="text-sm font-semibold text-slate-800 mt-1">
              {student.enrolled}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 my-6"></div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-2">About</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            {student.about}
          </p>
        </div>

        <div className="border-t border-slate-100 my-6"></div>

        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-4">
            Academic Details
          </h2>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Department</span>
              <span className="font-semibold text-slate-800">
                {student.department}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Current Academic Standing</span>
              <span className="font-semibold text-slate-800">
                {student.standing}
              </span>
            </div>
          </div>

          <div className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
            Enrolled Subjects
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-md divide-y divide-slate-100 overflow-hidden">
            {student.subjects.map((subject) => (
              <div
                key={subject.code}
                className="px-3.5 py-2.5 flex items-center justify-between text-xs"
              >
                <span className="text-slate-700">
                  <span className="font-semibold">{subject.code}:</span>{" "}
                  {subject.name}
                </span>
                <span className="text-slate-500 text-[11px] font-medium">
                  {subject.credits}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
