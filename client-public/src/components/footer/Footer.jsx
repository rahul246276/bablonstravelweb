import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ROUTES } from '../../constants/routes'
import bablonsLogo from '../../assets/logos/Bablons Logo.png'

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

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1.45fr]">
          <div>
            <Link to={ROUTES.HOME} className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                <img src={bablonsLogo} alt="Bablons Travel" className="h-9 w-9 object-contain" />
              </span>
              <span>
                <span className="block text-xl font-bold">Bablons Travel</span>
                <span className="block text-xs font-bold uppercase tracking-[0.24em] text-accent-300">Curated holidays</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-7 text-white/68">
              Thoughtfully planned private holidays across Central Asia, the Caucasus, the Middle East, and Asia, with expert support from first inquiry to return.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/65">
              <p className="flex items-center gap-3"><FaPhoneAlt className="text-accent-300" /> +1-800-TRAVEL-1</p>
              <p className="flex items-center gap-3"><MdEmail className="text-accent-300" /> hello@bablonstravel.com</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-accent-300" /> Available for travelers worldwide</p>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-primary-500 hover:bg-primary-600"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <div className="grid gap-10 sm:grid-cols-3">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-display text-xl font-bold text-white">{category}</h3>
                  <ul className="mt-5 space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.path} className="text-sm text-white/62 transition hover:text-accent-300">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="font-display text-2xl font-bold">Travel ideas, quietly delivered</h3>
              <p className="mt-2 text-sm leading-6 text-white/62">Seasonal inspiration, destination guides, and private journey ideas. No clutter.</p>
              <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-12 min-w-0 flex-1 rounded-full border border-white/10 bg-dark-800 px-5 text-sm text-white outline-none placeholder:text-white/35 focus:border-accent-300"
                />
                <button className="h-12 rounded-full bg-primary-600 px-6 text-sm font-bold text-white transition hover:bg-primary-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Bablons Travel. All rights reserved.</p>
          <p>Designed for travelers who expect the details to be handled.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
