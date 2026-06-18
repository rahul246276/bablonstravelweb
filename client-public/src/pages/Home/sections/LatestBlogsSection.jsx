import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../../../components/common/Button/Button'
import { ROUTES } from '../../../constants/routes'

const blogs = [
  {
    title: 'Ultimate Guide to Uzbekistan',
    excerpt: 'How to plan a first Silk Road trip with Samarkand, Bukhara, bazaars, and local food stops.',
    readTime: '8 min read',
    category: 'Destination guide',
    image: 'https://images.unsplash.com/photo-1600100592759-0941ef9c0325?auto=format&fit=crop&w=900&q=80',
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
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600">Travel notes</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-dark-900 md:text-4xl">Ideas before you book</h2>
            <p className="mt-3 max-w-2xl leading-7 text-dark-500">Destination guides and practical notes for travelers who like the details handled.</p>
          </div>
          <Link to={ROUTES.BLOGS}>
            <Button variant="outline" size="md" className="gap-2 rounded-full border-dark-800 text-dark-800 hover:bg-dark-50">
              All Articles
              <FaArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.title} className="group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-lg shadow-dark-900/7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-dark-900/14">
              <div className="overflow-hidden">
                <img src={blog.image} alt={blog.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${categoryStyles[blog.category]}`}>
                    {blog.category}
                  </span>
                  <span className="text-xs text-dark-400">{blog.readTime}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark-900">{blog.title}</h3>
                <p className="mb-5 text-sm leading-6 text-dark-500">{blog.excerpt}</p>
                <Link to={ROUTES.BLOGS}>
                  <Button variant="ghost" size="sm" className="gap-2 px-0 text-primary-600">
                    Read More
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlogsSection
