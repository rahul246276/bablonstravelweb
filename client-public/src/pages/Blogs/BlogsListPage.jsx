import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../../components/common/Button/Button'
import { ROUTES } from '../../constants/routes'

const posts = [
  {
    title: 'Ultimate Guide to Uzbekistan',
    excerpt: 'Plan a first Silk Road trip with time for Samarkand, Bukhara, bazaars, tilework, and local food stops.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600100592759-0941ef9c0325?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Hiking in Georgia: Best Trails',
    excerpt: 'Scenic routes, mountain villages, and practical timing tips for a comfortable Caucasus adventure.',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1566865204669-c7b93be298bd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dubai on a Smart Budget',
    excerpt: 'Luxury-feeling experiences, family attractions, and desert moments without spending on the wrong things.',
    date: 'Mar 5, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=80',
  },
]

const BlogsListPage = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">Travel notes</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">Guides for smarter trip planning</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Read practical destination ideas, route suggestions, and travel tips from the Bablons Travel team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="mb-2 text-sm text-gray-500">{post.date} / {post.readTime}</p>
                <h2 className="mb-3 text-xl font-bold text-gray-950">{post.title}</h2>
                <p className="mb-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                <Link to={ROUTES.BLOGS}>
                  <Button variant="ghost" size="sm" className="gap-2 px-0">
                    Read Article
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogsListPage
