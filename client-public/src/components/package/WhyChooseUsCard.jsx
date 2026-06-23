import { FaHeadset, FaShieldHeart, FaUserCheck } from 'react-icons/fa6'

const benefits = [
  [FaUserCheck, 'Verified travel planning'],
  [FaShieldHeart, 'Transparent pricing'],
  [FaHeadset, 'Support before and during travel'],
]

const WhyChooseUsCard = () => (
  <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="font-black text-slate-950">Why Choose Bablons</h3>
    <div className="mt-4 space-y-3">
      {benefits.map(([Icon, label]) => (
        <div key={label} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
          <Icon className="text-orange-500" />
          <p className="text-sm font-bold text-slate-700">{label}</p>
        </div>
      ))}
    </div>
  </aside>
)

export default WhyChooseUsCard
