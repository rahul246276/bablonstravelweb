const Badge = ({ children, tone = 'orange', className = '' }) => {
  const tones = {
    orange: 'bg-orange-100 text-orange-700',
    green: 'bg-emerald-100 text-emerald-700',
    blue: 'bg-blue-100 text-blue-700',
    slate: 'bg-slate-100 text-slate-700',
    dark: 'bg-slate-900 text-white',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${tones[tone] || tones.orange} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
