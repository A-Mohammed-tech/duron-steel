import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { company } from '../data/content'

const links = [
  ['About', '#about'],
  ['Products', '#products'],
  ['Heat Treatment', '#heat-treatment'],
  ['Applications', '#applications'],
  ['Technical', '#technical'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const base = pathname === '/' ? '' : '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-charcoal-950/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label="DURON STEEL home">
          <span className="flex h-12 w-[4.5rem] items-center justify-center rounded bg-white p-1">
            <img src="/duron-logo.png" alt="Duron Steel logo" className="h-full w-full object-contain" />
          </span>
          <span className="hidden font-display text-xl font-bold tracking-[0.18em] text-white sm:block">DURON STEEL</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={`${base}${href}`} className="font-display text-sm font-semibold uppercase tracking-widest text-steel-300 transition-colors hover:text-white">{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={company.phoneHref} className="btn btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            <Phone size={16} aria-hidden /> {company.phoneDisplay}
          </a>
          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-charcoal-950/95 lg:hidden">
          <ul className="container-x flex flex-col py-4">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={`${base}${href}`} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3.5 font-display text-lg uppercase tracking-widest text-steel-200">{label}</a>
              </li>
            ))}
            <li className="pt-4">
              <a href={company.phoneHref} className="btn btn-primary w-full"><Phone size={16} aria-hidden /> Call {company.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
