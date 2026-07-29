'use client'

import { useState, type FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be 100 characters or less'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be 1000 characters or less'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) {
      return
    }

    // Use mailto: as fallback, or third-party service if configured
    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'mailto:hello@helloword.com'

    if (formEndpoint.startsWith('mailto:')) {
      const subject = encodeURIComponent(`Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
      window.location.href = `${formEndpoint}?subject=${subject}&body=${body}`
      setIsSubmitted(true)
    } else {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }

        setIsSubmitted(true)
      } catch {
        setSubmitError('Something went wrong. Please try again.')
      }
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Cảm ơn bạn!
            </h2>
            <p className="text-gray-600">
              Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Liên hệ với chúng tôi</h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Bạn có câu hỏi hoặc muốn tìm hiểu thêm? Điền vào form dưới đây và chúng tôi sẽ phản hồi sớm nhất.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {submitError}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              maxLength={100}
              className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="Nguyễn Văn A"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              maxLength={1000}
              rows={5}
              className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="Nội dung tin nhắn của bạn..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
            <p className="mt-1 text-sm text-gray-500 text-right">
              {formData.message.length}/1000
            </p>
          </div>

          <button type="submit" className="btn-primary w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
