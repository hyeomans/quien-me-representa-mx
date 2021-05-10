import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default function AcercaDe() {
  return (
    <>
      <NextSeo
        title="¿Quién me representa?"
        description="¿Cuánto cuesta mantener este sitio? ¿por qué hiciste esta página? ¿quién eres?"
        canonical="https://www.quienmerepresenta.com.mx/"
        openGraph={{
          url: 'https://www.quienmerepresenta.com.mx/blog/acerca-de',
          locale: 'es-MX',
          title: '¿Quién me representa?',
          description:
            '¿Cuánto cuesta mantener este sitio? ¿por qué hiciste esta página? ¿quién eres?',
          article: {
            publishedTime: '2021-05-10T13:00:00Z',
            modifiedTime: '2021-05-10T13:00:00Z',
            section: 'politic',
            tags: [
              'diputados',
              'diputado',
              'diputado federal',
              'diputado local',
              'gobernador',
              'gobernadora',
              'diputada',
              'senador',
              'senadora',
            ],
          },
          images: [
            {
              url:
                'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620589826/blog/quien-es-mi-diputado/quien-es-mi-diputado_bujubb.png',
              width: 1578,
              height: 1074,
              alt: 'Quien Me Representa',
            },
          ],
          site_name: 'Quien Me Representa',
        }}
        twitter={{
          handle: '@h_yeomans',
          cardType: 'summary_large_image',
        }}
      />
      <Nav />
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Acerca de
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                ¿Quién eres?
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true">
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse">
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Hola soy{' '}
                  <a
                    className="underline"
                    href="https://twitter.com/h_yeomans"
                    target="_blank"
                    rel="noreferrer">
                    Héctor Yeomans
                  </a>
                  . Soy ingeniero en sistemas computacionales, orgullosamente egresado del Instituto
                  Tecnológico de Hermosillo{' '}
                  <span role="img" aria-label="venado">
                    🦌.
                  </span>
                </p>
                <p className="text-lg text-gray-500">
                  Desde que salí de la carrera me dediqué al área de desarrollo de software.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <h3>¿Cuánto cuesta mantener el sitio?</h3>
                <p>
                  Los datos de las secciones y distritos vienen directamente de la página del INE.
                  Como ciudadanos ya pagamos esos mapas.
                </p>
                <p>
                  Los datos de los servidores públicos vienen de las páginas oficiales de congresos,
                  conago y secretaría de gobernación. Escribí programas para obtener los datos
                  automáticamente.
                </p>

                <p>
                  El dominio me costó <strong>$21.88 USD</strong> el primer año.
                </p>

                <p>Tengo dos servidores:</p>
                <ul>
                  <li>
                    El servidor en donde estas viendo esta página. Es un servidor de{' '}
                    <strong>producción</strong> que tuvo un costo de <strong>$45.00 USD</strong> por
                    1 año.
                  </li>
                  <li>
                    Tengo un servidor de <strong>pruebas</strong>, donde lanzó nuevos cambios antes
                    de promoverlos al servidor de producción. El servidor de pruebas me costó{' '}
                    <strong>$22.00 USD por 1 año</strong>.
                  </li>
                </ul>
                <p>
                  Las imágenes de los diputados, senadores, gobernadores y presidentes municipales
                  las guardo en Cloudinary. Probablemente en un futuro tenga que pagar por ese
                  servicio. Al día de hoy estoy usando la versión gratis.
                </p>
                <h4>Sub-Total</h4>
                <p className="text-center">
                  <strong>21.88 USD + 45 USD + 22 USD = 88.88 USD por el primer año</strong>
                </p>
                <p>
                  En un mes le metí unas 40 o 50 horas de trabajo. Para calcular el{' '}
                  <strong>costo total</strong> se tendría que tomar en cuenta mis horas.
                </p>

                <h3>¿Por qué?</h3>
                <p>
                  La idea original fue porque quería aprender más de mapas y sistemas GIS con base
                  de datos (postgresql y postgis). La idea de un mapa con las secciones y distritos
                  surgió porque ayude, muy poco, a lanzar la página de ubicaciones para la
                  vacunación contra covid-19 en Hermosillo.
                </p>
                <p>
                  La pregunta que me surgió en ese momento fue: &quot;¿cómo se puede calcular el
                  punto más cercano a mi casa para vacunarse?&quot; Y de ahí fue evolucionando la
                  idea hasta llegar a este sitio.
                </p>
                <p>
                  Hay un sitio similar, que previo a elecciones del 2018, ya funcionaba. El problema
                  es que pasaron las elecciones y nunca lo actualizaron. Espero poder automatizar lo
                  más posible la extracción de datos para que no pase lo mismo con este sitio.
                </p>
                <p>
                  <a
                    href="https://github.com/hyeomans/quien-me-representa-mx"
                    target="_blank"
                    rel="noreferrer">
                    Otra razón fue poder compartir el código que escribí.
                  </a>{' '}
                  No es el mejor código pero cumple su función. Todo el código que he escrito es
                  público, está en Github, una plataforma para compartir código.
                </p>
                <h3>¿Cómo le sacas dinero al sitio?</h3>
                <p>
                  Aún no le saco dinero. Si se te ocurre una idea de como sacarle dinero, mandame un
                  tweet ó como es código libre, a lo mejor tú le puedes sacar dinero.
                </p>

                <h3>Más información</h3>
                <ul>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <a href="https://hyeomans.com" target="_blank" rel="noreferrer">
                      Mi página personal (en inglés)
                    </a>
                  </li>

                  <li>
                    <a href="https://twitter.com/h_yeomans" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </li>

                  <li>Mi correo: me arroba hyeomans.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
