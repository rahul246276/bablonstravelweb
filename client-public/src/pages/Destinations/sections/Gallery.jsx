/**
 * Same empty-state reasoning as Attractions.jsx — most cities don't have
 * a curated gallery yet. Falls back to the single city.image already
 * guaranteed to exist (from destinationsData.js) rather than showing
 * nothing at all.
 */
const Gallery = ({ gallery, fallbackImage, cityName }) => {
  const images = gallery && gallery.length > 0 ? gallery : [fallbackImage]

  return (
    <section className="section-shell bg-ivory">
      <div className="section-container">
        <p className="section-eyebrow">Gallery</p>
        <h2 className="mt-3 section-heading">{cityName} in pictures</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <div key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery