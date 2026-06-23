const formatPrice = (amount = 0, currency = 'INR') =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number(amount || 0))

const PriceDisplay = ({ amount, originalAmount, currency = 'INR', note = 'per person' }) => (
  <div>
    <div className="flex flex-wrap items-end gap-2">
      <span className="text-3xl font-black text-slate-950">{formatPrice(amount, currency)}</span>
      {originalAmount && Number(originalAmount) > Number(amount) ? (
        <span className="pb-1 text-sm font-bold text-slate-400 line-through">{formatPrice(originalAmount, currency)}</span>
      ) : null}
    </div>
    {note ? <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{note}</p> : null}
  </div>
)

export { formatPrice }
export default PriceDisplay
