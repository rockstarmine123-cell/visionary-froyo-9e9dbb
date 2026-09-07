import { Link } from '@tanstack/react-router'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M4 5.5C4 5.5 8 4 12 5.5C16 4 20 5.5 20 5.5V16.5C20 16.5 16 15 12 16.5C8 15 4 16.5 4 16.5V5.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 5.5V16.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 20L12 17.5L15 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Vidhya<span className="text-indigo-600">Path</span>
      </span>
    </Link>
  )
}
