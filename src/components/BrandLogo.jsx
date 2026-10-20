import { useState } from 'react'
import { getBrandLogo } from '../data/images'

/* */
export default function BrandLogo({ brand, className = 'h-4 w-auto' }) {
  const [failed, setFailed] = useState(false)
  const src = getBrandLogo(brand)

  if (!src || failed) return <span>{brand}</span>

  return <img src={src} alt={brand} loading="lazy" onError={() => setFailed(true)} className={`object-contain ${className}`} />
}
