import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="bg-green-800 text-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="text-lg font-bold md:text-xl">
          Bukid Tasks
        </Link>
        <div className="flex gap-4 text-sm md:gap-6 md:text-base">
          <Link to="/" className="hover:underline">
            Tasks
          </Link>
          <Link to="/stats" className="hover:underline">
            Stats
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
