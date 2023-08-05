import './globals.css'
import { Poppins } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
