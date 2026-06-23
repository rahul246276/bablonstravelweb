import { FaQuoteLeft, FaStar, FaUserCheck } from 'react-icons/fa'
import testimonialBg from '../../../assets/images/testimonialsectionbg.jpg'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Family holiday',
    destination: 'Uzbekistan',
    content: 'Bablons Travel made our Uzbekistan trip easy from start to finish. The hotels, guides, and timing were all thoughtfully arranged.',
    initials: 'SJ',
    accent: 'from-primary-700 to-primary-500',
  },
  
  {
    name: 'Ahmed Hassan',
    role: 'Business traveler',
    destination: 'Dubai',
    content: 'Reliable planning and quick support. They understood exactly what I needed for a short business trip with a leisure extension.',
    initials: 'AH',
    accent: 'from-dark-900 to-dark-700',
  },
  {
    name: 'Maria Garcia',
    role: 'Adventure seeker',
    destination: 'Georgia',
    content: 'The itinerary had the right balance of scenery, food, history, and free time. Nothing felt rushed or generic.',
    initials: 'MG',
    accent: 'from-secondary-700 to-accent-500',
  },
]

const StarRow = ({ label = '5 out of 5 stars' }) => (
  <div className="flex gap-1 text-accent-400" role="img" aria-label={label}>
    {Array.from({ length: 5 }).map((_, index) => (
      <FaStar key={index} className="h-4 w-4 drop-shadow-sm" aria-hidden="true" />
    ))}
  </div>
)

const TestimonialsSection = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-dark-900 text-white">
      <img
        src={testimonialBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,42,35,0.94)_0%,rgba(1,42,35,0.84)_45%,rgba(1,42,35,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,159,54,0.18),transparent_32%),radial-gradient(circle_at_88%_70%,rgba(255,255,255,0.12),transparent_28%)]" />

      <div className="section-container relative">
        <div className="section-header grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-accent-300">
              <FaUserCheck className="text-accent-300" />
              Traveler stories
            </p>
            <h2 className="mt-3 section-heading text-white">Smooth journeys, remembered well</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Real experiences from travelers who trusted Bablons for seamless international holidays, thoughtful planning, and support at every step.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/18 bg-white/12 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-md">
            <div className="flex items-center gap-5">
              <span className="font-display text-6xl font-bold leading-none text-accent-300">4.9</span>
              <div>
                <StarRow label="4.9 out of 5 stars" />
                <p className="mt-2 text-sm font-semibold text-white">Traveler satisfaction rating</p>
                <p className="mt-1 text-sm text-white/68">Based on 746 traveler reviews</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/14 pt-5 text-center">
              <div>
                <p className="text-2xl font-black text-white">120+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/58">Trips</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">15+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/58">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/58">Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] border border-white/16 bg-white/[0.11] p-6 shadow-[0_20px_65px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-accent-300/55 hover:bg-white/[0.15] lg:p-7"
            >
              <div className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${testimonial.accent}`} />
              <div className="flex items-center justify-between gap-4">
                <StarRow />
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent-300/35 bg-accent-300/12 text-accent-300">
                  <FaQuoteLeft className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <blockquote className="mt-6 flex-1 text-lg font-medium leading-8 text-white/86">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-white/14 pt-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.accent} text-sm font-black text-white shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/62">{testimonial.role} / {testimonial.destination}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
