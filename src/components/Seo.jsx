import { useEffect } from 'react'

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [title, description])
  return null
}
