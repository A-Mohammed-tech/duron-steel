import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { products } from '../data/content'
import { images } from '../data/images'
import SteelVisual from '../components/SteelVisual'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  useEffect(() => window.scrollTo(0, 0), [slug])
  if (!product) return <Navigate to="/" replace />
  const others = products.filter((p) => p.slug !== slug)

  return (
    <main className="pt-28">
      <Seo title={`${product.name} | DURON STEEL`} description={product.description} />
      <div className="container-x pb-20">
        <Link to="/#products" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-steel-400 hover:text-white"><ArrowLeft size={16} aria-hidden /> All products</Link>
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Product category</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-7xl">{product.name}</h1>
            <p className="mt-6 text-lg text-steel-300">{product.description}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[10/7] overflow-hidden border border-white/10">
              <SteelVisual type={product.visual} image={images[product.slug]} alt={`${product.name} illustration`} />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 leading-relaxed text-steel-300 lg:col-span-2">
            {product.detail.map((d) => <p key={d}>{d}</p>)}
            {product.grades && (
              <div className="brushed mt-8 border border-white/10 p-6">
                <h2 className="font-display text-2xl font-bold uppercase text-white">Grades named in the company profile</h2>
                <dl className="mt-4 space-y-4">
                  {product.grades.map((g) => (
                    <div key={g.level}>
                      <dt className="font-display text-lg uppercase tracking-wide text-duron-400">{g.level}</dt>
                      <dd className="mt-1 flex flex-wrap gap-2">{g.list.map((x) => <span key={x} className="border border-white/15 px-3 py-1 text-sm text-steel-200">{x}</span>)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
          <aside className="space-y-6">
            <div className="glass p-6">
              <h2 className="font-display text-xl font-bold uppercase text-white">Key characteristics</h2>
              <ul className="mt-4 space-y-2 text-sm text-steel-300">{product.characteristics.map((c) => <li key={c} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-duron-400" aria-hidden />{c}</li>)}</ul>
            </div>
            <div className="glass p-6">
              <h2 className="font-display text-xl font-bold uppercase text-white">Applications</h2>
              <ul className="mt-4 space-y-2 text-sm text-steel-300">{product.applications.map((c) => <li key={c} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-duron-400" aria-hidden />{c}</li>)}</ul>
            </div>
            <Link to="/#contact" className="btn btn-primary w-full">Enquire about this steel</Link>
          </aside>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <h2 className="font-display text-2xl font-bold uppercase text-white">Other categories</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => <li key={o.slug}><Link to={`/products/${o.slug}`} className="btn btn-ghost !py-2.5">{o.name}</Link></li>)}
          </ul>
        </div>
      </div>
    </main>
  )
}
