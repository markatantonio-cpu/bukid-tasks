import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold md:text-3xl">Page not found</h1>
      <p className="text-stone-600">There is no page at this address.</p>
      <Link to="/" className="text-green-800 hover:underline">
        ← Back to tasks
      </Link>
    </section>
  )
}

export default NotFoundPage
