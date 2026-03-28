# SpanForge Production Readiness Audit

Date: 2026-03-28

## Executive Summary

SpanForge is close to release-ready, but it is not fully ready for public production release yet.

The production build passes successfully and the core app-router site is structurally sound. The remaining gaps are mostly in release hardening, SEO completeness, and removal of dead pre-launch surfaces. The two most important issues are:

1. A dead public waitlist API is still shipped and logs submitted email addresses.
2. The site metadata references social preview assets that do not exist, and no favicon or app icon assets are present.

Release recommendation: No-go until the High findings are fixed. Medium findings should be addressed immediately after, ideally before launch.

## Scope

This audit covered:

- Build and deployment readiness
- Routing and dead surfaces
- Security headers and privacy implications
- SEO and metadata completeness
- Blog/content readiness
- Operational readiness and repo hygiene
- Editor and lint signals

## Validation Performed

- Ran `npm run build`: passed successfully on Next.js 14
- Reviewed `package.json`, `next.config.js`, `vercel.json`, `public/robots.txt`, `public/sitemap.xml`
- Reviewed key app surfaces: `app/layout.js`, `app/page.js`, `app/blog/page.js`, `app/blog/[slug]/page.js`, `app/privacy/page.js`, `components/Nav.jsx`, `components/Footer.jsx`
- Checked public assets in `public/`
- Checked editor-reported issues via diagnostics
- Verified blog content no longer contains user-facing waitlist or stale launch CTA language

## Findings

### High

#### 1. Dead waitlist API is still publicly exposed and logs email addresses

Severity: High

Evidence:

- `app/api/waitlist/route.js`
- `components/WaitlistForm.jsx`
- `npm run build` output includes dynamic route `ƒ /api/waitlist`

Why this matters:

- The site has been moved from waitlist mode to public launch, so this endpoint no longer serves a product purpose.
- The endpoint still accepts email input and writes submitted addresses to server logs with `console.log`.
- Even if it is not linked from the UI, it remains externally callable and creates unnecessary privacy and attack-surface risk.

Recommendation:

- Remove `app/api/waitlist/route.js` entirely, or return `410 Gone`.
- Remove `components/WaitlistForm.jsx` and its CSS module if no longer used anywhere.

#### 2. Open Graph and icon assets are missing

Severity: High

Evidence:

- `app/layout.js` references `'/og/home.png'`
- `public/` contains only `robots.txt` and `sitemap.xml`
- No `app/icon.*`, `app/apple-icon.*`, `app/opengraph-image.*`, `app/twitter-image.*`, or `public/og/*` assets were found

Why this matters:

- Shared links will have broken or missing preview images.
- Browser tabs and bookmarks will lack a proper favicon or app icon.
- This weakens brand credibility at the exact moment the site is being publicly announced.

Recommendation:

- Add a favicon and app icons.
- Add the social preview asset referenced by metadata, or update metadata to the correct path.
- Validate previews for LinkedIn, X, Slack, and iMessage.

### Medium

#### 3. Sitemap omits the individual blog post URLs

Severity: Medium

Evidence:

- `public/sitemap.xml` includes `/blog` but not `/blog/73-percent-fail`, `/blog/ai-lifecycle-problem`, or `/blog/six-questions`

Why this matters:

- Search engines can still discover posts via internal links, but discovery and indexing will be slower and less reliable.
- For a new public marketing site, every important indexable page should be in the sitemap.

Recommendation:

- Add all blog article URLs to the sitemap.
- Longer term, generate the sitemap from route/content data rather than maintaining a static XML file by hand.

#### 4. Homepage and About page still use the older 73% claim while blog content has been corrected to 85%

Severity: Medium

Evidence:

- `app/page.js`
- `app/about/page.js`

Why this matters:

- The site now presents inconsistent headline statistics across pages.
- For a product positioned around enterprise credibility, visible statistical inconsistency weakens trust.

Recommendation:

- Normalize the claim across all user-facing pages.
- Prefer a formulation that is both accurate and source-defensible, for example Gartner's 85% figure or a more source-agnostic phrasing.

#### 5. Baseline security headers are present, but there is no Content Security Policy

Severity: Medium

Evidence:

- `next.config.js` includes `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and HSTS
- No `Content-Security-Policy` header is set

Why this matters:

- CSP is one of the most useful browser-level mitigations against XSS and third-party script abuse.
- This matters more here because the app loads external scripts, including Plausible and Vercel analytics.

Recommendation:

- Add a CSP that explicitly allows only the required script, style, image, font, and connect sources.
- Roll it out in report-only mode first if needed, then enforce.

#### 6. Release gating depends on manual checks; no CI workflow was found

Severity: Medium

Evidence:

- No `.github/workflows/*` files were found
- `package.json` contains only `dev`, `build`, and `start` scripts

Why this matters:

- The build passes locally, but there is no repository-native automation enforcing checks on every change.
- Launch-week regressions tend to come from small content and config changes, not just code changes.

Recommendation:

- Add a minimal CI pipeline that runs `npm ci` and `npm run build` on push and pull request.
- Optionally add link checking and metadata/asset validation.

### Low

#### 7. Editor diagnostics show two CSS quality issues

Severity: Low

Evidence:

- `components/Footer.module.css`: empty `.brand {}` ruleset
- `components/BlogCard.module.css`: `-webkit-line-clamp` used without the standard `line-clamp` property

Why this matters:

- These are not release blockers and do not break the build.
- They do signal a small amount of avoidable polish debt.

Recommendation:

- Remove the empty ruleset.
- Add the standard property alongside the prefixed one for better compatibility signaling.

#### 8. Dead pre-launch page still exists in the codebase even though the route redirects

Severity: Low

Evidence:

- `app/early-access/page.js`
- `next.config.js` redirects `/early-access` to `/platform`
- `npm run build` still generates `○ /early-access`

Why this matters:

- It is not user-visible in normal navigation because the redirect is present.
- It still adds maintenance burden and can cause future confusion if somebody edits the page instead of the redirect target.

Recommendation:

- Delete the page if the redirect is intended to be permanent.

#### 9. Root README is stale relative to the current marketing site and product narrative

Severity: Low

Evidence:

- `README.md` still describes an older composable observability toolkit positioning rather than the current AI lifecycle platform site

Why this matters:

- This does not affect the live site directly.
- It does affect contributor clarity and increases the risk of future documentation drift.

Recommendation:

- Update the root README to match the current site, architecture, and deployment model.

## What Is Already Good

- Production build passes successfully
- Core routing is working and the site is statically generated for most surfaces
- Security headers are partially in place and better than default
- `robots.txt` and `sitemap.xml` exist and are aligned to the canonical domain
- Page-level metadata coverage is broad across the app router
- Blog posts are present and user-facing waitlist CTA language has been removed
- Navigation, footer, 404 page, and core public pages are in place
- Vercel Analytics and Speed Insights are wired

## Release Decision

Current decision: No-go for public production release until the High findings are fixed.

If the following are completed, the site becomes reasonable to launch:

1. Remove the dead waitlist API and related dead components.
2. Add favicon and social preview assets, and confirm the metadata paths resolve.
3. Add blog post URLs to the sitemap.
4. Normalize the 73% versus 85% statistic across the public site.

## Suggested Immediate Next Actions

1. Delete the waitlist endpoint and dead waitlist component.
2. Add favicon, apple touch icon, and OG/Twitter image assets.
3. Update the sitemap to include blog post URLs.
4. Replace the remaining `73%` claims in `app/page.js` and `app/about/page.js`.
5. Add a minimal CI workflow running `npm ci` and `npm run build`.