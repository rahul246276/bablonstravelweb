const SectionCard = ({ children, className = '' }) => (
  <section className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
    {children}
  </section>
)

export default SectionCard
