import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaWallet } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const quickPicks = ['Uzbekistan', 'Georgia', 'Dubai', 'Turkey', 'Azerbaijan']

const SearchPackagesSection = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({ destination: '', budget: '', duration: '' })

  const handleSearch = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()

    Object.entries(searchParams).forEach(([key, value]) => {
      const trimmedValue = value.trim()
      if (trimmedValue) params.set(key, trimmedValue)
    })

    const queryString = params.toString()
    navigate(queryString ? `${ROUTES.PACKAGES}?${queryString}` : ROUTES.PACKAGES)
  }

  return (
    <section className="relative z-20 -mt-16 px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-sand-200 bg-[#fffdf9] p-6 shadow-[0_28px_80px_rgba(16,39,36,0.16)] lg:p-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Concierge trip finder</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-dark-900 md:text-4xl">
              Start with your travel essentials
            </h2>
          </div>
          <p className="text-base leading-7 text-dark-500">
            Choose a direction now. Our specialists can refine hotels, flights, pacing, and private experiences after you inquire.
          </p>
        </div>

        <form onSubmit={handleSearch} className="grid gap-4 lg:grid-cols-[1.1fr_0.8fr_0.8fr_auto] lg:items-end">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-dark-700"><FaMapMarkerAlt className="text-primary-600" />Destination</span>
            <input
              type="text"
              placeholder="Where would you like to go?"
              value={searchParams.destination}
              onChange={(event) => setSearchParams({ ...searchParams, destination: event.target.value })}
              className="h-14 w-full rounded-2xl border border-sand-300 bg-sand-50 px-5 text-dark-900 outline-none transition placeholder:text-dark-300 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-dark-700"><FaWallet className="text-primary-600" />Budget</span>
            <select
              value={searchParams.budget}
              onChange={(event) => setSearchParams({ ...searchParams, budget: event.target.value })}
              className="h-14 w-full rounded-2xl border border-sand-300 bg-sand-50 px-5 text-dark-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
            >
              <option value="">Any budget</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000+">$2,000+</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-bold text-dark-700"><FaCalendarAlt className="text-primary-600" />Duration</span>
            <select
              value={searchParams.duration}
              onChange={(event) => setSearchParams({ ...searchParams, duration: event.target.value })}
              className="h-14 w-full rounded-2xl border border-sand-300 bg-sand-50 px-5 text-dark-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
            >
              <option value="">Any length</option>
              <option value="3-5">3 - 5 days</option>
              <option value="5-7">5 - 7 days</option>
              <option value="7-14">7 - 14 days</option>
            </select>
          </label>

          <Button type="submit" size="lg" className="h-14 rounded-2xl bg-dark-800 px-8 text-white hover:bg-dark-900">
            <FaSearch />
            Search
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-dark-400">Popular</span>
          {quickPicks.map((destination) => (
            <button
              key={destination}
              type="button"
              onClick={() => navigate(`${ROUTES.PACKAGES}?destination=${encodeURIComponent(destination)}`)}
              className="rounded-full border border-sand-200 bg-white px-4 py-2 text-xs font-bold text-dark-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
            >
              {destination}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchPackagesSection
