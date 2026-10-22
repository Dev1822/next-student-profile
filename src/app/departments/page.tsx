import Link from "next/link";
import { departments } from "@/data/campusData";

export default function DepartmentsPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Departments</h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>{departments.length} Active Academic Faculties</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100 overflow-hidden">
        {departments.map((dept) => (
          <div
            key={dept.slug}
            className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-slate-50/50 transition-colors"
          >
            <div>
              <h2 className="font-bold text-slate-900 text-base">{dept.name}</h2>
              <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                {dept.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-500 mt-3">
                <span>{dept.specializationsCount} Specializations</span>
                <span>&middot;</span>
                <span>{dept.enrolledStudentsCount} Enrolled Students</span>
              </div>
            </div>

            <div className="self-end md:self-center shrink-0">
              <Link
                href={`/departments/${dept.slug}`}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>View department</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
