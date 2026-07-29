/**
 * Hero — Full-viewport hero section.
 *
 * Design tokens used (from design/design-system.md):
 *   --color-illustration-bg      (#EEF2FF) — gradient start
 *   --color-illustration-bg-end   (#F5F3FF) — gradient end
 *   --text-hero                   clamp(2.5rem, 6vw, 4rem) / weight 800
 *   --text-lead-lg                1.2rem / 1.7 / 400
 *   --color-primary              (#6366F1)
 *   --color-primary-hover        (#4F46E5)
 *   --color-primary-text         (#FFFFFF)
 *   --color-text                 (#1E293B)
 *   --color-text-muted           (#64748B)
 *   --shadow-primary             0 8px 24px rgba(99,102,241,.35)
 *   --shadow-primary-hover       0 12px 32px rgba(99,102,241,.4)
 *   --radius-md                  10px
 *   --radius-xs                  4px
 *   --duration-base              250ms
 *   --color-focus                (#6366F1)
 */

'use client'

import { useEffect, useState } from 'react'
import { fetchHeroData, type HeroData } from '@/lib/mock/hero-section'
import HeroSkeleton from './HeroSkeleton'

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null)
  const [loading, setLoading] = useState(true)
  const [ctaHovered, setCtaHovered] = useState(false)
  const [ctaFocused, setCtaFocused] = useState(false)

  useEffect(() => {
    fetchHeroData()
      .then((heroData) => {
        setData(heroData)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading || !data) {
    return <HeroSkeleton />
  }

  const ctaBg =
    ctaHovered
      ? 'var(--color-primary-hover, #4F46E5)'
      : 'var(--color-primary, #6366F1)'

  const ctaShadow =
    ctaFocused
      ? '0 0 0 4px rgba(99,102,241,.35), 0 0 0 6px var(--color-focus, #6366F1)'
      : ctaHovered
      ? 'var(--shadow-primary-hover, 0 12px 32px rgba(99,102,241,.4))'
      : 'var(--shadow-primary, 0 8px 24px rgba(99,102,241,.35))'

  const ctaTransform = ctaHovered ? 'translateY(-2px)' : 'translateY(0)'

  return (
    <section
      aria-label="Hero"
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          'linear-gradient(180deg, var(--color-illustration-bg, #EEF2FF) 0%, var(--color-illustration-bg-end, #F5F3FF) 100%)',
      }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h1
          className="mb-6 text-balance"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            color: 'var(--color-text, #1E293B)',
            fontFamily:
              'var(--font-sans), system-ui, -apple-system, sans-serif',
          }}
        >
          {data.headline}
        </h1>

        {/* Subtitle */}
        <p
          className="mb-10 max-w-2xl mx-auto"
          style={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            fontWeight: 400,
            color: 'var(--color-text-muted, #64748B)',
          }}
        >
          {data.subtitle}
        </p>

        {/* CTA Button */}
        <a
          href={data.ctaHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '14px 32px',
            borderRadius: '10px',
            backgroundColor: ctaBg,
            color: 'var(--color-primary-text, #FFFFFF)',
            boxShadow: ctaShadow,
            transform: ctaTransform,
            transition:
              'background-color var(--duration-base, 250ms) ease, transform var(--duration-base, 250ms) ease, box-shadow var(--duration-base, 250ms) ease',
            textDecoration: 'none',
          }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          onFocus={() => setCtaFocused(true)}
          onBlur={() => setCtaFocused(false)}
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  )
}
