import { MapPin } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function ContactCta() {
  return (
    <section className="px-5 pb-28 md:px-10">
      <Reveal className="clay relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 md:p-16">
        <MapPin className="absolute -right-6 -top-6 h-48 w-48 opacity-10" />
        <p className="text-xs uppercase tracking-[0.3em] opacity-70">Visit us</p>
        <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,4.5vw,3.5rem)] uppercase leading-[0.98] tracking-tighter">
          Want to know more? Come see us in person.
        </h2>
        <Button to="/contact" variant="glass" className="mt-8 !text-accent-fg">
          Contact &amp; location
        </Button>
      </Reveal>
    </section>
  )
}