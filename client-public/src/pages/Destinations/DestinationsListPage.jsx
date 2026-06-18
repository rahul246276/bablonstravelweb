import { Link } from 'react-router-dom'
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa'
import Button from '../../components/common/Button/Button'
import { ROUTES } from '../../constants/routes'

const destinations = [
  {
    name: 'Uzbekistan',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
    summary: 'Tilework, Silk Road history, bazaars, and generous hospitality.',
    bestFor: 'Culture and heritage',
  },
  {
    name: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
    summary: 'Mountain roads, wine regions, old towns, and dramatic viewpoints.',
    bestFor: 'Nature and food',
  },
  {
    name: 'Azerbaijan',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80',
    summary: 'Modern Baku, fire temples, mud volcanoes, and Caspian coastlines.',
    bestFor: 'City and landscape',
  },
  {
    name: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
    summary: 'Istanbul, Cappadocia, coastal towns, cuisine, and layered history.',
    bestFor: 'Classic holidays',
  },
  {
    name: 'Thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
    summary: 'Temples, beaches, night markets, islands, and relaxed family stays.',
    bestFor: 'Beach and leisure',
  },
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    summary: 'Luxury hotels, desert experiences, family attractions, and skyline views.',
    bestFor: 'Short premium breaks',
  },
]

const DestinationsListPage = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">Explore the map</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">Destinations built for memorable travel</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Choose a destination as your starting point. We can shape the route, pace, hotels, and experiences around your style.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="mb-3 inline-flex items-center gap-2 rounded-lg bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                  <FaMapMarkerAlt />
                  {destination.bestFor}
                </p>
                <h2 className="mb-2 text-xl font-bold text-gray-950">{destination.name}</h2>
                <p className="mb-5 text-sm leading-6 text-gray-600">{destination.summary}</p>
                <Link to={ROUTES.PACKAGES}>
                  <Button variant="outline" size="sm" className="gap-2">
                    See Packages
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DestinationsListPage
