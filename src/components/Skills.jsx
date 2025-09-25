import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../animations/variants.js'

export default function Skills() {
  return (
    <section id="skills" className="py-24 scroll-mt-24 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-xl font-medium text-center text-gray-500">Explore My</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-600">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
            <h4 className="text-2xl font-bold text-center mb-6 text-indigo-600">Soft Skills</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Problem Solving',
                'Teamwork & Collaboration',
                'Leadership',
                'Time Management & Self-Learning',
                'Critical Thinking',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="mt-0.5 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
            <h4 className="text-2xl font-bold text-center mb-6 text-indigo-600">Technical Skills</h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                'SQL (Data Extraction & Queries)',
                'Power BI (Reports & Dashboards)',
                'Microsoft Excel (Pivot Tables, Charts, Formulas)',
                'Python (Pandas, NumPy, Matplotlib)',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="mt-0.5 inline-block h-2.5 w-2.5 rounded-full bg-indigo-600" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
