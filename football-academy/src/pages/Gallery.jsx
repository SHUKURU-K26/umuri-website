import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Media from '../components/ui/Media'
import Chip from '../components/ui/Chip'
import { images } from '../data/images'

const fallback = Array.from({ length: 9 }, (_, i) => ({
  label: `Memory 0${i + 1}`,
  category: ['Matches', 'Training', 'Events'][i % 3],
}))

export default function Gallery() {
  const items = images.gallery.length ? images.gallery : fallback
  const cats = ['All', ...new Set(items.map((i) => i.category).filter(Boolean))]
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? items : items.filter((i) => i.category === cat)

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Memories & moments" text="Matches, training days and the little moments in between." />
      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {cats.map((c) => (
              <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>
            ))}
          </div>
          <div className="columns-2 gap-3 md:columns-3">
            {list.map((it, i) => (
              <Reveal key={i} className="mb-3 break-inside-avoid">
                <div className={`group overflow-hidden rounded-2xl border border-line ${i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <div className="h-full w-full transition duration-700 group-hover:scale-105">
                    <Media src={it.src} label={it.label} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}