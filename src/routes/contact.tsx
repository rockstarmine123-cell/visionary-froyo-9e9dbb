import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { contactCategories, CONTACT } from '@/data/content'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const batchOptions = [
  'Class 9 Foundation',
  'Class 10 Board Booster',
  'Class 11 Science',
  'Class 12 Target Batch',
  'AI & Data Science',
  'Python Programming',
  'Communication Skills',
  'Digital & Career Skills',
  'Not sure yet',
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactPage() {
  const [fields, setFields] = useState({
    fullName: '',
    email: '',
    mobile: '',
    classOrCourse: '',
    preferredBatch: batchOptions[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'admission', ...fields }),
      })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Contact / Admission"
        title="Ready to Start Your Learning Journey?"
        description="Fill out the admission form or reach our team directly — we're here to help you choose the right path."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">Application submitted!</h3>
              <p className="mt-2 max-w-sm text-sm text-slate-500">
                Thank you for applying to VidhyaPath. Our admission team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" name="admission">
              <input type="hidden" name="form-name" value="admission" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    name="fullName"
                    required
                    value={fields.fullName}
                    onChange={handleChange}
                    className="input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    name="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    className="input"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Mobile Number">
                  <input
                    name="mobile"
                    required
                    value={fields.mobile}
                    onChange={handleChange}
                    className="input"
                  />
                </Field>
                <Field label="Class / Course">
                  <input
                    name="classOrCourse"
                    required
                    placeholder="e.g. Class 10 / Python Programming"
                    value={fields.classOrCourse}
                    onChange={handleChange}
                    className="input"
                  />
                </Field>
              </div>

              <Field label="Preferred Batch">
                <select
                  name="preferredBatch"
                  value={fields.preferredBatch}
                  onChange={handleChange}
                  className="input"
                >
                  {batchOptions.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Tell us about your learning goals..."
                  className="input"
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Official Contact Details</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a href={`mailto:${CONTACT.admissionEmail}`} className="flex items-center gap-3 text-slate-600 hover:text-indigo-600">
                <Mail className="h-4 w-4 text-indigo-500" />
                <span>
                  <span className="block text-xs text-slate-400">Admission Email</span>
                  {CONTACT.admissionEmail}
                </span>
              </a>
              <a href={`mailto:${CONTACT.supportEmail}`} className="flex items-center gap-3 text-slate-600 hover:text-indigo-600">
                <Mail className="h-4 w-4 text-indigo-500" />
                <span>
                  <span className="block text-xs text-slate-400">Support Email</span>
                  {CONTACT.supportEmail}
                </span>
              </a>
              <a href={`tel:${CONTACT.mobile}`} className="flex items-center gap-3 text-slate-600 hover:text-indigo-600">
                <Phone className="h-4 w-4 text-indigo-500" />
                <span>
                  <span className="block text-xs text-slate-400">Mobile</span>
                  {CONTACT.mobile}
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Contact Categories</h3>
            <ul className="mt-4 space-y-3">
              {contactCategories.map((c) => (
                <li key={c.title} className="rounded-xl bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-800">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-500">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  )
}
