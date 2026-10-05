import React, { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Idea from './components/Idea.jsx'
import Solutions from './components/Solutions.jsx'
import Approach from './components/Approach.jsx'
import Insights from './components/Insights.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './lib/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Idea />
        <Solutions />
        <Approach />
        <Insights />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
