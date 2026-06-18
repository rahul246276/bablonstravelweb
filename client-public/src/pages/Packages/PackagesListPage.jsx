import { useMemo, useState } from 'react'
import PackageGrid from '../../components/package/PackageGrid'
import PackageSearch from '../../components/package/PackageSearch'

const packages = [
  {
    title: 'Uzbekistan Silk Road',
    destination: 'Uzbekistan',
    slug: 'uzbekistan-silk-road',
    image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80',
    duration: '7 Days',
    days: 7,
    price: '$1,299',
    budget: 1299,
    shortDescription: 'Explore Tashkent, Samarkand, and Bukhara with guided heritage walks and comfortable stays.',
  },
  {
    title: 'Georgia Mountain Escape',
    destination: 'Georgia',
    slug: 'georgia-mountain-escape',
    image: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=900&q=80',
    duration: '10 Days',
    days: 10,
    price: '$1,599',
    budget: 1599,
    shortDescription: 'A scenic Caucasus journey through Tbilisi, Kazbegi, wine valleys, and mountain villages.',
  },
  {
    title: 'Dubai Luxury Break',
    destination: 'Dubai',
    slug: 'dubai-luxury-break',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80',
    duration: '5 Days',
    days: 5,
    price: '$2,199',
    budget: 2199,
    shortDescription: 'Premium city, marina, desert, and family-friendly experiences planned without stress.',
  },
  {
    title: 'Turkey Culture Trail',
    destination: 'Turkey',
    slug: 'turkey-culture-trail',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
    duration: '8 Days',
    days: 8,
    price: '$1,849',
    budget: 1849,
    shortDescription: 'Istanbul, Cappadocia, bazaars, coastlines, and food experiences in one balanced route.',
  },
  {
    title: 'Thailand Island Pause',
    destination: 'Thailand',
    slug: 'thailand-island-pause',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
    duration: '6 Days',
    days: 6,
    price: '$1,399',
    budget: 1399,
    shortDescription: 'Temples, beaches, night markets, and relaxed island time with simple transfers.',
  },
  {
    title: 'Azerbaijan Fire & Coast',
    destination: 'Azerbaijan',
    slug: 'azerbaijan-fire-coast',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80',
    duration: '5 Days',
    days: 5,
    price: '$1,149',
    budget: 1149,
    shortDescription: 'Discover Baku, mud volcanoes, fire temples, and Caspian views with a compact itinerary.',
  },
]

const PackagesListPage = () => {
  const [filters, setFilters] = useState({ destination: '', budget: '', duration: '' })

  const filteredPackages = useMemo(() => {
    return packages.filter((travelPackage) => {
      const matchesDestination = travelPackage.destination.toLowerCase().includes(filters.destination.toLowerCase())
      const matchesBudget = filters.budget ? travelPackage.budget <= Number(filters.budget) : true
      const matchesDuration = filters.duration ? travelPackage.days <= Number(filters.duration) : true

      return matchesDestination && matchesBudget && matchesDuration
    })
  }, [filters])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="bg-gray-50">
      <section className="bg-dark-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-accent-300">Curated holidays</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Our Travel Packages</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Browse ready-to-customize trips with practical routes, vetted stays, and support from the first inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <PackageSearch filters={filters} onChange={setFilters} onSubmit={handleSubmit} />
        <div className="mt-8">
          <PackageGrid packages={filteredPackages} />
        </div>
      </section>
    </div>
  )
}

export default PackagesListPage
