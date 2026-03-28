# SpanForge

**The AI lifecycle platform for enterprise teams.**

SpanForge helps enterprise teams get AI to production — and keep it there. Five structured lifecycle phases, 100+ tools and frameworks, the T.R.U.S.T. governance layer, and AgentOBS production observability.

Live at [getspanforge.com](https://www.getspanforge.com)

---

## What this repository is

This is the SpanForge marketing website — a Next.js 14 (App Router) static site deployed on Vercel.

It includes:

- Product and platform pages across five AI lifecycle phases (Discover, Design, Build, Govern, Scale)
- AgentOBS product pages (standard, SDK, debug, validate)
- The T.R.U.S.T. governance framework
- A tools catalog with 100+ tools
- A blog (content in `content/blog/`)
- Privacy policy, about, and supporting pages

---

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules + global design tokens
- **Fonts**: Playfair Display, DM Sans, DM Mono via `next/font/google`
- **Blog**: MDX files parsed with `gray-matter` and rendered with `react-markdown`
- **Analytics**: Vercel Analytics + Speed Insights, Plausible (privacy-first, cookieless)
- **Deployment**: Vercel

---

## Running locally

```bash
npm install
npm run dev
```

Runs on `http://localhost:3000` by default.

---

## Building for production

```bash
npm run build
npm start
```

---

## Blog posts

Blog posts live in `content/blog/` as `.mdx` or `.md` files. Required frontmatter:

```yaml
---
title: "Post title"
date: "2026-03-28"
phase: "discover"       # discover | design | build | govern | scale
excerpt: "One-line summary shown in the post list."
readingTime: "8 min read"
author: "SpanForge"
---
```

---

## License

MIT — see [LICENSE](LICENSE)
