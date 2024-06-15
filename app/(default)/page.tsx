export const metadata = {
  title: 'Home',
  description: 'Home page of OVOS',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Gettingstarted from '@/components/gettingstarted'
import Getonpi from '@/components/getonpi'
import FaqPage from '@/components/faq'
import ContactUs from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gettingstarted />
      <Getonpi />
      <FaqPage />
      <ContactUs />
    </>
  )
}
