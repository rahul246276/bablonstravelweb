import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheckCircle, FaMapMarkerAlt, FaPlaneDeparture } from 'react-icons/fa'
import { ROUTES } from '../../../constants/routes'

const DestinationOverview = ({ city, country }) => {
  const details = city.details || {}
  const highlights = details.highlights || []

  return (
    <section className="relative overflow-hidden bg-dark-900 text-white">
      <img
        src={city.image.src}
        alt={city.image.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,40,35,0.92)_0%,rgba(7,55,49,0.78)_48%,rgba(9,35,31,0.45)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(231,188,96,0.18),transparent_30%),linear-gradient(180deg,rgba(7,28,25,0.08),rgba(2,27,24,0.62))]" />
      <div className="grain-overlay" />

      <div className="section-container relative py-16 md:py-20 lg:py-24">
        <Link
          to={ROUTES.DESTINATIONS}
          className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-bold text-white/82 backdrop-blur transition hover:bg-white hover:text-dark-900"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          Back to destinations
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="section-eyebrow text-accent-300">
              <FaMapMarkerAlt className="text-accent-300" />
              {country.name}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.65rem,12vw,4.25rem)] font-bold leading-[1.03] text-white md:text-6xl lg:text-7xl">
              {city.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              {details.intro}
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-white/16 bg-white/[0.1] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur sm:p-6">
            <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-accent-300">
              <FaPlaneDeparture />
              Trip support
            </p>
            <div className="mt-5 grid gap-3">
              {highlights.map((highlight) => (
                <p key={highlight} className="flex items-start gap-3 text-sm leading-6 text-white/78">
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-accent-300" />
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationOverview
