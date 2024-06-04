export const metadata = {
  title: 'Home',
  description: 'Home page of OVOS',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Gettingstarted from '@/components/gettingstarted'
import About from '@/components/about'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Gettingstarted />
    </>
  )
}
