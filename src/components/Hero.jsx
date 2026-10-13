import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { company, hero } from '../data/content'

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], [0, 140])
  const fade = useTransform(scrollY, [0, 500], [1, 0.2])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal-950" aria-labelledby="hero-title">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20" aria-hidden>
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute -right-40 top-1/4 h-[620px] w-[620px] rounded-full bg-duron-500/25 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-steel-400/10 blur-[120px]" />
        {/* stylised steel bars */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center gap-5 opacity-80 md:flex">
          {[60, 84, 100, 78, 52].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.1, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: `${h}%`, transformOrigin: 'bottom' }}
              className="w-12 bg-gradient-to-r from-charcoal-600 via-steel-200 to-charcoal-600 shadow-[0_0_60px_-10px_rgba(0,0,0,.9)] lg:w-16"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-900 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-x relative z-10 pt-24">
        <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="eyebrow">
          Tool &amp; Die Steel · Since {company.since}
        </motion.p>
        <h1 id="hero-title" className="mt-5 max-w-4xl font-display text-6xl font-extrabold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
          {hero.headline.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${i === 0 ? 'metal-text' : 'text-white'}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-7 max-w-xl text-lg text-steel-300">
          {hero.support}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#products" className="btn btn-primary">Explore Products</a>
          <a href="#heat-treatment" className="btn btn-ghost">Our Capabilities</a>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-14 font-display text-sm uppercase tracking-[0.35em] text-steel-400">
          {company.tagline}
        </motion.p>
      </motion.div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-steel-400">
        <ChevronDown />
      </a>
    </section>
  )
}
