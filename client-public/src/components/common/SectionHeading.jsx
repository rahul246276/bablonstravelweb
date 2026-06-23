const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-5">
    {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-600">{eyebrow}</p> : null}
    <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
    {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p> : null}
  </div>
)

export default SectionHeading
