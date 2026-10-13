import Reveal from './Reveal'
import ProductCard from './ProductCard'
import { products } from '../data/content'

export default function ProductSection() {
  return (
    <section id="products" className="section bg-charcoal-950">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Products</p>
          <h2 className="h-section max-w-3xl">Four categories of tool &amp; die steel</h2>
          <p className="mt-5 max-w-2xl text-steel-400">Product categories as described in the Duron Steel company profile.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
