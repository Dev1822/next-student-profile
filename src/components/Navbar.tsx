import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 text-slate-900 font-semibold text-lg">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span>Campus Directory</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="py-5 text-sm font-medium text-slate-900 border-b-2 border-blue-600">
              Students
            </Link>
            <Link href="/departments" className="py-5 text-sm font-medium text-slate-600 hover:text-slate-900">
              Departments
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="text-xs font-medium text-slate-600 border border-slate-300 rounded-md px-3 py-1 bg-slate-50">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}
