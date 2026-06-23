import { useState } from 'react'
import Badge from '../common/Badge'
import ImageLightbox from '../common/ImageLightbox'
import { getPackageImages } from './packageViewUtils'

const PackageHeroGallery = ({ package: travelPackage }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const images = getPackageImages(travelPackage)
  const hero = images[0]
  const sideImages = images.slice(1, 5)

  if (!hero) {
    return (
      <section className="bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-xl bg-slate-200 p-12 text-center text-slate-500">Package images will appear here after upload.</div>
      </section>
    )
  }

  return (
    <section className="bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[2fr_1fr]">
        <button type="button" onClick={() => setLightboxIndex(0)} className="relative overflow-hidden rounded-xl bg-slate-800 text-left">
          <img src={hero.url} alt={hero.alt || travelPackage.title} className="h-[320px] w-full object-cover sm:h-[460px]" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge tone="dark">{travelPackage.packageType || 'Package'}</Badge>
            {travelPackage.featured ? <Badge>Featured</Badge> : null}
          </div>
          <span className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 text-sm font-black text-slate-950">
            View {images.length} photos
          </span>
        </button>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {sideImages.length ? sideImages.map((image, index) => (
            <button key={image.url} type="button" onClick={() => setLightboxIndex(index + 1)} className="overflow-hidden rounded-xl bg-slate-800">
              <img src={image.url} alt={image.alt || ''} className="h-36 w-full object-cover lg:h-[108px]" />
            </button>
          )) : null}
        </div>
      </div>
      {lightboxIndex !== null ? <ImageLightbox images={images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} /> : null}
    </section>
  )
}

export default PackageHeroGallery
