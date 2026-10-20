import { useState } from 'react'
import { getProductImage } from '../data/images'

/** რეალური ფოტო; თუ არ არის ან ვერ ჩაიტვირთა — emoji. */
export default function ProductImage({ id, emoji, alt = '', className = '', emojiClassName = '', fit = 'object-contain' }) {
  const [failed, setFailed] = useState(false)
  const src = getProductImage(id)

  if (!src || failed) {
    return <span className={emojiClassName}>{emoji}</span>
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${fit} ${className}`}
    />
  )
}
