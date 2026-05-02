'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ContactForm.module.css'

const SUBJECTS = [
  'Advisory briefing request',
  'Platform evaluation',
  'Partnership or research collaboration',
  'Press and media enquiry',
  'General question',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqakplr'

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  function validate() {
    const errs = {}
    if (!fields.name.trim()) errs.name = 'Name is required.'
    if (!fields.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = 'Enter a valid email address.'
    }
    if (!fields.subject) errs.subject = 'Please select a subject.'
    if (!fields.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (serverError) setServerError(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)
    setServerError(null)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          organization: fields.organization || undefined,
          subject: fields.subject,
          message: fields.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setServerError(data?.error || 'Something went wrong. Please try again or email sriram@getspanforge.com directly.')
      }
    } catch {
      setServerError('Unable to send. Please check your connection or email sriram@getspanforge.com directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="20" fill="rgba(22,163,74,0.1)" />
          <path d="M13 20.5l5 5 9-9" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Message sent.</h3>
        <p>We&apos;ll get back to you within two business days.</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name" className={styles.label}>Name <span aria-hidden="true">*</span></label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            value={fields.name}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
          />
          {errors.name && <span id="cf-name-err" className={styles.error} role="alert">{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-email" className={styles.label}>Work email <span aria-hidden="true">*</span></label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            value={fields.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
          />
          {errors.email && <span id="cf-email-err" className={styles.error} role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-org" className={styles.label}>Organization <span className={styles.optional}>(optional)</span></label>
          <input
            id="cf-org"
            name="organization"
            type="text"
            autoComplete="organization"
            className={styles.input}
            value={fields.organization}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-subject" className={styles.label}>Subject <span aria-hidden="true">*</span></label>
          <select
            id="cf-subject"
            name="subject"
            className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
            value={fields.subject}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.subject ? 'cf-subject-err' : undefined}
          >
            <option value="">Select a topic…</option>
            {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.subject && <span id="cf-subject-err" className={styles.error} role="alert">{errors.subject}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>Message <span aria-hidden="true">*</span></label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={fields.message}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          placeholder="Tell us about your team, what you're building, and what you'd like to discuss."
        />
        {errors.message && <span id="cf-message-err" className={styles.error} role="alert">{errors.message}</span>}
      </div>

      <div className={styles.footer}>
        {serverError && (
          <p className={styles.error} role="alert">{serverError}</p>
        )}
        <p className={styles.note}>We respond within two business days. No automated follow-up.</p>
        <p className={styles.legal}>
          By submitting this form, you agree to our{' '}
          <Link href="/privacy">Privacy Policy</Link> and{' '}
          <Link href="/terms">Terms of Service</Link>.
        </p>
        <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
          {loading ? 'Sending…' : 'Send message →'}
        </button>
      </div>
    </form>
  )
}
