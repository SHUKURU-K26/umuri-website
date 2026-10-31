import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1]

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n += Math.ceil(Math.random() * 7)
      if (n >= 100) {
        n = 100
        clearInterval(id)
        setCount(100)
        setTimeout(() => setLeaving(true), 350)
      } else setCount(n)
    }, 70)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] text-[#f2f5ee]">
      {/* two curtains */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#05080c]"
        animate={{ y: leaving ? '-100%' : 0 }}
        transition={{ duration: 0.9, ease }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#05080c]"
        animate={{ y: leaving ? '100%' : 0 }}
        transition={{ duration: 0.9, ease }}
        onAnimationComplete={() => leaving && onDone()}
      />

      {/* centre content */}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={{ opacity: leaving ? 0 : 1, scale: leaving ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative grid place-items-center">
          <svg width="180" height="180" viewBox="0 0 120 120" className="-rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <motion.circle
              cx="60" cy="60" r="54" fill="none" stroke="#c8ff2e" strokeWidth="2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: count / 100 }}
              transition={{ duration: 0.15 }}
            />
          </svg>
          <span className="absolute font-display text-4xl font-bold tabular-nums">{count}</span>
        </div>
        <p className="absolute bottom-[28%] font-display text-sm uppercase tracking-[0.5em] text-white/60">
          Umuri Academy
        </p>
      </motion.div>
    </div>
  )
}