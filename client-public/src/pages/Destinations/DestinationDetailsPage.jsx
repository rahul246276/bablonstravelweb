import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import { findCityBySlug, getCityDetails } from './destinationDetailsHelpers'
import DestinationOverview from './sections/DestinationOverview'
import Attractions from './sections/Attractions'
import Gallery from './sections/Gallery'
import RelatedPackages from './sections/RelatedPackages'
import TravelTips from './sections/TravelTips'
import { destinationService } from '../../services/destinationService'
import ContactCTA from '../Home/sections/ContactCTASection'


const normalizeImage = (image, fallbackAlt) => ({
  src: image?.src || image?.url || '',
  alt: image?.alt || fallbackAlt,
})

const normalizeAttractions = (attractions = []) =>
  attractions.map((attraction) => ({
    name: attraction.name || attraction.title,
    note: attraction.note || attraction.description,
  })).filter((attraction) => attraction.name)

const backendDestinationToView = (destination) => {
  if (!destination) return null

  const countryName = destination.country || destination.name
  const city = {
    slug: destination.slug,
    name: destination.name,
    image: normalizeImage(destination.heroImage, destination.name),
    details: {
      intro: destination.overview || destination.shortDescription || `${destination.name} is one of ${countryName}'s standout travel experiences.`,
      highlights: [
        'Custom itinerary planning',
        'Hotel and transfer assistance',
        'Guided sightseeing options',
        'Visa and document guidance where applicable',
      ],
      attractions: normalizeAttractions(destination.attractions),
      gallery: (destination.gallery || []).map((image) => normalizeImage(image, destination.name)).filter((image) => image.src),
    },
  }

  return {
    city,
    country: {
      slug: destination.countrySlug,
      name: countryName,
      travelTips: {
        bestTime: destination.bestTimeToVisit || 'Ask our travel team',
        currency: destination.currency || 'Confirmed during planning',
        language: 'Confirmed during planning',
        timezone: 'Confirmed during planning',
      },
    },
  }
}

/**
 * Route: /destinations/:countrySlug/:citySlug
 * e.g. /destinations/dubai-uae/dubai
 *
 * This is the page CityCard.jsx links to from DestinationsListPage.
 * Both slugs are looked up together via findCityBySlug so a stale or
 * mistyped URL (wrong country/city pairing, or a slug that doesn't
 * exist) is caught in one place and shown a real not-found state,
 * rather than letting `undefined` propagate into child sections and
 * crash partway down the page.
 */
const DestinationDetailsPage = () => {
  const { countrySlug, citySlug } = useParams()
  const staticResult = useMemo(() => findCityBySlug(countrySlug, citySlug), [countrySlug, citySlug])
  const routeKey = `${countrySlug}/${citySlug}`
  const [backendState, setBackendState] = useState({ key: '', result: null })

  useEffect(() => {
    let mounted = true

    if (staticResult) return undefined

    destinationService.get(citySlug)
      .then((item) => {
        if (!mounted) return
        const result = item.countrySlug === countrySlug ? backendDestinationToView(item) : null
        setBackendState({ key: routeKey, result })
      })
      .catch(() => {
        if (mounted) setBackendState({ key: routeKey, result: null })
      })

    return () => {
      mounted = false
    }
  }, [citySlug, countrySlug, routeKey, staticResult])

  const backendResult = backendState.key === routeKey ? backendState.result : null
  const loading = !staticResult && backendState.key !== routeKey
  const result = staticResult || backendResult

  if (loading) {
    return (
      <div className="section-shell bg-white text-center">
        <div className="section-container">
          <p className="section-eyebrow justify-center">Loading</p>
          <h1 className="mt-3 section-heading">Finding destination details...</h1>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="section-shell bg-white text-center">
        <div className="section-container">
          <p className="section-eyebrow justify-center">Not found</p>
          <h1 className="mt-3 section-heading">We couldn't find that destination</h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-dark-500">
            The destination you're looking for may have moved or doesn't exist. Browse all destinations instead.
          </p>
          <Link to="/destinations" className="mt-8 inline-block">
            <Button size="lg" className="rounded-full bg-dark-800 px-7 text-white hover:bg-dark-900">
              View all destinations
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const { city, country } = result
  const details = getCityDetails(city.slug, city.name, country.name)
  const cityWithDetails = { ...city, details }

  return (
    <div className="w-full overflow-hidden bg-[#FAF8F4] text-dark-900">
      <DestinationOverview city={cityWithDetails} country={country} />
      <Attractions attractions={details.attractions} cityName={city.name} />
      <Gallery gallery={details.gallery} fallbackImage={city.image} cityName={city.name} />
      <TravelTips travelTips={country.travelTips} countryName={country.name} />
      <RelatedPackages cityName={city.name} />
      <ContactCTA />
    </div>
  )
}

export default DestinationDetailsPage
