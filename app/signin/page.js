import { redirect } from 'next/navigation'
import { auth, signIn } from '@/auth'
import styles from './page.module.css'

export const metadata = {
  title: 'Sign In',
  description: 'Sign in to your SpanForge account.',
  robots: { index: false },
}

export default async function SignInPage({ searchParams }) {
  const session = await auth()
  if (session) redirect('/platform')

  const callbackUrl = searchParams?.callbackUrl || '/platform'
  const error = searchParams?.error
  const hasGoogleAuth = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>SF</span>
          <span className={styles.brandName}>SpanForge</span>
        </div>

        <h1 className={styles.heading}>Welcome back</h1>
        <p className={styles.sub}>Sign in to access your AI lifecycle workspace.</p>

        {error && (
          <div className={styles.error} role="alert">
            {error === 'OAuthAccountNotLinked'
              ? 'This email is already linked to another sign-in method.'
              : 'Something went wrong. Please try again.'}
          </div>
        )}

        <div className={styles.providers}>
          {hasGoogleAuth && (
            <form
              action={async () => {
                'use server'
                await signIn('google', { redirectTo: callbackUrl })
              }}
            >
              <button type="submit" className={styles.providerBtn}>
                <GoogleIcon />
                Continue with Google
              </button>
            </form>
          )}

        </div>

        {!hasGoogleAuth && (
          <div className={styles.error} role="alert">
            Social sign-in is temporarily unavailable due to incomplete server configuration.
          </div>
        )}

        <p className={styles.legal}>
          By signing in you agree to our{' '}
          <a href="/privacy" className={styles.link}>Privacy Policy</a>.
        </p>
      </div>
    </main>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  )
}

