# GoldiSaini.com Portfolio Project

## Project Overview

This repository contains the personal engineering website of Goldi Saini.

This is NOT a template portfolio.

The goal is to build a production-grade engineering website that demonstrates software engineering quality, architecture, maintainability, accessibility, and performance.

The website should position Goldi as a Quality Engineering Leader, not simply an automation tester.

---

## Target Audience

- Engineering Managers
- Directors of Engineering
- VP Engineering
- Staff Engineers
- Technical Recruiters
- Product Companies

---

## Brand Position

Goldi builds scalable quality engineering platforms using:

- Playwright
- Selenium
- API Automation
- Performance Testing
- CI/CD
- AI-assisted Testing

The website should communicate engineering leadership, system thinking, and technical excellence.

---

## Technical Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Framer Motion
- Vercel Deployment

---

## Architecture Principles

Always prefer:

- Reusable components
- Small components
- Clean folder structure
- Type safety
- Accessibility
- Responsive design
- Composition over duplication

Never generate giant page files.

Avoid hardcoding content inside UI components.

---

## Folder Structure

app/
components/
components/common/
components/home/
components/layout/
components/ui/
data/
docs/
lib/
styles/
types/

---

## Coding Rules

- One component = one responsibility
- Maximum readability
- Meaningful naming
- No duplicated Tailwind classes
- No inline styles
- TypeScript everywhere
- Explainable code

---

## Design Philosophy

Inspired by:

- Vercel
- Stripe
- Linear
- GitHub

Avoid:

- Flashy animations
- Skill percentage bars
- Unnecessary gradients
- Heavy shadows

---

## Learning Goal

The repository owner is learning React and Next.js.

Whenever generating code:

- Keep components small.
- Add comments where helpful.
- Prefer clarity over cleverness.
- Avoid advanced abstractions unless requested.
- Explain why architectural decisions are made.

---

## Git Philosophy

Small commits.

One feature per commit.

Professional commit messages.

---

## Quality Standard

Every component should be production-ready.

Prioritize maintainability over speed.

---

## Repo-specific implementation notes

- This repo is a Next.js App Router project. Key entry points are `app/layout.tsx` and `app/page.tsx`.
- Shared UI components are under `components/`. Use `components/common/` for layout wrappers and `components/ui/` for styled primitives.
- Import alias `@/*` is configured in `tsconfig.json`, so prefer imports like `@/lib/utils`, `@/components/ui/button`, and `@/app/page`.
- Styling uses Tailwind v4 with `@import "tailwindcss"`, `@import "tw-animate-css"`, and `@import "shadcn/tailwind.css"` in `app/globals.css`.
- Use the `cn()` helper from `lib/utils.ts` for merging Tailwind classes and conditional styling.
- UI primitives often use `class-variance-authority` for variant props. Example: `components/ui/button.tsx` defines `buttonVariants` and passes `className={cn(buttonVariants(...))}`.
- `next.config.ts` is currently empty; do not add new Next.js config unless there is a clear need.
- No tests exist in `package.json`; main workflows are `npm run dev`, `npm run build`, `npm run start`, and `npm run lint`.
- `app/layout.tsx` uses `next/font/google` with `Geist` and `Geist_Mono` fonts; preserve these font imports and CSS custom property usage.
- Global colors and dark mode are defined in `app/globals.css` with `:root` and `.dark` custom properties.
- The current app is effectively static and minimal; avoid introducing client-side state or server actions unless the feature requires it.
- Prefer small, composable components over large pages or layout-heavy changes.
