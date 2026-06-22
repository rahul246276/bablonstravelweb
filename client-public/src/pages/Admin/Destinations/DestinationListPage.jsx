import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import DataTable from '../../../components/admin/DataTable'
import SearchFilterBar from '../../../components/admin/SearchFilterBar'
import StatusBadge from '../../../components/admin/StatusBadge'
import useAuth from '../../../hooks/useAuth'
import { destinationService } from '../../../services/destinationService'

const DestinationListPage = () => {
  const { user } = useAuth()
  const [data, setData] = useState({ destinations: [] })
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const canManage = user?.role === 'super_admin'

  const load = useCallback(() => {
    destinationService.list({ search }).then(setData).catch(() => toast.error('Failed to load destinations')).finally(() => setLoading(false))
  }, [search])
  useEffect(() => {
    load()
  }, [load])

  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-3"><div><h1 className="text-2xl font-black">Destinations</h1><p className="text-sm text-slate-500">Manage countries, regions, and cities.</p></div>{canManage ? <Link to="/admin/destinations/new" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-black text-white">Add Destination</Link> : null}</div>
      <SearchFilterBar search={search} onSearch={setSearch}><button onClick={() => { setLoading(true); load() }} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white">Search</button></SearchFilterBar>
      <DataTable loading={loading} rows={data.destinations || data.items || []} columns={[
        { key: 'hero', label: 'Hero Image', render: (row) => row.heroImage?.url ? <img src={row.heroImage.url} alt="" className="h-12 w-16 rounded object-cover" /> : '-' },
        { key: 'name', label: 'Destination Name' },
        { key: 'country', label: 'Country' },
        { key: 'cityType', label: 'Type' },
        { key: 'isFeatured', label: 'Featured', render: (row) => row.isFeatured ? 'Yes' : 'No' },
        { key: 'isActive', label: 'Active', render: (row) => <StatusBadge value={row.isActive ? 'active' : 'inactive'} /> },
        { key: 'sortOrder', label: 'Sort Order' },
        { key: 'actions', label: 'Actions', render: (row) => canManage ? <Link className="font-bold text-orange-600" to={`/admin/destinations/${row._id}/edit`}>Edit</Link> : <span className="text-slate-400">View only</span> },
      ]} />
    </div>
  )
}

export default DestinationListPage
