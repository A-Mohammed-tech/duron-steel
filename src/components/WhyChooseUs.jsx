import * as Icons from 'lucide-react'
import Reveal from './Reveal'
import { whyChoose } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-charcoal-950">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Why Duron Steel</p>
          <h2 className="h-section max-w-3xl">Built on focus and experience</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => {
            const Icon = Icons[w.icon] ?? Icons.Check
            return (
              <Reveal key={w.title} delay={(i % 3) * 0.1}>
                <div className="glass h-full p-7 transition-colors hover:border-duron-500/50">
                  <Icon size={30} className="text-duron-400" aria-hidden />
                  <h3 className="mt-5 font-display text-2xl font-semibold uppercase text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-steel-400">{w.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
