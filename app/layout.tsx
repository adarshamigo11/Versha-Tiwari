import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Versha Tiwari — Early Childhood Teacher',
  description: 'Portfolio of Versha Tiwari, VIT Registered Early Childhood Teacher and Safety Advocate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
