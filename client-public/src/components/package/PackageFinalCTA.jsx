import WhatsAppButton from '../common/WhatsAppButton'

const PackageFinalCTA = ({ package: travelPackage }) => (
  <section className="rounded-xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
    <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-300">Ready to book your trip?</p>
    <h2 className="mt-2 text-2xl font-black">Let Bablons plan this journey end to end.</h2>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
      Choose an available departure or request a custom quote. Our travel team will confirm seats, hotels, inclusions, and next steps.
    </p>
    <div className="mt-5 flex flex-wrap gap-3">
      <a href="#booking" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-black text-white">Book now</a>
      <a href="#booking" className="rounded-lg bg-white px-5 py-3 text-sm font-black text-slate-950">Get custom quote</a>
      <WhatsAppButton message={`Hi Bablons Travel, I want to book ${travelPackage.title}.`} />
    </div>
  </section>
)

export default PackageFinalCTA
