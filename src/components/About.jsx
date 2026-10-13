import Reveal from './Reveal'
import { company } from '../data/content'
import { Factory, Cog, Flame, Handshake } from 'lucide-react'

const pillars = [
  { icon: Handshake, title: 'Global manufacturers', text: "Represents the world's best manufacturers in India, as stated in the company profile." },
  { icon: Cog, title: 'Steel & machining', text: 'Uses manufacturers’ developed technology to improve steel products and machining capabilities.' },
  { icon: Flame, title: 'Vacuum heat treatment', text: 'Working to provide vacuum heat treatment with technology support from principals.' },
]

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">About Duron Steel</p>
          <h2 className="h-section">Serving the tool &amp; die steel industry since {company.since}</h2>
          <p className="mt-7 text-lg leading-relaxed text-steel-300">
            Duron Steel has been serving the tool and die steel industry since {company.since}, with {company.serviceCentres} service centres,
            and represents the world’s best manufacturers in our country.
          </p>
          <p className="mt-4 leading-relaxed text-steel-400">
            The company has been able to harness, to mutual benefit, the developed technology of these manufacturers
            and improve its steel products and machining capabilities.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-px bg-white/10">
            <div className="bg-charcoal-900 p-6">
              <p className="metal-text font-display text-5xl font-bold">{company.since}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-steel-400">Serving the industry since</p>
            </div>
            <div className="bg-charcoal-900 p-6">
              <p className="metal-text font-display text-5xl font-bold">{company.serviceCentres}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-steel-400">Service centres</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="group brushed flex gap-5 border border-white/10 p-6 transition-colors hover:border-duron-500/60">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-duron-500/15 text-duron-400 transition-colors group-hover:bg-duron-500 group-hover:text-white">
                  <Icon aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-white">{title}</h3>
                  <p className="mt-1 text-steel-400">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <p className="flex items-center gap-3 pt-2 text-sm text-steel-500"><Factory size={16} aria-hidden /> Facts above are drawn from the Duron Steel company profile.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
