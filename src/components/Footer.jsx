import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-600 text-sm bg-white border-t border-gray-200">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#about" className="transition-colors hover:text-indigo-600">About</a>
        <a href="#skills" className="transition-colors hover:text-indigo-600">Experience</a>
        <a href="#projects" className="transition-colors hover:text-indigo-600">Projects</a>
        <a href="#contact" className="transition-colors hover:text-indigo-600">Contact</a>
      </div>
      <p>Copyright {new Date().getFullYear()} Mahmoud Dwedar. All Rights Reserved.</p>
    </footer>
  )
}
