import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WelcomeGate } from '@/components/welcome-gate'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'GameFlow — L\'expérience digitale des JOJ réinventée',
  description: 'Une plateforme intelligente qui connecte, guide et engage chaque utilisateur lors des Jeux Olympiques de la Jeunesse au Sénégal. Navigation IA, scores en direct, paiement mobile intégré.',
  keywords: ['JOJ', 'Jeux Olympiques', 'Sénégal', 'Application mobile', 'Sports', 'IA', 'Navigation'],
  authors: [{ name: 'GameFlow' }],
  openGraph: {
    title: 'GameFlow — L\'expérience digitale des JOJ réinventée',
    description: 'Une plateforme intelligente qui connecte, guide et engage chaque utilisateur lors des Jeux Olympiques de la Jeunesse au Sénégal.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameFlow — L\'expérience digitale des JOJ réinventée',
    description: 'Une plateforme intelligente pour les Jeux Olympiques de la Jeunesse au Sénégal.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c80c3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <WelcomeGate showOnce={false}>{children}</WelcomeGate>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
