import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { academy } from '../data/academy'

export default function Contact() {
  const cards = [
    { icon: Phone, label: 'Call us', value: academy.phone, href: `tel:${academy.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${academy.whatsapp}` },
    { icon: Mail, label: 'Email', value: academy.email, href: `mailto:${academy.email}` },
    { icon: MapPin, label: 'Address', value: academy.address },
    { icon: Clock, label: 'Open hours', value: academy.hours },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        text="Registration is done in person. Reach out or visit us and we will gladly guide you."
      />
      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid gap-4">
            {cards.map((c, i) => {
              const Inner = (
                <div className="soft flex items-center gap-4 rounded-2xl p-5">
                  <span className="clay grid h-11 w-11 place-items-center rounded-full">
                    <c.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              )
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? <a href={c.href} target="_blank" rel="noreferrer">{Inner}</a> : Inner}
                </Reveal>
              )
            })}
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              {academy.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-muted hover:text-accent">{s.label}</a>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="soft h-[26rem] overflow-hidden rounded-3xl p-2 lg:h-full lg:min-h-[32rem]">
              <iframe
                title="Umuri Academy location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(academy.mapQuery)}&output=embed`}
                className="h-full w-full rounded-2xl dark:[filter:grayscale(1)_invert(0.9)_hue-rotate(180deg)]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}