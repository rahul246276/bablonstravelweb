import { formatPrice } from '../common/PriceDisplay'

export const getPackageImages = (travelPackage = {}) => {
  const images = []
  if (travelPackage.featuredImage?.url) images.push(travelPackage.featuredImage)
  if (travelPackage.images?.length) images.push(...travelPackage.images)
  if (travelPackage.gallery?.length) images.push(...travelPackage.gallery)

  return images.filter((image, index, list) => image?.url && list.findIndex((item) => item.url === image.url) === index)
}

export const getPackagePrice = (travelPackage = {}, departure) =>
  departure?.pricePerPerson || departure?.price || travelPackage.pricing?.pricePerPerson || travelPackage.pricing?.basePrice || 0

export const getPackageDestination = (travelPackage = {}) =>
  travelPackage.destination?.name || travelPackage.destination?.city || travelPackage.country?.name || travelPackage.destination || 'Featured destination'

export const getDurationLabel = (travelPackage = {}) => {
  const nights = travelPackage.duration?.nights || 0
  const days = travelPackage.duration?.days || 0
  return days ? `${nights} Nights / ${days} Days` : travelPackage.overview?.durationText || travelPackage.overview?.duration || 'Custom duration'
}

export const getPriceLabel = (travelPackage = {}, departure) =>
  `${formatPrice(getPackagePrice(travelPackage, departure), travelPackage.pricing?.currency || 'INR')} ${travelPackage.pricing?.priceNote || 'per person'}`

export const normalizeMeals = (meals) => {
  if (Array.isArray(meals)) return meals
  if (!meals || typeof meals !== 'object') return []
  return Object.entries(meals).filter(([, included]) => included).map(([meal]) => meal)
}
