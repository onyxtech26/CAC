# CAC — Conglomerate Appraisal Consultancy

Marketing website for **Conglomerate Appraisal Consultancy (CAC)** — a Malaysian
property appraisal and forensic consultancy specialising in the valuation, due
diligence and strategic acquisition of subsale and land assets across Johor & Kedah.

Built as a single-page site with React, Vite, Tailwind CSS v4 and Motion.

## Tech stack

| Concern      | Choice                            |
| ------------ | --------------------------------- |
| Framework    | React 19                          |
| Build / dev  | Vite 6                            |
| Styling      | Tailwind CSS v4 (`@theme` in CSS) |
| Animation    | Motion                            |
| Icons        | lucide-react                      |
| Lottie       | @lottiefiles/dotlottie-react      |
| Language     | TypeScript                        |

## Getting started

**Prerequisites:** Node.js 18+

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build to /dist
npm run preview  # preview the production build
npm run lint     # type-check with tsc
```

## Project structure

```
public/
  icon.png                 # favicon
src/
  main.tsx                 # app entry
  App.tsx                  # page composition
  styles/
    index.css              # Tailwind + theme tokens + utilities/keyframes
  assets/                  # bundled images / lottie
  data/
    index.ts               # SERVICES + ASSETS content
  types/
    index.ts               # shared TypeScript types
  components/
    layout/                # Navbar, Footer
    sections/              # Hero, StatsBar, About, Services,
                           #   InvestmentOutlook, Timeline, WhyCAC, Contact
    ui/                    # PremiumBackground, RollingNumber, InquiryLogModal
```

The `@` path alias resolves to `src/` (e.g. `import X from '@/components/ui/RollingNumber'`).

## Notes

- Site content (services, portfolio, contact details) lives in `src/data` and the
  section components, sourced from the company profile.
- The contact form submits leads by email via [FormSubmit](https://formsubmit.co);
  the destination inbox must confirm activation once on first submission.
