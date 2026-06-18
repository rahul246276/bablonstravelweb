import { Link } from 'react-router-dom'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const destinations = [
  {
    name: 'Uzbekistan',
    tag: 'Silk Road Heritage',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    description: 'Tilework, old cities, bazaars, and generous hospitality.',
  },
  {
    name: 'Georgia',
    tag: 'Mountains and Wine',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
    description: 'Caucasus views, wine valleys, and culture-rich towns.',
  },
  {
    name: 'Azerbaijan',
    tag: 'Fire and Coast',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80',
    description: 'Modern Baku, fire temples, and Caspian landscapes.',
  },
  {
    name: 'Turkey',
    tag: 'Classic Escape',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
    description: 'Istanbul, Cappadocia, coastline, food, and history.',
  },
  {
    name: 'Thailand',
    tag: 'Island Pause',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
    description: 'Temples, beaches, night markets, and easy leisure.',
  },
]

const PopularDestinationsSection = () => {
  const [featured, ...rest] = destinations

  return (
    <section className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Where travelers go next</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-dark-900 md:text-5xl">
              Destinations with room for wonder
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-500">
              Choose the atmosphere first: heritage, mountains, coast, city energy, or a slower escape.
            </p>
          </div>
          <Link to={ROUTES.DESTINATIONS}>
            <Button variant="outline" size="lg" className="gap-2 rounded-full border-dark-800 text-dark-800 hover:bg-dark-50">
              View All Destinations
              <FaArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:auto-rows-[230px] lg:grid-cols-4">
          <Link
            to={ROUTES.DESTINATIONS}
            className="group relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_70px_rgba(16,39,36,0.16)] transition duration-500 hover:-translate-y-1 lg:col-span-2 lg:row-span-2"
          >
            <img src={featured.image} alt={featured.name} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="mb-2 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1 text-sm font-semibold backdrop-blur">
                <FaMapMarkerAlt className="text-accent-300" />
                {featured.tag}
              </p>
              <h3 className="font-display text-4xl font-bold">{featured.name}</h3>
              <p className="mt-2 max-w-md text-white/75">{featured.description}</p>
            </div>
          </Link>

          {rest.map((destination) => (
            <Link
              key={destination.name}
              to={ROUTES.DESTINATIONS}
              className="group relative overflow-hidden rounded-[1.5rem] shadow-[0_18px_50px_rgba(16,39,36,0.14)] transition duration-500 hover:-translate-y-1"
            >
              <img src={destination.image} alt={destination.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/82 via-dark-900/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent-300">{destination.tag}</p>
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <p className="mt-1 text-sm text-white/70">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinationsSection
