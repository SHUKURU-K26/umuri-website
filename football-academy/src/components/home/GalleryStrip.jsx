import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Media from '../ui/Media'
import { images } from '../../data/images'

export default function GalleryStrip() {
  const items = Array.from({ length: 4 }, (_, i) => images.gallery[i] || {})
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold uppercase leading-none tracking-tighter">
            Memories <span className="text-accent">&amp; moments</span>
          </h2>
          <Link to="/gallery" className="hidden items-center gap-2 text-sm font-semibold hover:text-accent sm:inline-flex">
            Full gallery <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08} className={i % 2 ? 'md:mt-12' : ''}>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-line">
                <Media src={it.src} label={it.label || `Memory 0${i + 1}`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}