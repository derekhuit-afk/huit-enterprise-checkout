import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Huit.AI Enterprise — Annual Licensing',
  description: 'Enterprise annual licensing for HyperLoan AI, APEX Recruiting Intelligence, and HMDA Data Platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#030712' }}>{children}</body>
    </html>
  )
}
