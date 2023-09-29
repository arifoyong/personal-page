import './globals.css'
import { Poppins } from 'next/font/google'
import GoogleAnalytics from './components/GoogleAnalytics'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Arif Oyong',
  description: 'Personal page for Arif Oyong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} container mx-auto`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
              <GoogleAnalytics ga_id= {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
            ) : null}
        {children}
      </body>
    </html>
  )
}
