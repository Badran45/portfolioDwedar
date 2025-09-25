// Reusable Framer Motion variants for consistent, professional animations
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18, mass: 0.6 },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
}

export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 #0000' },
  hover: {
    y: -4,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
}
