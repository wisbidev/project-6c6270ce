import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Hello Word',
  description: 'Chào mừng đến với Hello Word - Giải pháp của bạn',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased bg-brand-light text-brand-dark`}>
        {children}
      </body>
    </html>
  )
}
