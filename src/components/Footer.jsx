import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray text-sm bg-white border-gray-200">
      <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-5 sm:gap-8 mb-4">
        <a href="#about" className="block text-black text-base sm:text-lg font-medium transition-colors hover:text-gray-600 hover:underline underline-offset-4">About</a>
        <a href="#skills" className="block text-black text-base sm:text-lg font-medium transition-colors hover:text-gray-600 hover:underline underline-offset-4">Experience</a>
        <a href="#projects" className="block text-black text-base sm:text-lg font-medium transition-colors hover:text-gray-600 hover:underline underline-offset-4">Projects</a>
        <a href="#contact" className="block text-black text-base sm:text-lg font-medium transition-colors hover:text-gray-600 hover:underline underline-offset-4">Contact</a>
      </div>
      <p className="mt-2 text-gray-600">Copyright 2025 Mahmoud Dwedar. All Rights Reserved.</p>
    </footer>
  )
}
