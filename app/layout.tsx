import type { Metadata } from 'next'
import './globals.css'

// ✅ DO NOT import favicon like a module
// import favicon from "/app/favicon.ico" ← Remove this

export const metadata: Metadata = {
  title: 'DHCP - Digital Help Connected Platforms',
  description: 'Created with <3 by DHCP Team',
  icons: {
    icon: [
      {url: '/favicon.ico',} // ✅ Path relative to public/
    ]
  },
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
