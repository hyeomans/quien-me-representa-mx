import Link from 'next/link'

import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const posts = [
  {
    title: 'Acerca del sitio',
    href: '/blog/acerca-de',
    description: '¿Quién soy? ¿por qué hice este sitio? ¿cómo sacas dinero?',
    date: 'Mayo 10, 2021',
    datetime: '2021-05-10',
  },
  {
    title: '¿Quién es mi diputado?',
    href: '/blog/quien-es-mi-diputado',
    description:
      '¿Quién es mi diputado federal? ¿Quién es mi diputado local? ¿Para que sirve un diputado?',
    date: 'Mayo 9, 2021',
    datetime: '2021-05-09',
  },
]

export default function BlogIndex() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav />
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Artículos
            </h2>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <Link href={post.href}>
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </Link>
                <div className="mt-3">
                  <Link href={post.href}>
                    <a className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                      Leer más
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
