import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn } from '../animations/variants.js'
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from './Icons.jsx'
import me from '../assets/me.jpg'
import cvPdf from '../assets/CV[1].pdf'

export default function Hero() {
  return (
    <header className="w-full min-h-screen flex items-center justify-center text-center px-4 md:px-8 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto py-16 flex flex-col md:flex-row items-center justify-center md:space-x-12"
      >
        <motion.div className="mb-8 md:mb-0" variants={scaleIn}>
          <img src={me} alt="Profile photo" className="rounded-full border-4 border-gray-200 shadow-xl w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover float-slow" />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.p className="text-xl text-gray-500 font-medium" variants={fadeInUp}>Hello, I'm</motion.p>
          <motion.h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-2" variants={fadeInUp}>Mahmoud Dwedar</motion.h1>
          <motion.h2 className="text-3xl md:text-4xl text-gray-700 font-medium mb-6" variants={fadeInUp}>Data Analyst</motion.h2>
          <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4" variants={fadeInUp}>
            <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-gray-50 border border-indigo-400 hover:shadow-lg active:scale-[0.98]">Download CV</a>
            <a href="#contact" className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]">Contact Info</a>
          </motion.div>
          <motion.div className="flex justify-center md:justify-start space-x-6 text-gray-500 mt-8" variants={fadeInUp}>
            <a href="http://www.linkedin.com/in/mahmoud-dwedar-795122352" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/mahmoud-dwedar" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <GitHubIcon />
            </a>
            <a href="https://wa.me/201129857538" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}
