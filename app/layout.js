import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import '../styles/animations.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.getspanforge.com'),
  title: {
    template: '%s — SpanForge',
    default: 'SpanForge — Where Enterprise AI Goes to Production',
  },
  description:
    'SpanForge is the AI lifecycle platform for enterprise teams — from deciding whether to build, to running confidently in production. Standards, frameworks, CLI tools, and AgentOBS observability across every phase.',
  keywords: [
    'AI lifecycle platform',
    'enterprise AI',
    'AI governance',
    'LLM observability',
    'AI production',
    'SpanForge',
    'AgentOBS',
  ],
  openGraph: {
    type: 'website',
    siteName: 'SpanForge',
    title: 'SpanForge — The AI Lifecycle Platform',
    description:
      'Where enterprise AI goes to production. Discover. Design. Build. Govern. Scale.',
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
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />

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
