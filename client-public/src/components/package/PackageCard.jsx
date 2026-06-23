import { Link } from 'react-router-dom'
import Button from '../common/Button/Button'
import RatingStars from '../common/RatingStars'
import { formatPrice } from '../common/PriceDisplay'
import { getDurationLabel, getPackageDestination, getPackageImages, getPackagePrice } from './packageViewUtils'

const PackageCard = ({ package: travelPackage }) => {
  const title = travelPackage?.title || 'Travel package'
  const slug = travelPackage?.slug || ''
  const destination = typeof travelPackage?.destination === 'string' ? travelPackage.destination : getPackageDestination(travelPackage)
  const image = travelPackage?.image || getPackageImages(travelPackage)[0]?.url
  const duration = travelPackage?.duration && typeof travelPackage.duration === 'string' ? travelPackage.duration : getDurationLabel(travelPackage)
  const price = travelPackage?.price || formatPrice(getPackagePrice(travelPackage), travelPackage?.pricing?.currency || 'INR')
  const shortDescription = travelPackage?.shortDescription || travelPackage?.description || 'A curated Bablons Travel itinerary designed for a comfortable, memorable journey.'

  const href = slug ? `/packages/${slug}` : '/packages'

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {image ? (
        <Link to={href} className="block aspect-[16/10] overflow-hidden bg-gray-100">
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">{destination}</p>
        <h2 className="mt-2 text-xl font-bold text-gray-900">
          <Link to={href} className="hover:text-primary-700">
            {title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 line-clamp-3 text-gray-600">{shortDescription}</p>
        {travelPackage?.testimonials?.length ? <div className="mt-4"><RatingStars rating={4.9} count={travelPackage.testimonials.length} /></div> : null}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            {duration ? <p className="text-sm text-gray-500">{duration}</p> : null}
            {price ? <p className="text-lg font-bold text-gray-900">{price}</p> : null}
          </div>
          <Link to={href}>
            <Button size="sm" variant="outline">View</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PackageCard
