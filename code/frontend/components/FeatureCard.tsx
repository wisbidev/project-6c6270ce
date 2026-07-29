import type { ReactNode } from 'react'
import { FeatureItem } from '@/lib/mock/features-section'

interface FeatureCardProps extends FeatureItem {
  /** Loading state — shows skeleton instead of content */
  loading?: boolean
  /** Error state — shows fallback placeholder for icon */
  hasError?: boolean
}

/** Inline SVG icons — stroke weight 2px, 26×26px in feature cards */
function FeatureIcon({ icon }: { icon: FeatureItem['icon'] }) {
  const icons: Record<FeatureItem['icon'], ReactNode> = {
    message: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    chart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    puzzle: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.73.73 0 0 1-1.033-.351l-.083-.094a.646.646 0 0 1-.103-.142c-.101-.165-.166-.35-.191-.54a.953.953 0 0 1 .053-.569l.776-2.938a1.86 1.86 0 0 1 .22-.42c.107-.143.237-.26.38-.346z" />
        <path d="M4.561 16.15c.049-.322-.059-.648-.289-.878L2.704 13.704a2.234 2.234 0 0 1-.706-1.704c0-.617.235-1.233.706-1.704l1.611-1.611a.73.73 0 0 1 1.033.351l.083.094a.646.646 0 0 1 .103.142c.101.165.166.35.191.54a.953.953 0 0 1-.053.569l-.776 2.938a1.86 1.86 0 0 1-.22.42 1.77 1.77 0 0 1-.379.346z" />
      </svg>
    ),
    rocket: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  }

  return <>{icons[icon]}</>
}

/** Fallback placeholder when icon fails to render */
function IconFallback() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-transparent"
    >
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#E2E8F0" />
    </svg>
  )
}

/** Loading skeleton — matches card layout without real data */
function FeatureCardSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#EEF2FF]" />
      <div className="mt-3 h-5 w-3/4 rounded bg-[#E2E8F0]" />
      <div className="mt-2 h-4 w-full rounded bg-[#E2E8F0]" />
      <div className="mt-1 h-4 w-5/6 rounded bg-[#E2E8F0]" />
    </div>
  )
}

export default function FeatureCard({
  title,
  description,
  icon,
  loading = false,
  hasError = false,
}: FeatureCardProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-6">
        <FeatureCardSkeleton />
      </div>
    )
  }

  return (
    <article
      className="bg-white rounded-[16px] border border-[#E2E8F0] p-6
                 transition-transform duration-300 ease
                 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,.07)]
                 hover:border-[#C7D2FE]
                 focus-within:ring-[3px] focus-within:ring-[#6366F1]
                 focus-within:ring-offset-2"
    >
      {/* Icon container */}
      <div className="w-[52px] h-[52px] rounded-[12px] bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] mb-3">
        {hasError ? <IconFallback /> : <FeatureIcon icon={icon} />}
      </div>

      {/* Title */}
      <h3 className="text-[1.25rem] leading-[1.4] font-bold text-[#1E293B] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[0.9375rem] leading-[1.5] font-medium text-[#64748B]">
        {description}
      </p>
    </article>
  )
}
