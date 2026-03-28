import { createHash } from 'crypto'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function maskValue(value, leading = 10, trailing = 8) {
  if (!value) return null
  if (value.length <= leading + trailing) return value
  return `${value.slice(0, leading)}...${value.slice(-trailing)}`
}

function fingerprint(value) {
  if (!value) return null
  return createHash('sha256').update(value).digest('hex').slice(0, 12)
}

function summarizeClientId(value) {
  return {
    present: Boolean(value),
    length: value?.length ?? 0,
    masked: maskValue(value),
    fingerprint: fingerprint(value),
    looksLikeGoogleWebClient: Boolean(value?.endsWith('.apps.googleusercontent.com')),
  }
}

function summarizeSecret(value) {
  return {
    present: Boolean(value),
    length: value?.length ?? 0,
  }
}

export async function GET(request) {
  const headers = request.headers

  return NextResponse.json(
    {
      request: {
        url: request.url,
        host: headers.get('host'),
        origin: headers.get('origin'),
        referer: headers.get('referer'),
        xForwardedHost: headers.get('x-forwarded-host'),
        xForwardedProto: headers.get('x-forwarded-proto'),
      },
      auth: {
        authUrl: process.env.AUTH_URL ?? null,
        nextAuthUrl: process.env.NEXTAUTH_URL ?? null,
        authSecret: summarizeSecret(process.env.AUTH_SECRET),
      },
      providers: {
        google: {
          clientId: summarizeClientId(process.env.GOOGLE_CLIENT_ID),
          clientSecret: summarizeSecret(process.env.GOOGLE_CLIENT_SECRET),
        },
        github: {
          clientId: summarizeClientId(process.env.GITHUB_CLIENT_ID),
          clientSecret: summarizeSecret(process.env.GITHUB_CLIENT_SECRET),
        },
      },
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    }
  )
}