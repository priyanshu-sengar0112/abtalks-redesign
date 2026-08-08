import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyABTalks from './components/WhyABTalks'
import ChallengeTracks from './components/ChallengeTracks'
import SocialProof from './components/SocialProof'
import CTA from './components/CTA'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import ChallengeDay from './pages/ChallengeDay'


function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
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


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/day/12" element={<ChallengeDay />} />

      </Routes>
    </BrowserRouter>
  )
}