/**
 * Mock data for the Hero section.
 * This module shapes the contract the backend must satisfy.
 * Swap this file for a real API call without touching any component.
 */

export interface HeroData {
  headline: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
}

export const mockHeroData: HeroData = {
  headline: 'Hello Word',
  subtitle:
    'Chào mừng đến với giải pháp của bạn — Nhanh chóng, hiệu quả, và dễ sử dụng.',
  ctaLabel: 'Get in touch',
  ctaHref: '#contact',
}

// Simulates an async API fetch. In production this would be a real fetch call.
export async function fetchHeroData(): Promise<HeroData> {
  // Artificial delay to demonstrate loading state during development.
  await new Promise((resolve) => setTimeout(resolve, 800))
  return mockHeroData
}
