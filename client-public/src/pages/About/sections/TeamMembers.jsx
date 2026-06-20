import { Link } from 'react-router-dom'
import { FaArrowRight, FaAward, FaCertificate, FaGlobeAsia, FaHeadset, FaHotel, FaPassport, FaUserTie } from 'react-icons/fa'
import { ROUTES } from '../../../constants/routes'

const teamPillars = [
  { icon: FaUserTie, title: 'Travel Consultants', text: 'Understand your preferences and craft holidays that match your style, budget, and expectations.' },
  { icon: FaPassport, title: 'Visa Support Desk', text: 'Guides document preparation, application accuracy, submission timing, and requirement clarity.' },
  { icon: FaHotel, title: 'Tour Operations Team', text: 'Coordinates hotels, transfers, guided tours, local transport, and practical travel arrangements.' },
  { icon: FaHeadset, title: 'Recruitment & Support', text: 'Supports overseas opportunity candidates with profile preparation and confident communication.' },
]

const certifications = [
  { icon: FaAward, title: 'Experience', text: 'Years of practical travel knowledge' },
  { icon: FaCertificate, title: 'Quality Focus', text: 'Premium service standards' },
  { icon: FaGlobeAsia, title: 'Global Network', text: 'Travel and opportunity partners' },
]

const TeamMembers = () => {
  return (
    <section className="relative overflow-hidden bg-dark-900 py-16 text-white md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(231,188,96,0.16),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="grain-overlay" />

      <div className="section-container relative">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-eyebrow text-accent-300">
              <FaUserTie className="text-accent-300" />
              Why choose Bablons
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-white md:text-5xl">
              Expertise, personalized service, comprehensive solutions, and global reach.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              With experience in tours, visa assistance, and overseas recruitment support, our team works as a one-stop consultant for travelers and candidates who want clarity, confidence, and dependable service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {certifications.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.25rem] border border-white/14 bg-white/[0.07] p-5 text-center backdrop-blur">
                  <Icon className="mx-auto h-8 w-8 text-accent-300" />
                  <h3 className="mt-4 text-sm font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/62">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teamPillars.map((member) => {
            const Icon = member.icon
            return (
              <article key={member.title} className="group rounded-[1.35rem] border border-white/14 bg-white/[0.08] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-1 hover:border-accent-300/50 hover:bg-white/[0.12]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-300 text-dark-900 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-white">{member.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{member.text}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[1.5rem] border border-white/14 bg-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-7 lg:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-accent-300">Ready when you are</p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-white md:text-4xl">Let Bablons guide your next journey or global opportunity.</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">
              Share your destination, visa requirement, budget, travel style, or overseas career goal. We will help you move forward with a clear and premium plan.
            </p>
          </div>
          <div className="border-t border-white/14 p-7 lg:border-l lg:border-t-0 lg:p-8">
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent-500 to-secondary-500 px-8 text-sm font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_18px_45px_rgba(187,132,44,0.24)] transition hover:-translate-y-0.5 sm:w-auto"
            >
              Contact Our Team
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
