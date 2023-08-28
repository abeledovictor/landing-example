import './globals.css'

export const metadata = {
  title: 'OMGSeo - Digital marketing agency',
  description: 'Unlock Your Success with Our Expert SEO Strategies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
