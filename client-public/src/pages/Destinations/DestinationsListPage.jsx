import { FaHeadset } from 'react-icons/fa'
import Button from '../../components/common/Button/Button'
import { ROUTES } from '../../constants/routes'
import herobg from '../../assets/images/Destinastion Page  Bg.png'
import { destinationCountries } from './destinationsData'
import CountrySection from './sections/CountrySection'

/**
 * Replaces the previous 6-country generic-card version of this page
 * (Uzbekistan, Georgia, Azerbaijan, Turkey, Thailand, Dubai — one card
 * each, all linking to the same /packages route with no destination
 * filter). That version couldn't represent individual cities at all.
 *
 * This version: 4 countries (Dubai/UAE, Thailand, Uzbekistan, Georgia —
 * Azerbaijan and Turkey dropped per direction), each showing its full
 * city list. Every city is its own clickable card linking to
 * /destinations/{country-slug}/{city-slug} — see CityCard.jsx.
 *
 * Export name kept as DestinationsListPage so existing route
 * definitions / imports elsewhere in the app don't need to change.
 */
const DestinationsListPage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FAF8F4] text-dark-900">
      <section className="relative overflow-hidden bg-dark-900 py-20 text-white lg:py-28">
        <img
          src={herobg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/88 via-dark-900/54 to-primary-900/40" />
        <div className="grain-overlay" />
        <div className="section-container relative text-center">
          <p className="section-eyebrow justify-center text-accent-300">Where travelers go next</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
            All destinations
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/72">
            33 cities across Dubai &amp; UAE, Thailand, Uzbekistan, and Georgia. Tap any city to see its packages.
          </p>
        </div>
      </section>

      <nav aria-label="Jump to country" className="border-b border-sand-200 bg-white">
        <div className="section-container flex flex-wrap justify-center gap-2 py-4">
          {destinationCountries.map((country) => (
            <a
              key={country.slug}
              href={`#${country.slug}`}
              className="rounded-full border border-sand-200 bg-white px-4 py-2 text-xs font-bold text-dark-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
            >
              {country.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="section-container py-12 lg:py-16">
        {destinationCountries.map((country, index) => (
          <CountrySection
            key={country.slug}
            countrySlug={country.slug}
            name={country.name}
            tagline={country.tagline}
            heroImage={country.heroImage}
            cities={country.cities}
            isFirst={index === 0}
          />
        ))}
      </div>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="section-container">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-dark-900 px-6 py-10 text-center shadow-xl shadow-black/10 sm:flex-row sm:justify-between sm:text-left lg:px-10">
            <div className="flex items-center gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-300 sm:flex">
                <FaHeadset className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Need help choosing?</h2>
                <p className="mt-1 text-sm leading-6 text-white/65">Our travel experts are here to help you plan the perfect trip.</p>
              </div>
            </div>
            <a href={ROUTES.CONTACT} className="shrink-0">
              <Button size="lg" className="rounded-full bg-white px-7 font-bold text-dark-900 hover:bg-sand-100">
                Talk to an expert
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationsListPage
