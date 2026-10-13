import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => { const t = setTimeout(() => setShow(false), 900); return () => clearTimeout(t) }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950" aria-hidden>
          <span className="rounded bg-white p-2"><img src="/duron-logo.png" alt="" className="h-20 w-auto" /></span>
          <div className="mt-8 h-0.5 w-48 overflow-hidden bg-charcoal-700">
            <motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} transition={{ duration: 0.8 }} className="h-full bg-duron-500" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
