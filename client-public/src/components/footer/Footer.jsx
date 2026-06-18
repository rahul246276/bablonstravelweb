import { Link } from 'react-router-dom'
import { FaFacebookF, FaGlobeAsia, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ROUTES } from '../../constants/routes'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { name: 'About Us', path: ROUTES.ABOUT },
      { name: 'Blog', path: ROUTES.BLOGS },
      { name: 'Gallery', path: ROUTES.GALLERY },
      { name: 'FAQ', path: ROUTES.FAQ },
    ],
    Destinations: [
      { name: 'Uzbekistan', path: ROUTES.DESTINATIONS },
      { name: 'Georgia', path: ROUTES.DESTINATIONS },
      { name: 'Azerbaijan', path: ROUTES.DESTINATIONS },
      { name: 'Turkey', path: ROUTES.DESTINATIONS },
    ],
    Support: [
      { name: 'Contact Us', path: ROUTES.CONTACT },
      { name: 'Privacy Policy', path: ROUTES.PRIVACY },
      { name: 'Terms & Conditions', path: ROUTES.TERMS },
      { name: 'FAQ', path: ROUTES.FAQ },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: 'https://facebook.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://whatsapp.com' },
  ]

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link to={ROUTES.HOME} className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-600 text-white">
                <FaGlobeAsia className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white">Bablons Travel</span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">Curated holidays</span>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-6 text-gray-400">
              Thoughtfully planned holidays across Asia, the Middle East, Central Asia, and the Caucasus with expert support from inquiry to return.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary-400" />
                +1-800-TRAVEL-1
              </p>
              <p className="flex items-center gap-3">
                <MdEmail className="text-primary-400" />
                hello@bablonstravel.com
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary-400" />
                Available for travelers worldwide
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-primary-600"
                    aria-label={link.name}
                    title={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 font-semibold text-white">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="text-sm text-gray-400 transition hover:text-primary-300">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-lg font-bold text-white">Get thoughtful travel ideas in your inbox</h3>
              <p className="mt-1 text-sm text-gray-400">Deals, destination guides, and seasonal trip inspiration. No clutter.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 min-w-0 rounded-lg border border-gray-700 bg-dark-800 px-4 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-900 sm:w-72"
              />
              <button className="h-11 rounded-lg bg-primary-600 px-5 text-sm font-semibold text-white transition hover:bg-primary-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Bablons Travel. All rights reserved.</p>
          <p>Made for travelers who like the details handled.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
