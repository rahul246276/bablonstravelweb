import { FaGlobeAsia, FaHeadset, FaHotel, FaShieldAlt } from 'react-icons/fa'

const proofNumbers = [
  { value: '98%', label: 'Would travel with us again' },
  { value: '3,200+', label: 'Trips delivered' },
  { value: '40+', label: 'Destination specialists' },
  { value: '< 2 hrs', label: 'Average response' },
]

const features = [
  { icon: FaGlobeAsia, title: 'Custom routes', description: 'Trips shaped around your dates, pace, budget, and travel style.' },
  { icon: FaHotel, title: 'Vetted stays', description: 'Hotels and local partners selected for comfort, location, and service.' },
  { icon: FaShieldAlt, title: 'Clear pricing', description: 'Transparent inclusions, practical upgrades, and no surprise planning fees.' },
  { icon: FaHeadset, title: 'On-trip support', description: 'Responsive help before departure and while you are traveling.' },
]

const WhyChooseUsSection = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-dark-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/18" />
      <div className="grain-overlay" />
      <div className="section-container relative">
        <div className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-eyebrow text-accent-300">Why choose us</p>
            <h2 className="mt-3 max-w-xl section-heading text-white">A calm planning process for complex journeys</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Premium travel is not only beautiful hotels. It is the quiet confidence that every transfer, timing, guide, and detail has been considered before you leave home.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {proofNumbers.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur">
                  <div className="text-3xl font-bold text-accent-300">{item.value}</div>
                  <div className="mt-1.5 text-sm text-white/55">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-6 text-white/62">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
