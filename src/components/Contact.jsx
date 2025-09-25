import React from 'react'
import { EmailIcon, WhatsAppIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-medium text-center text-gray-500">Get In Touch</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-indigo-600">Contact Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-center">
          {/* Primary button: Email */}
          <a
            href="mailto:dwedar207@gmail.com"
            aria-label="Email Mahmoud"
            className="group bg-indigo-600 text-white p-6 rounded-2xl shadow-lg inline-flex items-center justify-center space-x-2 py-3 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{<EmailIcon />}</span>
            <span className="font-semibold">dwedar207@gmail.com</span>
          </a>
          {/* Secondary button: WhatsApp */}
          <a
            href="https://wa.me/201129857538"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="group bg-white text-indigo-600 border border-indigo-400 p-6 rounded-2xl shadow-lg inline-flex items-center justify-center space-x-2 py-3 px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-50 hover:border-indigo-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">{<WhatsAppIcon />}</span>
            <span className="font-semibold">+20 112 985 7538</span>
          </a>
        </div>
      </div>
    </section>
  )
}
