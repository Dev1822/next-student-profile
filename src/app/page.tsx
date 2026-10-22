"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { students } from "@/data/students";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");

  const filtered = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.studentCode.toLowerCase().includes(search.toLowerCase());
    const matchesDept =
      department === "All departments" || student.department === department;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Students</h1>
        <p className="text-slate-500 text-sm mt-1">
          Browse students and view their profiles.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search students"
            className="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="dept" className="text-sm font-medium text-slate-600 whitespace-nowrap">
            Department:
          </label>
          <select
            id="dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="text-sm text-slate-800 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="All departments">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {filtered.map((student) => (
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

              <h2 className="text-lg font-bold text-slate-900 mt-4">
                {student.name}
              </h2>

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

      <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <div>
          Showing {filtered.length} of {students.length} students
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled
            className="border border-slate-200 rounded px-3 py-1.5 text-xs font-medium text-slate-400 bg-white cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled
            className="border border-slate-200 rounded px-3 py-1.5 text-xs font-medium text-slate-400 bg-white cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
