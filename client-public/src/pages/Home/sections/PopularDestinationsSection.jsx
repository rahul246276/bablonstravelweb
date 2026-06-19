import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBuilding,
  FaGlobeAsia,
  FaHeadset,
  FaHotel,
  FaMapMarkerAlt,
  FaMountain,
  FaRegCompass,
  FaStar,
  FaTags,
  FaUmbrellaBeach,
  FaUserTie,
} from 'react-icons/fa'
import { ROUTES } from '../../../constants/routes'

const categories = [
  { label: 'All Destinations', icon: FaGlobeAsia, active: true },
  { label: 'Asia', icon: FaUmbrellaBeach },
  { label: 'Middle East', icon: FaBuilding },
  { label: 'Europe', icon: FaRegCompass },
  { label: 'Caucasus', icon: FaMountain },
  { label: 'Africa', icon: FaGlobeAsia },
  { label: 'Oceanic', icon: FaUmbrellaBeach },
]

const destinations = [
  {
    name: 'Uzbekistan',
    label: 'Top Pick',
    tag: 'Silk Road Heritage',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    description: 'Timeless cities, bazaars, and generous hospitality.',
    featured: true,
  },
  {
    name: 'Dubai',
    label: 'Trending',
    tag: 'Modern Luxury',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    description: 'Iconic skyline, luxury shopping, and world-class experiences.',
    featured: true,
  },
  {
    name: 'Thailand',
    label: 'Beach Escape',
    tag: 'Tropical Bliss',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=900&q=80',
    description: 'Beaches, islands, nightlife, and warm hospitality.',
  },
  {
    name: 'Turkey',
    label: 'Culture & History',
    tag: 'Timeless Beauty',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
    description: 'Ancient ruins, stunning landscapes, rich culture.',
  },
  {
    name: 'Georgia',
    label: 'Nature & Adventure',
    tag: 'Caucasus Gem',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
    description: 'Mountains, wineries, and warm traditions.',
  },
  {
    name: 'Azerbaijan',
    label: 'Modern & Unique',
    tag: 'Land of Fire',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80',
    description: 'Modern cities, rich heritage, and Caspian charm.',
  },
]

const valueProps = [
  {
    icon: FaGlobeAsia,
    title: 'Handpicked Destinations',
    description: 'Only the best, selected for you.',
  },
  {
    icon: FaUserTie,
    title: 'Expert Local Guides',
    description: 'Knowledgeable, friendly and professional.',
  },
  {
    icon: FaHotel,
    title: 'Curated Stays & Experiences',
    description: 'Comfortable stays and unique experiences.',
  },
  {
    icon: FaTags,
    title: 'Best Price Guarantee',
    description: 'Competitive pricing with no hidden fees.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Travel Support',
    description: "We're here for you, always.",
  },
]

const DestinationCard = ({ destination, variant = 'compact' }) => {
  const isLarge = variant === 'large'

  return (
    <Link
      to={ROUTES.DESTINATIONS}
      className={`group relative overflow-hidden rounded-[1.35rem] bg-dark-900 shadow-[0_22px_50px_rgba(16,39,36,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(16,39,36,0.24)] ${
        isLarge ? 'min-h-[31rem] lg:col-span-2 lg:row-span-2' : 'min-h-[15rem]'
      }`}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/32 to-black/8" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.04em] ${
          isLarge ? 'bg-accent-300 text-dark-900' : 'bg-dark-900/82 text-white backdrop-blur'
        }`}>
          <FaStar className="h-3 w-3" />
          {destination.label}
        </span>
      </div>

      <div className={`absolute inset-x-0 bottom-0 text-white ${isLarge ? 'p-7 lg:p-8' : 'p-5'}`}>
        <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/88">
          <FaMapMarkerAlt className="text-secondary-500" />
          {destination.tag}
        </p>
        <h3 className={`font-display font-bold leading-none ${isLarge ? 'text-4xl lg:text-5xl' : 'text-2xl'}`}>
          {destination.name}
        </h3>
        <p className={`mt-3 max-w-md leading-6 text-white/88 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {destination.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.08em] text-accent-300">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent-300 text-accent-300 transition group-hover:bg-accent-300 group-hover:text-dark-900">
            <FaArrowRight className="h-3.5 w-3.5" />
          </span>
          Explore Packages
        </span>
      </div>
    </Link>
  )
}

const PopularDestinationsSection = () => {
  const [uzbekistan, dubai, ...rest] = destinations

  return (
    <section className="section-shell relative overflow-hidden bg-[#FFFCF7]">
      <div className="absolute right-0 top-8 h-72 w-1/2 bg-[radial-gradient(circle_at_center,rgba(217,111,58,0.08),transparent_62%)]" />
      <div className="absolute right-[12%] top-24 hidden h-36 w-[34rem] rounded-full border border-dashed border-sand-300/70 opacity-70 lg:block" />
      <div className="section-container relative">
        <div className="section-header grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">
              <FaRegCompass className="text-secondary-500" />
              Explore the world with us
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] text-dark-900 md:text-5xl lg:text-6xl">
              Destinations with Room for <span className="text-secondary-500">Wonder</span>
            </h2>
            <div className="mt-5 flex items-center gap-4 text-secondary-500">
              <span className="h-px w-10 bg-secondary-300" />
              <FaRegCompass className="h-4 w-4 text-dark-800" />
              <span className="h-px w-10 bg-secondary-300" />
            </div>
            <p className="mt-5 max-w-xl text-base leading-7 text-dark-600">
              From breathtaking landscapes to vibrant cities, discover handpicked destinations curated for unforgettable experiences.
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <Link
              to={ROUTES.DESTINATIONS}
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-dark-800 bg-white/60 px-7 text-sm font-extrabold uppercase tracking-[0.04em] text-dark-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-dark-900 hover:text-white"
            >
              View All Destinations
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="mb-7 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <button
                key={category.label}
                type="button"
                className={`inline-flex h-11 min-w-[9.25rem] items-center justify-center gap-3 rounded-full border px-5 text-sm font-bold transition ${
                  category.active
                    ? 'border-primary-800 bg-primary-900 text-white shadow-[0_12px_30px_rgba(16,39,36,0.18)]'
                    : 'border-sand-300 bg-white/72 text-dark-800 hover:border-primary-300 hover:bg-primary-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-4 lg:auto-rows-[15rem]">
          <DestinationCard destination={uzbekistan} variant="large" />
          <DestinationCard destination={dubai} variant="large" />
          {rest.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-[72rem] overflow-hidden rounded-[1.35rem] border border-sand-200 bg-white/78 shadow-[0_18px_50px_rgba(16,39,36,0.08)] backdrop-blur sm:grid-cols-2 lg:grid-cols-5">
          {valueProps.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="flex min-h-[7.5rem] items-center gap-4 border-b border-sand-200 px-6 py-5 last:border-b-0 sm:even:border-l lg:border-b-0 lg:border-l lg:first:border-l-0">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-[#FFFCF7] text-dark-900">
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

export default PopularDestinationsSection
