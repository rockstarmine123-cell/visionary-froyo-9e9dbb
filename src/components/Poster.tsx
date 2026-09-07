import type { ReactNode } from 'react'

export function Poster({
  eyebrow,
  title,
  action,
  tone = 'indigo',
}: {
  eyebrow?: string
  title: string
  action?: ReactNode
  tone?: 'indigo' | 'dark'
}) {
  const bg =
    tone === 'dark'
      ? 'bg-slate-950'
      : 'bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-700'

  return (
    <div className={`relative overflow-hidden rounded-3xl ${bg} px-6 py-14 text-center sm:px-14`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="relative">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {eyebrow}
          </span>
        )}
        <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    </div>
  )
}
