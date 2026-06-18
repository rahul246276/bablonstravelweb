import { FaGlobeAsia, FaHandshake, FaHeadset, FaRoute } from 'react-icons/fa'

const AboutPage = () => {
  const stats = [
    { value: '120+', label: 'Curated trips' },
    { value: '30+', label: 'Partner destinations' },
    { value: '4.9/5', label: 'Average guest rating' },
  ]

  const values = [
    { icon: FaRoute, title: 'Thoughtful pacing', text: 'We plan routes that leave room to enjoy the place, not only tick off stops.' },
    { icon: FaHandshake, title: 'Trusted partners', text: 'Local guides, hotels, and transfers are selected for reliability and care.' },
    { icon: FaHeadset, title: 'Human support', text: 'You get practical guidance before departure and responsive help during the trip.' },
  ]

  return (
    <div className="bg-white">
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">About Bablons Travel</p>
            <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              We design trips that feel clear, personal, and easy to enjoy.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Bablons Travel helps families, couples, groups, and business travelers plan memorable holidays across Central Asia, the Caucasus, the Middle East, and beyond.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=85"
              alt="Traveler looking across a scenic viewpoint"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-gray-200 p-6 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="text-3xl font-bold text-primary-700">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
              <FaGlobeAsia className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">What guides every itinerary</h2>
            <p className="mt-4 text-white/70">
              Good travel is a mix of logistics and feeling. We take both seriously, from airport timing to the moments you will remember.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div key={value.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <Icon className="mb-4 h-6 w-6 text-accent-300" />
                  <h3 className="mb-2 font-bold text-white">{value.title}</h3>
                  <p className="text-sm leading-6 text-white/65">{value.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
