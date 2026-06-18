import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaWallet } from 'react-icons/fa'
import Button from '../common/Button/Button'

const PackageSearch = ({ filters, onChange, onSubmit }) => {
  const handleChange = (event) => {
    onChange({
      ...filters,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-gray-100 bg-white p-4 shadow-xl shadow-primary-900/5 md:p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_0.8fr_0.8fr_auto] md:items-end">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FaMapMarkerAlt className="text-primary-600" />
            Destination
          </label>
          <input
            name="destination"
            type="text"
            placeholder="Where do you want to go?"
            value={filters.destination}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-gray-300 px-4 text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FaWallet className="text-primary-600" />
            Budget
          </label>
          <select
            name="budget"
            value={filters.budget}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-gray-300 px-4 text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="">Any budget</option>
            <option value="1500">Under $1,500</option>
            <option value="2000">Under $2,000</option>
            <option value="2500">Under $2,500</option>
          </select>
        </div>
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FaCalendarAlt className="text-primary-600" />
            Duration
          </label>
          <select
            name="duration"
            value={filters.duration}
            onChange={handleChange}
            className="h-11 w-full rounded-lg border border-gray-300 px-4 text-gray-900 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <option value="">Any length</option>
            <option value="5">Up to 5 days</option>
            <option value="7">Up to 7 days</option>
            <option value="10">Up to 10 days</option>
          </select>
        </div>
        <Button type="submit" size="md" className="h-11 gap-2 px-5">
          <FaSearch />
          Search
        </Button>
      </div>
    </form>
  )
}

export default PackageSearch
