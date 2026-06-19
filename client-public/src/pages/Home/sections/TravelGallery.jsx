import { Link } from 'react-router-dom'
import { FaArrowRight, FaCameraRetro, FaMapMarkerAlt } from 'react-icons/fa'
import { ROUTES } from '../../../constants/routes'

const galleryCards = [
  {
    caption: 'Samarkand evenings',
    location: 'Uzbekistan',
    image: {
      src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
      alt: 'Registan Square at dusk, Samarkand',
    },
  },
  {
    caption: 'Tashkent streets',
    location: 'Uzbekistan',
    image: {
      src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80',
      alt: 'Historic architecture in Tashkent, Uzbekistan',
    },
  },
  {
    caption: 'Island mornings',
    location: 'Thailand',
    image: {
      src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80',
      alt: 'Traditional Thai temple at sunrise',
    },
  },
  {
    caption: 'Mountain roads',
    location: 'Georgia',
    image: {
      src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
      alt: 'Georgian mountain village with church',
    },
  },
  {
    caption: 'Kazbegi peaks',
    location: 'Georgia',
    image: {
      src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=900&q=80',
      alt: 'Caucasus mountain landscape near Kazbegi, Georgia',
    },
  },
  {
    caption: 'Skyline moments',
    location: 'Dubai',
    image: {
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
      alt: 'Dubai skyline at night',
    },
  },
  {
    caption: 'Historic streets',
    location: 'Turkey',
    image: {
      src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80',
      alt: 'Istanbul Blue Mosque',
    },
  },
  {
    caption: 'Old city walks',
    location: 'Azerbaijan',
    image: {
      src: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80',
      alt: 'Baku old city walls',
    },
  },
]

const TravelGallery = () => {
  const rows = [
    { items: galleryCards.slice(0, 4), direction: 'normal', duration: '26s' },
    { items: galleryCards.slice(4, 8), direction: 'reverse', duration: '30s' },
  ]

  return (
    <section className="section-shell overflow-hidden bg-white">
      <div className="section-container">
        <div className="section-header grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-eyebrow">
              <FaCameraRetro className="text-secondary-600" />
              From the road
            </p>
            <h2 className="mt-3 max-w-3xl section-heading">Moments from our trips</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-500">
              A glimpse of the places, people, and details that make each journey different.
            </p>
          </div>

          <Link
            to={ROUTES.GALLERY}
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-dark-800 bg-white px-6 text-sm font-extrabold uppercase tracking-[0.04em] text-dark-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-dark-900 hover:text-white"
          >
            View Gallery
            <FaArrowRight />
          </Link>
        </div>

        <div className="space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="gallery-slider-row overflow-hidden">
              <div
                className="gallery-slider-track flex gap-4"
                style={{
                  animationDirection: row.direction,
                  animationDuration: row.duration,
                }}
              >
                {[...row.items, ...row.items].map((card, index) => (
                  <Link
                    key={`${card.caption}-${index}`}
                    to={ROUTES.GALLERY}
                    className="gallery-slider-card group relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-100 shadow-[0_18px_45px_rgba(16,39,36,0.08)] transition duration-500 hover:shadow-[0_28px_65px_rgba(16,39,36,0.14)]"
                  >
                    <img
                      src={card.image.src}
                      alt={card.image.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/78 via-dark-900/18 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-accent-300">
                        <FaMapMarkerAlt className="h-3.5 w-3.5" />
                        {card.location}
                      </p>
                      <h3 className="font-display text-2xl font-bold leading-tight">{card.caption}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TravelGallery
