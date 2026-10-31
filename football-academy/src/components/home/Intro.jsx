import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Media from '../ui/Media'
import { images } from '../../data/images'
import { academy } from '../../data/academy'

export default function Intro() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">Who we are</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] uppercase leading-[1] tracking-tighter">
            More than a club. <span className="text-outline">A home</span> for <span className="text-accent">dreamers.</span>
          </h2>
          <p className="mt-6 max-w-md font-light text-muted">
            Umuri means light. We exist to light the way for young players, building skill, character and
            confidence that last long after the final whistle.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
            Read our story <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line [clip-path:polygon(0_0,100%_0,100%_88%,88%_100%,0_100%)]">
            <Media src={images.about} label="Umuri Academy" />
            <div className="glass absolute bottom-5 left-5 rounded-2xl px-4 py-3 text-xs">
              <p className="uppercase tracking-widest text-muted">Founded</p>
              <p className="font-display text-xl">{academy.founded}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}