import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 py-12">
      <div className="container-x flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-20 items-center justify-center rounded bg-white p-1"><img src="/duron-logo.png" alt="Duron Steel logo" className="h-full w-full object-contain" /></span>
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.18em] text-white">{company.name}</p>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-duron-400">{company.tagline}</p>
          </div>
        </div>
        <p className="max-w-sm text-sm text-steel-500">{company.address.join(' ')}<br /><a href={company.phoneHref} className="text-steel-300 hover:text-white">Tel: {company.phoneDisplay}</a></p>
      </div>
      <p className="container-x mt-8 text-center text-xs text-steel-600">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
    </footer>
  )
}
