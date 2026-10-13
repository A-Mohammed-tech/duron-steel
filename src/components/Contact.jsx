import { useState } from 'react'
import { MapPin, Phone, AlertTriangle } from 'lucide-react'
import Reveal from './Reveal'
import { company } from '../data/content'

const field = 'w-full border border-white/15 bg-charcoal-800 px-4 py-3 text-white placeholder-steel-500 transition-colors focus:border-duron-500 focus:outline-none'

export default function Contact() {
  const [notice, setNotice] = useState(false)

  // BACKEND REQUIRED: this form does not send anything yet.
  // Connect it to a service (e.g. Formspree, EmailJS, or your own API) before launch.
  const onSubmit = (e) => {
    e.preventDefault()
    setNotice(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow">Contact Us</p>
          <h2 className="h-section">Talk to Duron Steel</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <address className="brushed space-y-7 border border-white/10 p-8 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-duron-400" aria-hidden />
                <p className="leading-relaxed text-steel-300">{company.address.map((l) => (<span key={l} className="block">{l}</span>))}</p>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-duron-400" aria-hidden />
                <a href={company.phoneHref} className="font-display text-3xl font-semibold tracking-wide text-white transition-colors hover:text-duron-400">{company.phoneDisplay}</a>
              </div>
            </address>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label htmlFor="name" className="mb-1.5 block text-sm text-steel-300">Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
                <div><label htmlFor="email" className="mb-1.5 block text-sm text-steel-300">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
              </div>
              <div><label htmlFor="company" className="mb-1.5 block text-sm text-steel-300">Company</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
              <div><label htmlFor="message" className="mb-1.5 block text-sm text-steel-300">Message</label><textarea id="message" name="message" rows="5" required className={field} /></div>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {notice && (
                <p role="status" className="flex gap-3 border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
                  <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden />
                  This form is not connected to a backend yet, so your message was not sent. Please call {company.phoneDisplay}.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="overflow-hidden border border-white/10">
            <iframe
              title="Map showing the Duron Steel address in Sriperumbudur, Tamil Nadu"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
              className="h-[380px] w-full grayscale invert-[.9] contrast-[.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
