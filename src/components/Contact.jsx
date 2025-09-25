import React from 'react'
import { EmailIcon, LinkedInIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-medium text-center text-gray-500">Get in Touch</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">Contact Me</h2>
        <div className="mx-auto w-full max-w-xl border-2 border-gray-300 rounded-2xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 overflow-hidden">
          {/* Email */}
          <a href="mailto:dwedar207@gmail.com" className="flex items-center gap-3 text-black hover:text-gray-700 hover:underline underline-offset-4 flex-1 min-w-0 justify-center">
            <span className="text-2xl shrink-0"><EmailIcon /></span>
            <span className="truncate">dwedar207@gmail.com</span>
          </a>
          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/mahmoud-dwedar-795122352" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-black hover:text-gray-700 flex-1 min-w-0 justify-center">
            <span className="text-2xl shrink-0"><LinkedInIcon /></span>
            <span className="font-medium truncate">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
