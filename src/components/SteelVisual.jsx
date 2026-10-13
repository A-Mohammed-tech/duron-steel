// Generated SVG visuals used as image placeholders (no external image dependency).
// To use real photography, pass an `image` URL (see src/data/images.js).
const scenes = {
  cutter: (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={70 + i * 52} y={60 + (i % 2) * 14} width="22" height="150" rx="3" fill="url(#bar)" />
      ))}
      <circle cx="200" cy="150" r="64" fill="none" stroke="url(#bar)" strokeWidth="10" strokeDasharray="14 9" opacity=".55" />
    </g>
  ),
  die: (
    <g>
      <rect x="60" y="150" width="280" height="62" rx="4" fill="url(#bar)" />
      <rect x="110" y="86" width="180" height="56" rx="4" fill="url(#bar)" opacity=".8" />
      <rect x="188" y="52" width="24" height="34" fill="url(#bar)" />
    </g>
  ),
  furnace: (
    <g>
      <rect x="82" y="70" width="236" height="150" rx="26" fill="url(#bar)" />
      <circle cx="200" cy="145" r="46" fill="url(#glow)" />
      <circle cx="200" cy="145" r="46" fill="none" stroke="#d9dde2" strokeWidth="5" opacity=".7" />
    </g>
  ),
  mould: (
    <g>
      <rect x="70" y="60" width="260" height="62" rx="4" fill="url(#bar)" />
      <rect x="70" y="150" width="260" height="62" rx="4" fill="url(#bar)" opacity=".8" />
      <rect x="150" y="122" width="100" height="28" fill="url(#glow)" opacity=".7" />
    </g>
  ),
}

export default function SteelVisual({ type = 'cutter', image, alt = '', className = '' }) {
  if (image) {
    return <img src={image} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <svg
      viewBox="0 0 400 280"
      role="img"
      aria-label={alt || `Illustration of ${type} steel tooling`}
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2d3238" />
          <stop offset="1" stopColor="#0b0c0e" />
        </linearGradient>
        <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5b626b" />
          <stop offset=".35" stopColor="#d9dde2" />
          <stop offset=".6" stopColor="#8a919b" />
          <stop offset="1" stopColor="#3d434a" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ff6a3d" />
          <stop offset=".6" stopColor="#c8102e" />
          <stop offset="1" stopColor="#4a0610" />
        </radialGradient>
      </defs>
      <rect width="400" height="280" fill="url(#bg)" />
      {scenes[type] ?? scenes.cutter}
    </svg>
  )
}
