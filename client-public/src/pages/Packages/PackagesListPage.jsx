import { useEffect, useMemo, useState } from 'react'
import PackageGrid from '../../components/package/PackageGrid'
import PackageSearch from '../../components/package/PackageSearch'
import ErrorState from '../../components/common/ErrorState'
import LoadingSkeleton from '../../components/common/LoadingSkeleton'
import { packageService } from '../../services/packageService'

const PackagesListPage = () => {
  const [filters, setFilters] = useState({ destination: '', budget: '', duration: '' })
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    packageService.list({ limit: 100 })
      .then((data) => setPackages(data.packages || data.items || []))
      .catch((err) => setError(err.response?.data?.message || 'Failed to load packages'))
      .finally(() => setLoading(false))
  }, [])

  const filteredPackages = useMemo(() => {
    return packages.filter((travelPackage) => {
      const destination = [
        travelPackage.destination?.name,
        travelPackage.destination?.country,
        travelPackage.country?.name,
        ...(travelPackage.cities || []),
      ].filter(Boolean).join(' ')
      const price = travelPackage.pricing?.basePrice || travelPackage.pricing?.pricePerPerson || 0
      const days = travelPackage.duration?.days || 0
      const matchesDestination = destination.toLowerCase().includes(filters.destination.toLowerCase())
      const matchesBudget = filters.budget ? price <= Number(filters.budget) : true
      const matchesDuration = filters.duration ? days <= Number(filters.duration) : true

      return matchesDestination && matchesBudget && matchesDuration
    })
  }, [filters, packages])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="bg-gray-50">
      <section className="bg-dark-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-accent-300">Curated holidays</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Our Travel Packages</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Browse ready-to-customize trips with practical routes, vetted stays, and support from the first inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <PackageSearch filters={filters} onChange={setFilters} onSubmit={handleSubmit} />
        <div className="mt-8">
          {loading ? <LoadingSkeleton lines={6} /> : null}
          {!loading && error ? <ErrorState title="Packages unavailable" description={error} /> : null}
          {!loading && !error ? <PackageGrid packages={filteredPackages} /> : null}
        </div>
      </section>
    </div>
  )
}

export default PackagesListPage
