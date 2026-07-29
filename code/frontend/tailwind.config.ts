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
          primary:    '#6366F1',
          'primary-hover': '#4F46E5',
          accent:     '#8B5CF6',
          dark:       '#1E293B',
          light:      '#F8FAFC',
          success:    '#10B981',
        },
        illustration: {
          bg:     '#EEF2FF',
          'bg-end': '#F5F3FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        hero:   'clamp(2.5rem, 6vw, 4rem)',
        h1:     'clamp(2rem, 4vw, 2.75rem)',
        h2:     '1.5rem',
        h3:     '1.25rem',
        'lead-lg': '1.2rem',
        'lead':    '1.1rem',
        base:      '1rem',
        'sm-nav':  '0.9375rem',
        sm:        '0.875rem',
        xs:        '0.8125rem',
      },
      spacing: {
        '0':    '0',
        '1':    '4px',
        '1.5':  '6px',
        '2':    '8px',
        '2.5':  '10px',
        '3':    '12px',
        '3.5':  '14px',
        '4':    '16px',
        '5':    '20px',
        '6':    '24px',
        '7':    '28px',
        '8':    '32px',
        '9':    '36px',
        '10':   '40px',
        '12':   '48px',
        '13':   '52px',
        '14':   '56px',
        '15':   '60px',
        '17':   '68px',
        '25':   '100px',
        '35':   '140px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        primary: '0 8px 24px rgba(99, 102, 241, 0.35)',
        'primary-hover': '0 12px 32px rgba(99, 102, 241, 0.4)',
        md: '0 8px 24px rgba(0, 0, 0, 0.08)',
        lg: '0 12px 40px rgba(0, 0, 0, 0.07)',
      },
      transitionDuration: {
        fast: '200ms',
        base: '250ms',
        slow: '300ms',
      },
    },
  },
  plugins: [],
}

export default config
