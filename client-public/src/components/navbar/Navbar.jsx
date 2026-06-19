import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FaArrowRight,
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPen,
  FaPhoneAlt,
  FaRegImages,
  FaSearch,
  FaShieldAlt,
  FaTimes,
  FaUserFriends,
  FaWhatsapp,
  FaYoutube,
  FaHeadset,
  FaPlaneDeparture,
} from 'react-icons/fa'

import { ROUTES } from '../../constants/routes'
import bablonsLogo from '../../assets/logos/Bablons Logo.png'

const navLinks = [
  { name: 'Home', path: ROUTES.HOME, icon: FaHome },
  { name: 'Destinations', path: ROUTES.DESTINATIONS, icon: FaMapMarkerAlt },
  { name: 'Packages', path: ROUTES.PACKAGES, icon: FaBriefcase },
  { name: 'Gallery', path: ROUTES.GALLERY, icon: FaRegImages },
  { name: 'About Us', path: ROUTES.ABOUT, icon: FaUserFriends },
  { name: 'Blogs', path: ROUTES.BLOGS, icon: FaPen },
  { name: 'Contact Us', path: ROUTES.CONTACT, icon: FaEnvelope },
]

const utilityItems = [
  { icon: FaPlaneDeparture, label: 'Handpicked Experiences' },
  { icon: FaShieldAlt, label: 'Best Price Guarantee' },
  { icon: FaHeadset, label: '24/7 Travel Support' },
]

const CONTACT_EMAIL = 'info@bablonstravelent.com'
const CONTACT_PHONE = '+91 9810212399'
const CONTACT_PHONE_HREF = 'tel:+919810212399'
const CONTACT_ADDRESS = 'Available Worldwide'

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
    <header className={`site-header fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${hasScrolled ? 'shadow-[0_14px_38px_rgba(16,39,36,0.12)]' : ''}`}>
      <div className="hidden lg:block">
        <div className="w-full border-b border-sand-200 bg-white px-6 xl:px-8">
          <div className="flex h-12 items-center justify-between text-sm font-bold text-dark-900">
            <div className="flex min-w-0 items-center gap-8 xl:gap-12">
              {utilityItems.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={item.label} className="flex items-center gap-4">
                    {index > 0 ? <span className="hidden h-5 w-px bg-dark-900/25 xl:block" aria-hidden="true" /> : null}
                    <span className="inline-flex items-center gap-3 whitespace-nowrap">
                      <Icon className="h-4 w-4 text-primary-900" />
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <span className="font-semibold text-dark-800">Follow Us:</span>
              <a href="https://facebook.com" aria-label="Facebook" className="text-dark-900 transition hover:text-secondary-600"><FaFacebookF className="h-4 w-4" /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-dark-900 transition hover:text-secondary-600"><FaInstagram className="h-4 w-4" /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-dark-900 transition hover:text-secondary-600"><FaLinkedinIn className="h-4 w-4" /></a>
              <a href="https://whatsapp.com" aria-label="WhatsApp" className="text-dark-900 transition hover:text-secondary-600"><FaWhatsapp className="h-4 w-4" /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-dark-900 transition hover:text-secondary-600"><FaYoutube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <div className="w-full border-b border-sand-200 bg-white px-4 sm:px-6 xl:px-8">
          <div className="site-header-inner flex items-center justify-between gap-4 text-dark-900 lg:grid lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,2fr)_minmax(230px,0.8fr)]">
            <Link to={ROUTES.HOME} className="group flex min-w-0 shrink-0 items-center gap-3.5 lg:gap-4" aria-label="Bablons Travel home">
              <span className="site-logo-frame transition group-hover:-translate-y-0.5">
                <img src={bablonsLogo} alt="Bablons Travel" className="site-logo-img" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-[1.32rem] font-bold text-dark-900 lg:text-[1.42rem]">Bablons Tours </span>
                <span className="mt-1 block text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-secondary-400">
                 & Entertainments
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center gap-2 lg:flex">
              {navLinks.map((link) => {
                const Icon = link.icon

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === ROUTES.HOME}
                    className={({ isActive }) =>
                      `group/nav relative flex min-w-[5.4rem] flex-col items-center justify-center gap-1 px-2 py-3 text-center text-[0.7rem] font-extrabold uppercase tracking-[0.04em] transition xl:min-w-[6.3rem] xl:text-[0.74rem] ${
                        isActive ? 'text-secondary-600' : 'text-dark-900 hover:text-secondary-600'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className={`h-4 w-4 transition ${isActive ? 'text-secondary-600' : 'text-dark-900 group-hover/nav:text-secondary-600'}`} />
                        <span className="inline-flex items-center gap-1">
                          {link.name}
                          {link.hasDropdown ? <span className="text-[0.85rem] leading-none">⌄</span> : null}
                        </span>
                        <span className={`absolute bottom-1 h-0.5 w-8 rounded-full bg-secondary-500 transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover/nav:opacity-70'}`} />
                      </>
                    )}
                  </NavLink>
                )
              })}
            </div>

            <div className="hidden items-center justify-end gap-3 lg:flex">
              <Link
                to={ROUTES.PACKAGES}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent-300 to-secondary-500 px-7 text-sm font-extrabold uppercase tracking-[0.04em] text-dark-900 shadow-[0_14px_30px_rgba(217,111,58,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(217,111,58,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-500 xl:px-8"
              >
                Book Now
                <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to={ROUTES.PACKAGES}
                aria-label="Search packages"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-dark-900/20 text-dark-900 transition hover:border-secondary-500 hover:bg-secondary-50 hover:text-secondary-600"
              >
                <FaSearch className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark-900/20 bg-white text-dark-900 shadow-sm transition hover:bg-sand-50 lg:hidden"
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
              <div className="mb-4 grid gap-3 rounded-2xl bg-sand-50 p-4 text-sm font-semibold text-dark-900 shadow-lg shadow-primary-900/10">
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-w-0 items-center gap-2.5 text-dark-900">
                  <FaEnvelope className="h-4 w-4 shrink-0 text-secondary-600" />
                  <span className="truncate">{CONTACT_EMAIL}</span>
                </a>
                <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2.5 text-dark-900">
                  <FaPhoneAlt className="h-4 w-4 shrink-0 text-secondary-600" />
                  {CONTACT_PHONE}
                </a>
                <span className="inline-flex items-center gap-2.5 text-dark-900">
                  <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-secondary-600" />
                  {CONTACT_ADDRESS}
                </span>
                <div className="mt-1 flex items-center gap-2 border-t border-sand-200 pt-3">
                  <a href="https://facebook.com" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark-900 transition hover:bg-secondary-500 hover:text-white"><FaFacebookF className="h-3.5 w-3.5" /></a>
                  <a href="https://instagram.com" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark-900 transition hover:bg-secondary-500 hover:text-white"><FaInstagram className="h-3.5 w-3.5" /></a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark-900 transition hover:bg-secondary-500 hover:text-white"><FaLinkedinIn className="h-3.5 w-3.5" /></a>
                  <a href="https://whatsapp.com" aria-label="WhatsApp" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark-900 transition hover:bg-secondary-500 hover:text-white"><FaWhatsapp className="h-3.5 w-3.5" /></a>
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
                      `rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-[0.08em] transition ${isActive ? 'bg-secondary-50 text-secondary-600 shadow-sm' : 'text-dark-900 hover:bg-sand-50 hover:text-secondary-600'
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
                  className="inline-flex h-12 items-center justify-center rounded-full border border-dark-900/20 bg-white px-4 text-sm font-bold text-dark-900 transition hover:bg-sand-50"
                >
                  Contact
                </Link>
                <Link
                  to={ROUTES.PACKAGES}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-secondary-500 px-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-secondary-900/15 transition hover:bg-secondary-600"
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
