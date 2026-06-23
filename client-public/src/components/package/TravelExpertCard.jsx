import { FaPhone } from 'react-icons/fa6'
import WhatsAppButton from '../common/WhatsAppButton'

const TravelExpertCard = ({ expert = {}, packageTitle }) => {
  const name = expert.name || 'Bablons Travel Expert'

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-black text-slate-950">Your Travel Expert</h3>
      <div className="mt-4 flex items-center gap-3">
        {expert.avatar ? <img src={expert.avatar} alt={name} className="h-12 w-12 rounded-full object-cover" /> : <div className="grid h-12 w-12 place-items-center rounded-full bg-orange-100 font-black text-orange-700">BT</div>}
        <div>
          <p className="font-black text-slate-950">{name}</p>
          <p className="text-sm text-slate-500">{expert.specialty || 'International holidays'}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{expert.experience || 'Get help with flights, hotels, transfers, visas, and custom itinerary planning.'}</p>
      <div className="mt-4 grid gap-2">
        {expert.phone ? <a href={`tel:${expert.phone}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-slate-700"><FaPhone /> Call</a> : null}
        <WhatsAppButton phone={expert.whatsapp || expert.phone} message={`Hi, I need help with ${packageTitle}.`} />
      </div>
    </aside>
  )
}

export default TravelExpertCard
