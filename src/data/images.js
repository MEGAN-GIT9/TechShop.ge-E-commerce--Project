// რეალური ფოტოები პროდუქტებისა და ბრენდებისთვის.
//
// გამოყენება:
//   1) ფაილები ჩააგდე public/products/ და public/brands/ საქაღალდეებში
//      და ჩაწერე აქ მხოლოდ ფაილის სახელი (მაგ. '1.jpg'), ან
//   2) ჩაწერე სრული ბმული (https://...).
// თუ პროდუქტს ფოტო არ აქვს, საიტი დროებით აჩვენებს emoji-ს.

const BASE = import.meta.env.BASE_URL

const resolve = (folder, value) => {
  if (!value) return null
  return /^(https?:)?\/\//.test(value) ? value : `${BASE}${folder}/${value}`
}

// პროდუქტის id -> ფოტო
const PRODUCT_IMAGES = {
  1: '1.webp',
  2: '2.webp',
  3: '3.webp',
  4: '4.webp',
  5: '5.webp',
  6: '6.webp',
  7: '7.webp',
  8: '8.webp',
  9: '9.webp',
  10: '10.webp',
  11: '11.webp',
  12: '12.webp',
  13: '13.webp',
  14: '14.webp',
  15: '15.webp',
  16: '16.webp',
  17: '17.webp',
  18: '18.webp',
  19: '19.webp',
  20: '20.webp',
  21: '21.webp',
  22: '22.webp',
  23: '23.webp',
  24: '24.webp',
  25: '25.webp',
  26: '26.webp',
}

// ბრენდი -> ლოგო
const BRAND_LOGOS = {
  // Samsung: 'samsung.png',
  // Apple: 'apple.png',
  // Xiaomi: 'xiaomi.png',
  // Sony: 'sony.png',
  // LG: 'lg.png',
  // Philips: 'philips.png',
  // Bosch: 'bosch.png',
  // JBL: 'jbl.png',
  // Dell: 'dell.png',
  // Fujifilm: 'fujifilm.png',
}

export const getProductImage = (id) => resolve('products', PRODUCT_IMAGES[id])
export const getBrandLogo = (brand) => resolve('brands', BRAND_LOGOS[brand])
