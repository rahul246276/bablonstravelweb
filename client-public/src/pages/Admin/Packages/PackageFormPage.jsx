import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ImageUploader from '../../../components/admin/ImageUploader'
import { packageService } from '../../../services/packageService'

const emptyForm = {
  title: '', country: { name: '', code: '', flag: '' }, citiesText: '', packageType: 'group', status: 'draft', featured: false,
  duration: { nights: 0, days: 1 }, pricing: { basePrice: 0, originalPrice: 0, currency: 'INR', bookingAmount: 0, priceNote: 'per person, twin sharing' },
  groupSettings: { minSize: 20, maxSize: 25, tourManagerIncluded: true }, overview: {}, highlightsText: '', inclusionsText: '', exclusionsText: '', images: [], seo: {},
}

const PackageFormPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)
  const [tab, setTab] = useState('basic')

  useEffect(() => {
    if (id) packageService.get(id).then((item) => setForm({ ...emptyForm, ...item, citiesText: item.cities?.join(', ') || '', highlightsText: item.highlights?.map((h) => h.text).join('\n') || '', inclusionsText: item.inclusions?.join('\n') || '', exclusionsText: item.exclusions?.join('\n') || '' }))
  }, [id])

  const set = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  const submit = async (event) => {
    event.preventDefault()
    const payload = {
      ...form,
      cities: form.citiesText.split(',').map((item) => item.trim()).filter(Boolean),
      highlights: form.highlightsText.split('\n').map((text) => text.trim()).filter(Boolean).map((text) => ({ icon: 'star', text })),
      inclusions: form.inclusionsText.split('\n').map((item) => item.trim()).filter(Boolean),
      exclusions: form.exclusionsText.split('\n').map((item) => item.trim()).filter(Boolean),
    }
    delete payload.citiesText; delete payload.highlightsText; delete payload.inclusionsText; delete payload.exclusionsText
    const saved = id ? await packageService.update(id, payload) : await packageService.create(payload)
    toast.success(id ? 'Package updated' : 'Package created')
    navigate(`/admin/packages/${saved._id}`)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <h1 className="text-2xl font-black text-slate-950">{id ? 'Edit Package' : 'Add Package'}</h1>
      <div className="flex flex-wrap gap-2">{['basic', 'pricing', 'content', 'images', 'seo'].map((item) => <button type="button" key={item} onClick={() => setTab(item)} className={`rounded-lg px-4 py-2 text-sm font-black capitalize ${tab === item ? 'bg-orange-500 text-white' : 'bg-white text-slate-600'}`}>{item}</button>)}</div>
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        {tab === 'basic' ? <div className="grid gap-4 md:grid-cols-2">
          <input required placeholder="Title" value={form.title} onChange={(e) => set('title', e.target.value)} className="rounded-lg border p-3" />
          <input required placeholder="Country" value={form.country?.name || ''} onChange={(e) => set('country', { ...form.country, name: e.target.value })} className="rounded-lg border p-3" />
          <input placeholder="Cities comma separated" value={form.citiesText} onChange={(e) => set('citiesText', e.target.value)} className="rounded-lg border p-3 md:col-span-2" />
          <select value={form.packageType} onChange={(e) => set('packageType', e.target.value)} className="rounded-lg border p-3"><option value="group">Group</option><option value="family">Family</option><option value="couple">Couple</option><option value="individual">Individual</option><option value="custom">Custom</option></select>
          <select value={form.status} onChange={(e) => set('status', e.target.value)} className="rounded-lg border p-3"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select>
          <label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={form.featured} onChange={(e) => set('featured', e.target.checked)} /> Featured</label>
        </div> : null}
        {tab === 'pricing' ? <div className="grid gap-4 md:grid-cols-2">
          <input type="number" placeholder="Nights" value={form.duration?.nights} onChange={(e) => set('duration', { ...form.duration, nights: Number(e.target.value) })} className="rounded-lg border p-3" />
          <input type="number" placeholder="Days" value={form.duration?.days} onChange={(e) => set('duration', { ...form.duration, days: Number(e.target.value) })} className="rounded-lg border p-3" />
          <input type="number" placeholder="Base price" value={form.pricing?.basePrice} onChange={(e) => set('pricing', { ...form.pricing, basePrice: Number(e.target.value) })} className="rounded-lg border p-3" />
          <input type="number" placeholder="Original price" value={form.pricing?.originalPrice} onChange={(e) => set('pricing', { ...form.pricing, originalPrice: Number(e.target.value) })} className="rounded-lg border p-3" />
        </div> : null}
        {tab === 'content' ? <div className="grid gap-4"><textarea placeholder="Highlights, one per line" value={form.highlightsText} onChange={(e) => set('highlightsText', e.target.value)} className="min-h-28 rounded-lg border p-3" /><textarea placeholder="Inclusions, one per line" value={form.inclusionsText} onChange={(e) => set('inclusionsText', e.target.value)} className="min-h-28 rounded-lg border p-3" /><textarea placeholder="Exclusions, one per line" value={form.exclusionsText} onChange={(e) => set('exclusionsText', e.target.value)} className="min-h-28 rounded-lg border p-3" /></div> : null}
        {tab === 'images' ? <ImageUploader onUploaded={(image) => set('images', [...(form.images || []), { ...image, type: form.images?.length ? 'gallery' : 'hero' }])} /> : null}
        {tab === 'seo' ? <div className="grid gap-4"><input placeholder="Meta title" value={form.seo?.metaTitle || ''} onChange={(e) => set('seo', { ...form.seo, metaTitle: e.target.value })} className="rounded-lg border p-3" /><textarea placeholder="Meta description" value={form.seo?.metaDescription || ''} onChange={(e) => set('seo', { ...form.seo, metaDescription: e.target.value })} className="rounded-lg border p-3" /></div> : null}
      </div>
      <button className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-black text-white">Save Package</button>
    </form>
  )
}

export default PackageFormPage
