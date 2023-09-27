import Provider from '@/components/provider/provider'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/navbar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next Auth Test',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='h-screen w-screen bg-zinc-950'>
        <Provider>
          <div className="h-full w-full flex-col items-center justify-center bg-zinc-950">
            <NavBar
            >
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/server'>Server</Link></li>
              <li><Link href='/client'>Client</Link></li>
            </NavBar>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
