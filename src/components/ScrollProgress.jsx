import React from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const height = h.scrollHeight - h.clientHeight
      const p = height > 0 ? (scrolled / height) * 100 : 0
      setProgress(Math.min(100, Math.max(0, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-1 bg-transparent">
      <div
        className="h-full bg-emerald-500 dark:bg-emerald-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
