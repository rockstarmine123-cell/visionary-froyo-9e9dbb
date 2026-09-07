import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import * as icons from 'lucide-react'
import { Upload, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { FaqAccordion } from '@/components/FaqAccordion'
import { doubtCategories, faqs } from '@/data/content'

export const Route = createFileRoute('/doubts')({
  component: DoubtsPage,
})

function DoubtsPage() {
  const [subject, setSubject] = useState('Mathematics')
  const [text, setText] = useState('')
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim() && !fileName) return
    setSubmitted(true)
    setText('')
    setFileName('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Doubt & Help Center"
        title="Ask Your Doubt"
        description="Stuck on a concept or question? Get help from subject experts within minutes."
      />

      <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-500">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            >
              {doubtCategories.map((c) => (
                <option key={c.title}>{c.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500">Your Doubt</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Upload your question or type your doubt here..."
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500 transition-colors hover:border-indigo-300">
            <span className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              {fileName ? fileName : 'Upload a photo of your question (optional)'}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            <Send className="h-4 w-4" />
            Ask Doubt
          </button>

          {submitted && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Your doubt has been sent! An expert will respond shortly.
            </div>
          )}
        </form>
      </div>

      <div className="mt-16">
        <h2 className="text-center text-xl font-bold text-slate-900">Doubt Categories</h2>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {doubtCategories.map((c) => {
            const Icon = (icons as any)[c.icon] ?? icons.HelpCircle
            const active = subject === c.title
            return (
              <button
                key={c.title}
                onClick={() => setSubject(c.title)}
                className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center text-xs font-semibold transition-colors ${
                  active ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200'
                }`}
              >
                <Icon className="h-5 w-5" />
                {c.title}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Help Center" title="Frequently Asked Questions" />
        <div className="mx-auto mt-8 max-w-2xl">
          <FaqAccordion items={faqs} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
