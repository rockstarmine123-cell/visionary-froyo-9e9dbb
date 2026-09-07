import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Search, FileText, Download, BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { notes } from '@/data/content'

export const Route = createFileRoute('/notes')({
  component: NotesPage,
})

const classOptions = ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Competitive', 'Programming', 'AI & DS', 'Professional']
const sectionOrder = [
  'Class 9 Notes',
  'Class 10 Notes',
  'Class 11 Notes',
  'Class 12 Notes',
  'Competitive Exam Notes',
  'Programming Notes',
  'AI & Data Science',
  'Professional Skills',
]

function NotesPage() {
  const [query, setQuery] = useState('')
  const [className, setClassName] = useState('All')

  const filtered = useMemo(() => {
    return notes.filter((n) => {
      if (className !== 'All' && n.className !== className) return false
      if (query.trim()) {
        const q = query.toLowerCase()
        if (!n.subject.toLowerCase().includes(q) && !n.topic.toLowerCase().includes(q) && !n.category.toLowerCase().includes(q)) {
          return false
        }
      }
      return true
    })
  }, [query, className])

  const bySection = sectionOrder
    .map((section) => ({ section, items: filtered.filter((n) => n.category === section) }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Digital Library"
        title="Notes & Study Material"
        description="Search chapter notes, quick revisions, and formula sheets across every subject and class."
      />

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes, chapters, subjects..."
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {classOptions.map((c) => (
            <button
              key={c}
              onClick={() => setClassName(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                className === c ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-14">
        {bySection.map((group) => (
          <div key={group.section}>
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <BookOpen className="h-5 w-5 text-indigo-600" />
              {group.section}
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((n) => (
                <div key={n.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {n.subject} — {n.topic}
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm text-slate-500">
                    {n.types.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-2">
                    <button className="flex-1 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700">
                      Read Notes
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {bySection.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-14 text-center text-sm text-slate-500">
            No notes found. Try a different search term or class filter.
          </div>
        )}
      </div>
    </div>
  )
}
