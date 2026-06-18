import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa'

import { ROUTES } from '../../constants/routes'
import Button from '../common/Button/Button'
import bablonsLogo from '../../assets/logos/Bablons Logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Destinations', path: ROUTES.DESTINATIONS },
    { name: 'Packages', path: ROUTES.PACKAGES },
    { name: 'Blogs', path: ROUTES.BLOGS },
    { name: 'Gallery', path: ROUTES.GALLERY },
    { name: 'About Us', path: ROUTES.ABOUT },
    { name: 'Contact', path: ROUTES.CONTACT },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-sand-200/40 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between sm:h-20">

          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="site-logo-frame shadow-md transition-transform group-hover:scale-105">
              <img
                src={bablonsLogo}
                alt="Bablons Travel"
                className="site-logo-img"
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="text-base font-bold tracking-tight text-dark-900 sm:text-lg">
                Bablons Travel
              </h2>

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary-600">
                Curated Journeys
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? 'text-primary-700'
                      : 'text-dark-600 hover:text-primary-600'
                  }`
                }
                end={link.path === ROUTES.HOME}
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-5 text-sm font-semibold text-primary-700 shadow-sm transition-all hover:border-primary-300 hover:bg-white hover:shadow-md"
            >
              <FaPhoneAlt className="text-lg" />
              <span className="hidden sm:inline">Talk to Us</span>
            </Link>

            <Link to={ROUTES.PACKAGES}>
              <Button
                className="h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:from-primary-700 hover:to-primary-800"
              >
                Book a Trip
              </Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-dark-700 transition-colors hover:bg-sand-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMobileMenuOpen
              ? 'max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-sand-200/50 bg-white/95 py-4 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-dark-700 hover:bg-sand-50 hover:text-primary-600'
                  }`
                }
                end={link.path === ROUTES.HOME}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-4 flex gap-3 px-4">
              <Link
                to={ROUTES.CONTACT}
                className="flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant="outline"
                  className="h-10 w-full rounded-full border-primary-300 text-primary-700 hover:bg-primary-50"
                >
                  Contact
                </Button>
              </Link>

              <Link
                to={ROUTES.PACKAGES}
                className="flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  className="h-10 w-full rounded-full bg-primary-600 text-white hover:bg-primary-700"
                >
                  Book Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar