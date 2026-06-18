const faqs = [
  {
    question: 'Can packages be customized?',
    answer: 'Yes. Treat each package as a starting point. We can adjust hotels, pace, activities, transfers, and extensions.',
  },
  {
    question: 'Do you help with visas?',
    answer: 'We provide practical visa guidance and document checklists based on the destination and traveler profile.',
  },
  {
    question: 'Are flights included?',
    answer: 'Some trips can include flights on request. Package inclusions are always clarified before booking.',
  },
  {
    question: 'How early should I plan?',
    answer: 'For peak seasons, start at least 6 to 10 weeks ahead. Short breaks can often be arranged faster.',
  },
]

const FAQPage = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">FAQ</p>
          <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">Answers before you start planning</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A quick guide to how Bablons Travel handles packages, customization, support, and booking details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-bold text-gray-950">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-primary-600 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQPage
