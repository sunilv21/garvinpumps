import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Garvin Pumps - High-Quality Water Pumps & Solutions",
  description:
    "Leading manufacturer of submersible, centrifugal, and monoblock pumps in India. Quality water pumping solutions for agriculture, industry, and domestic use.",
  keywords:
    "water pumps, submersible pumps, centrifugal pumps, monoblock pumps, Garvin Pumps, India, garvinpumps, Garvin, Garvinpumps,. garvin motors, garvinmotors",
  authors: [{ name: "Garvin Pumps" }],
  creator: "Garvin Pumps",
  publisher: "Garvin Pumps",
  robots: "index, follow",
  openGraph: {
    title: "Garvin Pumps - High-Quality Water Pumps & Solutions",
    description: "Leading manufacturer of submersible, centrifugal, and monoblock pumps in India.",
    type: "website",
    locale: "en_IN",
    siteName: "Garvin Pumps",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvin Pumps - High-Quality Water Pumps & Solutions",
    description: "Leading manufacturer of submersible, centrifugal, and monoblock pumps in India.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
