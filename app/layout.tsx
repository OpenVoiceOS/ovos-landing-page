import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import {ThemeProvider as NextThemesProvider} from "next-themes";

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'OpenVoiceOS',
  description: 'open-source voice AI platform for  creating custom voice-controlled ​interfaces across devices with NLP, a  customizable UI, and a focus on privacy and security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white dark:bg-stone-900 text-gray-900 tracking-tight`}>
      <NextThemesProvider attribute="class">
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </NextThemesProvider>
      </body>
    </html>
  )
}
