const photos = [
  { title: 'Silk Road Architecture', location: 'Uzbekistan', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mountain Villages', location: 'Georgia', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80' },
  { title: 'Baku Skyline', location: 'Azerbaijan', image: 'https://images.unsplash.com/photo-1605538883669-825200433431?auto=format&fit=crop&w=900&q=80' },
  { title: 'Istanbul Light', location: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80' },
  { title: 'Island Calm', location: 'Thailand', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80' },
  { title: 'Desert Evenings', location: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
]

const GalleryPage = () => {
  return (
    <div className="bg-white">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">Photo gallery</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">A glimpse of the journeys we plan</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Explore visual inspiration from destinations our travelers ask for most.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <figure
              key={photo.title}
              className={`group relative overflow-hidden rounded-lg bg-gray-100 shadow-sm ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <img src={photo.image} alt={photo.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-full" loading="lazy" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-900/85 to-transparent p-5 text-white">
                <p className="text-sm font-semibold text-accent-300">{photo.location}</p>
                <h2 className="text-lg font-bold">{photo.title}</h2>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
