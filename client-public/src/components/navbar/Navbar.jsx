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
import Button from '../common/Button/Button'
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
const CONTACT_PHONE = '+1 800 TRAVEL 1'
const CONTACT_PHONE_HREF = 'tel:+18008728351'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 bg-white">
      <div className="hidden bg-primary-700 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm font-semibold sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 xl:gap-7">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 transition hover:text-accent-200">
              <FaEnvelope className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{CONTACT_EMAIL}</span>
            </a>
            <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2 transition hover:text-accent-200">
              <FaPhoneAlt className="h-3.5 w-3.5 shrink-0" />
              {CONTACT_PHONE}
            </a>
            <span className="hidden items-center gap-2 xl:inline-flex">
              <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0" />
              Available Worldwide
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="transition hover:text-accent-200"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-accent-200"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-accent-200"><FaLinkedinIn /></a>
            <a href="https://whatsapp.com" aria-label="WhatsApp" className="transition hover:text-accent-200"><FaWhatsapp /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="transition hover:text-accent-200"><FaYoutube /></a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="transition hover:text-accent-200"><FaPinterest /></a>
          </div>
        </div>
      </div>

      <nav className="border-b border-sand-200 bg-white" aria-label="Main navigation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="site-header-inner flex h-24 items-center justify-between gap-4 lg:grid lg:grid-cols-[minmax(200px,0.75fr)_minmax(0,1.8fr)_minmax(140px,0.75fr)] lg:items-center lg:gap-6">
            <Link to={ROUTES.HOME} className="group flex min-w-0 shrink-0 items-center gap-3">
              <span className="site-logo-frame ring-1 ring-sand-200 transition group-hover:shadow-md">
                <img src={bablonsLogo} alt="Bablons Travel" className="site-logo-img" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block font-display text-[1.05rem] font-bold tracking-tight text-dark-900">Bablons Travel</span>
                <span className="mt-0.5 block text-[0.58rem] font-bold uppercase tracking-[0.24em] text-secondary-600">
                  Curated holidays
                </span>
              </span>
            </Link>

            <div className="hidden items-center justify-center gap-0.5 rounded-full bg-sand-50 p-1.5 ring-1 ring-sand-200/80 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === ROUTES.HOME}
                  className={({ isActive }) =>
                    `relative rounded-full px-3 py-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.04em] transition xl:px-3.5 xl:text-[0.78rem] ${isActive ? 'bg-white text-secondary-600 shadow-sm' : 'text-dark-700 hover:bg-white/75 hover:text-secondary-600'
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
              <Link to={ROUTES.PACKAGES}>
                <Button className="h-11 rounded-full bg-secondary-600 px-7 text-sm font-extrabold uppercase tracking-wide text-white shadow-sm hover:bg-secondary-700">
                  Book Now
                </Button>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="rounded-xl p-2.5 text-dark-800 transition hover:bg-sand-100 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>

          <div
            id="mobile-nav-panel"
            className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'max-h-[calc(100dvh-5rem)] overflow-y-auto pb-6' : 'max-h-0'}`}
          >
            <div className="border-t border-sand-200 pt-4">
              <div className="mb-4 grid gap-2.5 rounded-2xl bg-primary-700 p-4 text-sm font-semibold text-white">
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2.5">
                  <FaEnvelope className="shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a href={CONTACT_PHONE_HREF} className="inline-flex items-center gap-2.5">
                  <FaPhoneAlt className="shrink-0" />
                  {CONTACT_PHONE}
                </a>
                <span className="inline-flex items-center gap-2.5">
                  <FaMapMarkerAlt className="shrink-0" />
                  Available Worldwide
                </span>
              </div>

              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === ROUTES.HOME}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-wide transition ${isActive ? 'bg-primary-50 text-secondary-600' : 'text-dark-700 hover:bg-sand-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link to={ROUTES.CONTACT} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="h-11 w-full rounded-full border-dark-800 text-dark-800">
                    Contact
                  </Button>
                </Link>
                <Link to={ROUTES.PACKAGES} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="h-11 w-full rounded-full bg-secondary-600 hover:bg-secondary-700">
                    Book Now
                  </Button>
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
