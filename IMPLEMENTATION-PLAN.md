# SpanForge Website — Full Rewrite Implementation Plan
**Based on:** Brand Brief v2.0 · Master Specification v1.0 · Website Specification v2.0  
**Launch target:** 29 March 2026  
**Author:** Implementation reference document — do not commit to public repo

---

## Executive Summary

The current site is a **Vite + React SPA** built around spanforge SDK documentation and sub-product pages. The rewrite replaces it entirely with a **Next.js 14 (App Router)** multi-page site that repositions SpanForge as the **AI Lifecycle Platform** — 5 phases, 100+ artifacts, the T.R.U.S.T. Framework, a Rust CLI toolset, and spanforge as the Scale-phase flagship. The existing docs content (spanforge, LlmDiff, Standard, etc.) is **superseded** by the new platform narrative and is not carried forward.

---

## Current State vs. Target State

| Dimension | Current (delete) | Target (build) |
|---|---|---|
| Framework | Vite + React + react-router-dom | **Next.js 14 App Router** |
| Routing | Client-side SPA routes | File-system routes + SSG |
| Pages | ~20 ad-hoc product/docs routes | **10 defined pages** per spec |
| Design | Ad-hoc CSS Modules | **Branded design system** — tokens, Playfair/DM Sans/DM Mono |
| Fonts | System or ad-hoc | Playfair Display + DM Sans + DM Mono via `next/font` |
| Email | EmailJS (client-side key exposure) | **API Route** → ConvertKit/Mailchimp (no key exposure) |
| Analytics | @vercel/analytics | **Plausible.io** (privacy-first, GDPR-safe) |
| Blog | None | **MDX** in `/content/blog` |
| SEO | None | Full meta, OG, structured data, sitemap via Next.js |
| Hosting | Vercel (already configured) | Vercel — keep, just redeploy |

---

## Phase 0 — Pre-Work (do before writing any code)

### 0.1 Decisions to lock before coding
- [ ] **Email platform**: ConvertKit or Mailchimp — pick one, obtain API key, put in `.env.local`
- [ ] **Plausible domain**: confirm `getspanforge.com` registered in Plausible dashboard
- [ ] **Blog content**: confirm minimum 3 articles (expanded from LinkedIn posts) ready as Markdown before launch
- [ ] **OG images**: create 1200×630px dark card PNG for each of the 10 pages (can be done last)
- [ ] **Favicon**: SpanForge "S" monogram, red on dark — 32×32 and 180×180 (Apple touch)

### 0.2 Repository cleanup
The following directories/files are **superseded** by the rewrite and should be deleted from the new Next.js project (do not migrate them):
- `src/pages/` — all existing pages
- `src/components/` — all existing components  
- `src/data/` — existing data files
- `src/hooks/` — existing hooks
- `spanforge/`, `SpanForgeDebug/`, `SpanForgeValidate/`, `llm-toolkit-schema/`, `llmdiff/`, `Standard/`, `tutorials/` — raw markdown doc trees (not needed; new site does not render SDK docs)
- `vite.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css` — replaced by Next.js equivalents

> **Note**: The `spanforge/schemas/` directory may be needed by backend — check with founder before deleting.

---

## Phase 1 — Next.js Project Bootstrap

### 1.1 Scaffold
```bash
# From workspace root — this creates a fresh Next.js 14 project
npx create-next-app@latest . \
  --app \
  --no-src-dir \
  --no-typescript \
  --no-eslint \
  --no-tailwind \
  --no-import-alias
```
> Choose "yes" to CSS Modules when prompted. Choose JavaScript (not TypeScript) to match existing codebase.

### 1.2 Install dependencies
```bash
npm install next-mdx-remote gray-matter
# ConvertKit OR Mailchimp — pick one:
npm install @mailchimp/mailchimp_marketing   # if Mailchimp
# npm install convertkit-node                # if ConvertKit
```

### 1.3 File structure (final)
```
/                           ← Next.js project root
├── app/
│   ├── layout.js           ← Root layout: Nav + Footer + fonts
│   ├── page.js             ← / (Home)
│   ├── platform/
│   │   └── page.js         ← /platform
│   ├── spanforge/
│   │   └── page.js         ← /spanforge
│   ├── tools/
│   │   └── page.js         ← /tools
│   ├── pricing/
│   │   └── page.js         ← /pricing
│   ├── about/
│   │   └── page.js         ← /about
│   ├── blog/
│   │   ├── page.js         ← /blog (index)
│   │   └── [slug]/
│   │       └── page.js     ← /blog/[slug]
│   ├── early-access/
│   │   └── page.js         ← /early-access
│   ├── privacy/
│   │   └── page.js         ← /privacy
│   └── api/
│       └── waitlist/
│           └── route.js    ← POST handler for email capture
├── components/
│   ├── Nav.jsx             ← Global navigation
│   ├── Footer.jsx          ← Global footer
│   ├── ToolCard.jsx        ← Tool card component (reused on Home + /tools)
│   ├── PhaseRow.jsx        ← Lifecycle phase row component
│   ├── TrustCard.jsx       ← T.R.U.S.T. Framework card
│   ├── TerminalMock.jsx    ← spanforge terminal demo
│   ├── WaitlistForm.jsx    ← Email capture form (client component)
│   ├── PriceCard.jsx       ← Pricing tier card
│   └── BlogCard.jsx        ← Blog index card
├── content/
│   └── blog/               ← MDX/Markdown blog articles
│       ├── ai-lifecycle-problem.mdx
│       ├── 73-percent-fail.mdx
│       ├── six-questions.mdx
│       └── ... (10 articles at launch)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml         ← Static OR auto-generated
│   ├── og/                 ← OG images per page
│   └── favicon.ico
├── styles/
│   ├── globals.css         ← :root tokens + resets
│   └── animations.css      ← fadeUp, scrollReveal, pulseRed, etc.
└── lib/
    ├── tools-data.js       ← Full 100+ tool catalog (source of truth)
    ├── blog.js             ← MDX read helpers (gray-matter)
    └── phases-data.js      ← Five-phase content data
```

---

## Phase 2 — Design System

### 2.1 CSS custom properties — `styles/globals.css`
Implement **all** tokens exactly as specified. Critical ones:

```css
:root {
  /* Colours */
  --red: #C0392B;
  --red-light: #E8574A;
  --red-dim: #7B2218;
  --charcoal: #1A1F2E;
  --dark: #111318;
  --surface: #1E2330;
  --surface-2: #252B3A;
  --mid: #64748B;
  --muted: #94A3B8;
  --rule: #2A3145;
  --light: #F1F5F9;
  --white: #FFFFFF;

  /* Phase accent colours */
  --discover: #1A5276;
  --design: #145A32;
  --build: #784212;
  --govern: #4A235A;
  --scale: #7B2218;

  /* Spacing (4px base) */
  --s-1: 4px;
  --s-2: 8px;
  --s-3: 12px;
  --s-4: 16px;
  --s-5: 24px;
  --s-6: 32px;
  --s-8: 48px;
  --s-10: 64px;
  --s-14: 112px;
  --s-20: 160px;
}
```

### 2.2 Typography — `app/layout.js`
Load fonts via `next/font/google`. **No external font CDN requests at runtime.**

```js
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], variable: '--font-playfair' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-dm-mono' })
```

Typography scale in globals.css:

| Token | Size | Font | Weight | Use |
|---|---|---|---|---|
| Display | `clamp(3rem,5vw,4.75rem)` | Playfair | 900 | Hero H1 only |
| H1 | `clamp(2rem,3.5vw,2.75rem)` | Playfair | 700 | Section headings |
| H2 | `1.75rem` | Playfair | 700 | Sub-sections |
| H3 | `1.2rem` | DM Sans | 600 | Component headings |
| Eyebrow | `0.72rem` | DM Mono | 400 | Labels, uppercase, ls 0.18em |
| Body large | `1.1rem` | DM Sans | 400 | Lead paragraphs |
| Body | `1rem` | DM Sans | 400 | Standard copy |
| Body small | `0.875rem` | DM Sans | 400 | Card descriptions |
| Code/tag | `0.75rem` | DM Mono | 400/500 | Tool names, badges |

### 2.3 Breakpoints

| Name | Width | Behaviour |
|---|---|---|
| Desktop | ≥1200px | Max-width 1200px centred, full layouts |
| Tablet | 900–1199px | 2-col → 1-col, hamburger nav |
| Mobile | <600px | Single column, fonts reduce slightly |

### 2.4 Core component specs

**Button variants** (height 44px, radius 4px, DM Sans 600, transition 0.2s):
- `btn-primary` — `--red` background, white text, hover `--red-light`
- `btn-ghost` — transparent, `--rule` border, white text, hover background `--surface`

**Eyebrow** — DM Mono 0.72rem, uppercase, letter-spacing 0.18em, color `--red`, `display: block`, `margin-bottom: 0.75rem`

**Type badges** (tool cards):
| Type | Background | Text |
|---|---|---|
| Web App | `rgba(26,82,118,0.3)` | `#5DADE2` |
| Rust CLI | `rgba(120,66,18,0.3)` | `#F0A500` |
| Document | `rgba(74,35,90,0.3)` | `#AF7AC5` |
| Framework | `rgba(20,90,50,0.3)` | `#58D68D` |
| Product | `rgba(120,18,18,0.3)` | `#EC7063` |

**Cards** — `--surface` bg, `1px solid --rule`, radius 4px, 3px `--red` top accent on hover

**Terminal block** — `--charcoal` bg, DM Mono 0.78rem, three-dot bar (red/amber/green), padding 1.5rem

### 2.5 Animations — `styles/animations.css`

```css
/* fadeUp — page load */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* pulseRed — hero live dot */
@keyframes pulseRed {
  0%, 100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.6); }
  50%       { box-shadow: 0 0 0 6px rgba(192,57,43,0); }
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: opacity 0.2s !important; transform: none !important; }
}
```

Scroll reveal: `IntersectionObserver` threshold 0.1, `translateY(16px) → 0`, opacity 0→1, 0.5s ease. Implement in a `useScrollReveal` hook (client component only).

---

## Phase 3 — Global Layout Components

### 3.1 `components/Nav.jsx`
**Exact spec from Section 4 (C-001):**
- Fixed top, z-index 100, height 64px desktop / 56px mobile
- Background: `rgba(17,19,24,0.92)` + `backdrop-filter: blur(12px)` after 80px scroll (use `scroll` event listener)
- Border-bottom `1px solid --rule` appears on scroll
- Logo: `<Link href="/">` — "Span" in `--white` bold, "Forge" in `--red` bold, Playfair 1.35rem 700. Sub-label "AI Lifecycle Platform" DM Mono 0.6rem `--mid` on desktop only
- Centre links (hidden <900px): Platform (dropdown), spanforge, Tools, Pricing, About, Blog
- Platform dropdown: hover on desktop / tap on mobile. 7 links with phase colour pips. Routes to `/platform` and `/platform#[phase]`
- Right: "Get Early Access" btn-primary → `/early-access` + hamburger below 900px
- Mobile overlay: full viewport, `--charcoal` bg, all links stacked, CTA at bottom, close button top-right

### 3.2 `components/Footer.jsx`
**Exact spec from Section 14 (C-011):**
- `--charcoal` bg, border-top `1px --rule`, padding 4rem 0
- 4-col grid: Brand column / Platform column / Products column / Company column
- Brand: "SpanForge" Playfair 1.2rem bold + tagline "The operating system for enterprise AI."
- Column headings: DM Mono 0.7rem `--red` uppercase
- Bottom strip: copyright left + "Built in public. Follow on LinkedIn." right
- Copyright: "© SpanForge 2026 — getspanforge.com"

### 3.3 Root `app/layout.js`
- Load all 3 fonts via `next/font` with CSS variables
- Apply font variables to `<html>`
- Import `styles/globals.css` and `styles/animations.css`
- Render `<Nav />` and `<Footer />` wrapping `{children}`
- Plausible script: `<Script defer data-domain="getspanforge.com" src="https://plausible.io/js/script.js" strategy="lazyOnload" />`
- Default metadata: title template, description, OG, Twitter card

---

## Phase 4 — Data Layer

### 4.1 `lib/tools-data.js`
Single source of truth for all 100+ artifacts. Structure:

```js
export const tools = [
  {
    id: 'ai-readiness-assessment',
    type: 'webapp',           // webapp | rust | doc | framework | product
    phase: 'discover',        // discover | design | build | govern | scale
    name: 'AI Readiness Assessment',
    description: 'Scores org readiness across Strategy, Data, Infrastructure, Talent, Governance, and Culture. Outputs radar chart and maturity report.',
  },
  // ... all 100+ entries
]
```

Populate all 100+ tools from the Master Specification (Section 01–05 tables). This file drives both `/tools` and the homepage preview grid.

### 4.2 `lib/phases-data.js`
Content for the five lifecycle phases (phase banner, summary, gate callout, etc.) used on `/platform`.

### 4.3 `lib/blog.js`
MDX/Markdown reader using `gray-matter` and `next-mdx-remote`. Helpers:
- `getAllPosts()` — reads `/content/blog/*.mdx`, returns sorted array of frontmatter
- `getPostBySlug(slug)` — reads single post, returns frontmatter + compiled MDX

---

## Phase 5 — Page Implementation

Work through pages in priority order (P0 = must launch). All copy is verbatim from the Website Specification.

### Page 1: Home (`/`) — Section 5
The most complex page. Build sections in order:

**5.1 Hero** — 2-col CSS Grid (1fr / 400px). Sections:
- Eyebrow kicker with `pulseRed` dot: "AI Lifecycle Platform — Now Live"
- H1 (Display size): "Where Enterprise AI\nGoes to Production." — "Goes to" in italic, "Production." in `--red`
- Sub-headline in `--muted`
- CTA row: "Get Early Access" (btn-primary → /early-access) + "Explore the Platform" (btn-ghost → /platform)
- Right col hero card (desktop only): lifecycle stats, 5-phase list, artifact counts

**5.2 spanforge callout strip** — `--charcoal` bg, flex row, bridges old→new positioning

**5.3 Problem strip** — centred pull quote + 3-stat grid (73% / 0 / 4mo)

**5.4 What is SpanForge** — 2-col: text left + sticky T.R.U.S.T. card right

**5.5 Lifecycle phases** — 5 phase rows, `--charcoal` bg, CSS grid 280px / 1fr, each links to `/platform#[phase]`

**5.6 Tools preview grid** — 18 representative cards, filter tabs (All/Web Apps/Rust CLI/Documents/Frameworks), "See full catalog" → /tools

**5.7 CI/CD pipeline section** — 6-stage table (SECURITY → QUALITY → BEHAVIOUR → PERFORMANCE → GOVERNANCE → DEPLOY)

**5.8 spanforge feature section** — 2-col, 6 features, `TerminalMock` right column

**5.9 Pricing section** — `--charcoal` bg, 4-col pricing cards preview, link to /pricing

**5.10 Waitlist CTA** — centred, email form, "Join Waitlist", stat strip below

---

### Page 2: Platform Overview (`/platform`) — Section 6
- Hero with SEO title "SpanForge Platform — The AI Lifecycle Platform"
- Sticky 5-phase strip below nav (updates active state via IntersectionObserver)
- Five phase sections, each with anchors `#discover`, `#design`, `#build`, `#govern`, `#scale`:
  - Phase banner (full-width, phase accent colour background)
  - 2–3 summary paragraphs
  - Gate callout (exact copy from spec)
  - Full artifact table for the phase (all rows from Master Spec)
  - Bottom CTA row (3 cards)

---

### Page 3: spanforge (`/spanforge`) — Section 7
- Hero with pill badge "Part of the SpanForge AI Lifecycle Platform"
- Observability gap 2-col (Without spanforge / With spanforge)
- 2×3 feature card grid
- Terminal demo with 3 tab scenarios (Consent violation / Drift detected / Confidence breach)
- Industry use cases table
- Technical spec section
- Page CTA with inline email form

---

### Page 4: Tools & Artifacts (`/tools`) — Section 8
- Hero
- Sticky filter bar (by type + by phase + search input) — client component
- Full 100+ artifact grid with "Load more" (30 at a time)
- Real-time JS filtering by type, phase, and search text
- Bottom email capture

---

### Page 5: Pricing (`/pricing`) — Section 10
- Hero
- 4-tier pricing grid: Free / Starter (featured) / Team / Enterprise
- Full features table (exact copy from spec)
- FAQ 6 items (exact copy from spec)

---

### Page 6: About (`/about`) — Section 11
- Personal hero (single col, max-width 720px)
- Long-form editorial journey text (exact paragraphs from spec)
- "Building in public" section with LinkedIn CTA
- T.R.U.S.T. card (reuse `TrustCard` component)

---

### Page 7: Blog Index (`/blog`) — Section 12.1
- Hero
- 3-col card grid, 9 per page, "Load more"
- Phase-coloured eyebrow tags

---

### Page 8: Blog Article (`/blog/[slug]`) — Section 12.3
- Single col, max-width 720px, Playfair H1 + date + read time
- MDX body with pull quotes (4px `--red` left border), code blocks (DM Mono), heading hierarchy
- End: author line + 2 related article cards + waitlist CTA callout

---

### Page 9: Early Access (`/early-access`) — Section 13
- 2-col on desktop: value prop left / form card right
- Form card: email input + "Claim my early access" btn-primary full-width
- JS validation: check `@`, error state (`--red` border), success state (green bg, disabled)
- Waitlist counter pulled from backend
- Social proof strip

---

### Page 10: Privacy Policy (`/privacy`)
- Required before any email collection goes live
- Standard privacy policy covering: data controller (SpanForge), data collected (email only), purpose (waitlist notification), GDPR lawful basis (consent), DPDP compliance, right to erasure, contact details
- Plain text page, no special components needed

---

## Phase 6 — API Routes

### 6.1 `app/api/waitlist/route.js`
```js
// POST /api/waitlist
// Body: { email: string }
// Validates server-side, submits to ConvertKit or Mailchimp
// Returns: { success: true } or { error: string }
// NEVER exposes API key to client
export async function POST(request) {
  const { email } = await request.json()
  // Validate email format server-side
  // Call ConvertKit/Mailchimp API with server-side env var
  // Return JSON response
}
```

**Security requirements:**
- Validate email on server — do not trust client validation alone
- Rate limit: check for repeated submissions (use a simple in-memory map or Vercel KV)
- API key stored in `.env.local` — never in client bundle
- Return generic error messages — do not expose provider error details

---

## Phase 7 — SEO & Metadata

### 7.1 Per-page metadata (Next.js 14 Metadata API)
Each `page.js` exports a `metadata` object or `generateMetadata()` function:

```js
export const metadata = {
  title: 'SpanForge — Where Enterprise AI Goes to Production',
  description: 'SpanForge is the operating system for enterprise AI...',
  openGraph: {
    title: 'SpanForge — The AI Lifecycle Platform',
    description: 'Where enterprise AI goes to production...',
    images: [{ url: '/og/home.png', width: 1200, height: 630 }],
    url: 'https://www.getspanforge.com',
  },
  twitter: { card: 'summary_large_image' },
}
```

### 7.2 Structured data
- `Organization` schema on all pages (in root layout)
- `SoftwareApplication` schema on `/spanforge`
- `BlogPosting` schema on `/blog/[slug]`

### 7.3 Sitemap
Use Next.js `app/sitemap.js` to auto-generate sitemap including all static pages + all blog slugs.

### 7.4 `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://www.getspanforge.com/sitemap.xml
```

---

## Phase 8 — Blog Content

### 8.1 MDX frontmatter format
```yaml
---
title: "The AI Lifecycle Problem No One Is Talking About"
date: "2026-03-29"
phase: "strategy"
excerpt: "Enterprise AI has a structural problem that is not about models, data, or compute."
readTime: "6 min"
---
```

### 8.2 Launch articles (minimum 3, target 10)
All 10 titles are defined in the spec (Section 12.2). Write or expand from LinkedIn posts:

1. The AI Lifecycle Problem No One Is Talking About — 1,200w
2. 73% of AI Projects Fail. Here Is Why. — 1,000w
3. 6 Questions Before Building Any AI System — 900w
4. The Data Readiness Lie — 800w
5. Introducing the T.R.U.S.T. Framework — 1,000w
6. The White Space in Enterprise AI Tooling — 900w
7. spanforge: Why Behavioural Observability Matters — 1,100w
8. Why SpanForge Will Be $49/Month — 700w
9. Why I Am Building SpanForge — 900w
10. Day One: Development Starts — 600w

---

## Phase 9 — Performance & Accessibility

### 9.1 Performance targets
| Metric | Target |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID | < 100ms |
| Page weight (Home) | < 500KB |
| Lighthouse (mobile) | > 85 |
| Lighthouse (desktop) | > 90 |

**How to achieve:**
- Text-only hero (no images above fold)
- `next/font` — no FOUT, correct `font-display: swap`
- Plausible loaded `strategy="lazyOnload"` — no render blocking
- `next/image` for any images below fold
- Code splitting via App Router — each page is its own chunk
- No heavy JS libraries (no Framer Motion, no GSAP — plain CSS animations only)

### 9.2 Accessibility checklist
- [ ] All colour combos meet WCAG AA (4.5:1 body, 3:1 large text)
- [ ] All interactive elements keyboard-navigable with visible focus states
- [ ] Form inputs have visible labels or `aria-label`
- [ ] `prefers-reduced-motion` disables all transforms, keeps opacity fades
- [ ] Terminal mock: `role="region" aria-label="spanforge live monitoring example"`
- [ ] Navigation landmarks: `<nav>`, `<main>`, `<footer>` with `id` attributes
- [ ] Skip-to-content link at top of every page (visually hidden until focused)
- [ ] Blog heading hierarchy: H1 > H2 > H3, no skipped levels
- [ ] Run `axe-core` in dev and fix all violations before launch

### 9.3 Browser support
Chrome 100+, Firefox 100+, Safari 15+ (add `-webkit-` prefixes for backdrop-filter), Edge 100+. **No IE11.**

---

## Phase 10 — Vercel Deployment

### 10.1 `vercel.json` — update existing file
```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install"
}
```

### 10.2 Environment variables in Vercel dashboard
```
CONVERTKIT_API_KEY=...
CONVERTKIT_FORM_ID=...
# OR
MAILCHIMP_API_KEY=...
MAILCHIMP_LIST_ID=...
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=getspanforge.com
```

### 10.3 DNS
- Point `getspanforge.com` and `www.getspanforge.com` to Vercel
- www → apex redirect configured in Vercel

---

## Build Sequence & Sprint Plan

### Sprint 1 — Foundation (Days 1–2)
- [ ] Scaffold Next.js 14 project
- [ ] Implement design system (`globals.css` with all tokens)
- [ ] Implement animations
- [ ] Implement Nav component (full spec including dropdown and mobile overlay)
- [ ] Implement Footer component
- [ ] Root layout with fonts, Nav, Footer
- [ ] Populate `lib/tools-data.js` with all 100+ tool entries

### Sprint 2 — Home Page (Days 3–4)
- [ ] Hero section (all 10 sub-components)
- [ ] spanforge callout strip
- [ ] Problem strip with stats
- [ ] "What is SpanForge" section + T.R.U.S.T. card
- [ ] ToolCard component
- [ ] Lifecycle phase rows
- [ ] Tools preview grid with filter tabs
- [ ] CI/CD pipeline section
- [ ] spanforge feature section + TerminalMock
- [ ] Pricing preview strip
- [ ] Waitlist CTA section + WaitlistForm component
- [ ] API route `/api/waitlist`

### Sprint 3 — Core Pages (Days 5–7)
- [ ] `/platform` — full 5-phase lifecycle with sticky nav and all artifact tables
- [ ] `/spanforge` — product page with terminal demo tabs, industry use cases, tech spec
- [ ] `/tools` — filterable full catalog with client-side filter and search
- [ ] `/pricing` — 4-tier grid + features table + FAQ

### Sprint 4 — Content Pages (Days 8–9)
- [ ] `/about` — founder story
- [ ] `/early-access` — standalone conversion page
- [ ] `/privacy` — privacy policy
- [ ] `/blog` — index with MDX reading
- [ ] `/blog/[slug]` — article page
- [ ] Write/expand minimum 3 blog articles as MDX

### Sprint 5 — SEO, Perf, Accessibility (Day 10)
- [ ] Metadata objects for all 10 pages
- [ ] Structured data (Organization, SoftwareApplication, BlogPosting)
- [ ] `app/sitemap.js`
- [ ] OG images (1200×630px per page)
- [ ] Favicon (32px + 180px)
- [ ] Lighthouse audit — fix all issues to hit >90
- [ ] axe-core accessibility audit — fix all violations
- [ ] Cross-browser test (Chrome, Firefox, Safari, Mobile Safari)
- [ ] `prefers-reduced-motion` test

### Sprint 6 — Launch (Day 11)
- [ ] Final content review — all copy matches spec exactly
- [ ] Email form end-to-end test (submit → ConvertKit/Mailchimp → success state)
- [ ] All 10 routes resolve, no 404s
- [ ] All internal links verified
- [ ] Plausible events firing
- [ ] Google Search Console verified + sitemap submitted
- [ ] Deploy to Vercel production
- [ ] DNS verified (`www` + apex both resolve)
- [ ] HTTPS certificate active
- [ ] LinkedIn Day 1 post: "Development starts today. Website is live."

---

## Key Design Decisions & Constraints

### What NOT to build (from spec anti-patterns)
- No purple gradients
- No floating robot illustrations
- No generic AI stock imagery
- No gradient hero backgrounds (use `--dark` + subtle grid texture only)
- No Inter or Roboto fonts
- No heavy animation libraries (Framer Motion, GSAP)
- No cookie banners (Plausible is cookieless)
- No client-side API key exposure (email form via API route only)

### Copy rules (Voice & Tone from Brand Brief Section 07)
| ❌ Never write | ✅ Write instead |
|---|---|
| "AI-powered" | Describe what it actually does |
| "Leverage AI capabilities" | Name the specific capability |
| "End-to-end AI platform" | "AI Lifecycle Platform" |
| "Unlock the power of AI" | Cut. Replace with specific outcome |
| "Seamlessly integrate" | Name specific integration points |
| "Best-in-class" | Demonstrate with specifics |
| "Holistic AI governance" | "T.R.U.S.T. Framework" |

### Pricing tier CTAs
| Tier | CTA | Route |
|---|---|---|
| Free | "Get Started" | /early-access |
| Starter | "Get Early Access" (btn-primary) | /early-access |
| Team | "Join Waitlist" | /early-access |
| Enterprise | "Contact Us" | mailto or form |

---

## Post-Launch Monitoring (Week 1)

- Daily Plausible check: top pages, bounce rate, scroll depth on homepage, waitlist conversion rate
- Real device rendering check: iPhone Safari + Android Chrome
- LinkedIn Day 1 announcement post
- Product Hunt submission: "AI Tools" + "Developer Tools" categories
- Submit to 3 AI newsletters for feature coverage
- Reply to every LinkedIn comment within 60 minutes of posting

---

## Files to Delete from Current Codebase

Once Next.js scaffold is in place, remove:
```
src/                          (entire directory)
spanforge/                     (confirm with founder first)
SpanForgeDebug/
SpanForgeValidate/
llm-toolkit-schema/
llmdiff/
Standard/
tutorials/
vite.config.js
index.html
index.html.bak
```

Files to **keep**:
```
CNAME                         (domain config, may be needed)
vercel.json                   (update for Next.js)
LICENSE
README.md                     (update)
public/robots.txt             (update)
public/sitemap.xml            (will be auto-generated, keep as fallback)
.gitignore                    (add .env.local if not present)
```

---

*End of implementation plan — getspanforge.com rewrite v2.0*
