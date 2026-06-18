import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheckCircle,
  FaConciergeBell,
  FaGem,
  FaPlaneDeparture,
  FaShieldAlt,
  FaStar,
  FaMagic,
} from 'react-icons/fa'

import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'
import heroBg3 from '../../../assets/images/Hero Section Bg 3.png'
import heroBg4 from '../../../assets/images/Hero Section Bg 4.jpg'
import heroBg5 from '../../../assets/images/Hero Section Bg 5.jpg'
import heroBg1 from '../../../assets/images/Hero Section Bg 1.png'
import heroShowcase1 from '../../../assets/images/Image 1.png'
import heroShowcase2 from '../../../assets/images/Image 3 for Hero.jpg'

const heroBackgrounds = [heroBg3, heroBg4, heroBg5, heroBg1]

const highlights = [
  { value: '120+', label: 'Tailored journeys', note: 'planned around your pace' },
  { value: '4.9/5', label: 'Guest rating', note: 'from premium travelers' },
  { value: '24/7', label: 'Concierge care', note: 'before and during travel' },
]

const trustPoints = [
  'Visa-ready guidance',
  'Handpicked stays',
  'Private local experts',
  'Flexible itinerary design',
]

const heroBenefits = [
  {
    icon: FaConciergeBell,
    title: 'Personal planning',
    description: 'Routes, stays, transfers, and experiences shaped around your travel style.',
  },
  {
    icon: FaShieldAlt,
    title: 'Clear and comfortable',
    description: 'Transparent pricing, trusted partners, and calm support at every stage.',
  },
]

const HeroSection = () => {
  const [activeBgIndex, setActiveBgIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBgIndex((currentIndex) => (currentIndex + 1) % heroBackgrounds.length)
    }, 4800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="home-hero relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-[1400ms] ease-in-out"
          style={{
            width: `${heroBackgrounds.length * 100}%`,
            transform: `translateX(-${activeBgIndex * (100 / heroBackgrounds.length)}%)`,
          }}
        >
          {heroBackgrounds.map((backgroundImage, index) => (
            <div
              key={backgroundImage}
              className="relative h-full shrink-0"
              style={{ width: `${100 / heroBackgrounds.length}%` }}
            >
              <img
                src={backgroundImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/92 via-dark-900/70 to-dark-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

      {/* Animated dots indicator */}
      <div className="home-hero-dots absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroBackgrounds.map((backgroundImage, index) => (
          <button
            key={backgroundImage}
            type="button"
            onClick={() => setActiveBgIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeBgIndex === index ? 'h-2 w-9 bg-white' : 'h-2 w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Show hero background ${index + 1}`}
          />
        ))}
      </div>

      <div className="home-hero-inner relative z-10 mx-auto grid items-center">
        <div className="home-hero-copy">
          {/* Badge */}
          <div className="home-hero-badge mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-5 py-3 text-sm font-semibold backdrop-blur-md shadow-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 text-white text-lg">
              <FaStar />
            </span>
            <div>
              <span className="block text-[0.7rem] uppercase tracking-wider text-white/60 font-medium">Premium travel</span>
              <span className="block text-white/95">Luxury holidays planned with expertise</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="home-hero-title mb-2">
            Effortless journeys,
            <span className="home-hero-title-accent block">beautifully planned.</span>
          </h1>

          {/* Subtitle */}
          <p className="home-hero-text mb-10">
            Explore Uzbekistan, Georgia, Azerbaijan, Turkey, Thailand, Dubai, and beyond through refined itineraries shaped around your pace, interests, and comfort.
          </p>

          {/* Feature Cards */}
          <div className="home-hero-features mb-8 grid gap-4 sm:grid-cols-2">
            {heroBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/18 bg-gradient-to-br from-white/16 to-white/8 p-6 backdrop-blur-lg transition-all hover:border-white/30 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/12 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/25 to-amber-500/15 text-amber-300 transition-transform group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="text-base font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Trust Points */}
          <div className="home-hero-trust mb-8 rounded-2xl border border-white/18 bg-gradient-to-br from-white/12 to-white/6 p-5 backdrop-blur-lg shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">Included care</p>
              <span className="rounded-full bg-gradient-to-r from-amber-500/20 to-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200 border border-amber-400/30">
                <FaMagic className="inline mr-1" />
                No guesswork
              </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="home-hero-trust-pill inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:border-white/20"
                >
                  <FaCheckCircle className="shrink-0 text-emerald-400" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="home-hero-stats mb-8 grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-white/18 bg-gradient-to-r from-white/12 to-white/6 backdrop-blur-lg shadow-xl sm:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={item.label}
                className={`border-b border-white/10 px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 transition-all hover:bg-white/8 ${
                  idx !== 0 ? 'sm:border-l border-white/10' : ''
                }`}
              >
                <div className="text-4xl font-extrabold text-white">{item.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-amber-300">{item.label}</div>
                <p className="mt-2 text-xs leading-5 text-white/60">{item.note}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="home-hero-actions flex flex-col gap-4 sm:flex-row">
            <Link to={ROUTES.PACKAGES} className="flex-1 sm:flex-none">
              <Button
                size="lg"
                className="home-hero-primary-cta w-full rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 text-white shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all"
              >
                <FaPlaneDeparture />
                Explore Journeys
              </Button>
            </Link>

            <Link to={ROUTES.CONTACT} className="flex-1 sm:flex-none">
              <Button
                size="lg"
                variant="outline"
                className="home-hero-secondary-cta w-full rounded-full border-white/50 bg-white/12 text-white shadow-lg backdrop-blur-sm hover:bg-white hover:text-dark-900 hover:border-white transition-all"
              >
                Speak To An Expert
                <FaArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side Visual Card */}
        <div className="home-hero-card-wrap mx-auto w-full max-w-md">
          <div className="home-hero-visual-card">
            <div className="home-hero-visual-main">
              <img src={heroShowcase1} alt="Premium curated travel inspiration" />
              <div className="home-hero-visual-overlay" />
              <div className="home-hero-visual-label">
                <FaGem />
                Signature holiday design
              </div>
            </div>

            <div className="home-hero-visual-floating">
              <img src={heroShowcase2} alt="Luxury travel planning detail" />
            </div>

            <div className="home-hero-visual-copy">
              <p className="home-hero-card-kicker text-xs font-bold uppercase tracking-wider text-primary-600">Tailored with local expertise</p>
              <h2 className="mt-2 text-xl font-bold text-dark-900">Travel that feels personal from the first plan.</h2>
              <p className="mt-3 text-sm leading-6 text-dark-600">
                Beautiful places, thoughtful pacing, trusted stays, and practical support arranged into one seamless journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
