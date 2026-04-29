# SpanForge Design System — Style Guide

> **This is the canonical style guide for all SpanForge apps.**  
> Every app in the SpanForge ecosystem must follow these conventions so the suite feels unified.  
> Last synced against the live codebase: **April 2026**.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Tokens](#2-color-tokens)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Buttons](#5-buttons)
6. [Cards & Panels](#6-cards--panels)
7. [Badges & Labels](#7-badges--labels)
8. [Navigation](#8-navigation)
9. [Hero Sections](#9-hero-sections)
10. [Section Patterns](#10-section-patterns)
11. [Footer](#11-footer)
12. [Animations](#12-animations)
13. [Terminal / Code Blocks](#13-terminal--code-blocks)
14. [Forms & Inputs](#14-forms--inputs)
15. [Docs Layout](#15-docs-layout)
16. [Shared Components](#16-shared-components)
17. [Accessibility](#17-accessibility)
18. [CSS Architecture Rules](#18-css-architecture-rules)
19. [Naming Conventions](#19-naming-conventions)
20. [Next.js / Font Setup](#20-nextjs--font-setup)
21. [Page Templates](#21-page-templates)
22. [Data Structures](#22-data-structures)
23. [Quick Reference](#23-quick-reference)
---

## 1. Brand Identity

| Element | Value |
|---|---|
| Product family | **SpanForge** |
| Wordmark | `Span` (black `#000`) + `Forge` (accent blue `var(--accent)`) |
| Display font | Space Grotesk (CSS var `--font-playfair`) |
| Body font | Manrope (CSS var `--font-dm-sans`) |
| Mono / code font | JetBrains Mono (CSS var `--font-dm-mono`) |
| Positioning | *"AI compliance infrastructure"* |
| Tagline | *"Where AI goes to production."* |
| Core promise | Instrument · Enforce · Prove |

The wordmark renders as two adjacent `<span>` elements with no space, no leading `#`:

```jsx
<span className={styles.logoSpan}>Span</span><span className={styles.logoForge}>Forge</span>
```

```css
.logoMark  { font-family: var(--font-playfair); font-size: 1.5rem; font-weight: 700; letter-spacing: -0.05em; line-height: 1; }
.logoSpan  { color: #000; }
.logoForge { color: var(--accent); }
```

A small monospace sub-label sits beneath the mark:

```css
.logoSub {
  font-family: var(--font-dm-mono);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
}
```

> **Note on font variable names:** The CSS variable names (`--font-playfair`, `--font-dm-sans`, `--font-dm-mono`) are preserved for backward compatibility. The actual typefaces are **Space Grotesk**, **Manrope**, and **JetBrains Mono** respectively.

---

## 2. Color Tokens

> **SpanForge uses a light theme.** The page background is a near-white blue-grey tint; cards and panels are pure white. The primary brand accent is electric blue.

Copy the entire `:root` block into `styles/globals.css` for every SpanForge app:

```css
:root {
  /* ── Brand accent ── */
  --accent:        #1266f1;              /* primary blue — use this, not --red */
  --accent-strong: #0b4dc7;             /* pressed / active */
  --accent-soft:   #e8f1ff;             /* tinted background */
  --teal:          #14b8a6;             /* secondary accent (used sparingly) */

  /* ── Backward-compatible aliases (do not remove) ── */
  --red:       #1266f1;                 /* same as --accent */
  --red-light: #2f7fff;                 /* hover blue */
  --red-dim:   #e8f1ff;                 /* same as --accent-soft */
  --rule2:     rgba(18, 102, 241, 0.18);/* blue-tinted rule */

  /* ── Backgrounds ── */
  --dark:      #f9fbfc;                 /* page background */
  --charcoal:  #eef4f8;                 /* light-section / alternating */
  --surface:   #ffffff;                 /* card / panel background */
  --surface-2: #f3f7fa;                 /* elevated card, hover state */

  /* ── Text & borders ── */
  --rule:  rgba(100, 116, 139, 0.18);  /* dividers, borders */
  --mid:   #7c8ba1;                    /* secondary labels, icon strokes */
  --muted: #475569;                    /* body copy, descriptions */
  --light: #162033;                    /* primary body text */
  --white: #0f172a;                    /* deepest headings, high-emphasis text */

  /* ── Terminal ── */
  --terminal-bg: #08111e;

  /* ── Phase accent colours ── */
  --discover: #1266f1;   /* blue   */
  --design:   #0f9d80;   /* teal   */
  --build:    #d97706;   /* amber  */
  --govern:   #7c3aed;   /* purple */
  --scale:    #dc2626;   /* red    */

  /* ── SDK track colours (book / learn pages) ── */
  --track-core:            #1266f1;
  --track-core-bg:         #e8f1ff;
  --track-security:        #dc2626;
  --track-security-bg:     #fee2e2;
  --track-compliance:      #7c3aed;
  --track-compliance-bg:   #ede9fe;
  --track-ops:             #0f766e;
  --track-ops-bg:          #ccfbf1;
  --track-advanced:        #b45309;
  --track-advanced-bg:     #fef3c7;
  --track-testing:         #0369a1;
  --track-testing-bg:      #e0f2fe;

  /* ── Semantic status ── */
  --green-sf: #166534;  --green-l: #dcfce7;
  --red-sf:   #991b1b;  --red-l:   #fee2e2;
  --amber-sf: #92400e;  --amber-l: #fef3c7;
  --purple-sf:#5b21b6;  --purple-l:#ede9fe;
  --teal-sf:  #0f766e;  --teal-l:  #ccfbf1;
  --danger:   #dc2626;

  /* ── Semantic aliases ── */
  --text-primary: var(--white);
  --text-muted:   var(--muted);
  --page-bg:      var(--dark);

  /* ── Layout ── */
  --max-width:    1240px;
  --side-padding: 2rem;  /* 1.15rem on mobile ≤720px */
}
```

### Token reference table

| Use case | Token |
|---|---|
| Page background | `--dark` (`#f9fbfc`) |
| Card / panel background | `--surface` (`#fff`) |
| Elevated card / hover | `--surface-2` (`#f3f7fa`) |
| Alternating section bg | `--charcoal` (`#eef4f8`) |
| Dividers / borders | `--rule` |
| Eyebrow, accent, links | `--accent` |
| Body text | `--muted` |
| High-emphasis text | `--white` |
| Primary body text | `--light` |
| Secondary labels | `--mid` |
| Hover / brighter blue | `--red-light` |
| Dark terminal bg | `--terminal-bg` |

**Never hard-code hex values** in component files. Always reference a token.

### Phase accent usage

Phase accent tokens are used as inline `style` props that set a local `--phase-color` custom property:

```jsx
<div style={{ '--phase-color': 'var(--discover)' }}>…</div>
```

| Phase | Token | Value | Colour |
|---|---|---|---|
| Discover | `--discover` | `#1266f1` | blue |
| Design | `--design` | `#0f9d80` | teal |
| Build | `--build` | `#d97706` | amber |
| Govern | `--govern` | `#7c3aed` | purple |
| Scale | `--scale` | `#dc2626` | red |

---

## 3. Typography

### Font faces

```js
// app/layout.js
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-playfair',   // CSS var preserved for back-compat
  display: 'swap',
})
const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',    // CSS var preserved for back-compat
  display: 'swap',
})
const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',    // CSS var preserved for back-compat
  display: 'swap',
})
```

Apply all three variables to the `<html>` tag:

```jsx
<html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
```

### Type roles

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Page H1 (home hero) | `--font-playfair` (Space Grotesk) | 700 | `clamp(3rem, 7vw, 5.6rem)` | `line-height: 0.94`, `letter-spacing: -0.06em` |
| Inner page H1 | `--font-playfair` | 700 | `clamp(3rem, 6vw, 4.8rem)` | `line-height: 0.95–0.96`, `letter-spacing: -0.05–0.06em` |
| Section H2 | `--font-playfair` | 700 | `clamp(2rem, 4vw, 3–3.2rem)` | `line-height: 1`, `letter-spacing: -0.05em` |
| Panel / card H2 | `--font-playfair` | 700 | `clamp(1.45rem, 2.2vw, 2rem)` | `line-height: 1.08`, `letter-spacing: -0.04em` |
| Blog card title | `--font-playfair` | 700 | `1.35rem` | `line-height: 1.12`, `letter-spacing: -0.04em` |
| Body copy | `--font-dm-sans` (Manrope) | 400 | `0.95–1.08rem` | `line-height: 1.75` |
| Base body | `--font-dm-sans` | 400 | `17px` | global default, `line-height: 1.65` |
| Secondary copy | `--font-dm-sans` | 400 | `0.82–0.94rem` | color `--muted` |
| Eyebrow / section label | `--font-dm-mono` (JetBrains Mono) | 400 | `0.72–0.75rem` | uppercase, `letter-spacing: 0.1em`, color `--accent` |
| Nav links | `--font-dm-sans` | 600 | `0.92rem` | color `--muted`, active → `--white` |
| Code / mono labels | `--font-dm-mono` | 400–500 | `0.68–0.82rem` | |
| Footer col headers | `--font-dm-mono` | 400 | `0.72rem` | uppercase, `letter-spacing: 0.1em` |
| Button text | `--font-dm-sans` | 600 | `0.82–0.92rem` | `white-space: nowrap` |

### Type patterns

**Eyebrow (`.eyebrow` global class)** — precedes section headings:

```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-family: var(--font-dm-mono, monospace);
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.eyebrow::before {
  content: '';
  width: 1.6rem;
  height: 1px;
  background: rgba(18, 102, 241, 0.35);
}
```

**Section label (`.sectionLabel`, `.panelKicker`)** — used inline in page modules instead of `.eyebrow`:

```css
.sectionLabel, .panelKicker {
  color: var(--accent);
  font-family: var(--font-dm-mono, monospace);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

**Tight heading convention** — all hero and section headings use aggressive tracking:

```css
/* Always apply these three together */
letter-spacing: -0.05em to -0.06em;   /* depends on size */
line-height:    0.94 to 1;
color:          var(--white);
```

---

## 4. Spacing & Layout

### Spacing values

SpanForge uses **rem / pixel** values with a loose 4px grid. There are no formal token variables for spacing — use design values from this table:

| Intent | Value |
|---|---|
| Tiny gap (within a component) | `0.4–0.65rem` |
| Standard internal gap | `0.8–1rem` |
| Card padding | `1.25–1.7rem` |
| Section intro bottom margin | `1.8rem` |
| Inter-component gap | `1.2–1.4rem` |
| Section vertical padding | `4.8rem 0` – `5rem 0` (most pages); `5.5rem 0 4rem` (home hero) |
| Hero vertical padding | `5–5.5rem 0 4–4.4rem` |

### Container

```css
:root {
  --max-width:    1240px;
  --side-padding: 2rem;    /* reduced to 1.15rem on ≤720px */
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--side-padding);
}
```

### Common grid patterns

| Pattern | CSS |
|---|---|
| Home hero two-col | `grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr); gap: 2rem` |
| Advisory hero two-col | `grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr); gap: 1.4rem` |
| 2-col content cards | `grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2–1.25rem` |
| 3-col content cards | `grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.2rem` |
| Blog / tool 3-col grid | `repeat(3, 1fr)` → `repeat(2, 1fr)` at ≤1024px → `1fr` at ≤760px |
| Footer | `minmax(0, 1.2fr) minmax(0, 0.8fr)` (brand + nav columns) |
| Docs layout | `300px minmax(0, 1fr)` |

### Breakpoints

| Name | Value | What changes |
|---|---|---|
| Mobile base | `≤720px` | `--side-padding → 1.15rem`, `#main-content padding-top → 72px` |
| Grid collapse | `≤760px` | 3-col card grids → 1-col |
| Footer collapse | `≤860px` | Footer → single column |
| Docs sidebar | `≤900px` | Sidebar hidden, mobile select shown |
| Nav collapse | (implicit) | Nav hides desktop links, shows hamburger |
| Tablet | `≤1024px` | 3-col grids → 2-col |

---

## 5. Buttons

All buttons share a base shape: **pill** (`border-radius: 999px`), `min-height: 2.95rem`, `padding: 0.82rem 1.2rem`. They are defined as global utility classes in `globals.css`.

```css
.btn-primary,
.btn-ghost,
.btn-mono {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.95rem;
  padding: 0.82rem 1.2rem;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
  font-weight: 600;
}
```

### Primary button

```css
.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, #2680ff 100%);
  color: #fff;
  box-shadow: 0 16px 35px rgba(18, 102, 241, 0.24);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 20px 38px rgba(18, 102, 241, 0.28);
}
```

### Ghost button

```css
.btn-ghost {
  border: 1px solid rgba(100, 116, 139, 0.35);
  background: rgba(255, 255, 255, 0.85);
  color: var(--white);
}
.btn-ghost:hover {
  transform: translateY(-1px);
  border-color: rgba(18, 102, 241, 0.3);
  background: #fff;
}
```

### Mono button (dark gradient, monospace font)

Used on nav CTAs and install prompts:

```css
.btn-mono {
  background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
  color: #fff;
  font-family: var(--font-dm-mono, monospace);
  font-size: 0.82rem;
}
```

### Rules

- **Shape**: all buttons are pill-shaped (`999px`). Never use square corners on interactive controls.
- **Size**: `min-height: 2.95rem` ensures touch-target compliance. Never use `height`.
- **CTA groups**: pair primary + ghost using `display: flex; gap: 0.9rem; flex-wrap: wrap`.
- **Disabled state**: use `opacity: 0.6; cursor: not-allowed; pointer-events: none`.
- **Icon + text**: add `gap: 0.5rem` on the button.

---

## 6. Cards & Panels

### Base card pattern (glassmorphism)

All cards use a consistent glassmorphism base:

```css
.card {
  border-radius: 1.25rem;                       /* standard radius */
  border: 1px solid rgba(148, 163, 184, 0.16);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbfd 100%);
  /* or: background: rgba(255, 255, 255, 0.86) for overlaid / hero panels */
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.045);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08);
  border-color: rgba(18, 102, 241, 0.25);
}
```

### Border-radius scale

| Radius | Used for |
|---|---|
| `0.75rem` | Form inputs, small UI chips |
| `1rem` | Sidebar sections, small overlays |
| `1.1–1.25rem` | Standard content cards (ToolCard, contact cards) |
| `1.3–1.35rem` | BlogCard, ResourceCard |
| `1.5rem` | Advisory hero panel, docs content area |
| `1.8rem` | Home hero panel (largest surface) |
| `999px` | Pills (badges, buttons, filter chips) |

### BlogCard

```jsx
<Link href={`/blog/${slug}`} className={styles.card}>
  <div className={styles.inner}>
    <div className={styles.meta}>
      <span className={styles.tag}>   {/* phase pill badge, dynamic inline color */}
      <span className={styles.date}>  {/* JetBrains Mono 0.74rem --mid */}
      <span className={styles.readingTime}>
    </div>
    <h3 className={styles.title}>    {/* Space Grotesk 700 1.35rem letter-spacing -0.04em */}
    <p className={styles.excerpt}>   {/* 0.95rem --muted line-height 1.75 */}
    <span className={styles.readMore}> {/* --accent mono 0.76rem */}
  </div>
</Link>
```

Phase badge colors for BlogCard / ResourceCard tags (inline `style`):

```js
const PHASE_COLORS = {
  discover: { bg: 'rgba(18,102,241,0.1)',    text: '#1266f1' },
  design:   { bg: 'rgba(15,157,128,0.1)',    text: '#0f9d80' },
  build:    { bg: 'rgba(217,119,6,0.1)',     text: '#d97706' },
  govern:   { bg: 'rgba(124,58,237,0.1)',    text: '#7c3aed' },
  scale:    { bg: 'rgba(220,38,38,0.1)',     text: '#dc2626' },
  general:  { bg: 'rgba(100,116,139,0.1)',   text: '#7c8ba1' },
}
```

### ResourceCard

```jsx
<div className={styles.card}>
  <div className={styles.inner}>
    <div className={styles.meta}>
      <span className={styles.typeBadge}> {/* pill, dynamic color per type */}
      <span className={styles.pageCount}> {/* mono 0.74rem --mid */}
      <span className={styles.date}>
      <span className={styles.author}>
    </div>
    <h3 className={styles.title}>        {/* 1.3rem letter-spacing -0.04em */}
    <p className={styles.excerpt}>
    <div className={styles.actions}>
      <span className={styles.readBtn}>   {/* pill, accent-tinted */}
      <span className={styles.downloadBtn}> {/* pill, ghost */}
    </div>
  </div>
</div>
```

Resource type badge colors:

```js
const TYPE_META = {
  whitepaper:       { label: 'Whitepaper',     color: '#1565C0', bg: 'rgba(21,101,192,0.1)'  },
  'research-paper': { label: 'Research Paper', color: '#6A1B9A', bg: 'rgba(106,27,154,0.1)' },
  'mini-book':      { label: 'Mini Book',      color: '#1B5E20', bg: 'rgba(27,94,32,0.1)'   },
  guide:            { label: 'Guide',          color: '#E65100', bg: 'rgba(230,81,0,0.1)'   },
  spec:             { label: 'Spec',           color: '#B71C1C', bg: 'rgba(183,28,28,0.1)'  },
  report:           { label: 'Report',         color: '#37474F', bg: 'rgba(55,71,79,0.1)'   },
}
```

### ToolCard

```jsx
<div className={styles.card}>
  <div className={styles.cardTopRow}>
    <span className={styles.badge} />     {/* global .badge pill */}
    <span className={styles.availableBadge} /> {/* or .inBuildBadge */}
  </div>
  <h3 className={styles.name}><code>sf_service</code></h3>
  <p className={styles.desc} />
  <Link href={…} className={styles.viewDocs}>View docs →</Link>
</div>
```

Status badge colors:
- **Available**: `background: rgba(20, 184, 166, 0.14); color: #115e59` (teal)
- **In build**: `background: rgba(245, 158, 11, 0.14); color: #92400e` (amber)
- **Locked**: `opacity: 0.45; pointer-events: none`

### Hero glass panel

Right column in home / advisory hero:

```css
.heroPanel {
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(20px);
  padding: 1.4rem;
}
```

### Trust signal mini-cards

Stats displayed below the hero CTA row:

```css
.trustCard {
  padding: 1rem 1.1rem;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(12px);
}
.trustValue { color: var(--white); font-size: 1.4rem; font-weight: 700; line-height: 1; }
.trustLabel { color: var(--muted); font-size: 0.86rem; line-height: 1.45; }
```

---

## 7. Badges & Labels

All badges are pill-shaped (`border-radius: 999px`) with a subtle border. They share a base class defined in `globals.css`:

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-family: var(--font-dm-mono, monospace);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid transparent;
}
```

### Tool / SDK type badges

| Class | Background | Color | Meaning |
|---|---|---|---|
| `.badge-webapp` | `var(--accent-soft)` | `var(--discover)` | Web Application |
| `.badge-python` | `var(--teal-l)` | `var(--design)` | Python SDK |
| `.badge-doc` | `var(--amber-l)` | `var(--build)` | Documentation |
| `.badge-fw` | `var(--purple-l)` | `var(--govern)` | Framework |
| `.badge-product` | `var(--red-l)` | `var(--scale)` | Product |

### Filter chips (resources / tools pages)

```css
.filterBtn {
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  background: #fff;
  color: var(--muted);
  font-family: var(--font-dm-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.filterActive {
  background: rgba(18, 102, 241, 0.08);
  border-color: rgba(18, 102, 241, 0.2);
  color: var(--accent);
}
```

### Hero / inline eyebrow badge

Used in the home hero above the H1:

```css
.badge {   /* scoped to page.module.css */
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(18, 102, 241, 0.15);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.05);
  color: var(--accent);
  font-family: var(--font-dm-mono);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

### Announcement banner (GABanner)

```css
.banner {
  padding: 0.7rem 1.25rem;
  background: linear-gradient(90deg, #0f4c8a 0%, #1266f1 60%, #0ea472 100%);
  color: #fff;
  font-size: 0.9rem;
}
.dot { width: 8px; height: 8px; border-radius: 50%; background: #34d399; animation: pulse 2s ease-in-out infinite; }
.link { color: #a5f3d0; font-weight: 600; border-bottom: 1px solid rgba(165, 243, 208, 0.4); }
```

The `GABanner` is rendered above `<Nav />` in the page tree. It stores dismissal in `sessionStorage`.

---

## 8. Navigation

### Structure

```jsx
<nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
  <div className={`container ${styles.inner}`}>
    <Link href="/" className={styles.logo}>  {/* wordmark + sub-label */}
    <div className={styles.links}>           {/* floating pill nav strip */}
      <Link className={styles.link} />       {/* × N */}
    </div>
    <div className={styles.right}>
      <Link className={styles.talkLink}>Talk to us</Link>
      <Link className={styles.installBtn}>Explore SDK</Link>
      <button className={styles.hamburger} />
    </div>
  </div>
</nav>
```

### Dimensions & behavior

| Property | Value |
|---|---|
| Height | `78px` |
| Position | `fixed; top: 0; left: 0; right: 0; z-index: 100` |
| `#main-content` offset | `padding-top: 78px` (72px on mobile) |
| Default bg | `rgba(249, 251, 252, 0.68)` — always frosted glass |
| Scrolled bg (>24px) | `rgba(249, 251, 252, 0.92)` |
| Backdrop filter | `blur(18px)` (always on) |
| Border bottom default | `transparent` |
| Border bottom scrolled | `rgba(148, 163, 184, 0.18)` |
| Box shadow scrolled | `0 14px 35px rgba(15, 23, 42, 0.06)` |

### Link strip

Nav links are grouped inside a **floating pill container**:

```css
.links {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.14);
}
.link {
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 600;
  transition: background 0.18s ease, color 0.18s ease;
}
.link:hover { color: var(--white); }
.active {
  background: #fff;
  color: var(--white);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
}
```

Desktop links are hidden below `1080px` (controlled by the `.links` element having `display: none` on mobile). The hamburger appears instead.

### CTA button (installBtn)

```css
.installBtn {
  background: linear-gradient(135deg, #0f172a 0%, #1266f1 100%);
  color: #fff;
  font-family: var(--font-dm-mono);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  border-radius: 999px;
  min-height: 2.8rem;
  padding: 0.8rem 1rem;
  box-shadow: 0 14px 30px rgba(18, 102, 241, 0.2);
}
```

### Mobile overlay

Mobile menu opens as a **full-screen overlay** (not a sidebar):

```css
.overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: linear-gradient(180deg, #f8fbfd 0%, #eef5f9 100%);
  display: flex;
  flex-direction: column;
  padding: 0 var(--side-padding) 1.5rem;
}
```

Accessibility requirements for the overlay:
- `role="dialog" aria-modal="true"`
- Focus trap via Tab key handling
- Escape key closes it
- `document.body.style.overflow = 'hidden'` while open
- Focus moves to close button on open
- `aria-expanded` on hamburger button

---

## 9. Hero Sections

### Home page hero

```css
.hero {
  position: relative;
  padding: 5.5rem 0 4rem;
  background:
    radial-gradient(circle at top left, rgba(64, 160, 255, 0.22), transparent 34%),
    radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.18), transparent 24%),
    linear-gradient(180deg, #f7fbff 0%, #eef5fb 48%, #f9fcfe 100%);
}
.hero::before {
  content: '';
  position: absolute;
  inset: auto -10% 6rem 45%;
  height: 24rem;
  background: linear-gradient(135deg, rgba(18, 102, 241, 0.08), rgba(15, 23, 42, 0));
  filter: blur(12px);
  pointer-events: none;
}
```

Typography:
- **H1**: `clamp(3rem, 7vw, 5.6rem)`, Space Grotesk 700, `--white`, `line-height: 0.94`, `letter-spacing: -0.06em`, `max-width: 12ch`
- **Sub**: `1.08rem`, Manrope 400, `--muted`, `line-height: 1.75`, `max-width: 40rem`

Layout:
```css
.heroGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  gap: 2rem;
  align-items: stretch;
}
```

### Inner page / product hero

```css
.hero {
  padding: 5rem 0 4rem;
  background:
    radial-gradient(circle at 12% 12%, rgba(18, 102, 241, 0.12–0.16), transparent 24–26%),
    linear-gradient(180deg, #f7fbfd 0%, #eef5f9 100%);
}
```

Typography:
- **Eyebrow label**: JetBrains Mono, `0.72–0.75rem`, uppercase, `--accent`, `letter-spacing: 0.1em`
- **H1**: `clamp(3rem, 6vw, 4.6–5rem)`, Space Grotesk 700, `--white`, `line-height: 0.95–1`, `letter-spacing: -0.05em`
- **Sub**: `1.04–1.08rem`, Manrope 400, `--muted`, `line-height: 1.75`

### Two-column hero layout (advisory / contact pages)

```css
.heroGrid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 1.4rem;
  align-items: start;
}
/* Collapse at ≤960px */
```

Right column uses the glass panel card style (see §6 Hero glass panel).

---

## 10. Section Patterns

### Vertical padding

All content sections use `padding: 5rem 0` (`4.8rem 0` on some inner pages).

**Never use `80px`** — use `5rem` to stay in the rem scale.

### Background alternation

Pages alternate between these background values for visual rhythm:

| Value | Use |
|---|---|
| `var(--dark)` | Standard content sections |
| `linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%)` | Light lifted sections |
| `linear-gradient(180deg, #f4f8fb 0%, #eef5f8 100%)` | Slightly tinted sections |
| `linear-gradient(180deg, #f4f8fb 0%, #edf4f8 100%)` | Slightly deeper tint |
| `linear-gradient(180deg, #f7fbfd 0%, #eef5f9 100%)` | Hero sections |

Never use two identical backgrounds in a row. Avoid hard `--charcoal` blocks — prefer gradients.

### Section intro

```jsx
<div className={styles.sectionIntro}>
  <span className={styles.sectionLabel}>Category label</span>
  <h2 className={styles.secH}>Section headline.</h2>
  <p className={styles.secSh}>Supporting copy with max-width constraint.</p>
</div>
```

```css
.sectionIntro { margin-bottom: 1.8rem; }
.secH {
  margin-top: 0.45rem;
  margin-bottom: 0.7rem;
  color: var(--white);
  font-size: clamp(2rem, 4vw, 3–3.2rem);
  line-height: 1;
  letter-spacing: -0.05em;
  max-width: 16ch;
}
.secSh { max-width: 44rem; color: var(--muted); font-size: 1.04rem; line-height: 1.75; }
```

### Pillar / feature card grid

```css
.pillarsGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}
/* or repeat(2, 1fr) for 2-col variants */
```

Card internal structure: numbered index (`0N`, JetBrains Mono, `--accent`) + H3 + body + link.

### "Is / Is Not" columns

Used on About and advisory pages to clarify positioning:

```css
.isNotGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
.isNotColHead { font-family: var(--font-dm-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
.isNotCheck { color: #0f9d80; }  /* ✓ */
.isNotCross { color: #dc2626; }  /* ✗ */
```

---

## 11. Footer

The footer uses a **dark navy theme** — this is the opposite of the light page. It is one of two dark surfaces (the other being code terminals).

```css
.footer {
  background:
    radial-gradient(circle at top left, rgba(18, 102, 241, 0.16), transparent 28%),
    linear-gradient(180deg, #0a1322 0%, #09111e 100%);
  color: #d8e2ef;
}
```

### Layout

```css
.top {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 2.5rem;
}
.columns { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.6rem; }
```

### Brand column

```css
.brandMark { font-family: var(--font-playfair); font-size: 1.8rem; font-weight: 700; letter-spacing: -0.05em; }
.brandSpan  { color: #fff; }
.brandForge { color: var(--accent); }
.brandSub   { font-family: var(--font-dm-mono); font-size: 0.64rem; letter-spacing: 0.08em; text-transform: uppercase; color: #7d8ea8; }
.brandLead  { font-size: 1rem; line-height: 1.8; color: #d8e2ef; }
.brandMeta  { font-family: var(--font-dm-mono); font-size: 0.76rem; letter-spacing: 0.1em; text-transform: uppercase; color: #7d8ea8; }
```

The brand column includes the **NewsletterSignup** component (inline dark variant). See §16.

### Nav columns

```css
.colHead { color: #8fb7ff; font-family: var(--font-dm-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; }
.colLink { color: #c2cfdf; font-size: 0.95rem; transition: color 0.2s ease; }
.colLink:hover { color: #fff; }
```

### Footer bottom bar

```css
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.1rem;
  padding-bottom: 1.6rem;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
}
.copy, .motto { color: #7d8ea8; font-size: 0.82rem; }
```

### Collapse

- `≤860px` → single column (brand + nav collapse to `1fr`)
- `≤640px` → `.bottom` stacks vertically

---

## 12. Animations

Import `styles/animations.css` into every app's root stylesheet.

### Keyframes

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Named "pulseRed" — actually animates the brand blue */
@keyframes pulseRed {
  0%, 100% { box-shadow: 0 0 0 0 rgba(18, 102, 241, 0.45); }
  50%       { box-shadow: 0 0 0 6px rgba(18, 102, 241, 0); }
}
```

### Utility classes

```css
.fade-up   { animation: fadeUp 0.7s ease forwards; opacity: 0; }
.fade-up-1 { animation: fadeUp 0.7s ease 0.1s forwards; opacity: 0; }
.fade-up-2 { animation: fadeUp 0.7s ease 0.2s forwards; opacity: 0; }
.fade-up-3 { animation: fadeUp 0.7s ease 0.3s forwards; opacity: 0; }
.fade-up-4 { animation: fadeUp 0.7s ease 0.4s forwards; opacity: 0; }
.pulse-red { animation: pulseRed 2s infinite; }

/* Scroll reveal — toggled by IntersectionObserver */
.reveal            { opacity: 0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```

### Transition conventions

| Element | Duration | Easing |
|---|---|---|
| Color, background, border | `0.2s` | `ease` |
| Transform (lift, slide) | `0.2s` | `ease` |
| Intro fade-up | `0.7s` | `ease` |
| Scroll reveal | `0.5s` | `ease` |
| Nav background on scroll | `0.2s` | `ease` |

### Reduced motion

**Always** include in `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Terminal / Code Blocks

SpanForge has two terminal patterns:

### AuditTerminal (live animated feed)

Used on the homepage to show a live HMAC audit chain. The outer container is the `AuditTerminal` component.

```css
/* AuditTerminal.module.css */
.terminal {
  background: #0D1117;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-family: var(--font-dm-mono);
  font-size: 0.78rem;
  line-height: 1.85;
}
.header {
  background: #161B22;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 10px 16px;
}
```

Token color classes inside `AuditTerminal`:

| Class | Color | Semantic |
|---|---|---|
| `.ts` | `#94a3b8` | Timestamp |
| `.ok` | `#8ee3c4` | SIGNED / verified |
| `.ok2` | `#67e8c2` | Chain verified |
| `.blk` | `#f5a3a3` | BLOCKED |
| `.rd` | `#ffd379` | REDACT / warning |
| `.ev` | `#E8E8E8` | Event name |
| `.cm` | `#94a3b8` | Detail / muted |

### Inline code card (static, in hero panels)

Used inside hero panels for marketing code examples:

```css
.codeCard {
  background: #08111e;              /* --terminal-bg */
  border-radius: 1.35rem;
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}
.codeHeader {
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
```

Chrome dots:
```css
.codeDot:nth-child(1) { background: #ff5f57; }  /* close */
.codeDot:nth-child(2) { background: #febc2e; }  /* minimize */
.codeDot:nth-child(3) { background: #28c840; }  /* expand */
```

Token color classes for the inline code card:

| Class | Color | Use |
|---|---|---|
| `.tMuted` | `#6f88a8` | Prompt `$`, dim text |
| `.tStrong` | `#f8fafc` | Highlighted output |
| `.tKey` | `#8cc8ff` | Python keywords |
| `.tTag` | `#f6a13a` | Decorators `@` |
| `.tText` | `#dde6f3` | Default code text |
| `.tComment` | `#61c7a9` | Comments |
| `.tString` | `#ffd379` | String literals |

### Prose code blocks (docs / blog)

```css
/* Within .mdContent */
:not(pre) > code {
  padding: 0.12rem 0.4rem;
  border-radius: 0.4rem;
  background: rgba(18, 102, 241, 0.08);
  border: 1px solid rgba(18, 102, 241, 0.1);
  color: var(--accent);
  font-family: var(--font-dm-mono);
  font-size: 0.86em;
}
pre {
  background: #08111e;
  border-radius: 1.15rem;
  border: 1px solid rgba(148, 163, 184, 0.16);
  padding: 1.2rem;
}
pre code { color: #dce6f2; background: none; border: none; }
```

### JourneyStrip (tabbed stepper)

Interactive 5-step tabbed strip used on the homepage developer workflow section.

```css
.strip {
  display: flex;
  align-items: stretch;
  background: var(--charcoal);
  border-radius: 8px;
  border: 0.5px solid var(--rule);
}
.step {
  flex: 1;
  padding: 16px 14px;
  border-right: 0.5px solid var(--rule);
  text-align: left;
  cursor: pointer;
}
.stepActive { background: var(--surface-2); }
.stepActive .label { color: var(--accent); }
.detail {
  margin-top: 16px;
  padding: 18px 22px;
  background: var(--surface-2);
  border-left: 3px solid var(--red-light);
}
```

Accessibility: uses `role="tablist"` / `role="tab"` / `role="tabpanel"` with `aria-selected`, `aria-controls`, `aria-labelledby`.

---

## 14. Forms & Inputs

All form inputs use rounded corners and a frosted glass style to match the overall aesthetic.

```css
.input,
.select,
.textarea {
  width: 100%;
  padding: 0.72rem 0.9rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.22);
  color: var(--white);
  font-size: 0.95rem;
  transition: border-color 0.18s, box-shadow 0.18s;
  outline: none;
  appearance: none;
}

.input:focus,
.select:focus,
.textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(18, 102, 241, 0.12);
  background: #fff;
}
```

### Error state

```css
.inputError { border-color: #dc2626; }
.inputError:focus { box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12); }
.errorMsg { color: #dc2626; font-size: 0.82rem; }
```

### Field label

```css
.label { color: var(--white); font-size: 0.88rem; font-weight: 600; letter-spacing: -0.01em; }
.optional { color: var(--muted); font-weight: 400; font-size: 0.8rem; }
```

### Two-column form row

```css
.row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
/* Collapses to 1fr at ≤640px */
```

### Success state

```css
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(22, 163, 74, 0.2);
}
```

Use a green checkmark SVG (circle fill `rgba(22,163,74,0.1)`, stroke `#16a34a`).

### Form submission

Contact forms use **Formspree** (`https://formspree.io/f/…`). Always:
1. Validate client-side before submission
2. Submit JSON (`Content-Type: application/json, Accept: application/json`)
3. Show a spinner in the submit button during loading (`opacity: 0.6; cursor: not-allowed`)
4. Handle server errors gracefully with a fallback direct email address

---

## 15. Docs Layout

The docs section (`/docs`, `/spanforgecore`) uses a two-pane layout:

```css
.docsOuter {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  min-height: calc(100vh - 78px);
  background: linear-gradient(180deg, #f7fbfd 0%, #eef4f8 100%);
}
```

### Sidebar

```css
.sidebar {
  position: sticky;
  top: 78px;
  height: calc(100vh - 78px);
  overflow-y: auto;
  padding: 1rem;
  border-right: 1px solid rgba(148, 163, 184, 0.16);
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(18px);
}
```

Sidebar group sections are collapsible with a chevron. Active link:

```css
.active { background: rgba(18, 102, 241, 0.08); color: var(--accent); font-weight: 700; border-radius: 0.75rem; }
```

At `≤900px`, sidebar is hidden and replaced with a `<select>` dropdown.

### Markdown content area

```css
.mdContent {
  width: min(100%, 56rem);
  padding: 1.7rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.045);
  font-size: 0.98rem;
  line-height: 1.85;
}
```

Heading scale inside `.mdContent`:

| Heading | Size | Notes |
|---|---|---|
| `h1` | `clamp(2.3rem, 4vw, 3.5rem)` | Bottom border, `letter-spacing: -0.04em` |
| `h2` | `1.85rem` | `margin: 2.6rem 0 0.85rem` |
| `h3` | `1.28rem` | `margin: 2rem 0 0.7rem` |
| `h4` | `0.95rem` | `letter-spacing: 0.04em` |

Blockquote: `border-left: 4px solid var(--accent)`, `border-radius: 0 1rem 1rem 0`, `background: rgba(18, 102, 241, 0.05)`.

---

## 16. Shared Components

### GABanner

Announcement strip rendered **above** `<Nav />`. Stores dismissal state in `sessionStorage`. Key behavior:
- Shows pre-launch copy before `GA_DATE`, post-launch copy after
- `dismissed` state initialized to `true` (hidden) on server to avoid flash
- Reads `sessionStorage` in `useEffect` to set real state

### NewsletterSignup

Two variants:
- **`variant="section"`** (default): centered card with light blue gradient background, max-width 740px
- **`variant="inline" dark`**: compact version used inside the footer's dark brand column

Both variants embed the Substack iframe (`https://spanforge.substack.com/embed`), `height: 140px`.

```css
/* Card variant */
.card {
  background: linear-gradient(135deg, #e8f1ff 0%, #f0f7ff 60%, #eef4ff 100%);
  border: 1px solid rgba(18, 102, 241, 0.15);
  border-radius: 20px;
  padding: 3.5rem;
  max-width: 740px;
}
/* iframeWrap */
.iframeWrap { border-radius: 12px; overflow: hidden; background: #fff; border: 1px solid rgba(100, 116, 139, 0.18); }
.iframeWrapDark { background: rgba(255, 255, 255, 0.06); border-color: rgba(148, 163, 184, 0.18); }
```

### ContactForm

Client component. Uses **Formspree** for submission. Validates required fields client-side. Shows:
- Inline field errors with `role="alert"`
- Global server error below the form
- Success state with a green checkmark illustration

### DocsSidebar

Collapsible section groups, keyboard-accessible, active-link detection via `usePathname`. Mobile fallback is a native `<select>` element.

### AuditTerminal

Animated live audit chain feed. Cycles through `LOG_LINES` array every 1800ms with a slide-in animation on new entries. Uses `aria-live="off"` (decorative) to avoid screen reader noise.

### JourneyStrip

Five-tab stepper. Each tab is a `<button role="tab">`. Clicking sets `active` state and shows a detail panel below.

---

## 17. Accessibility

### Focus styles

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

### Skip link

```css
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.55rem 0.95rem;
  border-radius: 0.6rem;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  transition: top 0.2s ease;
}
.skip-to-content:focus { top: 1rem; }
```

Place `<a href="#main-content" className="skip-to-content">Skip to content</a>` as the **very first child** of `<body>`.

### Screen reader utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Rules

- All interactive elements keyboard-reachable
- Icon-only controls must have `aria-label`
- Decorative animations/SVGs use `aria-hidden="true"`
- Tab panels: `role="tablist"`, `role="tab"` (with `aria-selected`), `role="tabpanel"` (with `aria-labelledby`)
- Dialogs/overlays: `role="dialog" aria-modal="true" aria-label="…"`, focus trap on Tab, Escape closes
- Min contrast: 4.5:1 body text, 3:1 large text

---

## 18. CSS Architecture Rules

1. **Design tokens** live in `styles/globals.css` `:root`. Never repeat them in component files.
2. **Component styles** use **CSS Modules** (`.module.css`). No styled-components, Tailwind, or emotion.
3. **Inline styles** are only acceptable for data-driven dynamic values (e.g., `style={{ '--phase-color': 'var(--discover)' }}`).
4. **Global utility classes** (`btn-primary`, `btn-ghost`, `btn-mono`, `container`, `eyebrow`, `badge`, `badge-webapp`, `badge-python`, `badge-doc`, `badge-fw`, `badge-product`, `fade-up`, `reveal`, `skip-to-content`, `sr-only`) are defined in `globals.css` only. Global classes use **kebab-case**; CSS Module classes use **camelCase**.
5. **No magic numbers.** Use semantic values from the spacing table or document the exception with a comment.
6. **No `!important`** except inside `prefers-reduced-motion` blocks.
7. Responsive breakpoints:

| Breakpoint | Value | Trigger |
|---|---|---|
| Mobile | `≤720px` | `--side-padding` → `1.15rem`, `#main-content` → `72px` |
| Grid collapse | `≤760px` | Most 3-col grids → 1-col |
| Footer | `≤860px` | Footer grid → single column |
| Docs sidebar | `≤900px` | Sidebar hidden |
| Tablet | `≤1024px` | 3-col grids → 2-col |

### App-shell layout pattern

```jsx
// app/layout.js — no AuthSessionProvider in the current build
<html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
  <body>
    <Nav />
    <main id="main-content">{children}</main>
    <Footer />
    <Script id="org-jsonld" type="application/ld+json" … />
    <Script defer data-domain="getspanforge.com" src="https://plausible.io/js/script.js" strategy="lazyOnload" />
    <Analytics />
    <SpeedInsights />
  </body>
</html>
```

`#main-content` gets `padding-top: 78px` (72px on mobile) via `globals.css` — not per-page styles.

### Spinner (loading state)

```css
/* Use the global .spinner class */
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--rule);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
```

---

## 19. Naming Conventions

### CSS Module class names — camelCase

| Pattern | Example |
|---|---|
| Root wrapper | `.hero`, `.section`, `.card`, `.strip` |
| Sub-element | `.heroH1`, `.cardTitle`, `.navLink`, `.sectionLabel` |
| Modifier / state | `.active`, `.scrolled`, `.locked`, `.stepActive` |
| Variant suffix | `.cardFeatured`, `.innerFeatured`, `.inlineDark` |

### CSS variable names — `--kebab-case`

Group by semantic prefix:

| Group | Examples |
|---|---|
| Brand accent | `--accent`, `--accent-strong`, `--accent-soft` |
| Backgrounds | `--dark`, `--surface`, `--surface-2`, `--charcoal` |
| Text | `--white`, `--light`, `--muted`, `--mid` |
| Borders | `--rule`, `--rule2` |
| Phase colours | `--discover`, `--design`, `--build`, `--govern`, `--scale` |
| Track colours | `--track-core`, `--track-security`, … |
| Fonts | `--font-playfair`, `--font-dm-sans`, `--font-dm-mono` |
| Layout | `--max-width`, `--side-padding` |

### File naming

```
components/
  ComponentName.jsx
  ComponentName.module.css

app/
  page-name/
    page.js
    page.module.css
```

### Component props

Use clear, semantic prop names. Variant props use string unions: `variant="inline" | "section"`. Boolean flags: `dark`, `locked`, `featured`.

---

## 20. Next.js / Font Setup

### `app/layout.js`

```js
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import '../styles/animations.css'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-playfair',
  display: 'swap',
})
const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})
const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SpanForge',
  url: 'https://www.getspanforge.com',
  description: '…',
  sameAs: ['https://www.linkedin.com/in/spanforge'],
}

export const metadata = {
  metadataBase: new URL('https://www.getspanforge.com'),
  title: {
    template: '%s | SpanForge',
    default: 'SpanForge | AI Compliance Infrastructure for Production Systems',
  },
  description: '…',
  openGraph: { type: 'website', siteName: 'SpanForge' },
  twitter: { card: 'summary_large_image', site: '@getspanforge' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <Script defer data-domain="getspanforge.com" src="https://plausible.io/js/script.js" strategy="lazyOnload" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Per-route metadata

```js
export const metadata = {
  title: 'Page Title',   // ← appended as "Page Title | SpanForge" via template
  description: '…',
}
```

### Shared files to copy into every new SpanForge app

```
styles/
  globals.css       ← all :root tokens + utility classes
  animations.css    ← keyframes + animation utilities
components/
  Nav.jsx + Nav.module.css
  Footer.jsx + Footer.module.css
  NewsletterSignup.jsx + NewsletterSignup.module.css
```

Customize `NAV_LINKS`, `productLinks`, and `companyLinks` per-app; never change token names.

---

## 21. Page Templates

### Home page (`app/page.js`)

1. `<GABanner />` (above Nav, conditional)
2. Hero — two-col grid: copy (H1 + sub + CTA row + trust grid) + glass panel (intro + code card)
3. Pillars section — eyebrow + H2 + 3-col pillar cards
4. Journey section — eyebrow + H2 + `<JourneyStrip />`
5. Audit section — `<AuditTerminal />` beside copy
6. SDK section — SDK service cards grid (up to 3-col)
7. Catches section — 3 scenario cards (blocked secret, PII, drift)
8. Compliance section — framework table
9. Newsletter section — `<NewsletterSignup />`
10. Dual CTA section — two action paths

### Blog listing page (`app/blog/page.js`)

1. Hero — eyebrow + H1 (`clamp(3rem, 6vw, 4.8rem)`) + sub
2. Featured post — full-width `cardFeatured` (2-col inner layout)
3. Posts grid — `repeat(3, 1fr)` → `repeat(2, 1fr)` at ≤1024px → `1fr` at ≤760px
4. Editorial CTA strip
5. Newsletter section

### Blog post page (`app/blog/[slug]/page.js`)

- Breadcrumb: Home → Blog → Post title
- H1: Space Grotesk 700, `clamp(2rem, 4vw, 3rem)`
- Phase badge pill + date
- Prose content in `.mdContent` glassmorphism panel, `max-width: 56rem`, `line-height: 1.85`

### Resources page (`app/resources/page.js`)

1. Hero
2. Filter button strip (pill buttons, `filterActive` on selection)
3. ResourceCard grid — `repeat(3, 1fr)` → `repeat(2, 1fr)` → `1fr`

### Tools / SDK page

1. Hero
2. SDK service cards grid (11 services)
3. Phase breakdown stats
4. Coming-soon locked card grid

### Contact page (`app/contact/page.js`)

1. Hero — two-col grid (H1 + sub + `.heroAnchor`) + side panel
2. Paths section — 2-col path cards
3. Form section — `<ContactForm />` (max-width 52rem)
4. Expectations section — 3-col items
5. Direct strip — email / social direct contact items
6. CTA strip

### About page (`app/about/page.js`)

1. Hero
2. Mission section — 2-col mission grid
3. "Is / Is Not" section — 2-col columns with checkmarks
4. Building section — 3-col building cards
5. Values section — 2-col values grid
6. CTA section

### Advisory page (`app/advisory/page.js`)

1. Hero — two-col grid + lifecycle panel on right
2. Compliance gap section — gap cards
3. Lifecycle section — 5-stage process cards
4. Engagement section — engagement model cards
5. CTA section

### Docs pages (`app/docs/`, `/app/spanforgecore/`)

Sidebar (`300px` fixed) + content area (glassmorphism `.mdContent` card). Sidebar collapses to `<select>` on mobile.

---

## 22. Data Structures

### `lib/blog.js`

Post markdown files live in `content/blog/`. Frontmatter:

```yaml
---
title: "Post Title"
date: "2026-01-15"
excerpt: "One-sentence summary."
phase: discover      # discover | design | build | govern | scale | general
readingTime: "5 min" # optional
---
```

Functions: `getAllPosts()`, `getPostBySlug(slug)`, `getAllSlugs()`.

### `lib/resources.js`

Resource markdown files live in `content/resources/`. Frontmatter:

```yaml
---
title: "Resource Title"
date: "2026-01-15"
excerpt: "Summary."
type: whitepaper     # whitepaper | research-paper | mini-book | guide | spec | report
author: "Author Name"
pageCount: 24        # optional
downloadUrl: "…"     # optional PDF link
---
```

Functions: `getAllResources()`, `getResourceBySlug(slug)`, `getAllResourceSlugs()`.

### `lib/tools-data.js`

```js
export const showcaseTools = [
  {
    id:          'sdk-sf-identity',
    name:        'sf_identity',
    desc:        'Keys, JWT, magic links, SAML, SCIM…',
    tags:        [{ label: 'security', cls: 'tagSec' }],
    available:   true,          // false → shows inBuildBadge
    locked:      false,         // true → locked card state (opacity 0.45)
    href:        '/tools/sdk-sf-identity',
  },
  // …× 11 SDK services
]
```

SDK tag classes → badge class mapping:

| `cls` value | Badge style |
|---|---|
| `tagSec` | red tint (security) |
| `tagComp` | purple tint (compliance) |
| `tagOps` | teal tint (ops) |
| `tagDev` | blue tint (devops) |
| `tagGov` | amber tint (governance) |

### `lib/phases-data.js`

```js
export const phases = [
  {
    num: '01', id: 'discover', label: 'Discover',
    colorVar: '--discover',
    tagline: '…',
    summary: ['paragraph 1', 'paragraph 2'],
    gate: 'Gate description',
  },
  // …× 5
]
```

---

## 23. Quick Reference

```
═══════════════════════════════════════════════════════════
SPANFORGE DESIGN SYSTEM — QUICK REFERENCE   (April 2026)
═══════════════════════════════════════════════════════════

THEME       Light page, dark footer, dark terminals

FONTS
  Display   Space Grotesk  → var(--font-playfair)   wt 500/700
  Body      Manrope        → var(--font-dm-sans)     wt 400–700
  Mono      JetBrains Mono → var(--font-dm-mono)     wt 400/500

COLOR TOKENS
  Page bg       --dark        #f9fbfc
  Card bg       --surface     #ffffff
  Card hover    --surface-2   #f3f7fa
  Alt section   --charcoal    #eef4f8
  Border        --rule        rgba(100,116,139,0.18)
  Accent blue   --accent      #1266f1   (also --red)
  Accent hover  --red-light   #2f7fff
  Heading       --white       #0f172a
  Body text     --muted       #475569
  Primary text  --light       #162033
  Secondary     --mid         #7c8ba1
  Terminal bg   --terminal-bg #08111e

PHASE COLORS
  discover  #1266f1  blue
  design    #0f9d80  teal
  build     #d97706  amber
  govern    #7c3aed  purple
  scale     #dc2626  red

TYPE SCALE
  Home H1     clamp(3rem, 7vw, 5.6rem)  lh 0.94  ls -0.06em
  Inner H1    clamp(3rem, 6vw, 4.8rem)  lh 0.95  ls -0.05em
  Section H2  clamp(2rem, 4vw, 3.2rem)  lh 1.0   ls -0.05em
  Body        0.95–1.08rem              lh 1.75
  Eyebrow     0.74rem  mono  uppercase  ls 0.1em  color --accent

BUTTONS    all pill-shaped (border-radius: 999px)  min-height: 2.95rem
  Primary  linear-gradient(135deg, --accent 0%, #2680ff 100%)
  Ghost    rgba(255,255,255,0.85) + subtle border
  Mono     linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)

CARDS      glassmorphism
  Standard  bg: linear-gradient(#fff, #f8fbfd)  radius 1.25–1.35rem
  Panel     bg: rgba(255,255,255,0.58)  backdrop-filter: blur(20px)
  Hover     translateY(-2px) + deeper shadow + blue border

NAV        78px fixed  frosted glass (blur 18px)  always active
  Links    floating pill strip  active = white box + shadow
  CTA      dark-to-blue gradient pill

FOOTER     dark navy  #0a1322→#09111e  + blue radial glow
  Headers  --accent tinted  mono 0.72rem uppercase
  Links    #c2cfdf  hover #fff

SECTIONS   padding: 5rem 0 (4.8rem on some pages)
  Backgrounds: subtle gradients, NOT solid --charcoal blocks

TERMINALS  dark #0D1117 (AuditTerminal) or #08111e (code cards)
  radius 10px (AuditTerminal)  1.35rem (inline code cards)

FORMS      border-radius: 0.75rem  focus ring: box-shadow 0 0 0 3px
  Error    border #dc2626  focus ring rgba(220,38,38,0.12)

BREAKPOINTS
  ≤720px  mobile   --side-padding 1.15rem
  ≤760px  collapse card grids
  ≤860px  footer single column
  ≤900px  docs sidebar hidden
  ≤1024px tablet 3→2 col

LAYOUT     Nav > main#main-content (pt 78px) > Footer
           No AuthSessionProvider in current build

ANALYTICS  Plausible (lazyOnload) + Vercel Analytics + SpeedInsights
           JSON-LD Organization schema in layout
═══════════════════════════════════════════════════════════
```

