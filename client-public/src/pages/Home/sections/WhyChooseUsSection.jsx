import { FaGlobeAsia, FaHeadset, FaHotel, FaPassport, FaRoute, FaTags } from 'react-icons/fa'
import whyChooseBg from '../../../assets/images/Hero Section Bg 4.jpg'

const proofNumbers = [
  { value: '120+', label: 'International Journeys Crafted' },
  { value: '4.9/5', label: 'Traveler Satisfaction Rating' },
  { value: '15+', label: 'Global Destinations Covered' },
  { value: '24/7', label: 'Travel Assistance & Support' },
]

const features = [
  {
    icon: FaRoute,
    title: 'Tailor-Made Travel Plans',
    description:
      'Every traveler is different. We design journeys around your preferences, travel style, budget, and pace to create a truly personalized experience.',
  },
  {
    icon: FaGlobeAsia,
    title: 'International Travel Expertise',
    description:
      "From Dubai and Turkey to Thailand, Georgia, Azerbaijan, Uzbekistan, Bali, and beyond, our team helps you travel confidently across the world's most sought-after destinations.",
  },
  {
    icon: FaHotel,
    title: 'Trusted Hotels & Local Partners',
    description:
      'We work with carefully selected hotels, guides, and transportation partners to ensure comfort, reliability, and exceptional experiences throughout your trip.',
  },
  {
    icon: FaPassport,
    title: 'Visa & Travel Assistance',
    description:
      'Our experts provide clear guidance for visas, documentation, travel requirements, and pre-departure preparation to make international travel stress-free.',
  },
  {
    icon: FaTags,
    title: 'Transparent Pricing',
    description:
      "No hidden surprises. We provide clear inclusions, practical recommendations, and honest pricing so you always know exactly what you're paying for.",
  },
  {
    icon: FaHeadset,
    title: 'Dedicated Support Throughout Your Journey',
    description:
      'From your first inquiry to your return flight home, our team remains available to assist you whenever you need support.',
  },
]

const WhyChooseUsSection = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-dark-900 text-white">
      <img
        src={whyChooseBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900/88 to-primary-900/76" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/30" />
      <div className="grain-overlay" />

      <div className="section-container relative">
        <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-eyebrow text-accent-300">Why choose Bablons</p>
            <h2 className="mt-3 max-w-xl section-heading text-white">Travel Beyond Borders, Planned to Perfection</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              International travel should feel exciting, not overwhelming. At Bablons Tours & Entertainments, we handle every detail with care, from destination planning and visa guidance to hotels, transfers, and local experiences, so you can focus on enjoying the journey.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {proofNumbers.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-xl shadow-black/10 backdrop-blur-md">
                  <div className="text-3xl font-bold text-accent-300">{item.value}</div>
                  <div className="mt-1.5 text-sm text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.12]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-6 text-white/65">{feature.description}</p>
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
