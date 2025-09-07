import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bangalore TV Guru | LCD & LED TV Repair Services',
  description:
    'Bangalore TV Guru offers expert LCD & LED TV repair services with doorstep pickup, free estimation, and same-day service across Bangalore. Trusted technicians and genuine spare parts.',
  keywords: [
    'Bangalore TV repair',
    'LCD TV service',
    'LED TV repair',
    'TV service center Bangalore',
    'TV Guru Bangalore',
    'doorstep TV repair',
    'fast TV service',
  ],
  authors: [{ name: 'Bangalore TV Guru' }],
  creator: 'Bangalore TV Guru',
  publisher: 'Bangalore TV Guru',
  generator: 'Next.js',
  openGraph: {
    title: 'Bangalore TV Guru | Expert LCD & LED TV Repair',
    description:
      'Same-day LCD & LED TV repair services across Bangalore. Free estimation, doorstep pickup, genuine parts, and expert technicians.',
    url: 'https://bangaloretvguru.vercel.app',
    siteName: 'Bangalore TV Guru',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Global Site Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17538731152"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17538731152');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
