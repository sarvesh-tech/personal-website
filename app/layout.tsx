import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sarvesh Karunakaran',
  description: 'Software Engineer building exciting experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} bg-[rgb(var(--background))] text-[rgb(var(--foreground))]`}>
        {children}
      </body>
    </html>
  )
}

