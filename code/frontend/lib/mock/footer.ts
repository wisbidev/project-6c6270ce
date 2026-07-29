export interface SocialLink {
  platform: 'LinkedIn' | 'Twitter' | 'GitHub'
  href: string
  ariaLabel: string
}

export interface FooterData {
  copyright: string
  brand: {
    name: string
  }
  socialLinks: SocialLink[]
  backToTop: {
    label: string
    ariaLabel: string
  }
}

/**
 * Mock footer data — shaped as if returned by a CMS or settings API.
 * The backend stage replaces this with real data fetching.
 */
export const footerData: FooterData = {
  copyright: '© 2025 Hello Word. All rights reserved.',
  brand: {
    name: 'Hello Word',
  },
  socialLinks: [
    {
      platform: 'LinkedIn',
      href: '#',
      ariaLabel: 'Follow us on LinkedIn',
    },
    {
      platform: 'Twitter',
      href: '#',
      ariaLabel: 'Follow us on X (Twitter)',
    },
    {
      platform: 'GitHub',
      href: '#',
      ariaLabel: 'View our GitHub repository',
    },
  ],
  backToTop: {
    label: 'Back to top',
    ariaLabel: 'Scroll back to the top of the page',
  },
}
