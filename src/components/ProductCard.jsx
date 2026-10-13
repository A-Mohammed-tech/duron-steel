import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SteelVisual from './SteelVisual'
import { images } from '../data/images'

export default function ProductCard({ product }) {
  return (
    <article className="group brushed flex h-full flex-col overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-duron-500/60 hover:shadow-[0_20px_60px_-20px_rgba(200,16,46,.45)]">
      <div className="relative aspect-[10/7] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
          <SteelVisual type={product.visual} image={images[product.slug]} alt={`${product.name} illustration`} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl font-bold uppercase leading-none text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-400">{product.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-steel-300">
          {product.characteristics.map((c) => (
            <li key={c} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-duron-400" aria-hidden />{c}</li>
          ))}
        </ul>
        <Link
          to={`/products/${product.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-7 font-display text-base font-semibold uppercase tracking-widest text-white transition-colors group-hover:text-duron-400"
          aria-label={`Learn more about ${product.name}`}
        >
          Learn More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
