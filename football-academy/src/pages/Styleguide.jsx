import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'

const tints = ['#c8ff2e', '#8b7bff', '#ff7a59', '#4cc9f0']

export default function Styleguide() {
  const [on, setOn] = useState('One')
  return (
    <>
      <PageHeader eyebrow="Internal" title="Style guide" text="Every surface style used on the site, in one place." />
      <section className="relative px-5 pb-28 md:px-10">
        <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />
        <div className="relative mx-auto grid max-w-5xl gap-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-accent">Buttons</p>
            <div className="flex flex-wrap gap-4">
              <Button>Clay</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="glass">Glass</Button>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-accent">Chips</p>
            <div className="flex gap-3">
              {['One', 'Two', 'Three'].map((c) => <Chip key={c} active={on === c} onClick={() => setOn(c)}>{c}</Chip>)}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass rounded-3xl p-8">Glass card</div>
            <div className="soft rounded-3xl p-8">Soft card</div>
            <div className="clay rounded-3xl p-8">Clay card</div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-accent">Clay tints</p>
            <div className="flex gap-4">
              {tints.map((t) => <span key={t} className="clay h-14 w-14 rounded-full" style={{ '--tint': t }} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}