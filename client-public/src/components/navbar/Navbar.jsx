import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FaBars,
  FaChevronDown,
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="hidden bg-[#0b9a7a] text-white lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm font-semibold sm:px-6 lg:px-8">
          <div className="flex items-center gap-7">
            <a href="mailto:info@bablonstravelent.com" className="inline-flex items-center gap-2 transition hover:text-accent-100">
              <FaEnvelope className="h-3.5 w-3.5" />
              info@bablonstravelent.com
            </a>
            <a href="tel:+18008728351" className="inline-flex items-center gap-2 transition hover:text-accent-100">
              <FaPhoneAlt className="h-3.5 w-3.5" />
              +1
            </a>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="h-3.5 w-3.5" />
              Available Worldwide
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="transition hover:text-accent-100"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-accent-100"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-accent-100"><FaLinkedinIn /></a>
              <a href="https://whatsapp.com" aria-label="WhatsApp" className="transition hover:text-accent-100"><FaWhatsapp /></a>
              <a href="https://youtube.com" aria-label="YouTube" className="transition hover:text-accent-100"><FaYoutube /></a>
              <a href="https://pinterest.com" aria-label="Pinterest" className="transition hover:text-accent-100"><FaPinterest /></a>
            
            </div>
          </div>
        </div>
      </div>

      <nav className="border-b border-sand-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="site-header-inner grid h-24 grid-cols-[minmax(230px,0.8fr)_minmax(0,1.6fr)_minmax(150px,0.8fr)] items-center gap-6">
            <Link to={ROUTES.HOME} className="group flex min-w-0 shrink-0 items-center gap-3.5">
              <span className="site-logo-frame flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-sand-200 transition group-hover:shadow-md">
                <img src={bablonsLogo} alt="Bablons Travel" className="site-logo-img object-contain" />
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-[1.05rem] font-extrabold tracking-tight text-dark-900">Bablons Travel</span>
                <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.28em] text-primary-600">
                  Curated holidays
                </span>
              </span>
            </Link>

            <div className="hidden items-center justify-center gap-1 rounded-full bg-sand-50 p-1.5 ring-1 ring-sand-200/80 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === ROUTES.HOME}
                  className={({ isActive }) =>
                    `relative rounded-full px-3.5 py-2.5 text-[0.78rem] font-extrabold uppercase tracking-[0.04em] transition xl:px-4 ${isActive ? 'bg-white text-secondary-600 shadow-sm' : 'text-dark-700 hover:bg-white/75 hover:text-secondary-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-secondary-500 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden items-center justify-end lg:flex">
              <Link to={ROUTES.PACKAGES}>
                <Button className="h-12 rounded-md bg-[#ff4d5a] px-8 text-sm font-extrabold uppercase tracking-[0.03em] text-white shadow-none hover:bg-[#e9404c]">
                  Book Now
                </Button>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="justify-self-end rounded-xl p-2.5 text-dark-800 transition hover:bg-sand-100 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'max-h-[680px] pb-5' : 'max-h-0'}`}>
            <div className="border-t border-sand-200 pt-4">
              <div className="mb-4 grid gap-2 rounded-2xl bg-[#0b9a7a] p-4 text-sm font-semibold text-white">
                <a href="mailto:hello@bablonstravel.com" className="inline-flex items-center gap-2"><FaEnvelope /> hello@bablonstravel.com</a>
                <a href="tel:+18008728351" className="inline-flex items-center gap-2"><FaPhoneAlt /> +1 800 TRAVEL 1</a>
                <span className="inline-flex items-center gap-2"><FaMapMarkerAlt /> Available Worldwide</span>
              </div>

              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === ROUTES.HOME}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-bold uppercase transition ${isActive ? 'bg-primary-50 text-secondary-600' : 'text-dark-700 hover:bg-sand-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link to={ROUTES.CONTACT} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="h-11 w-full rounded-md">
                    Contact
                  </Button>
                </Link>
                <Link to={ROUTES.PACKAGES} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="h-11 w-full rounded-md bg-[#ff4d5a] hover:bg-[#e9404c]">
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
