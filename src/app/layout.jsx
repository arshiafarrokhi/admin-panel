import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Panel',
  description: 'Arshia Farrokhi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <h1>test</h1>/ */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
