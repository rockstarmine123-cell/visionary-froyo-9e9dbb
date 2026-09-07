import { createFileRoute } from '@tanstack/react-router'
import * as icons from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Poster } from '@/components/Poster'
import { freeCourses } from '@/data/content'

export const Route = createFileRoute('/free-courses')({
  component: FreeCoursesPage,
})

function FreeCoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="100% Free"
        title="Start Learning for Free."
        description="Quality education shouldn't have a price tag on the basics. Explore these free courses, no strings attached."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {freeCourses.map((c) => {
          const Icon = (icons as any)[c.icon] ?? icons.BookOpen
          return (
            <div
              key={c.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  FREE
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{c.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">{c.description}</p>
              <button className="mt-5 w-full rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-indigo-700">
                Start Learning
              </button>
            </div>
          )
        })}
      </div>

      <div className="mt-16">
        <Poster eyebrow="Open For All" title="No barriers. No excuses. Just learning." tone="dark" />
      </div>
    </div>
  )
}
