import React from 'react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    const original = document.body.style.overflow
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  // Scroll-spy disabled per request to avoid sticky hover-like effect

  const linkClass = 'block px-3 py-2 rounded-md font-medium transition-colors border-b-2 border-transparent text-gray-700 hover:text-indigo-600 hover:border-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'

  const closeAnd = (fn) => (e) => {
    setOpen(false)
    if (fn) fn(e)
  }

  // theme toggle removed per request; dark mode can still be set externally

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'} bg-white/90 border-b border-transparent ${scrolled ? 'border-gray-200' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition-colors">Mahmoud Dwedar</a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="ml-2 flex items-baseline space-x-2">
              <a href="#about" className={linkClass} onClick={(e)=>e.currentTarget.blur()}>About</a>
              <a href="#projects" className={linkClass} onClick={(e)=>e.currentTarget.blur()}>Projects</a>
              <a href="#skills" className={linkClass} onClick={(e)=>e.currentTarget.blur()}>Skills</a>
              <a href="#contact" className={linkClass} onClick={(e)=>e.currentTarget.blur()}>Contact</a>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 w-full">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a href="#about" className={`${linkClass} hover:bg-gray-50 rounded-lg`} onClick={closeAnd()}>About</a>
            <a href="#projects" className={`${linkClass} hover:bg-gray-50 rounded-lg`} onClick={closeAnd()}>Projects</a>
            <a href="#skills" className={`${linkClass} hover:bg-gray-50 rounded-lg`} onClick={closeAnd()}>Skills</a>
            <a href="#contact" className={`${linkClass} hover:bg-gray-50 rounded-lg`} onClick={closeAnd()}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}
