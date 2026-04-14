import { Nunito, Inter, JetBrains_Mono } from 'next/font/google'
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
    'SpanForge is the AI lifecycle platform for every team — from deciding whether to build, to running confidently in production.',
  sameAs: [
    'https://www.linkedin.com/in/spanforge',
  ],
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

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-playfair',   /* keeps existing CSS var name */
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',    /* keeps existing CSS var name */
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',    /* keeps existing CSS var name */
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.getspanforge.com'),
  title: {
    template: '%s — SpanForge',
    default: 'SpanForge — Where AI Goes to Production',
  },
  description:
    'SpanForge is the AI lifecycle platform for every team — from deciding whether to build, to running confidently in production. Standards, frameworks, CLI tools, and SpanForge production compliance across every phase.',
  keywords: [
    'AI lifecycle platform',
    'AI lifecycle platform',
    'AI governance',
    'LLM observability',
    'AI production',
    'SpanForge',
    'SpanForge Platform',
    'T.R.U.S.T. Framework',
    'AI governance standard',
    'AI observability',
    'standalone AI governance',
    'RFC-0001 SPANFORGE',
  ],
  openGraph: {
    type: 'website',
    siteName: 'SpanForge',
    title: 'SpanForge — The AI Lifecycle Platform',
    description:
      'Where AI goes to production. Discover. Design. Build. Govern. Scale.',
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
      className={`${nunito.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
          <main id="main-content">{children}</main>
          <Footer />

        {/* Organization structured data */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />

        {/* Plausible Analytics — privacy-first, no cookies */}
        <Script
          defer
          data-domain="getspanforge.com"
          src="https://plausible.io/js/script.js"
          strategy="lazyOnload"
        />

        {/* Vercel Analytics + Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
