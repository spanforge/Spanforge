/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',  value: 'on' },
  { key: 'X-Content-Type-Options',  value: 'nosniff' },
  { key: 'X-Frame-Options',         value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection',        value: '1; mode=block' },
  { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''} https://plausible.io`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      `connect-src 'self' https://plausible.io https://vitals.vercel-insights.com${process.env.NODE_ENV === 'development' ? ' ws://localhost:3000' : ''}`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/early-access',
        destination: '/platform',
        permanent: true,
      },
      // Bare /docs path (no docSlug) → first doc of each tool
      {
        source: '/tools/spanforge-secrets/docs',
        destination: '/tools/spanforge-secrets/docs/installation',
        permanent: false,
      },
      {
        source: '/tools/sf-validate/docs',
        destination: '/tools/sf-validate/docs/getting-started',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
