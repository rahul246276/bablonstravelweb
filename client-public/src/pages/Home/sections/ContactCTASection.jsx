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
    <section className="relative overflow-hidden bg-dark-900 py-20 text-white">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/74" />
      <div className="grain-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">Start with a conversation</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-4xl">Ready for a journey designed around you?</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Tell us where you want to go, how you like to travel, and what matters most. We will shape the route, stays, pacing, and support from there.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                onClick={() => navigate(ROUTES.CONTACT)}
                size="lg"
                className="gap-2 rounded-full bg-white px-7 font-bold text-dark-900 hover:bg-sand-100"
              >
                <FaSuitcaseRolling />
                Plan My Trip
              </Button>
              <button
                type="button"
                onClick={() => navigate(ROUTES.CONTACT)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Talk to us directly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:w-64 md:grid-cols-1">
            {proofItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center backdrop-blur">
                  <Icon className="mx-auto h-4 w-4 text-accent-300" />
                  <span className="mt-2 block text-xs text-white/50">{item.label}</span>
                  <span className="block text-base font-bold text-accent-300">{item.value}</span>
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
