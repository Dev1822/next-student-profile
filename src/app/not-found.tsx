import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full flex-1 flex flex-col">
      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-12">
        <Link href="/" className="hover:text-slate-600">
          Directory
        </Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">Not Found</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] font-semibold text-slate-600 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
          <span>404 &ndash; ROUTE NOT FOUND</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-4">
          Student or department not found
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md leading-relaxed">
          The requested directory entry or path could not be located. It may have
          moved or the identifier might be invalid.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link
            href="/students"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold transition-colors shadow-xs"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-md text-xs font-semibold transition-colors"
          >
            Browse All Departments
          </Link>
        </div>

        <div className="w-full max-w-md mt-12 bg-white border border-slate-200 rounded-lg overflow-hidden text-left shadow-xs">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Suggested Starting Points
            </span>
            <span className="text-[10px] text-slate-400">Internal Routes</span>
          </div>

          <div className="divide-y divide-slate-100">
            <Link
              href="/departments/computer-science/web-development"
              className="px-4 py-3 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors group"
            >
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span>🏛</span>
                <span>Computer Science Department</span>
              </span>
              <span className="text-slate-400 group-hover:text-blue-600 flex items-center gap-1 font-mono text-[11px]">
                /departments/cs <span>&rarr;</span>
              </span>
            </Link>

            <Link
              href="/departments/design"
              className="px-4 py-3 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors group"
            >
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span>🎨</span>
                <span>Design Department</span>
              </span>
              <span className="text-slate-400 group-hover:text-blue-600 flex items-center gap-1 font-mono text-[11px]">
                /departments/design <span>&rarr;</span>
              </span>
            </Link>

            <Link
              href="/departments/business"
              className="px-4 py-3 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors group"
            >
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span>📈</span>
                <span>Business Department</span>
              </span>
              <span className="text-slate-400 group-hover:text-blue-600 flex items-center gap-1 font-mono text-[11px]">
                /departments/business <span>&rarr;</span>
              </span>
            </Link>

            <Link
              href="/students"
              className="px-4 py-3 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors group"
            >
              <span className="flex items-center gap-2 font-medium text-slate-800">
                <span>👥</span>
                <span>Students Directory</span>
              </span>
              <span className="text-slate-400 group-hover:text-blue-600 flex items-center gap-1 font-mono text-[11px]">
                /students <span>&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
