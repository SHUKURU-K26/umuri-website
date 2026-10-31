import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { journey } from '../../data/academy'

export default function Journey() {
  const section = useRef(null)
  const track = useRef(null)
  const [dist, setDist] = useState(0)
  const { scrollYProgress } = useScroll({ target: section })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const measure = () => setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section ref={section} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />

        <div className="relative px-5 md:px-10">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Our journey</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] uppercase leading-none tracking-tighter">
            From the first whistle <span className="text-outline">to today</span>
          </h2>
        </div>

        <motion.div ref={track} style={{ x }} className="relative mt-10 flex w-max gap-5 px-5 md:px-10">
          {journey.map((j) => (
            <article
              key={j.year}
              className="glass relative flex h-72 w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-6 md:w-[26rem] md:p-8"
            >
              <span className="font-display text-6xl tracking-tighter text-outline md:text-7xl">{j.year}</span>
              <div>
                <h3 className="font-display text-xl uppercase tracking-tight text-accent">{j.title}</h3>
                <p className="mt-2 text-sm text-muted">{j.text}</p>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="relative mx-5 mt-10 h-px bg-line md:mx-10">
          <motion.div className="h-px bg-accent" style={{ width: bar }} />
        </div>
      </div>
    </section>
  )
}