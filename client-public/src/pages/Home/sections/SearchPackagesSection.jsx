import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaWallet } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const quickPicks = ['Uzbekistan', 'Georgia', 'Dubai', 'Turkey', 'Azerbaijan']

const SearchPackagesSection = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    destination: '',
    budget: '',
    duration: '',
  })

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()

    Object.entries(searchParams).forEach(([key, value]) => {
      const trimmedValue = value.trim()
      if (trimmedValue) params.set(key, trimmedValue)
    })

    const queryString = params.toString()
    navigate(queryString ? `${ROUTES.PACKAGES}?${queryString}` : ROUTES.PACKAGES)
  }

  const handleQuickPick = (destination) => {
    navigate(`${ROUTES.PACKAGES}?destination=${encodeURIComponent(destination)}`)
  }

  return (
    <section className="relative z-10 -mt-14 bg-sand-50 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sand-200 bg-white p-5 shadow-2xl shadow-dark-900/10 md:p-6">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600">Concierge trip finder</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-dark-900">Start with the essentials</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-dark-500">
              Choose a direction now. We can refine hotels, flights, pacing, and private experiences after you inquire.
            </p>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.8fr_0.8fr_auto] md:items-end">
            <div>
              <label htmlFor="home-destination" className="mb-2 flex items-center gap-2 text-sm font-semibold text-dark-700">
                <FaMapMarkerAlt className="text-primary-600" />
                Destination
              </label>
              <input
                id="home-destination"
                type="text"
                placeholder="Where to?"
                value={searchParams.destination}
                onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                className="h-12 w-full rounded-xl border border-sand-300 bg-sand-50/70 px-4 text-dark-900 outline-none transition placeholder:text-dark-300 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
              />
            </div>

            <div>
              <label htmlFor="home-budget" className="mb-2 flex items-center gap-2 text-sm font-semibold text-dark-700">
                <FaWallet className="text-primary-600" />
                Budget
              </label>
              <select
                id="home-budget"
                value={searchParams.budget}
                onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}
                className="h-12 w-full rounded-xl border border-sand-300 bg-sand-50/70 px-4 text-dark-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
              >
                <option value="">Any budget</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000+">$2,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="home-duration" className="mb-2 flex items-center gap-2 text-sm font-semibold text-dark-700">
                <FaCalendarAlt className="text-primary-600" />
                Duration
              </label>
              <select
                id="home-duration"
                value={searchParams.duration}
                onChange={(e) => setSearchParams({ ...searchParams, duration: e.target.value })}
                className="h-12 w-full rounded-xl border border-sand-300 bg-sand-50/70 px-4 text-dark-900 outline-none transition focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100"
              >
                <option value="">Any length</option>
                <option value="3-5">3 - 5 days</option>
                <option value="5-7">5 - 7 days</option>
                <option value="7-14">7 - 14 days</option>
              </select>
            </div>

            <Button type="submit" size="lg" className="h-12 w-full gap-2 rounded-xl bg-dark-800 px-7 text-white hover:bg-dark-900 md:w-auto">
              <FaSearch />
              Search
            </Button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-400">Popular</span>
            {quickPicks.map((destination) => (
              <button
                key={destination}
                type="button"
                onClick={() => handleQuickPick(destination)}
                className="rounded-full border border-sand-200 bg-sand-50 px-3 py-1.5 text-xs font-semibold text-dark-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
              >
                {destination}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPackagesSection
