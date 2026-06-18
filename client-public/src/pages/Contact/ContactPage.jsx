import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import Button from '../../components/common/Button/Button'

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const contactItems = [
    { icon: FaPhoneAlt, label: 'Phone', value: '+1-800-TRAVEL-1' },
    { icon: FaEnvelope, label: 'Email', value: 'hello@bablonstravel.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with a travel expert' },
    { icon: FaMapMarkerAlt, label: 'Service Area', value: 'Available for travelers worldwide' },
  ]

  return (
    <div className="bg-gray-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">Contact us</p>
          <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">Tell us where you want to go</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Share your travel dates, style, and questions. We will help shape the route and next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <Icon />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{item.label}</p>
                <p className="mt-1 font-semibold text-gray-950">{item.value}</p>
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-gray-100 bg-white p-6 shadow-md">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Your Name</label>
              <input type="text" className="h-11 w-full rounded-lg border border-gray-300 px-4 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Email Address</label>
              <input type="email" className="h-11 w-full rounded-lg border border-gray-300 px-4 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">Destination</label>
            <input type="text" placeholder="Example: Georgia, Dubai, Uzbekistan" className="h-11 w-full rounded-lg border border-gray-300 px-4 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100" />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">Message</label>
            <textarea rows="5" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100" />
          </div>
          <Button type="submit" size="lg" className="mt-5 w-full md:w-auto">Send Inquiry</Button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
