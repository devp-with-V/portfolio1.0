import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vedant Tendulkar - Portfolio",
  description: "Enthusiastic CSE Student specializing in Data Science and ML",
  keywords: "Vedant Tendulkar, Data Science, Machine Learning, CSE Student, Portfolio",
  authors: [{ name: "Vedant Tendulkar" }],
  openGraph: {
    title: "Vedant Tendulkar - Portfolio",
    description: "Enthusiastic CSE Student specializing in Data Science and ML",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
