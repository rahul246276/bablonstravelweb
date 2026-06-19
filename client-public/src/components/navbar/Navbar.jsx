import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa'

import { ROUTES } from '../../constants/routes'
import bablonsLogo from '../../assets/logos/Bablons Logo.png'

const navLinks = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Destinations', path: ROUTES.DESTINATIONS },
  { name: 'Packages', path: ROUTES.PACKAGES },
  { name: 'Gallery', path: ROUTES.GALLERY },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Blogs', path: ROUTES.BLOGS },
  { name: 'Contact Us', path: ROUTES.CONTACT },
]

const CONTACT_EMAIL = 'info@bablonstravelent.com'
const CONTACT_PHONE = '+91 9810212399'
const CONTACT_PHONE_HREF = 'tel:+919810212399'
const CONTACT_ADDRESS = 'Available Worldwide'
const CONTACT_ADDRESS_HREF = 'https://goo.gl/maps/your-location' // Replace with actual Google Maps link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${hasScrolled ? 'shadow-[0_16px_42px_rgba(16,39,36,0.12)]' : ''}`}>
      <div className="hidden border-b border-white/10 bg-primary-800 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-[88rem] items-center justify-between px-6 text-[0.82rem] font-semibold xl:px-8">
          <div className="flex min-w-0 items-center gap-5 xl:gap-7">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-w-0 items-center gap-2.5 text-white/88 transition hover:text-accent-200">
              <FaEnvelope className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{CONTACT_EMAIL}</span>
            </a>
            <span className="h-4 w-px bg-white/20" aria-hidden="true" />
            <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2.5 text-white/88 transition hover:text-accent-200">
              <FaPhoneAlt className="h-3.5 w-3.5 shrink-0" />
              <span>{CONTACT_PHONE}</span>
            </a>
            <span className="hidden items-center gap-2.5 text-white/80 xl:inline-flex">
              <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0" />
              {CONTACT_ADDRESS}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <span className="mr-1 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/58">Follow</span>
            <a href="https://facebook.com" aria-label="Facebook" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaFacebookF className="h-3.5 w-3.5" /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaInstagram className="h-3.5 w-3.5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaLinkedinIn className="h-3.5 w-3.5" /></a>
            <a href="https://whatsapp.com" aria-label="WhatsApp" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaWhatsapp className="h-3.5 w-3.5" /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaYoutube className="h-3.5 w-3.5" /></a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 text-white/82 transition hover:bg-accent-300 hover:text-primary-900"><FaPinterest className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      <nav className="border-b border-sand-200/80 bg-white/96 backdrop-blur-xl" aria-label="Main navigation">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 xl:px-8">
          <div className="site-header-inner flex items-center justify-between gap-4 lg:grid lg:grid-cols-[minmax(245px,0.78fr)_minmax(0,1.55fr)_minmax(160px,0.55fr)] lg:items-center lg:gap-5 xl:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.65fr)_minmax(180px,0.55fr)]">
            <Link to={ROUTES.HOME} className="group flex min-w-0 shrink-0 items-center gap-3.5 lg:gap-4" aria-label="Bablons Travel home">
              <span className="site-logo-frame transition group-hover:-translate-y-0.5 group-hover:shadow-md">
                <img src={bablonsLogo} alt="Bablons Travel" className="site-logo-img" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-[1.18rem] font-bold text-dark-900 lg:text-[1.22rem]">Bablons Travel</span>
                <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-secondary-600">
                  Curated holidays
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center gap-1 rounded-full bg-sand-50/90 p-1.5 ring-1 ring-sand-200/90 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === ROUTES.HOME}
                  className={({ isActive }) =>
                    `relative rounded-full px-2.5 py-2.5 text-[0.7rem] font-extrabold uppercase tracking-[0.045em] transition duration-200 xl:px-3.5 xl:text-[0.76rem] ${isActive ? 'bg-white text-secondary-600 shadow-sm ring-1 ring-sand-200/80' : 'text-dark-700 hover:bg-white/85 hover:text-secondary-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-secondary-500 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden items-center justify-end lg:flex">
              <Link
                to={ROUTES.PACKAGES}
                className="inline-flex h-12 items-center justify-center rounded-full bg-secondary-600 px-7 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(198,95,46,0.24)] transition hover:-translate-y-0.5 hover:bg-secondary-700 hover:shadow-[0_16px_34px_rgba(198,95,46,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-500 xl:px-8"
              >
                Book Now
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white text-dark-800 shadow-sm transition hover:bg-sand-50 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>

          <div
            id="mobile-nav-panel"
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'max-h-[calc(100dvh-var(--header-height-mobile))] overflow-y-auto pb-6' : 'max-h-0'}`}
          >
            <div className="border-t border-sand-200 pt-4">
              <div className="mb-4 grid gap-3 rounded-2xl bg-primary-800 p-4 text-sm font-semibold text-white shadow-lg shadow-primary-900/10">
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-w-0 items-center gap-2.5 text-white/90">
                  <FaEnvelope className="h-4 w-4 shrink-0 text-accent-300" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
                <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2.5 text-white/90">
                  <FaPhoneAlt className="h-4 w-4 shrink-0 text-accent-300" />
                  {CONTACT_PHONE}
                </a>
                <span className="inline-flex items-center gap-2.5 text-white/90">
                  <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-accent-300" />
                  <a href={CONTACT_ADDRESS_HREF} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent-300">
                    {CONTACT_ADDRESS}
                  </a>
                </span>
                <div className="mt-1 flex items-center gap-2 border-t border-white/10 pt-3">
                  <a href="https://facebook.com" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-300 hover:text-primary-900"><FaFacebookF className="h-3.5 w-3.5" /></a>
                  <a href="https://instagram.com" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-300 hover:text-primary-900"><FaInstagram className="h-3.5 w-3.5" /></a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-300 hover:text-primary-900"><FaLinkedinIn className="h-3.5 w-3.5" /></a>
                  <a href="https://whatsapp.com" aria-label="WhatsApp" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-300 hover:text-primary-900"><FaWhatsapp className="h-3.5 w-3.5" /></a>
                </div>
              </div>

              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === ROUTES.HOME}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-[0.08em] transition ${isActive ? 'bg-primary-50 text-secondary-600 shadow-sm ring-1 ring-primary-100' : 'text-dark-700 hover:bg-sand-50 hover:text-secondary-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to={ROUTES.CONTACT}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-dark-800 bg-white px-4 text-sm font-bold text-dark-800 transition hover:bg-primary-50"
                >
                  Contact
                </Link>
                <Link
                  to={ROUTES.PACKAGES}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary-600 px-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-secondary-900/15 transition hover:bg-secondary-700"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
