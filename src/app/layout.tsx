import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ImageKitProvider } from '@imagekit/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charlie Trotter Photography | Professional Photography Services',
  description: 'Professional photography services specializing in portraits, events, weddings, and commercial photography. Delivering quality work with artistic vision.',
  keywords: 'photography, portraits, weddings, events, commercial photography, professional photographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/ctp1581">
          {children}
        </ImageKitProvider>
      </body>
    </html>
  )
}
