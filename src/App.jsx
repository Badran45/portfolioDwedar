import React from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import ScrollProgress from './components/ScrollProgress.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function App() {
  // Reveal animations init
  useScrollReveal()

  // Set initial theme from saved preference or system
  React.useEffect(() => {
    const root = document.documentElement
    try {
      // Force light mode across the app
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } catch {}
  }, [])

  return (
    <div className="antialiased scroll-smooth theme-transition min-h-screen bg-white text-gray-900">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
