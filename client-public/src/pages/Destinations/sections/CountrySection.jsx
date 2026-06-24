import CityCard from './CityCard'

/**
 * Layout follows the reference design: a tall feature image anchors the
 * country on the left (visual identity — Burj Khalifa for Dubai, Registan
 * for Uzbekistan, etc.), with that country's cities in a 4-column grid on
 * the right. Per explicit direction, there is no generic "Explore Country"
 * button — every individual city card is its own click target through to
 * its packages, so the CTA is granular rather than funneling everyone
 * through one country-level link.
 */
const CountrySection = ({ name, tagline, heroImage, cities, countrySlug, isFirst }) => {
  const hasCities = cities.length > 0

  return (
    <section id={countrySlug} className={isFirst ? 'pt-2' : 'pt-14 lg:pt-20'}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
        <div className="relative hidden min-h-[360px] overflow-hidden rounded-3xl lg:block">
          <img src={heroImage.src} alt={heroImage.alt} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/85 via-dark-900/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h2 className="font-display text-2xl font-bold leading-tight text-white">{name}</h2>
            <p className="mt-2 text-sm leading-6 text-white/75">{tagline}</p>
          </div>
        </div>

        <div>
          <div className="mb-4 lg:hidden">
            <h2 className="font-display text-2xl font-bold leading-tight text-dark-900">{name}</h2>
            <p className="mt-1.5 text-sm leading-6 text-dark-500">{tagline}</p>
          </div>

          {hasCities ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <CityCard
                key={city.slug}
                citySlug={city.slug}
                countrySlug={countrySlug}
                name={city.name}
                image={city.image}
              />
            ))}
            </div>
          ) : (
            <div className="flex min-h-[240px] items-center rounded-3xl border border-dashed border-sand-300 bg-white p-6 text-center shadow-sm lg:min-h-full">
              <div className="mx-auto max-w-md">
                <p className="font-display text-2xl font-bold text-dark-900">{name}</p>
                <p className="mt-3 text-sm leading-7 text-dark-500">
                  City cards for this country will appear here after you add city or region destinations in the backend.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CountrySection
