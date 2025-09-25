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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-600">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
          <motion.div className="w-full md:w-1/2 flex justify-center" variants={scaleIn}>
            <div className="relative w-11/12 max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-200 to-indigo-100 blur-2xl" aria-hidden="true" />
              <img src={me} alt="Profile photo" className="relative rounded-3xl border-4 border-white shadow-2xl w-full object-cover" />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" variants={staggerContainer}>
              <motion.div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
                <span className="text-4xl mb-2 block text-indigo-600">🏅</span>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Experience</h4>
                <p className="text-gray-600 text-sm font-medium">Data Analysis Intern – DEPI</p>
                <p className="text-gray-600 text-sm">July 2025 – Present</p>
                <p className="text-gray-600 text-sm">Applied Excel, SQL, Power BI and Python in projects for data cleaning and analysis</p>
              </motion.div>
              <motion.div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
                <span className="text-4xl mb-2 block text-indigo-600">🎓</span>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Education</h4>
                <p className="text-gray-600 text-sm font-medium">Bachelor’s in Computer Science & Artificial Intelligence</p>
                <p className="text-gray-600 text-sm">Pharos University</p>
              </motion.div>
            </motion.div>
            <motion.p className="text-gray-700 leading-relaxed" variants={fadeInUp}>
            I specialize in data analysis and visualization, helping businesses transform raw data into clear, actionable insights. Using tools like Excel, SQL, Python, and Power BI, I create clean reports and interactive dashboards that save time and support smarter decision-making.
            My focus is on delivering results that are simple to understand, reliable, and tailored to each client’s needs.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
