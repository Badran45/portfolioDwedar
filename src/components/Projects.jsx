import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../animations/variants.js'

const projects = [
  {
    title: 'Project One',
    img: 'https://placehold.co/600x400/1F2937/FDE047',
    github: 'https://github.com/mahmoud-dwedar',
    demo: 'https://example.com',
    delay: 0,
  },
  {
    title: 'Project Two',
    img: 'https://placehold.co/600x400/1F2937/FDE047',
    github: 'https://github.com/mahmoud-dwedar',
    demo: 'https://example.com',
    delay: 100,
  },
  {
    title: 'Project Three',
    img: 'https://placehold.co/600x400/1F2937/FDE047',
    github: 'https://github.com/mahmoud-dwedar',
    demo: 'https://example.com',
    delay: 200,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-24 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h3 className="text-xl font-medium text-center text-gray-500">Browse My Recent</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <motion.div key={p.title} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" variants={fadeInUp} whileHover={{ y: -4 }}>
              <img src={p.img} alt={p.title} className="rounded-xl mb-6 w-full object-cover" loading="lazy" />
              <h4 className="text-2xl font-semibold mb-4 text-black">{p.title}</h4>
              <div className="flex justify-center space-x-4">
                <a href={p.github} className="bg-white text-black font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-50 border border-black" target="_blank" rel="noreferrer">GitHub</a>
                <a href={p.demo} className="bg-black text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-800" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
