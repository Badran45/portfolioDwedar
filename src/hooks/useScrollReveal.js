import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }
    // Pre-apply optional delays from data-delay (in ms)
    elements.forEach((el) => {
      const delay = el.getAttribute('data-delay')
      if (delay) {
        el.style.transitionDelay = `${delay}ms`
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
