import { Link } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import { ROUTES } from '../../constants/routes'

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">404</p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The page you are looking for may have moved, expired, or never existed.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to={ROUTES.HOME}>
            <Button variant="primary">Back to home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
