import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes'

const galleryImages = [
  [
    {
      src: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
      alt: 'Registan Square at dusk, Samarkand',
      caption: 'Samarkand, Uzbekistan',
    },
    {
      src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80',
      alt: 'Traditional Thai temple at sunrise',
      caption: 'Chiang Mai, Thailand',
    },
  ],
  [
    {
      src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80',
      alt: 'Georgian mountain village with church',
      caption: 'Kazbegi, Georgia',
    },
    {
      src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
      alt: 'Dubai skyline at night',
      caption: 'Dubai, UAE',
    },
    {
      src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80',
      alt: 'Istanbul Blue Mosque',
      caption: 'Istanbul, Turkey',
    },
  ],
  [
    {
      src: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=600&q=80',
      alt: 'Baku old city walls',
      caption: 'Baku, Azerbaijan',
    },
    {
      src: 'https://images.unsplash.com/photo-1557589196-410b97900060?auto=format&fit=crop&w=600&q=80',
      alt: 'Caucasus mountain vista',
      caption: 'Caucasus Mountains',
    },
  ],
]

const TravelGallery = () => (
  <section className="section-shell bg-white">
    <div className="section-container">
      <div className="section-header mx-auto max-w-3xl text-center">
        <p className="section-eyebrow justify-center">From the road</p>
        <h2 className="mt-3 section-heading">Moments from our trips</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-dark-500">
          A glimpse of the places, people, and details that make each journey different.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {galleryImages.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-5">
            {column.map((image) => (
              <Link key={image.src} to={ROUTES.DESTINATIONS} className="group relative overflow-hidden rounded-card-sm shadow-card transition hover:shadow-card-hover">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  style={{ aspectRatio: columnIndex === 1 ? '4 / 3' : '3 / 4' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark-900/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">{image.caption}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TravelGallery
