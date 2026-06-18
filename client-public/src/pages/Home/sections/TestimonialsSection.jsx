import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Family holiday',
    destination: 'Uzbekistan',
    content: 'Bablons Travel made our Uzbekistan trip easy from start to finish. The hotels, guides, and timing were all thoughtfully arranged.',
    initials: 'SJ',
    avatarClass: 'bg-primary-600',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Business traveler',
    destination: 'Dubai',
    content: 'Reliable planning and quick support. They understood exactly what I needed for a short business trip with a leisure extension.',
    initials: 'AH',
    avatarClass: 'bg-dark-800',
  },
  {
    name: 'Maria Garcia',
    role: 'Adventure seeker',
    destination: 'Georgia',
    content: 'The itinerary had the right balance of scenery, food, history, and free time. Nothing felt rushed or generic.',
    initials: 'MG',
    avatarClass: 'bg-accent-600',
  },
]

const StarRow = () => (
  <div className="flex gap-0.5 text-accent-400">
    {Array.from({ length: 5 }).map((_, index) => (
      <FaStar key={index} className="h-3.5 w-3.5" />
    ))}
  </div>
)

const TestimonialsSection = () => {
  return (
    <section className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="section-eyebrow">Traveler stories</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-dark-900 md:text-5xl">Smooth journeys, remembered well</h2>
          </div>
          <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-[0_18px_55px_rgba(16,39,36,0.1)] md:ml-auto md:max-w-xl">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary-700">4.9</span>
              <div>
                <StarRow />
                <p className="mt-1 text-sm text-dark-500">Based on 746 traveler reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex flex-col rounded-3xl border border-sand-200 bg-white p-7 shadow-[0_18px_55px_rgba(16,39,36,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(16,39,36,0.14)]">
              <StarRow />
              <blockquote className="mt-4 flex-1 leading-7 text-dark-600">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-sand-200 pt-5">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white ${testimonial.avatarClass}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-dark-900">{testimonial.name}</p>
                  <p className="text-sm text-dark-500">{testimonial.role} / {testimonial.destination}</p>
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
