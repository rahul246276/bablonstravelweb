import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

/**
 * Whole card is the click target (not just an inner button) — bigger hit
 * area, better for both desktop click accuracy and mobile tap accuracy.
 *
 * Links to /destinations/{country-slug}/{city-slug} — the
 * DestinationDetailsPage route — not directly to /packages. The
 * details page itself surfaces relevant packages via its
 * RelatedPackages section, so this is "tell me about this city first,"
 * not "skip straight to checkout."
 *
 * Desktop/hover-capable devices: gradient is subtle at rest, deepens on
 * hover, and a "View packages" pill fades in — same interaction language
 * as the hover affordance already used on FeaturedPackagesSection and
 * PopularDestinationsSection cards elsewhere in this codebase.
 *
 * Touch devices have no hover state, so the pill is always rendered but
 * starts dimmer (opacity-80) and at full opacity on :active — nobody on
 * a phone should have to "discover" the CTA by accident-hovering.
 */
const CityCard = ({ citySlug, countrySlug, name, image }) => {
  return (
    <Link
      to={`/destinations/${countrySlug}/${citySlug}`}
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-100 shadow-[0_8px_24px_rgba(16,39,36,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,39,36,0.16)]"
      aria-label={`Explore ${name}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/75 via-dark-900/10 to-transparent transition-opacity duration-300 group-hover:from-dark-900/90" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-3">
        <p className="text-sm font-bold leading-tight text-white">{name}</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-dark-900 opacity-80 shadow-sm transition-all duration-300 group-hover:opacity-100 group-active:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:translate-y-1">
          View packages
          <FaArrowRight className="h-2.5 w-2.5" />
        </span>
      </div>
    </Link>
  )
}

export default CityCard