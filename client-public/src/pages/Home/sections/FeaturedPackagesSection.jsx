import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock, FaMapMarkedAlt, FaStar } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const packages = [
  {
    name: 'Uzbekistan Silk Road',
    price: '$1,299',
    duration: '7 Days',
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80',
    route: 'Tashkent → Samarkand → Bukhara',
    tag: 'Heritage',
  },
  {
    name: 'Georgia Mountain Escape',
    price: '$1,599',
    duration: '10 Days',
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=900&q=80',
    route: 'Tbilisi → Kazbegi → Kakheti',
    tag: 'Most booked',
  },
  {
    name: 'Dubai Luxury Break',
    price: '$2,199',
    duration: '5 Days',
    rating: 4.7,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
    route: 'Downtown → Marina → Desert',
    tag: 'Short break',
  },
]

const FeaturedPackagesSection = () => {
  return (
    <section className="section-shell bg-white">
      <div className="section-container">
        <div className="section-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Signature itineraries</p>
            <h2 className="mt-3 max-w-2xl section-heading">Featured Packages</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-500">
              Handpicked journeys with elevated stays, balanced pacing, and reliable local support — built route-first, not room-first.
            </p>
          </div>
          <Link to={ROUTES.PACKAGES}>
            <Button variant="outline" size="lg" className="rounded-full border-dark-800 text-dark-800 hover:bg-dark-50">View All Packages</Button>
          </Link>
        </div>

        {/* Itinerary strip: each package reads as a numbered leg of a journey
            rather than an isolated product card — ties to the route theme
            and gives the section its own identity vs. the grid sections. */}
        <div className="flex flex-col divide-y divide-sand-200 border-y border-sand-200">
          {packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className="group grid grid-cols-1 items-center gap-6 py-8 transition hover:bg-sand-50/60 lg:grid-cols-[64px_280px_1fr_auto] lg:gap-8 lg:py-10"
            >
              <div className="hidden items-center justify-center lg:flex">
                <span className="font-display text-3xl font-bold text-sand-300 transition group-hover:text-accent-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
                <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary-700 shadow">
                  {pkg.tag}
                </span>
              </div>

              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-sm text-dark-500">
                  <span className="flex items-center gap-1 font-semibold text-accent-600">
                    <FaStar className="h-3.5 w-3.5" />
                    {pkg.rating}
                  </span>
                  <span>({pkg.reviews} reviews)</span>
                </div>
                <h3 className="mb-2 font-display text-2xl font-bold text-dark-900 lg:text-[1.65rem]">{pkg.name}</h3>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-dark-500">
                  <span className="flex items-center gap-2">
                    <FaClock className="text-primary-600" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkedAlt className="text-primary-600" />
                    {pkg.route}
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-4 lg:flex-col lg:items-end lg:justify-center lg:gap-3">
                <div className="text-right">
                  <span className="block text-xs font-bold uppercase tracking-wide text-dark-400">From</span>
                  <span className="font-display text-2xl font-bold text-primary-700">{pkg.price}</span>
                </div>
                <Link to={ROUTES.PACKAGES} className="inline-flex items-center gap-2 rounded-full bg-dark-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-dark-900 lg:w-full lg:justify-center">
                  View Details
                  <FaArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPackagesSection