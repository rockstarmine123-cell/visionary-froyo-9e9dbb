import * as icons from 'lucide-react'
import type { Course } from '@/data/content'
import { Check } from 'lucide-react'

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100">
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
            course.tag === 'School' ? 'bg-indigo-50 text-indigo-700' : 'bg-purple-50 text-purple-700'
          }`}
        >
          {course.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600">
          <icons.Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          {course.rating}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">{course.title}</h3>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {course.subjects.slice(0, 3).map((s) => (
          <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            {s}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1.5">
        {course.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-2 py-1">{course.mode}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1">{course.level}</span>
        <span>{course.students.toLocaleString()} students</span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div>
          <span className="text-2xl font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
          {course.originalPrice && (
            <span className="ml-2 text-sm text-slate-400 line-through">
              ₹{course.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-indigo-700">
          View Course
        </button>
      </div>
    </div>
  )
}
