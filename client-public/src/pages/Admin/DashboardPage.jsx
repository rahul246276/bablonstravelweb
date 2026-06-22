import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarDays, FaLocationDot, FaPhone, FaSuitcaseRolling } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import DashboardStatCard from '../../components/admin/DashboardStatCard'
import DataTable from '../../components/admin/DataTable'
import StatusBadge from '../../components/admin/StatusBadge'
import { dashboardService } from '../../services/dashboardService'
import useAuth from '../../hooks/useAuth'

const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : '-')

const DashboardPage = () => {
  const { user } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dashboardService.overview().then(setData).catch((error) => toast.error(error.response?.data?.message || 'Dashboard failed')).finally(() => setLoading(false))
  }, [])

  const quickActions = user?.role === 'super_admin'
    ? [['Add Package', '/admin/packages/new'], ['Add Destination', '/admin/destinations/new'], ['View Enquiries', '/admin/enquiries'], ['Upload Image', '/admin/media'], ['Add Admin User', '/admin/users']]
    : [['View Enquiries', '/admin/enquiries'], ['Update Follow-ups', '/admin/enquiries'], ['View Packages', '/admin/packages'], ['View Destinations', '/admin/destinations']]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-950">Dashboard Overview</h1>
        <p className="text-sm text-slate-500">Live business summary for Bablons Tours & Entertainments.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard icon={FaSuitcaseRolling} label="Total Packages" value={data?.totalPackages} />
        <DashboardStatCard icon={FaSuitcaseRolling} label="Active Packages" value={data?.activePackages} tone="green" />
        <DashboardStatCard icon={FaLocationDot} label="Total Destinations" value={data?.totalDestinations} tone="blue" />
        <DashboardStatCard icon={FaPhone} label="Total Enquiries" value={data?.totalInquiries} tone="purple" />
        <DashboardStatCard label="New Enquiries" value={data?.newInquiries} tone="blue" />
        <DashboardStatCard label="Contacted Enquiries" value={data?.contactedInquiries} />
        <DashboardStatCard label="Converted Enquiries" value={data?.convertedInquiries} tone="green" />
        <DashboardStatCard icon={FaCalendarDays} label="Upcoming Departures" value={data?.upcomingGroupDepartures?.length} />
      </div>
      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-black text-slate-900">Quick Actions</h2>
        <div className="flex flex-wrap gap-2">{quickActions.map(([label, path]) => <Link key={label} to={path} className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-black text-white">{label}</Link>)}</div>
      </section>
      <DataTable
        loading={loading}
        rows={data?.recentInquiries || []}
        columns={[
          { key: 'fullName', label: 'Customer Name' },
          { key: 'phone', label: 'Phone' },
          { key: 'packageTitle', label: 'Package' },
          { key: 'destination', label: 'Destination' },
          { key: 'travelers', label: 'Travelers' },
          { key: 'travelDate', label: 'Travel Date', render: (row) => formatDate(row.travelDate) },
          { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.status} /> },
          { key: 'createdAt', label: 'Created Date', render: (row) => formatDate(row.createdAt) },
        ]}
      />
      <DataTable
        loading={loading}
        rows={data?.upcomingGroupDepartures || []}
        emptyText="No upcoming group departures"
        columns={[
          { key: 'title', label: 'Package Name' },
          { key: 'departureDate', label: 'Departure Date', render: (row) => formatDate(row.departure?.departureDate) },
          { key: 'totalSeats', label: 'Total Seats', render: (row) => row.departure?.totalSeats },
          { key: 'availableSeats', label: 'Available Seats', render: (row) => row.departure?.availableSeats },
          { key: 'status', label: 'Status', render: (row) => <StatusBadge value={row.departure?.status} /> },
        ]}
      />
    </div>
  )
}

export default DashboardPage
