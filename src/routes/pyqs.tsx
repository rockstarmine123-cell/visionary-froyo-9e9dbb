import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, X, Flame, Target, CheckCircle2, XCircle } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { practiceQuestions } from '@/data/content'

export const Route = createFileRoute('/pyqs')({
  component: PyqsPage,
})

const classes = ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12']
const difficulties = ['All', 'Easy', 'Medium', 'Hard']

function PyqsPage() {
  const [className, setClassName] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const filtered = useMemo(() => {
    return practiceQuestions.filter((q) => {
      if (className !== 'All' && q.className !== className) return false
      if (difficulty !== 'All' && q.difficulty !== difficulty) return false
      return true
    })
  }, [className, difficulty])

  const attempted = Object.keys(answers).length
  const correct = Object.entries(answers).filter(
    ([id, idx]) => practiceQuestions.find((q) => q.id === id)?.correctIndex === idx,
  ).length
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0
  const streak = correct

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Practice Platform"
        title="PYQs & Practice"
        description="Previous year questions, chapter-wise practice, mock tests, and daily practice — with instant explanations."
      />

      <Dashboard attempted={attempted} correct={correct} accuracy={accuracy} streak={streak} />

      <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <Filter label="Class" value={className} onChange={setClassName} options={classes} />
        <Filter label="Difficulty" value={difficulty} onChange={setDifficulty} options={difficulties} />
        <span className="ml-auto text-xs font-medium text-slate-400">
          Select Class → Subject → Chapter → Difficulty
        </span>
      </div>

      <div className="mt-10 space-y-6">
        {filtered.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            selected={answers[q.id]}
            onAnswer={(idx) => setAnswers((prev) => ({ ...prev, [q.id]: idx }))}
          />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-14 text-center text-sm text-slate-500">
            No questions match this filter yet. Try another class or difficulty.
          </div>
        )}
      </div>
    </div>
  )
}

function Dashboard({
  attempted,
  correct,
  accuracy,
  streak,
}: {
  attempted: number
  correct: number
  accuracy: number
  streak: number
}) {
  const incorrect = attempted - correct
  const items = [
    { label: 'Questions Attempted', value: attempted, icon: Target, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'Accuracy', value: `${accuracy}%`, icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Correct Answers', value: correct, icon: Check, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Incorrect Answers', value: incorrect, icon: XCircle, color: 'text-rose-600 bg-rose-50' },
    { label: 'Current Streak', value: streak, icon: Flame, color: 'text-amber-600 bg-amber-50' },
  ]

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color}`}>
            <item.icon className="h-4.5 w-4.5" />
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
          <p className="text-xs text-slate-500">{item.label}</p>
        </div>
      ))}
      <div className="col-span-2 flex flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-3 lg:col-span-5">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>Progress</span>
          <span>{accuracy}% accuracy</span>
        </div>
        <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 transition-all"
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function QuestionCard({
  question,
  selected,
  onAnswer,
}: {
  question: (typeof practiceQuestions)[number]
  selected?: number
  onAnswer: (idx: number) => void
}) {
  const answered = selected !== undefined

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-indigo-700">{question.className}</span>
        <span className="rounded-full bg-purple-50 px-2.5 py-1 text-purple-700">{question.subject}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{question.chapter}</span>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700">{question.difficulty}</span>
      </div>

      <p className="mt-4 text-base font-semibold text-slate-900">{question.question}</p>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {question.options.map((opt, idx) => {
          const isCorrect = idx === question.correctIndex
          const isSelected = idx === selected
          let style = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
          if (answered && isCorrect) style = 'border-emerald-400 bg-emerald-50 text-emerald-800'
          else if (answered && isSelected) style = 'border-rose-400 bg-rose-50 text-rose-800'

          return (
            <button
              key={opt}
              disabled={answered}
              onClick={() => onAnswer(idx)}
              className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-colors disabled:cursor-default ${style}`}
            >
              {opt}
              {answered && isCorrect && <Check className="h-4 w-4 text-emerald-600" />}
              {answered && isSelected && !isCorrect && <X className="h-4 w-4 text-rose-600" />}
            </button>
          )
        })}
      </div>

      {!answered ? (
        <p className="mt-4 text-xs text-slate-400">Select an option to submit your answer.</p>
      ) : (
        <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Explanation: </span>
          {question.explanation}
        </div>
      )}
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
