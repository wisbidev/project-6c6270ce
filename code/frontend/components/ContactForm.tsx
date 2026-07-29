'use client'

import { useState, useCallback, type FormEvent } from 'react'
import {
  submitContactForm,
  validationMessages,
  ctaSection,
  successState,
  type ContactFormData,
  type FieldName,
} from '@/lib/mock/cta-with-contact-form'

// ─── Spinner icon (20×20, stroke 2, matches design system) ──────────────────
function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ─── Success checkmark icon (64×64, matches design system §1.6) ─────────────
function CheckmarkIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="mx-auto mb-6"
    >
      <circle cx="32" cy="32" r="30" stroke="#10B981" strokeWidth="2" />
      <path
        d="M20 32l9 9 15-15"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Form field error message ─────────────────────────────────────────────────
function FieldError({ message }: { message: string }) {
  return (
    <p
      className="mt-1 text-xs leading-6"
      style={{ color: 'var(--color-danger-text)' }}
      role="alert"
    >
      {message}
    </p>
  )
}

// ─── ContactForm ───────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  // ── Validation ─────────────────────────────────────────────────────────────
  const validateField = useCallback((name: FieldName, value: string): string | undefined => {
    if (name === 'name') {
      if (!value.trim()) return validationMessages.name.required
      if (value.length > 100) return validationMessages.name.maxLength
    }
    if (name === 'email') {
      if (!value.trim()) return validationMessages.email.required
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return validationMessages.email.invalid
    }
    if (name === 'message') {
      if (!value.trim()) return validationMessages.message.required
      if (value.length > 1000) return validationMessages.message.maxLength
    }
    return undefined
  }, [])

  const validateAll = useCallback((): boolean => {
    const newErrors: Partial<Record<FieldName, string>> = {}
    const fields: FieldName[] = ['name', 'email', 'message']
    let valid = true
    for (const field of fields) {
      const err = validateField(field, formData[field])
      if (err) {
        newErrors[field] = err
        valid = false
      }
    }
    setErrors(newErrors)
    return valid
  }, [formData, validateField])

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (name: FieldName, value: string) => {
    const max = name === 'name' ? 100 : name === 'message' ? 1000 : 254
    const capped = value.length > max ? value.slice(0, max) : value
    setFormData((prev) => ({ ...prev, [name]: capped }))
    // Clear error as user types (only if field was previously touched)
    if (touched[name]) {
      const err = validateField(name, capped)
      setErrors((prev) => ({ ...prev, [name]: err }))
    }
  }

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const err = validateField(name, formData[name])
    setErrors((prev) => ({ ...prev, [name]: err }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    // Mark all fields as touched so errors show
    setTouched({ name: true, email: true, message: true })

    if (!validateAll()) return

    setIsSubmitting(true)

    // For mailto: — open email client
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? 'mailto:hello@helloword.com'
    if (endpoint.startsWith('mailto:')) {
      const subject = encodeURIComponent(`Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )
      window.location.href = `${endpoint}?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      setIsSuccess(true)
      return
    }

    // Third-party endpoint — use mock (replace with real fetch in BE stage)
    const response = await submitContactForm(formData)
    setIsSubmitting(false)

    if (response.success) {
      setIsSuccess(true)
    } else {
      setSubmitError(response.error ?? 'Something went wrong. Please try again.')
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
    setTouched({})
    setSubmitError(null)
    setIsSuccess(false)
  }

  // ── Styles (design system tokens) ──────────────────────────────────────────
  const sectionBg = {
    background: 'linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-dark-surface) 100%)',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '6px',
    color: 'var(--color-text-on-dark)',
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'var(--color-text-on-dark)',
    backgroundColor: 'var(--color-bg-dark)',
    border: '2px solid var(--color-border-strong)',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
    boxSizing: 'border-box',
  }

  const inputFocus: React.CSSProperties = {
    borderColor: 'var(--color-border-focus)',
    boxShadow: '0 0 0 3px rgba(99,102,241,0.2)',
  }

  const inputError: React.CSSProperties = {
    borderColor: 'var(--color-danger)',
  }

  const errorMsgStyle: React.CSSProperties = {
    marginTop: '4px',
    fontSize: '0.8125rem',
    lineHeight: 1.5,
    color: 'var(--color-danger-text)',
  }

  const submitErrorStyle: React.CSSProperties = {
    marginBottom: '24px',
    padding: '12px 16px',
    fontSize: '0.875rem',
    color: 'var(--color-danger-text)',
    backgroundColor: 'rgba(239,68,68,0.15)',
    border: '1px solid rgba(239,68,68,0.4)',
    borderRadius: '8px',
  }

  // ── Success state ───────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <section
        id="contact"
        style={sectionBg}
        aria-label="Contact form success"
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            className="mx-auto text-center"
            style={{ maxWidth: '560px', paddingTop: '100px', paddingBottom: '100px' }}
          >
            <CheckmarkIcon />
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.3,
                color: 'var(--color-text-on-dark)',
                marginBottom: '12px',
              }}
            >
              {successState.heading}
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--color-text-muted-on-dark)',
                marginBottom: '32px',
              }}
            >
              {successState.description}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
              style={{
                padding: '14px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text-on-dark)',
                backgroundColor: 'transparent',
                border: '2px solid var(--color-border-strong)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-primary)'
                el.style.color = 'var(--color-primary)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--color-border-strong)'
                el.style.color = 'var(--color-text-on-dark)'
                el.style.transform = 'translateY(0)'
              }}
              onFocusVisible={(e) => {
                e.currentTarget.style.outline = '3px solid var(--color-focus)'
                e.currentTarget.style.outlineOffset = '2px'
              }}
            >
              {successState.resetButtonLabel}
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ── Default / error / submitting states ─────────────────────────────────────
  return (
    <section
      id="contact"
      style={sectionBg}
      aria-label="Contact form"
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section heading */}
        <div className="text-center" style={{ paddingTop: '100px', marginBottom: '16px' }}>
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-primary-light)',
              marginBottom: '12px',
            }}
          >
            {ctaSection.label}
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-text-on-dark)',
              marginBottom: '20px',
            }}
          >
            {ctaSection.title}
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--color-text-muted-on-dark)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            {ctaSection.description}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ maxWidth: '560px', margin: '40px auto 0', paddingBottom: '100px' }}
        >
          {/* Submission error banner */}
          {submitError && (
            <div style={submitErrorStyle} role="alert">
              {submitError}
            </div>
          )}

          {/* Name field */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="contact-name" style={labelStyle}>
              Your Name <span style={{ color: '#FCA5A5' }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              maxLength={100}
              placeholder="Nguyễn Văn A"
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              aria-invalid={!!errors.name}
              style={{
                ...inputBase,
                ...(errors.name ? inputError : {}),
              }}
              onFocus={(e) => {
                if (!errors.name) {
                  e.currentTarget.style.borderColor = 'var(--color-border-focus)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'
                }
              }}
              onBlurCapture={(e) => {
                if (!errors.name) {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            />
            {errors.name && (
              <FieldError message={errors.name} />
            )}
          </div>

          {/* Email field */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="contact-email" style={labelStyle}>
              Email Address <span style={{ color: '#FCA5A5' }}>*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="email@example.com"
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              aria-invalid={!!errors.email}
              style={{
                ...inputBase,
                ...(errors.email ? inputError : {}),
              }}
              onFocus={(e) => {
                if (!errors.email) {
                  e.currentTarget.style.borderColor = 'var(--color-border-focus)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'
                }
              }}
              onBlurCapture={(e) => {
                if (!errors.email) {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            />
            {errors.email && (
              <FieldError message={errors.email} />
            )}
          </div>

          {/* Message field */}
          <div style={{ marginBottom: '32px' }}>
            <label htmlFor="contact-message" style={labelStyle}>
              Message <span style={{ color: '#FCA5A5' }}>*</span>
            </label>
            <textarea
              id="contact-message"
              autoComplete="off"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              maxLength={1000}
              rows={5}
              placeholder="Nội dung tin nhắn của bạn..."
              aria-describedby={
                errors.message
                  ? 'contact-message-error'
                  : 'contact-message-count'
              }
              aria-invalid={!!errors.message}
              style={{
                ...inputBase,
                resize: 'vertical',
                minHeight: '120px',
                ...(errors.message ? inputError : {}),
              }}
              onFocus={(e) => {
                if (!errors.message) {
                  e.currentTarget.style.borderColor = 'var(--color-border-focus)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'
                }
              }}
              onBlurCapture={(e) => {
                if (!errors.message) {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            />
            {errors.message ? (
              <FieldError message={errors.message} />
            ) : (
              <p
                id="contact-message-count"
                style={{ ...errorMsgStyle, color: 'rgba(203,213,225,0.6)' }}
                aria-live="polite"
              >
                {formData.message.length}/1000
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '14px 32px',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-primary-text)',
              backgroundColor: 'var(--color-primary)',
              border: 'none',
              borderRadius: '10px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease',
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-primary)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onFocusVisible={(e) => {
              e.currentTarget.style.outline = '3px solid var(--color-focus)'
              e.currentTarget.style.outlineOffset = '2px'
            }}
          >
            {isSubmitting ? (
              <>
                <SpinnerIcon />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
