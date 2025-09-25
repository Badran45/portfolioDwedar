import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = React.useState(true)
  // Minimal top progress bar; no overlay blocking
  React.useEffect(() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduceMotion ? 150 : 500
    const finish = () => {
      const t = setTimeout(() => setVisible(false), delay)
      return () => clearTimeout(t)
    }
    if (document.readyState === 'complete') return finish()
    const handler = () => finish()
    window.addEventListener('load', handler, { once: true })
    return () => window.removeEventListener('load', handler)
  }, [])

  // Variants
  const reveal = { initial: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } } }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          variants={reveal}
          initial="initial"
          animate={{ opacity: 1 }}
          exit="exit"
          className="fixed inset-0 z-[1000] overflow-hidden pointer-events-none"
          role="status"
          aria-busy="true"
          aria-live="polite"
          aria-label="Loading"
        >
          {/* Minimal top progress bar only */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: ['25%', '55%', '80%', '100%'] }}
              transition={{ durations: [0.2, 0.25, 0.25, 0.15], times: [0, 0.35, 0.7, 1], ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
