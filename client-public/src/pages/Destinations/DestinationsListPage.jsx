import { useEffect, useMemo, useState } from 'react'
import { FaHeadset } from 'react-icons/fa'
import Button from '../../components/common/Button/Button'
import { ROUTES } from '../../constants/routes'
import herobg from '../../assets/images/Bablons Tour Bg 1.png'
import { destinationCountries } from './destinationsData'
import CountrySection from './sections/CountrySection'
import { destinationService } from '../../services/destinationService'
import ContactCTA from '../Home/sections/ContactCTASection'


const normalizeImage = (image, fallbackAlt) => ({
  src: image?.src || image?.url || '',
  alt: image?.alt || fallbackAlt,
})

const normalizeCountries = (countries = []) =>
  countries
    .map((country) => ({
      ...country,
      slug: country.slug || country.countrySlug,
      name: country.name || country.country,
      tagline: country.tagline || country.shortDescription || `Explore ${country.name || country.country}'s most requested travel experiences.`,
      heroImage: normalizeImage(country.heroImage, country.name || country.country),
      cities: (country.cities || []).map((city) => ({
        ...city,
        slug: city.slug,
        name: city.name,
        image: normalizeImage(city.image || city.heroImage, city.name),
      })).filter((city) => city.slug && city.name),
      travelTips: country.travelTips || {},
    }))
    .filter((country) => country.slug && country.name)

const mergeCountries = (curatedCountries, liveCountries) => {
  if (!liveCountries.length) return curatedCountries

  const countryMap = new Map(curatedCountries.map((country) => [country.slug, { ...country, cities: [...country.cities] }]))

  liveCountries.forEach((liveCountry) => {
    const existingCountry = countryMap.get(liveCountry.slug)

    if (!existingCountry) {
      const cities = liveCountry.cities.map((city) => ({
        ...city,
        image: city.image?.src ? city.image : liveCountry.heroImage,
      })).filter((city) => city.image?.src)

      countryMap.set(liveCountry.slug, {
        ...liveCountry,
        heroImage: liveCountry.heroImage?.src ? liveCountry.heroImage : cities[0]?.image || normalizeImage(null, liveCountry.name),
        cities,
      })
      return
    }

    const cityMap = new Map(existingCountry.cities.map((city) => [city.slug, city]))
    liveCountry.cities.forEach((liveCity) => {
      const existingCity = cityMap.get(liveCity.slug)
      cityMap.set(liveCity.slug, {
        ...existingCity,
        ...liveCity,
        image: liveCity.image?.src ? liveCity.image : existingCity?.image || liveCountry.heroImage || existingCountry.heroImage,
      })
    })

    countryMap.set(liveCountry.slug, {
      ...existingCountry,
      ...liveCountry,
      tagline: liveCountry.tagline || existingCountry.tagline,
      heroImage: liveCountry.heroImage?.src ? liveCountry.heroImage : existingCountry.heroImage,
      cities: Array.from(cityMap.values()).filter((city) => city.image?.src),
    })
  })

  return Array.from(countryMap.values()).filter((country) => country.cities.length || country.heroImage?.src)
}

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
  const [backendCountries, setBackendCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true

    destinationService.groups({ active: true })
      .then((data) => {
        if (!mounted) return
        setBackendCountries(normalizeCountries(data.countries || data.destinations || data.items || []))
        setError('')
      })
      .catch((err) => {
        if (!mounted) return
        setError(err.response?.data?.message || 'Live destinations are unavailable right now.')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const countries = useMemo(() => mergeCountries(destinationCountries, backendCountries), [backendCountries])
  const cityCount = countries.reduce((sum, country) => sum + country.cities.length, 0)
  const countryNames = countries.map((country) => country.name).join(', ')

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
          <h1 className="section-eyebrow mx-auto max-w-[18rem] justify-center text-center text-sm font-bold tracking-wider text-accent-300 sm:max-w-full sm:text-lg">
            Discover Your Next Dream Destination
          </h1>
          <h1 className="mx-auto mt-4 max-w-[20rem] font-display text-[clamp(2.15rem,9vw,3rem)] font-bold leading-tight sm:max-w-2xl md:text-5xl">
            Your Journey Begins Here
          </h1>
          <p className="mx-auto mt-5 max-w-[18.5rem] text-base leading-8 text-white/72 sm:max-w-xl sm:text-lg">
            {cityCount} cities across {countryNames}. Tap any city to see its packages.
          </p>
        </div>
      </section>

      <nav aria-label="Jump to country" className="border-b border-sand-200 bg-white">
        <div className="section-container flex flex-wrap justify-center gap-2 py-4">
          {countries.map((country) => (
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
        {loading ? (
          <div className="mb-8 rounded-2xl border border-sand-200 bg-white p-4 text-center text-sm font-bold text-dark-500 shadow-sm">
            Loading latest destinations...
          </div>
        ) : null}
        {!loading && error && !backendCountries.length ? (
          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center text-sm font-bold text-amber-800">
            Showing curated destinations. {error}
          </div>
        ) : null}
        {countries.map((country, index) => (
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
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-dark-900 px-5 py-8 text-center shadow-xl shadow-black/10 sm:flex-row sm:justify-between sm:text-left lg:rounded-3xl lg:px-10 lg:py-10">
            <div className="flex items-center gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-300 sm:flex">
                <FaHeadset className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Need help choosing?</h2>
                <p className="mt-1 text-sm leading-6 text-white/65">Our travel experts are here to help you plan the perfect trip.</p>
              </div>
            </div>
            <a href={ROUTES.CONTACT} className="w-full shrink-0 sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-white px-7 font-bold text-dark-900 hover:bg-sand-100 sm:w-auto">
                Talk to an expert
              </Button>
            </a>
          </div>
        </div>
      <br />
        <ContactCTA />
        <br />
      </section>
    </div>
  )
}

export default DestinationsListPage
