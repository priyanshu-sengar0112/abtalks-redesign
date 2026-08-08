import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyABTalks from './components/WhyABTalks'
import ChallengeTracks from './components/ChallengeTracks'
import SocialProof from './components/SocialProof'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-ab-accent/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-ab-track-ai/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ab-track-web/10 blur-3xl" />
      </div>

      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <HowItWorks />
        <WhyABTalks />
        <ChallengeTracks />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
