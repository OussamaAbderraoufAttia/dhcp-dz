// Remove 'use client' from here
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DHCP - Digital Help Connected Platforms',
  description: 'Created with <3 byt DHCP Team',
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
