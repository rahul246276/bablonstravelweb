import { FaCircleCheck, FaDownload, FaLocationDot } from 'react-icons/fa6'
import Badge from '../common/Badge'
import PriceDisplay from '../common/PriceDisplay'
import RatingStars from '../common/RatingStars'
import WhatsAppButton from '../common/WhatsAppButton'
import { getDurationLabel, getPackageDestination, getPackagePrice } from './packageViewUtils'

const PackageHeader = ({ package: travelPackage, reviews }) => {
  const price = getPackagePrice(travelPackage)
  const originalPrice = travelPackage.pricing?.originalPrice
  const saving = originalPrice && originalPrice > price ? originalPrice - price : 0

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap gap-2">
        <Badge>{travelPackage.packageType || 'international'}</Badge>
        {travelPackage.featured ? <Badge tone="green">Featured</Badge> : null}
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
          <FaCircleCheck /> Verified operator
        </span>
      </div>
      <h1 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{travelPackage.title}</h1>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-bold text-slate-600">
        <span className="inline-flex items-center gap-2"><FaLocationDot className="text-orange-500" /> {getPackageDestination(travelPackage)}</span>
        <span>{getDurationLabel(travelPackage)}</span>
        <RatingStars rating={reviews?.averageRating || 4.9} count={reviews?.reviewCount || travelPackage.testimonials?.length || 0} />
      </div>
      {travelPackage.shortDescription || travelPackage.description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{travelPackage.shortDescription || travelPackage.description}</p>
      ) : null}
      <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 md:flex-row md:items-center md:justify-between">
        <div>
          <PriceDisplay amount={price} originalAmount={originalPrice} currency={travelPackage.pricing?.currency} note={travelPackage.pricing?.priceNote || travelPackage.pricing?.pricingNote || 'per person'} />
          {saving ? <p className="mt-1 text-sm font-bold text-emerald-600">You save {saving.toLocaleString('en-IN')} per person</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#booking" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Check availability</a>
          <WhatsAppButton message={`Hi Bablons Travel, I am interested in ${travelPackage.title}.`} />
          <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-slate-700">
            <FaDownload /> Itinerary PDF
          </button>
        </div>
      </div>
    </section>
  )
}

export default PackageHeader
