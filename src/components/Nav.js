import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center justify-center bg-indigo-400 py-3 shadow w-full">
      <div className="flex items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        <Link href="/">
          <a className="font-semibold text-xl ml-1">¿Quién me representa?</a>
        </Link>
      </div>
    </nav>
  )
}
