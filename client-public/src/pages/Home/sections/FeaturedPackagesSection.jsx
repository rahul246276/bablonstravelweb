import { Link } from 'react-router-dom'
import { FaClock, FaMapMarkedAlt, FaStar } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const FeaturedPackagesSection = () => {
  const packages = [
    {
      name: 'Uzbekistan Silk Road',
      price: '$1,299',
      duration: '7 Days',
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80',
      route: 'Tashkent, Samarkand, Bukhara',
    },
    {
      name: 'Georgia Mountain Escape',
      price: '$1,599',
      duration: '10 Days',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=900&q=80',
      route: 'Tbilisi, Kazbegi, Kakheti',
    },
    {
      name: 'Dubai Luxury Break',
      price: '$2,199',
      duration: '5 Days',
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
      route: 'Downtown, Marina, Desert',
    },
  ]

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Signature itineraries</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight text-dark-900 md:text-5xl">Featured Packages</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-500">
              Handpicked journeys with elevated stays, balanced pacing, private guidance options, and reliable local support.
            </p>
          </div>
          <Link to={ROUTES.PACKAGES}>
            <Button variant="outline" size="lg" className="rounded-full border-dark-800 text-dark-800 hover:bg-dark-50">View All Packages</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="group overflow-hidden rounded-[1.75rem] border border-sand-200 bg-white shadow-[0_18px_55px_rgba(16,39,36,0.1)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(16,39,36,0.16)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-sm font-bold text-primary-700 shadow">
                  From {pkg.price}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              <div className="p-7">
                <div className="mb-3 flex items-center gap-2 text-sm text-dark-500">
                  <span className="flex items-center gap-1 font-semibold text-accent-600">
                    <FaStar />
                    {pkg.rating}
                  </span>
                  <span>({pkg.reviews} reviews)</span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-dark-900">{pkg.name}</h3>
                <div className="mb-5 space-y-2 text-sm text-dark-500">
                  <p className="flex items-center gap-2">
                    <FaClock className="text-primary-600" />
                    {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkedAlt className="text-primary-600" />
                    {pkg.route}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={ROUTES.PACKAGES} className="flex-1">
                    <Button size="md" className="w-full rounded-full bg-dark-800 hover:bg-dark-900">View Details</Button>
                  </Link>
                  <Link to={ROUTES.CONTACT} className="text-sm font-bold text-primary-700 hover:text-primary-800">
                    Customize
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPackagesSection
