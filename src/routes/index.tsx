import { Link, createFileRoute } from '@tanstack/react-router'
import * as icons from 'lucide-react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Poster } from '@/components/Poster'
import { categories, whyChooseUs, testimonials, stats } from '@/data/content'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Categories />
      <WhyUs />
      <PosterStrip />
      <Testimonials />
      <CtaBanner />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
            <Sparkles className="h-3.5 w-3.5" />
            Your Path to Smarter Learning
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Learn Today. <br />
            <span className="text-indigo-600">Grow Tomorrow.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Personalized learning, expert guidance, smart study material, and AI-powered assistance —
            all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/free-courses"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Start Learning Free
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100/60">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 text-white">
                <icons.Laptop className="h-7 w-7" />
                <p className="mt-3 text-sm font-semibold">Live Online Classes</p>
                <p className="text-xs text-indigo-100">Learn from expert faculty in real time</p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-5">
                <icons.BrainCircuit className="h-6 w-6 text-purple-600" />
                <p className="mt-3 text-sm font-semibold text-slate-900">AI Assistant</p>
                <p className="text-xs text-slate-500">24/7 study help</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-5">
                <icons.BookOpen className="h-6 w-6 text-amber-600" />
                <p className="mt-3 text-sm font-semibold text-slate-900">Smart Notes</p>
                <p className="text-xs text-slate-500">Exam-ready material</p>
              </div>
              <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-emerald-50 p-5">
                <icons.ClipboardCheck className="h-6 w-6 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">10,000+ PYQs & Mock Tests</p>
                  <p className="text-xs text-slate-500">Practice with confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-indigo-600 sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Learning For Everyone"
        title="Popular Learning Categories"
        description="Whether you're in school or building your career, VidhyaPath has a path designed for you."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((c) => {
          const Icon = (icons as any)[c.icon] ?? icons.BookOpen
          return (
            <div
              key={c.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-slate-900">{c.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{c.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why VidhyaPath"
          title="Why Choose VidhyaPath?"
          description="Everything you need for consistent, confident learning — built into one platform."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => {
            const Icon = (icons as any)[w.icon] ?? icons.Sparkles
            return (
              <div key={w.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-slate-900">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{w.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PosterStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Poster eyebrow="Practice" title="LEARN. PRACTICE. MASTER." />
        <Poster tone="dark" eyebrow="Future" title="Your Future Starts With What You Learn Today." />
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Loved by students and professionals"
          description="Real experiences from learners across classes, exams, and careers."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <p className="text-sm leading-relaxed text-slate-600">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <Poster
        eyebrow="Get Started"
        title="Your learning journey starts here."
        action={
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-md transition-transform hover:scale-105"
          >
            Join VidhyaPath
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
    </section>
  )
}
