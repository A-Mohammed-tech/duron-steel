import * as Icons from 'lucide-react'
import Reveal from './Reveal'
import { applications } from '../data/content'

export default function Applications() {
  return (
    <section id="applications" className="section bg-charcoal-950">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Industries &amp; Applications</p>
          <h2 className="h-section max-w-3xl">Where tool steel does the work</h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a, i) => {
            const Icon = Icons[a.icon] ?? Icons.Settings
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08} className="bg-charcoal-900">
                <div className="group relative h-full overflow-hidden p-8 transition-colors hover:bg-charcoal-800">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-duron-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
                  <Icon size={34} className="text-steel-300 transition-colors group-hover:text-duron-400" aria-hidden />
                  <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-white">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-400">{a.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
