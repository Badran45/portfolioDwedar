import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroOverlay() {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    try {
      const seen = sessionStorage.getItem('introSeen') === '1'
      if (!seen) {
        setShow(true)
        const t = setTimeout(() => {
          setShow(false)
          sessionStorage.setItem('introSeen', '1')
        }, 1200)
        return () => clearTimeout(t)
      }
    } catch {}
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-lg bg-indigo-600" />
            <motion.h1
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
            >
              Mahmoud Dwedar
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
