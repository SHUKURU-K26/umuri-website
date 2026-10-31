import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import Intro from '../components/home/Intro'
import Bento from '../components/home/Bento'
import StatsBand from '../components/home/StatsBand'
import Journey from '../components/home/Journey'
import GalleryStrip from '../components/home/GalleryStrip'
import ContactCta from '../components/home/ContactCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Bento />
      <StatsBand />
      <Journey />
      <GalleryStrip />
      <ContactCta />
    </>
  )
}