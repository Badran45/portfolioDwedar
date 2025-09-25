import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn } from '../animations/variants.js'
import me from '../assets/An.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-24 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-xl font-medium text-center text-gray-500">Get To Know More</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">About Me</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-14">
          {/* Left: Image */}
          <motion.div className="w-full md:w-auto flex justify-center" variants={scaleIn}>
            <img
              src={me}
              alt="Profile photo"
              className="rounded-3xl w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 object-cover"
            />
          </motion.div>

          {/* Right: Cards + paragraph */}
          <div className="w-full md:flex-1">
            <motion.div className="grid grid-cols-2 gap-6 mb-8" variants={staggerContainer}>
              <motion.div className="bg-white border-2 border-gray-300 p-8 rounded-[24px] text-center" variants={fadeInUp}>
                <span className="text-3xl mb-3 block text-black">🏅</span>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">Experience</h4>
                <p className="text-gray-700 text-sm font-medium">Data Analysis Intern – DEPI</p>
                <p className="text-gray-600 text-sm">July 2025 – Present</p>
                <p className="text-gray-600 text-sm">Applied Excel, SQL, Power BI and Python in projects for data cleaning and analysis</p>
              </motion.div>
              <motion.div className="bg-white border-2 border-gray-300 p-8 rounded-[24px] text-center" variants={fadeInUp}>
                <span className="text-3xl mb-3 block text-black">🎓</span>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">Education</h4>
                <p className="text-gray-700 text-sm">Bachelor’s in Computer Science & Artificial Intelligence</p>
                <p className="text-gray-600 text-sm">Pharos University</p>
              </motion.div>
            </motion.div>
            <motion.p className="text-gray-700 leading-relaxed" variants={fadeInUp}>
            I specialize in data analysis and visualization, helping businesses transform raw data into clear, actionable insights. Using tools like Excel, SQL, Python, and Power BI, I create clean reports and interactive dashboards that save time and support smarter decision-making. My focus is on delivering results that are simple to understand, reliable, and tailored to each client’s needs.            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

