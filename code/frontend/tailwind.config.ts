import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366F1',    // Indigo
          accent: '#8B5CF6',     // Purple
          dark: '#1E293B',       // Dark slate
          light: '#F8FAFC',      // Light background
          success: '#10B981',    // Success green
        },
        // Semantic tokens from design/design-system.md
        footer: {
          bg: '#0F172A',         // --color-bg-darker
          text: '#94A3B8',       // --color-text-footer
          'text-heading': '#F1F5F9', // --color-text-footer-heading
        },
        focus: '#6366F1',       // --color-focus
        'primary-light': '#A5B4FC', // --color-primary-light
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'radius-xs': '4px',
        'radius-sm': '8px',
      },
    },
  },
  plugins: [],
}

export default config
