# AGENTS.md

This document orients AI agents and developers working on the VidhyaPath codebase.

## Project Overview

VidhyaPath is an educational platform (EdTech marketing + interactive tools site) with exactly 8 pages: Home, Courses & Batches, Notes & Study Material, PYQs & Practice, AI Study Assistant, Doubt & Help Center, Free Courses, and Contact/Admission. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | lucide-react |
| Forms | Netlify Forms (admission form on `/contact`) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── routes/            # File-based routes — one file per page
│   ├── __root.tsx     # Root document shell: <html>, Navbar, Footer, Outlet
│   ├── index.tsx      # Home
│   ├── courses.tsx    # Courses & Batches
│   ├── notes.tsx       # Notes & Study Material
│   ├── pyqs.tsx        # PYQs & Practice
│   ├── ai-assistant.tsx
│   ├── doubts.tsx      # Doubt & Help Center
│   ├── free-courses.tsx
│   └── contact.tsx     # Contact / Admission
├── components/         # Shared UI: Navbar, Footer, Logo, CourseCard, FaqAccordion, SectionHeading, Poster
├── data/content.ts     # All mock content: courses, notes, practice questions, testimonials, FAQs, contact info
├── router.tsx           # TanStack Router setup
└── styles.css           # Tailwind entrypoint + the shared `.input` form field class
public/
└── __forms.html         # Static skeleton so Netlify's build bot detects the "admission" form (see netlify-forms-tanstack skill)
```

## Conventions

- Routes are file-based: a new page = a new file in `src/routes` using `createFileRoute`.
- All copy/data lives in `src/data/content.ts` — update content there rather than inlining strings deep in components, so pages stay easy to scan.
- Icons are pulled dynamically from `lucide-react` in a few places (`(icons as any)[name]`) so data objects can reference icon names as strings.
- Interactive features (AI chat, doubt form, PYQ practice, filters) are client-side mock interactions — there is no backend/database, since none of this content requires persistence across sessions.
- The admission form on `/contact` submits to Netlify Forms. If you add or change fields, update both the React form in `contact.tsx` and the hidden mirror form in `public/__forms.html` — Netlify's build-time form detector only sees the static file, not the React-rendered form.
- Brand palette: indigo/blue primary (`indigo-600`, `blue-700`), purple accents, slate neutrals, white backgrounds, rounded-2xl/3xl cards with soft shadows.
