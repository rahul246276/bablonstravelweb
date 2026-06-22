import { NavLink, useNavigate } from 'react-router-dom'
import { adminNav } from '../../constants/adminRoutes'
import useAuth from '../../hooks/useAuth'

const AdminSidebar = ({ open, collapsed, onClose }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const items = adminNav.filter((item) => item.roles.includes(user?.role))

  const handleClick = async (item) => {
    if (item.action === 'logout') {
      await logout()
      navigate('/admin/login')
      return
    }
    onClose?.()
  }

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#071B34] text-white transition lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} ${collapsed ? 'lg:w-20' : 'lg:w-72'}`}>
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-5">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-500 font-black">B</div>
        {!collapsed ? <div><p className="font-black">Bablons Admin</p><p className="text-xs text-white/55">{user?.role?.replace('_', ' ')}</p></div> : null}
      </div>
      <nav className="space-y-1 px-3 py-4">
        {items.map((item) => {
          const Icon = item.icon
          if (item.action) {
            return <button key={item.label} onClick={() => handleClick(item)} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-white/72 hover:bg-white/10 hover:text-white"><Icon />{!collapsed && item.label}</button>
          }
          return (
            <NavLink key={item.path} to={item.path} onClick={() => handleClick(item)} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold ${isActive ? 'bg-orange-500 text-white' : 'text-white/72 hover:bg-white/10 hover:text-white'}`}>
              <Icon />{!collapsed && item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default AdminSidebar
