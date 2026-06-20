import { FaMapMarkedAlt } from 'react-icons/fa'

/**
 * Empty state matters here: roughly 30 of 33 cities currently have no
 * hand-written attractions (see destinationDetailsHelpers.js). Rather
 * than rendering an empty grid or hiding the section entirely (which
 * would look broken/incomplete to a visitor), show an honest
 * "being added" message that doesn't pretend the content exists.
 */
const Attractions = ({ attractions, cityName }) => {
  if (!attractions || attractions.length === 0) {
    return (
      <section className="section-shell bg-white">
        <div className="section-container">
          <p className="section-eyebrow">Things to do</p>
          <h2 className="mt-3 section-heading">Top attractions in {cityName}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-dark-500">
            We're putting together a detailed attractions guide for {cityName}. Reach out and our team can share recommendations now.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-shell bg-white">
      <div className="section-container">
        <p className="section-eyebrow">Things to do</p>
        <h2 className="mt-3 section-heading">Top attractions in {cityName}</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {attractions.map((attraction) => (
            <div
              key={attraction.name}
              className="flex items-start gap-4 rounded-2xl border border-sand-200 bg-ivory p-5 transition hover:border-primary-200 hover:bg-white hover:shadow-card"
            >
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <FaMapMarkedAlt className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-bold text-dark-900">{attraction.name}</h3>
                <p className="mt-1 text-sm leading-6 text-dark-500">{attraction.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attractions