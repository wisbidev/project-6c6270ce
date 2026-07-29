/**
 * Mock data for CTA with contact form story.
 * This module shapes the contract the backend must satisfy.
 * All mock data lives here — swap this file to use real API calls.
 */

// API response shape
export interface ContactFormResponse {
  success: boolean
  error?: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Mock submission: simulates a 1.5s network request
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // For mailto: fallback, treat as always-success
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? 'mailto:hello@helloword.com'
  if (endpoint.startsWith('mailto:')) {
    return { success: true }
  }

  // Simulate a third-party service call
  // In production, this would be: fetch(endpoint, { method: 'POST', body: JSON.stringify(data), ... })
  // For mock, randomly succeed (90% chance) or fail
  if (Math.random() > 0.1) {
    return { success: true }
  }

  return { success: false, error: 'Something went wrong. Please try again.' }
}

// Form field validation rules (mirrors server-side validation)
export const fieldRules = {
  name: { required: true, maxLength: 100, label: 'Your Name' },
  email: { required: true, maxLength: 254, label: 'Email Address' },
  message: { required: true, maxLength: 1000, label: 'Message' },
} as const

export type FieldName = keyof typeof fieldRules

// Validation error messages (matches acceptance criteria wording)
export const validationMessages = {
  name: {
    required: 'Please enter your name.',
    maxLength: 'Name must be 100 characters or less.',
  },
  email: {
    required: 'Please enter your email.',
    invalid: 'Please enter a valid email address.',
  },
  message: {
    required: 'Please enter a message.',
    maxLength: 'Message must be 1000 characters or less.',
  },
} as const

// CTA section copy
export const ctaSection = {
  label: 'GET IN TOUCH',
  title: 'Ready to say Hello?',
  description:
    'Have a question or want to get started? Drop us a message and we will get back to you within 24 hours.',
} as const

// Success state copy
export const successState = {
  heading: 'Message sent!',
  description: 'Thanks — we\'ll get back to you soon.',
  resetButtonLabel: 'Send Another Message',
} as const
