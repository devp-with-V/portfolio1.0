import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vedant Tendulkar',
  description: 'Portifolio of Vedant Tendulkar',
  generator: 'Vedant Tendulkar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
