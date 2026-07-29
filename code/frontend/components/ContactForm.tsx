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

    setTouched({ name: true, email: true, message: true })

    if (!validateAll()) return

    setIsSubmitting(true)

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

  // ── Styles (design system tokens) ─────────────────────────────────────────
  const sectionBg = 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)'
  const cardBg = 'var(--color-bg-dark-surface, #334155)'
  const inputBg = 'rgba(255,255,255,0.08)'
  const inputBorder = 'rgba(255,255,255,0.15)'
  const inputFocusBorder = 'var(--color-border-focus, #6366F1)'

  return (
    <section
      id="contact"
      style={{ background: sectionBg }}
      className="py-24 px-6"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-2xl">
        {/* Success state */}
        {isSuccess ? (
          <div className="text-center py-16" role="status" aria-live="polite">
            <CheckmarkIcon />
            <h2
              id="cta-heading"
              className="text-3xl font-bold mb-4"
              style={{ color: 'var(--color-success)' }}
            >
              {successState.heading}
            </h2>
            <p
              className="mb-8 text-lg"
              style={{ color: 'var(--color-text-muted-on-dark)' }}
            >
              {successState.description}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              {successState.resetButtonLabel}
            </button>
          </div>
        ) : (
          <>
            {/* Section header */}
            <div className="text-center mb-12">
              <span
                className="inline-block text-xs font-semibold tracking-widest mb-4"
                style={{ color: 'var(--color-primary-light)' }}
              >
                {ctaSection.label}
              </span>
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                {ctaSection.title}
              </h2>
              <p
                className="text-base leading-relaxed max-w-lg mx-auto"
                style={{ color: 'var(--color-text-muted-on-dark)' }}
              >
                {ctaSection.description}
              </p>
            </div>

            {/* Form card */}
            <div
              className="rounded-2xl p-8"
              style={{ background: cardBg }}
            >
              <form onSubmit={handleSubmit} noValidate>
                {/* Form fields */}
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-on-dark)' }}
                    >
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      maxLength={100}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        background: inputBg,
                        border: `1px solid ${errors.name ? '#EF4444' : inputBorder}`,
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                    {errors.name ? (
                      <FieldError message={errors.name} />
                    ) : (
                      <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted-on-dark)' }}>
                        {formData.name.length}/100
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-on-dark)' }}
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        background: inputBg,
                        border: `1px solid ${errors.email ? '#EF4444' : inputBorder}`,
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                    {errors.email && <FieldError message={errors.email} />}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--color-text-on-dark)' }}
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      maxLength={1000}
                      rows={5}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg text-white transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                      style={{
                        background: inputBg,
                        border: `1px solid ${errors.message ? '#EF4444' : inputBorder}`,
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    />
                    <div className="flex justify-between items-start mt-1">
                      {errors.message ? (
                        <FieldError message={errors.message} />
                      ) : (
                        <span />
                      )}
                      <span
                        className="text-xs"
                        style={{ color: 'var(--color-text-muted-on-dark)' }}
                      >
                        {formData.message.length}/1000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submission error */}
                {submitError && (
                  <div
                    className="mt-6 px-4 py-3 rounded-lg text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.15)',
                      border: '1px solid rgba(239,68,68,0.4)',
                      color: '#FCA5A5',
                    }}
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
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
          </>
        )}
      </div>
    </section>
  )
}
