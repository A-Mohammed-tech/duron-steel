import { motion } from 'framer-motion'
import { Flame, Droplets, Snowflake, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SteelVisual from './SteelVisual'
import { images } from '../data/images'

const stages = [
  { icon: Flame, label: 'Austenitic structure', text: 'Tool steel starts with an austenitic structure.' },
  { icon: Droplets, label: 'Quenching', text: 'Quenching changes the structure of steel.' },
  { icon: Snowflake, label: 'Martensitic / bainitic', text: 'Heat treatment converts it to a martensitic or bainitic structure.' },
]

export default function HeatTreatment() {
  return (
    <section id="heat-treatment" className="section relative overflow-hidden">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-duron-500/15 blur-[130px]" aria-hidden />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="h-section">Vacuum heat treatment</h2>
            <p className="mt-7 text-lg leading-relaxed text-steel-300">
              Duron Steel is working to provide vacuum heat treatment facilities using the highest state of the art technology,
              with full support from its principals in Asia/Europe and India. Modern vacuum furnaces are being made available
              for the heat treatment of tools.
            </p>
            <p className="mt-4 leading-relaxed text-steel-400">
              To understand heat treatment, the concept of hardening has to be recognised accurately first.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass relative aspect-[10/7] overflow-hidden">
              <SteelVisual type="furnace" image={images['vacuum-furnace']} alt="Illustration of a vacuum furnace" />
              <p className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-steel-400">Illustration · replace with furnace photography</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="font-display text-3xl font-bold uppercase text-white">How hardening works</h3>
          <p className="mt-2 text-sm text-steel-500">Qualitative overview from the company profile. No temperatures or times are implied.</p>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {stages.map(({ icon: Icon, label, text }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.6 }}
              className="brushed relative border border-white/10 p-7"
            >
              <span className="absolute right-5 top-4 font-display text-6xl font-bold text-white/5">0{i + 1}</span>
              <span className="flex h-12 w-12 items-center justify-center bg-duron-500 text-white"><Icon aria-hidden /></span>
              <h4 className="mt-5 font-display text-2xl font-semibold uppercase text-white">{label}</h4>
              <p className="mt-2 text-steel-400">{text}</p>
              <div className="mt-6 h-1.5 overflow-hidden bg-charcoal-700" aria-hidden>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(i + 1) * 33.3}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.18, duration: 0.9 }}
                  className="h-full bg-gradient-to-r from-steel-400 to-duron-500"
                />
              </div>
            </motion.li>
          ))}
        </ol>

        <Reveal className="mt-12">
          <div className="glass flex gap-4 p-6">
            <Sparkles className="mt-1 shrink-0 text-duron-400" aria-hidden />
            <p className="text-steel-300">
              <strong className="text-white">Why it matters for tooling:</strong> toughness normally depends on hardness level and microstructure
              (carbide distribution, grain size, inclusion ratings). Choosing steel and treatment suited to the application helps
              match a tool to its wear, impact and temperature demands.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
