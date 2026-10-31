import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Media from '../components/ui/Media'
import Chip from '../components/ui/Chip'
import { players } from '../data/academy'

const squads = ['All', ...new Set(players.map((p) => p.squad))]

export default function Team() {
  const [squad, setSquad] = useState('All')
  const list = squad === 'All' ? players : players.filter((p) => p.squad === squad)

  return (
    <>
      <PageHeader eyebrow="The team" title="Meet our players" text="The young talents carrying the Umuri badge." />
      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {squads.map((s) => (
              <Chip key={s} active={squad === s} onClick={() => setSquad(s)}>{s}</Chip>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {list.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.06}>
                <article className="soft relative overflow-hidden rounded-2xl">
                  <span className="absolute right-3 top-2 z-10 font-display text-5xl text-outline">{p.number}</span>
                  <div className="aspect-[3/4]">
                    <Media src={p.photo} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display uppercase tracking-tight">{p.name}</h3>
                    <p className="text-xs text-muted">{p.position} · {p.squad}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}