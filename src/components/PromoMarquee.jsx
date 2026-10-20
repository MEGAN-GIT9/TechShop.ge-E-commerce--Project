import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS, discountPercent, isDiscounted } from '../data/products'
import { useI18n } from '../context/I18nContext'
import { formatPrice } from '../lib/pricing'
import { localText } from '../lib/storage'
import ProductImage from './ProductImage'

export default function PromoMarquee() {
  const { lang } = useI18n()

  const promos = useMemo(() => PRODUCTS.filter((p) => isDiscounted(p)), [])
  const loop = [...promos, ...promos]

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl py-7 overflow-hidden shadow-sm">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="overflow-hidden w-full">
        <div className="animate-marquee-track flex w-max gap-6">
          {loop.map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              to={`/product/${product.id}`}
              className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 min-h-28 hover:bg-rose-50 transition-colors flex-shrink-0 select-none"
            >
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                <ProductImage
                  id={product.id}
                  emoji={product.emoji}
                  alt={localText(product.name, lang)}
                  className="w-full h-full p-1.5"
                  emojiClassName="text-5xl"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-black text-rose-600 truncate max-w-[190px]">
                  {localText(product.name, lang)}
                </p>
                <p className="text-sm font-extrabold text-slate-900 mt-1">
                  {formatPrice(product.price)}
                  {isDiscounted(product) && (
                    <span className="ml-1.5 text-amber-600">−{discountPercent(product)}%</span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}