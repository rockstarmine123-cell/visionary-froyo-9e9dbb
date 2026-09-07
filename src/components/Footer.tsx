import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'
import { Logo } from './Logo'
import { CONTACT } from '@/data/content'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/notes', label: 'Notes' },
  { to: '/pyqs', label: 'PYQs' },
  { to: '/free-courses', label: 'Free Courses' },
  { to: '/ai-assistant', label: 'AI Assistant' },
]

const supportLinks = [
  { to: '/doubts', label: 'Doubt Center' },
  { to: '/doubts', label: 'Help Center' },
  { to: '/contact', label: 'Contact Support' },
  { to: '/doubts', label: 'FAQs' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="[&_span]:text-white [&_svg]:text-white">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">Your Path to Smarter Learning.</p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Student Support</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {supportLinks.map((l, i) => (
              <li key={i}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>
              <a href={`mailto:${CONTACT.admissionEmail}`} className="transition-colors hover:text-white">
                {CONTACT.admissionEmail}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.supportEmail}`} className="transition-colors hover:text-white">
                {CONTACT.supportEmail}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.mobile}`} className="transition-colors hover:text-white">
                {CONTACT.mobile}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500 lg:px-8">
        © 2026 VidhyaPath. All Rights Reserved.
      </div>
    </footer>
  )
}
