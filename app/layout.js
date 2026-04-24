import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import '../styles/animations.css'

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SpanForge',
  url: 'https://www.getspanforge.com',
  logo: 'https://www.getspanforge.com/logo.png',
  description:
    'SpanForge is the AI lifecycle platform for teams moving from early experimentation to auditable production systems.',
  sameAs: ['https://www.linkedin.com/in/spanforge'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'sriram@getspanforge.com',
      contactType: 'customer support',
    },
    {
      '@type': 'ContactPoint',
      email: 'sriram@getspanforge.com',
      contactType: 'press',
    },
  ],
}

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

export const metadata = {
  metadataBase: new URL('https://www.getspanforge.com'),
  title: {
    template: '%s | SpanForge',
    default: 'SpanForge | AI Compliance Infrastructure for Production Systems',
  },
  description:
    'SpanForge helps teams instrument, enforce, and prove compliance for AI systems with audit chains, policy controls, and evidence-ready workflows.',
  keywords: [
    'AI compliance platform',
    'AI governance',
    'LLM observability',
    'AI audit trail',
    'PII redaction',
    'AI security',
    'SpanForge',
    'EU AI Act compliance',
  ],
  openGraph: {
    type: 'website',
    siteName: 'SpanForge',
    title: 'SpanForge | AI Compliance Infrastructure',
    description: 'Instrument, enforce, and prove compliance across the AI lifecycle.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@getspanforge',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />

        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />

        <Script
          defer
          data-domain="getspanforge.com"
          src="https://plausible.io/js/script.js"
          strategy="lazyOnload"
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
