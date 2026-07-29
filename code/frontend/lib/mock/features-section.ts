/**
 * Mock data for the Features section.
 * Shape mirrors the API contract the backend must satisfy.
 * All six feature cards with icons, titles, and descriptions.
 */

export interface FeatureItem {
  id: number
  icon: 'message' | 'globe' | 'shield' | 'chart' | 'puzzle' | 'rocket'
  title: string
  description: string
}

export interface FeaturesSectionResponse {
  items: FeatureItem[]
}

// Mock API response — replace with real fetch in backend stage
export const featuresSectionData: FeaturesSectionResponse = {
  items: [
    {
      id: 1,
      icon: 'message',
      title: 'Smart Messaging',
      description:
        'Reach your audience with intelligent, personalized messages that drive engagement.',
    },
    {
      id: 2,
      icon: 'globe',
      title: 'Global Reach',
      description:
        'Connect with users across the world through multi-language and multi-region support.',
    },
    {
      id: 3,
      icon: 'shield',
      title: 'Secure by Design',
      description:
        'Enterprise-grade security built in from day one — your data stays safe.',
    },
    {
      id: 4,
      icon: 'chart',
      title: 'Actionable Insights',
      description:
        'Track performance with real-time analytics that help you make better decisions.',
    },
    {
      id: 5,
      icon: 'puzzle',
      title: 'Seamless Integration',
      description:
        "Plug into your existing tools and workflows without missing a beat.",
    },
    {
      id: 6,
      icon: 'rocket',
      title: 'Fast & Scalable',
      description:
        'Built for speed and scale — grows with you from day one to millions of users.',
    },
  ],
}
