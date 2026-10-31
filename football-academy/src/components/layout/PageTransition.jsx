import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1]
let firstLoad = true // skip the sweep on the very first page (the loader already handles that)

export default function PageTransition({ children }) {
  const skip = useRef(firstLoad)
  useEffect(() => { firstLoad = false }, [])

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: skip.current ? 0 : 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {children}
      </motion.main>

      <motion.div
        className="pointer-events-none fixed inset-0 z-[90] bg-accent"
        initial={{ scaleY: skip.current ? 0 : 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0, transition: { duration: 0.7, ease, delay: 0.1 } }}
        exit={{ scaleY: 1, originY: 1, transition: { duration: 0.5, ease } }}
      />
    </>
  )
}