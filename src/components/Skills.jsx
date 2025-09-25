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
        <h3 className="text-xl font-medium text-center text-gray-500">My</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
            <h4 className="text-2xl font-bold text-center mb-6 text-black">Soft Skills</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="p-3 bg-gray-50 rounded-lg">Problem Solving</li>
              <li className="p-3 bg-gray-50 rounded-lg">Teamwork & Collaboration</li>
              <li className="p-3 bg-gray-50 rounded-lg">Leadership</li>
              <li className="p-3 bg-gray-50 rounded-lg">Time Management & Self-Learning</li>
              <li className="p-3 bg-gray-50 rounded-lg">Critical Thinking</li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp}>
            <h4 className="text-2xl font-bold text-center mb-6 text-black">Technical Skills</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="p-3 bg-gray-50 rounded-lg">SQL (Data Extraction & Queries)</li>
              <li className="p-3 bg-gray-50 rounded-lg">Power BI (Reports & Dashboards)</li>
              <li className="p-3 bg-gray-50 rounded-lg">Microsoft Excel (Pivot Tables, Charts, Formulas)</li>
              <li className="p-3 bg-gray-50 rounded-lg">Python (Pandas, NumPy, Matplotlib)</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

