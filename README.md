# Avinash Kondaveti — Portfolio

A Dragon Ball themed personal portfolio of the companies and projects I have worked on.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route         | Dragon ball | What's on it                                                        |
| ------------- | ----------- | ------------------------------------------------------------------- |
| `/`           | 1★          | Hero, tech stack, stats, featured projects, resume/contact CTAs      |
| `/about`      | 2★          | Summary, career arc, engineering philosophy, what I'm training with  |
| `/projects`   | 3★          | Per project: problem, architecture, contribution, tech, challenges, results, links |
| `/experience` | 4★          | Scroll-tracked timeline: companies, roles, responsibilities, metrics |
| `/skills`     | 5★          | Scouter readout + power-level bars grouped by discipline             |
| `/contact`    | 6★          | Email, LinkedIn, GitHub, phone, contact form                         |
| Resume button | 7★          | `public/Avinash_Kondaveti_Resume.pdf`                                |

## Where to edit content

All copy lives in `src/data/` — you should never need to touch a component to update the site.

- `src/data/site.ts` — name, title, email, links, intro lines, philosophy, "currently training"
- `src/data/projects.ts` — the project case studies (add `links.github` / `links.demo` to show buttons)
- `src/data/experience.ts` — companies, roles, responsibilities, achievements, education
- `src/data/skills.ts` — skill groups and their power levels

### Things to fill in before you publish

1. **GitHub URL** — `site.github` in `src/data/site.ts` is a guess. Point it at your real profile.
2. **Project links** — every `links.github` / `links.demo` is empty, so each project shows a
   "Proprietary — walkthrough on request" badge. Fill any in that you can share.
3. **Skills you don't want to claim** — `src/data/skills.ts` includes the categories you asked for
   (gRPC, AWS, GCP, Terraform, Prometheus, Grafana, OpenTelemetry, TypeScript). They are rated lower
   than the resume-backed ones, but delete anything you'd rather not be asked about in an interview.
4. **Site URL** — set `NEXT_PUBLIC_SITE_URL` and update `metadataBase` in `src/app/layout.tsx`
   once you know the deployed domain (used by sitemap, robots and OG tags).

## Contact form

Works without a backend. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (e.g. `https://formspree.io/f/xxxxxxx`)
in your host's environment variables and submissions POST there. Leave it unset and the form falls
back to opening the visitor's mail client with the message pre-filled — so it never silently drops
a message.

## Deploy

**Vercel** (easiest): push to GitHub, import the repo, accept the defaults. Add
`NEXT_PUBLIC_FORMSPREE_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` under Project → Settings → Environment Variables.

**Netlify**: `netlify.toml` is already committed and uses `@netlify/plugin-nextjs`. Import the repo,
build command `npm run build`, publish directory `.next`.

## Theme notes

The DBZ styling is deliberately restrained — sci-fi HUD rather than fan art, and no copyrighted
character imagery. The dragon balls, aura orb and scouter are all hand-drawn SVG/CSS in
`src/components/`. Colour tokens (`saiyan`, `ki`, `kame`, `namek`, `gi`, `blood`) are defined in the
`@theme` block at the top of `src/app/globals.css`; change them there and the whole site follows.

All animation respects `prefers-reduced-motion`.
