# Anant Shukla · Portfolio

Next.js App Router, React, TypeScript and Tailwind CSS. The homepage pairs an interactive Three.js terrain with GSAP pointer easing, Framer Motion skill transitions and a locally illustrated campus walk. Fonts, portrait and résumé are bundled with the application.

## Run locally

Use Node.js 22.13 or later and npm. Run `npm ci`, then `npm run dev`. Open the local URL printed by Next.js.

## Production

Run `npm run build` followed by `npm start`. For Vercel, import this repository, select the Next.js preset and use the repository root. No environment variables or external services are required. The contact form opens a prefilled email draft in the visitor’s email client.

## Content

Project case studies, experience, skills and leadership live in `lib/portfolio.ts`. Research and engineering articles live in `lib/notes.ts`. Replace `public/resume.pdf` and `public/anant.jpg` to update the résumé and portrait. The recommendations section names academic referees from the résumé.
