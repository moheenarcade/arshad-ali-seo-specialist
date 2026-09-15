# Arshad Ali — SEO Specialist Portfolio

A one-page Next.js (App Router) portfolio built from the content in
`Portfolio_Content_-_Arshad.pdf`: hero/bio, technical expertise, four
featured SEO case studies with metric readouts, work experience timeline,
certifications, and a closing contact CTA.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Edit the content

All copy (bio, skills, case-study metrics, experience, certifications) lives
in one file: `src/data/content.ts`. Update the values there and every
section on the page updates automatically — no need to touch the
components.

## Structure

- `src/app/page.tsx` — assembles the page from section components
- `src/components/` — Nav, Hero, Expertise, Projects, Experience,
  Certifications, CTA, Footer
- `src/data/content.ts` — all portfolio content and metrics
- `src/app/globals.css` — color, type, and spacing tokens

## Deploy

The easiest path is [Vercel](https://vercel.com): push this folder to a
GitHub repo and import it in Vercel, or run `npx vercel` from this
directory.
