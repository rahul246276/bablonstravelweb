import { Link } from 'react-router-dom'
import { FaCameraRetro, FaMapMarkerAlt, FaPlaneDeparture, FaRegImages, FaWhatsapp } from 'react-icons/fa'
import galleryHeroBg from '../../assets/images/Bablons Tour Bg 2.png'
import { ROUTES } from '../../constants/routes'

const photos = [
  {
    title: 'Silk Road Architecture',
    location: 'Uzbekistan',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Mountain Villages',
    location: 'Georgia',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Baku Skyline',
    location: 'Azerbaijan',
    image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Istanbul Light',
    location: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Island Calm',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Desert Evenings',
    location: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85',
  },
]

const GalleryPage = () => {
  return (
    <div className="overflow-hidden bg-[#FAF8F4] text-dark-900">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-dark-900 text-white">
        <img
          src={galleryHeroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/92 via-dark-900/58 to-secondary-900/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/20" />
        <div className="grain-overlay" />

        <div className="section-container relative flex min-h-[560px] flex-col justify-center py-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-accent-200 backdrop-blur-md">
              <FaCameraRetro className="h-4 w-4" />
              Bablons Travel Gallery
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Premium travel moments, beautifully captured
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Explore handpicked frames from the destinations our travelers love most, from Silk Road landmarks to island mornings and skyline evenings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ROUTES.PACKAGES}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.05em] text-dark-900 shadow-[0_20px_55px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-accent-100"
              >
                <FaPlaneDeparture />
                Explore Packages
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.05em] text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-dark-900"
              >
                <FaWhatsapp />
                Plan My Trip
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ['06', 'Signature destinations'],
              ['120+', 'Curated trip moments'],
              ['24/7', 'Travel support'],
            ].map(([value, label]) => (
              <div key={label} className="border border-white/16 bg-white/10 p-5 backdrop-blur-md">
                <p className="font-display text-3xl font-bold text-white">{value}</p>
                <p className="mt-1 text-sm font-semibold text-white/68">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-14 lg:py-20">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-eyebrow">
              <FaRegImages className="text-secondary-600" />
              Visual stories
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-dark-900 md:text-5xl">
              A closer look at the journeys we design
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-dark-500">
            Every frame is selected to help you imagine the pace, texture, and mood of your next holiday.
          </p>
        </div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <figure
              key={photo.title}
              className={`group relative overflow-hidden bg-dark-900 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-card-hover ${
                index === 0 ? 'sm:col-span-2 lg:row-span-2' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/88 via-dark-900/16 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-accent-300">
                  <FaMapMarkerAlt className="h-3.5 w-3.5" />
                  {photo.location}
                </p>
                <h2 className="font-display text-2xl font-bold leading-tight">{photo.title}</h2>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
