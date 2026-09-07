import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SectionHeading } from '@/components/SectionHeading'
import { CourseCard } from '@/components/CourseCard'
import { courses } from '@/data/content'

export const Route = createFileRoute('/courses')({
  component: CoursesPage,
})

const categoryOptions = ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Competitive Exams', 'College Students', 'Working Professionals', 'Corporate Learning']
const levelOptions = ['All', 'Beginner', 'Advanced']
const modeOptions = ['All', 'Live', 'Recorded']
const priceOptions = ['All', 'Under ₹2,000', '₹2,000 – ₹3,000', '₹3,000 – ₹4,000', 'Above ₹4,000']

function CoursesPage() {
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState('All')
  const [mode, setMode] = useState('All')
  const [price, setPrice] = useState('All')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (category !== 'All' && c.category !== category) return false
      if (level !== 'All' && c.level !== level) return false
      if (mode !== 'All' && c.mode !== mode) return false
      if (price === 'Under ₹2,000' && c.price >= 2000) return false
      if (price === '₹2,000 – ₹3,000' && (c.price < 2000 || c.price > 3000)) return false
      if (price === '₹3,000 – ₹4,000' && (c.price < 3000 || c.price > 4000)) return false
      if (price === 'Above ₹4,000' && c.price <= 4000) return false
      return true
    })
  }, [category, level, mode, price])

  const schoolCourses = filtered.filter((c) => c.tag === 'School')
  const proCourses = filtered.filter((c) => c.tag === 'Professional')

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Courses & Batches"
        title="Find the right batch for your goals"
        description="From school foundations to career upskilling — filter courses by class, subject, price, and mode."
      />

      <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Filter label="Class / Category" value={category} onChange={setCategory} options={categoryOptions} />
        <Filter label="Level" value={level} onChange={setLevel} options={levelOptions} />
        <Filter label="Mode" value={mode} onChange={setMode} options={modeOptions} />
        <Filter label="Price" value={price} onChange={setPrice} options={priceOptions} />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">School Batches (Class 9 – 12)</h2>
        <p className="mt-1 text-sm text-slate-500">Every school batch is priced at ₹4,000 or below.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
          {schoolCourses.length === 0 && <EmptyState />}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-slate-900">Professional Learning</h2>
        <p className="mt-1 text-sm text-slate-500">
          AI &amp; Data Science, programming, communication, and corporate upskilling tracks.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
          {proCourses.length === 0 && <EmptyState />}
        </div>
      </div>
    </div>
  )
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

function EmptyState() {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
      No courses match your filters. Try adjusting the class, level, mode, or price.
    </div>
  )
}
