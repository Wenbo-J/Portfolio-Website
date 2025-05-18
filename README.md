# 🧑‍💻 Personal Portfolio Website

A lightweight, **static-first** portfolio built with the modern Next .js 15 **App Router**.  
It serves three goals:

1. **Résumé hub** – one-click PDF download.  
2. **Projects gallery** – auto-renders cards from MDX front-matter.  
3. **Blog** – long-form posts written in pure MDX (with Tailwind typography, Mermaid, and YouTube embeds).

> **Live demo →** <https://your-handle.vercel.app>

---

## ✨ Tech stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Next.js 15.3** (TypeScript, App Router, typed-routes) | `--no-turbo` Webpack dev server by default; easy to switch back. |
| Styling | **Tailwind CSS v3** + `@tailwindcss/typography` | Custom light/dark CSS variables. |
| Content | **MDX** via `@next/mdx` | Post wrapper marked `'use client'` when embeds require it. |
| Embeds | `next-youtube`, Mermaid fenced blocks | Add any React component to MDX. |
| Data | Front-matter loader (`src/lib/mdx.ts`) | Parses projects at build-time, no DB. |
| Hosting | **Vercel** (zero-config) | Runs `npm run build && next start`. |

---

## 📁 Project structure

src/
│
├─ app/
│ ├─ page.tsx ← Landing page
│ ├─ projects/ ← Route: /projects
│ │ └─ page.tsx
│ └─ blog/
│ └─ prompt-workflow/
│ ├─ page.tsx ← 'use client' wrapper
│ └─ post.mdx ← MDX content
│
├─ components/
│ └─ ProjectCard.tsx
├─ content/
│ └─ projects/*.mdx ← per-project meta + body (optional)
├─ lib/
│ └─ mdx.ts ← compileMDX helper
└─ types/
└─ mdx.d.ts ← ambient *.mdx module


---

## 🚀 Local development

```bash
git clone https://github.com/your-handle/portfolio-website
cd portfolio-website

# install deps
npm install

# run dev server (Webpack)
npm run dev     # open http://localhost:3000

# OR if you prefer Turbopack:
npm run dev:turbopack

Scripts
Command	Purpose
npm run dev	Start Webpack dev server (--no-turbo)
npm run dev:turbopack	Start experimental Turbopack server
npm run build	Production build
npm run start	Serve .next build locally
npm run lint	ESLint + TypeScript checks
📝 Adding content
➕ New project card

    Create src/content/projects/my-project.mdx:

    ---
    title: "Gen-AI Risk Dashboard"
    date: "2024-12-15"
    tech: ["Python", "Flask", "Gemini 1.5"]
    impact: "Cut workflow time by 93 %"
    github: "https://github.com/you/risk-dashboard"
    live: "https://risk-dashboard.vercel.app"
    ---

    Rebuild – card appears automatically on /projects.

➕ New blog post

mkdir -p src/app/blog/awesome-post
touch src/app/blog/awesome-post/post.mdx
touch src/app/blog/awesome-post/page.tsx

page.tsx

'use client';
export { default } from './post.mdx';

Write your MDX in post.mdx; the route becomes /blog/awesome-post.
☁️ Deploying to Vercel

    Push to GitHub.

    Click “New Project → Import” in the Vercel dashboard.

    Vercel auto-detects Next.js; accept defaults and deploy.

    Set up a custom domain or keep the .vercel.app sub-domain.

Every git push main triggers a new production build.
🛠 Roadmap / nice-to-haves

Dark-mode toggle button

RSS feed for /blog

Lighthouse CI GitHub action

Skeleton loading states
