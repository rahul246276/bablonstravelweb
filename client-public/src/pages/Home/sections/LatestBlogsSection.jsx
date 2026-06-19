import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const blogs = [
  {
    title: 'Ultimate Guide to Uzbekistan',
    excerpt: 'How to plan a first Silk Road trip with Samarkand, Bukhara, bazaars, and local food stops worth the detour.',
    readTime: '8 min read',
    category: 'Destination guide',
    image: 'https://images.unsplash.com/photo-1600100592759-0941ef9c0325?auto=format&fit=crop&w=1400&q=80',
    featured: true,
  },
  {
    title: 'Hiking in Georgia: Best Trails',
    excerpt: 'Scenic routes, mountain villages, and practical timing tips for the Caucasus highlands.',
    readTime: '6 min read',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1566865204669-c7b93be298bd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dubai on a Smart Budget',
    excerpt: 'Luxury-feeling experiences, family attractions, and desert moments without overspending.',
    readTime: '5 min read',
    category: 'Budget tips',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=80',
  },
]

const categoryStyles = {
  'Destination guide': 'bg-primary-50 text-primary-700',
  Hiking: 'bg-emerald-50 text-emerald-700',
  'Budget tips': 'bg-accent-50 text-accent-700',
}

const LatestBlogsSection = () => {
  const [featured, ...rest] = blogs

  return (
    <section className="section-shell bg-white">
      <div className="section-container">
        <div className="section-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Travel notes</p>
            <h2 className="mt-3 section-heading">Ideas before you book</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-dark-500">Destination guides and practical notes for travelers who like the details handled.</p>
          </div>
          <Link to={ROUTES.BLOGS}>
            <Button variant="outline" size="lg" className="gap-2 rounded-full border-dark-800 text-dark-800 hover:bg-dark-50">
              All Articles
              <FaArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured story: wide image-led card, distinct from the
              compact list items beside it so the eye has a clear entry point */}
          <Link to={ROUTES.BLOGS} className="card-premium group flex flex-col lg:row-span-2">
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 lg:h-80"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 lg:p-8">
              <div className="mb-3 flex items-center gap-2">
                <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryStyles[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-dark-400">{featured.readTime}</span>
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-dark-900 lg:text-[1.75rem]">{featured.title}</h3>
              <p className="mb-6 flex-1 text-base leading-7 text-dark-500">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-600">
                Read More
                <FaArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Compact list rows for the remaining posts — horizontal,
              lower visual weight than the featured story */}
          <div className="flex flex-col gap-6">
            {rest.map((blog) => (
              <Link
                key={blog.title}
                to={ROUTES.BLOGS}
                className="group flex gap-5 rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-36">
                  <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`rounded-lg px-2 py-0.5 text-[0.7rem] font-semibold ${categoryStyles[blog.category]}`}>
                      {blog.category}
                    </span>
                    <span className="text-[0.7rem] text-dark-400">{blog.readTime}</span>
                  </div>
                  <h3 className="mb-1.5 font-display text-lg font-bold leading-snug text-dark-900">{blog.title}</h3>
                  <p className="line-clamp-2 text-sm leading-6 text-dark-500">{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogsSection