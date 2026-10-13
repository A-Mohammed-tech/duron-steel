import { Info } from 'lucide-react'
import Reveal from './Reveal'
import { technical } from '../data/content'

export default function TechnicalInformation() {
  return (
    <section id="technical" className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Material Selection</p>
          <h2 className="h-section max-w-3xl">Properties that guide steel choice</h2>
          <p className="mt-5 max-w-2xl text-steel-400">
            Properties as discussed in the company profile. Final selection depends on the application; no performance is guaranteed here.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {technical.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1} className="h-full">
              <div className="brushed h-full border border-white/10 p-7">
                <h3 className="border-b border-duron-500/60 pb-4 font-display text-3xl font-bold uppercase text-white">{t.title}</h3>
                <dl className="mt-5 space-y-5">
                  {t.properties.map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-display text-lg font-semibold uppercase tracking-wide text-duron-400">{k}</dt>
                      <dd className="mt-0.5 text-sm text-steel-400">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="flex items-start gap-3 text-sm text-steel-500"><Info size={16} className="mt-0.5 shrink-0" aria-hidden />Contact Duron Steel to discuss grade selection for a specific tool or die.</p>
        </Reveal>
      </div>
    </section>
  )
}
