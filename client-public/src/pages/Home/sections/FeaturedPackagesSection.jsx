import { Link } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaBuilding,
  FaCamera,
  FaGlobeAsia,
  FaHeadset,
  FaHeart,
  FaHotel,
  FaMapMarkerAlt,
  FaMountain,
  FaPlane,
  FaShieldAlt,
  FaStar,
  FaTags,
  FaUmbrellaBeach,
  FaUserTie,
} from 'react-icons/fa'
import { ROUTES } from '../../../constants/routes'

const categories = [
  { label: 'All Packages', icon: FaGlobeAsia, active: true },
  { label: 'Asia', icon: FaUmbrellaBeach },
  { label: 'Middle East', icon: FaBuilding },
  { label: 'Europe', icon: FaBuilding },
  { label: 'Caucasus', icon: FaMountain },
  { label: 'Africa', icon: FaGlobeAsia },
  { label: 'Island Escapes', icon: FaUmbrellaBeach },
]

const proofPoints = [
  { icon: FaShieldAlt, title: 'Expertly Curated', label: 'By travel experts' },
  { icon: FaTags, title: 'Best Price Guarantee', label: 'Competitive pricing' },
  { icon: FaHeadset, title: '24/7 Travel Support', label: "We're here always" },
  { icon: FaGlobeAsia, title: 'Trusted Worldwide', label: '10,000+ happy travellers' },
]

const packages = [
  {
    name: 'Uzbekistan Silk Road',
    destination: 'Uzbekistan',
    type: 'Heritage & Culture',
    badge: 'Top Rated',
    duration: '7 Days',
    route: 'Tashkent - Samarkand - Bukhara',
    price: '$1,299',
    rating: '4.8',
    reviews: '245',
    image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80',
    tone: 'primary',
  },
  {
    name: 'Caucasus Mountain Escape',
    destination: 'Georgia',
    type: 'Nature & Adventure',
    badge: 'Most Booked',
    duration: '10 Days',
    route: 'Tbilisi - Kazbegi - Kakheti',
    price: '$1,599',
    rating: '4.9',
    reviews: '189',
    image: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=900&q=80',
    tone: 'indigo',
  },
  {
    name: 'Dubai Luxury Break',
    destination: 'Dubai',
    type: 'Luxury & Leisure',
    badge: 'Premium Pick',
    duration: '5 Days',
    route: 'Downtown - Marina - Desert Safari',
    price: '$2,199',
    rating: '4.7',
    reviews: '312',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
    tone: 'gold',
  },
  {
    name: 'Thailand Tropical Escape',
    destination: 'Thailand',
    type: 'Beaches & Islands',
    badge: 'Trending',
    duration: '6 Days',
    route: 'Phuket - Krabi - Phi Phi Islands',
    price: '$1,099',
    rating: '4.6',
    reviews: '201',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=80',
    tone: 'primary',
  },
]

const valueProps = [
  { icon: FaHotel, title: 'Handpicked Hotels', description: 'Premium stays for ultimate comfort' },
  { icon: FaUserTie, title: 'Expert Local Guides', description: 'Knowledgeable, friendly & professional' },
  { icon: FaCamera, title: 'Curated Experiences', description: 'Unique activities and authentic moments' },
  { icon: FaTags, title: 'Best Price Guarantee', description: 'No hidden charges, best value always' },
  { icon: FaHeadset, title: '24/7 Travel Support', description: "We're here for you, before & during your trip" },
]

const toneClasses = {
  primary: {
    badge: 'bg-primary-800/88 text-white',
    button: 'bg-primary-900 hover:bg-primary-800',
  },
  indigo: {
    badge: 'bg-indigo-900/82 text-white',
    button: 'bg-indigo-900 hover:bg-indigo-800',
  },
  gold: {
    badge: 'bg-accent-600 text-white',
    button: 'bg-accent-700 hover:bg-accent-800',
  },
}

const FeaturedPackagesSection = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#FFFCF7]">
      <div className="absolute right-0 top-0 hidden h-96 w-[44rem] bg-[radial-gradient(circle_at_center,rgba(217,111,58,0.08),transparent_64%)] lg:block" />
      <div className="absolute right-[8%] top-20 hidden h-56 w-[35rem] rounded-full border border-dashed border-sand-300/70 opacity-70 lg:block" />

      <div className="section-container relative">
        <div className="section-header grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="section-eyebrow text-secondary-600">
              <FaPlane className="h-4 w-4" />
              Signature journeys
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] text-dark-900 md:text-5xl lg:text-6xl">
              Extraordinary Journeys,
              <span className="block">
                Crafted for <span className="text-secondary-600">Unforgettable</span> Memories
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-600">
              Handpicked international packages with exceptional stays, immersive experiences, and seamless travel arrangements.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <Link
              to={ROUTES.PACKAGES}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary-900 px-8 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(16,39,36,0.22)] transition hover:-translate-y-0.5 hover:bg-primary-800"
            >
              View All Packages
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="mb-9 grid gap-5 md:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
          {proofPoints.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-white text-secondary-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-dark-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-dark-500">{item.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <button
                key={category.label}
                type="button"
                className={`inline-flex h-12 min-w-[10rem] items-center justify-center gap-3 rounded-full border px-5 text-sm font-bold transition ${
                  category.active
                    ? 'border-primary-900 bg-primary-900 text-white shadow-[0_14px_32px_rgba(16,39,36,0.18)]'
                    : 'border-sand-300 bg-white/70 text-dark-800 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous packages"
            className="absolute -left-7 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark-900 shadow-[0_14px_34px_rgba(16,39,36,0.16)] transition hover:-translate-x-0.5 hover:bg-primary-900 hover:text-white xl:flex"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next packages"
            className="absolute -right-7 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-dark-900 shadow-[0_14px_34px_rgba(16,39,36,0.16)] transition hover:translate-x-0.5 hover:bg-primary-900 hover:text-white xl:flex"
          >
            <FaArrowRight />
          </button>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => {
              const tone = toneClasses[pkg.tone] || toneClasses.primary

              return (
                <article key={pkg.name} className="group overflow-hidden rounded-[1.35rem] border border-sand-200 bg-white shadow-[0_20px_50px_rgba(16,39,36,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,39,36,0.18)]">
                  <div className="relative h-72 overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/92 via-dark-900/22 to-transparent" />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.04em] ${tone.badge}`}>
                        <FaStar className="mr-1 inline h-3 w-3" />
                        {pkg.badge}
                      </span>
                      <button
                        type="button"
                        aria-label={`Save ${pkg.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/16 text-white backdrop-blur transition hover:bg-white hover:text-secondary-600"
                      >
                        <FaHeart />
                      </button>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.06em]">
                        <FaMapMarkerAlt className="text-white" />
                        {pkg.destination}
                      </p>
                      <h3 className="font-display text-2xl font-bold leading-tight">{pkg.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-300">{pkg.type}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-white/88">
                        <span className="rounded-full border border-white/28 bg-white/10 px-3 py-1.5 backdrop-blur">{pkg.duration}</span>
                        <span>{pkg.route}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-[1fr_auto] items-center gap-5">
                      <div>
                        <p className="flex items-center gap-2 text-base font-extrabold text-dark-900">
                          <FaStar className="text-accent-600" />
                          {pkg.rating}
                        </p>
                        <p className="mt-2 text-sm text-dark-500">({pkg.reviews} reviews)</p>
                      </div>
                      <div className="border-l border-sand-200 pl-6 text-right">
                        <p className="text-xs font-medium text-dark-500">Starting From</p>
                        <p className="font-display text-3xl font-bold leading-none text-dark-900">{pkg.price}</p>
                        <p className="mt-1 text-xs text-dark-500">Per Traveller</p>
                      </div>
                    </div>

                    <Link
                      to={ROUTES.PACKAGES}
                      className={`mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg px-5 text-sm font-extrabold text-white transition ${tone.button}`}
                    >
                      Explore Journey
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-[78rem] overflow-hidden rounded-[1.35rem] border border-sand-200 bg-white/76 shadow-[0_18px_50px_rgba(16,39,36,0.08)] backdrop-blur sm:grid-cols-2 lg:grid-cols-5">
          {valueProps.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="flex min-h-[7.5rem] items-center gap-4 border-b border-sand-200 px-6 py-5 last:border-b-0 sm:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold leading-tight text-dark-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-dark-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPackagesSection
