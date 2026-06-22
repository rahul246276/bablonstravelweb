import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../../hooks/useAuth'

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  if (isAuthenticated) return <Navigate to="/admin/dashboard" replace />

  const submit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      await login(form)
      toast.success('Welcome back')
      navigate(location.state?.from?.pathname || '/admin/dashboard', { replace: true })
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[#071B34] p-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <p className="text-sm font-black uppercase tracking-wide text-orange-600">Bablons Admin</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">Sign in</h1>
        <p className="mt-2 text-sm text-slate-500">Manage packages, enquiries, and travel content.</p>
        <label className="mt-6 block text-sm font-bold text-slate-700">Email</label>
        <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-orange-400" required />
        <label className="mt-4 block text-sm font-bold text-slate-700">Password</label>
        <input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-orange-400" required />
        <button disabled={loading} className="mt-6 h-12 w-full rounded-lg bg-orange-500 font-black text-white disabled:opacity-60">{loading ? 'Signing in...' : 'Login'}</button>
      </form>
    </div>
  )
}

export default LoginPage
