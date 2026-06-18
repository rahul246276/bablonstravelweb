import { useNavigate } from 'react-router-dom'
import { FaBolt, FaPhoneAlt, FaSuitcaseRolling, FaTag } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const proofItems = [
  { icon: FaBolt, label: 'Response time', value: 'Under 2 hours' },
  { icon: FaTag, label: 'Planning fee', value: 'Free to inquire' },
]

const ContactCTASection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-dark-900 py-24 text-white lg:py-32">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/92 to-dark-900/72" />
      <div className="grain-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">Start with a conversation</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Your next journey should feel effortless before it begins.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Tell us where you want to go, how you like to travel, and what matters most. We will shape the route, stays, pacing, and support from there.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                onClick={() => navigate(ROUTES.CONTACT)}
                size="lg"
                className="rounded-full bg-white px-8 font-bold text-dark-900 hover:bg-sand-100"
              >
                <FaSuitcaseRolling />
                Plan My Trip
              </Button>
              <button
                type="button"
                onClick={() => navigate(ROUTES.CONTACT)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white/72 transition hover:bg-white/10 hover:text-white"
              >
                <FaPhoneAlt />
                Talk to us directly
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {proofItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <Icon className="h-5 w-5 text-accent-300" />
                  <span className="mt-4 block text-xs font-bold uppercase tracking-[0.18em] text-white/45">{item.label}</span>
                  <span className="mt-1 block text-2xl font-bold text-accent-300">{item.value}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTASection
