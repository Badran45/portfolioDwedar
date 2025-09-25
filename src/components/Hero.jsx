import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn } from '../animations/variants.js'
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from './Icons.jsx'
import me from '../assets/me.jpg'
import cvPdf from '../assets/CV[1].pdf'
import Navbar from './Navbar.jsx'

export default function Hero() {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center text-center px-4 md:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 bg-white">
      {/* Navbar only on the first (hero) screen */}
      <Navbar inHero />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center justify-center md:space-x-24 lg:space-x-32 md:pl-6 lg:pl-12"
      >
        <motion.div className="mb-8 md:mb-0 md:mr-8 md:pr-6 lg:pr-10" variants={scaleIn}>
          <img src={me} alt="Profile photo" className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover" />
        </motion.div>
        <div className="text-center">
          <motion.p className="text-xl text-gray-500 font-medium" variants={fadeInUp}>Hello, I'm</motion.p>
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-black mb-2 whitespace-nowrap" variants={fadeInUp}>Mahmoud Dwedar</motion.h1>
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium mb-6" variants={fadeInUp}>Data Analyst</motion.h2>
          <motion.div className="flex flex-row justify-center gap-3" variants={fadeInUp}>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 border border-black hover:bg-black hover:text-white hover:shadow-lg active:scale-[0.98]">Download CV</a>
            <a href="#contact" className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-[0.98]">Contact Info</a>
          </motion.div>
          <motion.div className="flex justify-center space-x-6 text-black mt-8" variants={fadeInUp}>
            <a href="https://wa.me/201129857538" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-black">
              <WhatsAppIcon />
            </a>
            <a href="http://www.linkedin.com/in/mahmoud-dwedar-795122352" target="_blank" rel="noopener noreferrer" className="text-black">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/mahmoud-dwedar" target="_blank" rel="noopener noreferrer" className="text-black">
              <GitHubIcon />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

