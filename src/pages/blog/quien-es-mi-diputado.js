import { useState } from 'react'
import { gql } from '@apollo/client'
import Map from '../../components/Map'
import Footer from '../../components/Footer'
import LocationMarker from '../../components/LocationMarker'
import Informacion from '../../components/Informacion'
import Nav from '../../components/Nav'
import { NextSeo, NewsArticleJsonLd } from 'next-seo'
import Link from 'next/link'

const QUERY = gql`
  query locacion($latitud: String!, $longitud: String!) {
    locacion(latitud: $latitud, longitud: $longitud) {
      info {
        latitud
        longitud
        distritoLocal
        distritoFederal
        municipio
        estado
        seccion
      }

      representantes {
        diputacionLocal {
          nombre
          imgUrl
          link
        }
        diputacionFederal {
          nombre
          imgUrl
          link
        }
      }
    }
  }
`

export default function QuienEsMiDiputado() {
  const [data, setData] = useState({ status: 'pristine' })
  const [position, setPosition] = useState(null)

  return (
    <>
      <NextSeo
        title="¿Quién me representa? | ¿Quien es mi diputado?"
        description="Quien es mi diputado. Que hace un diputado. Cuales son las funciones de un diputado"
        canonical="https://www.quienmerepresenta.com.mx/"
        openGraph={{
          url: 'https://www.quienmerepresenta.com.mx/',
          locale: 'es-MX',
          title: '¿Quién es mi diputado?',
          description:
            '¿Quién es mi diputado?, ¿cuál es la diferencia entre diputado federal y local?, ¿cuáles son sus funciones?',
          article: {
            publishedTime: '2021-05-09T13:00:00Z',
            modifiedTime: '2021-05-09T13:00:00Z',
            section: 'politic',
            tags: ['diputados', 'diputado', 'diputado federal', 'diputado local'],
          },
          images: [
            {
              url:
                'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620589826/blog/quien-es-mi-diputado/quien-es-mi-diputado_bujubb.png',
              width: 1578,
              height: 1074,
              alt: 'Quien es mi diputado',
            },
          ],
          site_name: 'Quien Me Representa',
        }}
        twitter={{
          handle: '@h_yeomans',
          cardType: 'summary_large_image',
        }}
      />
      <NewsArticleJsonLd
        url="https://www.quienmerepresenta.com.mx/blog/quien-es-mi-diputado"
        title="¿Quien es mi diputado?"
        images={[
          'https://res.cloudinary.com/quienmerepresenta/image/upload/v1620589826/blog/quien-es-mi-diputado/quien-es-mi-diputado_bujubb.png',
        ]}
        section="politic"
        keywords="diputado,diputados,diputado federal, diputado local"
        datePublished="2021-05-09T13:00:00Z"
        dateModified="2021-05-09T13:00:00Z"
        authorName="Hector Yeomans"
      />
      <Nav />
      <div className="relative py-8 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384">
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <article className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                ¿Quién es mi diputado?
              </span>
              <span className="block text-xs text-center text-indigo-600 font-semibold tracking-wide uppercase">
                <a href="https://hyeomans.com/" target="_blank" rel="noreferrer">
                  Héctor Yeomans
                </a>{' '}
                - 9 Mayo 2021
              </span>
            </h1>
            <p className="py-5">Da clic cerca de tu casa en el mapa para conocerlo.</p>
            <div className="relative w-full h-96">
              <Map
                className="absolute inset-0 z-0"
                center={[23.681406310669356, -103.31439396326121]}
                zoom={4}
                scrollWheelZoom={true}>
                {({ TileLayer, Marker, useMapEvents, useMap }) => (
                  <>
                    <TileLayer
                      url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker
                      Marker={Marker}
                      useMapEvents={useMapEvents}
                      useMap={useMap}
                      position={position}
                      setPosition={setPosition}
                      setData={setData}
                      graphqlQuery={QUERY}
                    />
                  </>
                )}
              </Map>
              <Informacion data={data} setData={setData} />
            </div>
          </div>

          <div className="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
            <h2>¿Para qué sirve un diputado?</h2>
            <p>
              Los diputados <strong>federales</strong> representan un distrito federal. México está
              dividido en <strong>41</strong> distritos federales.
            </p>
            <p>
              Los diputados <strong>locales</strong> representan un distrito dentro de un estado. La
              cantidad de distritos locales varía por estado. La Ciudad de México le llama Asamblea
              Legislativa a su congreso.
            </p>
            <h2>¿Cuál es el trabajo de un diputado federal?</h2>
            <p>
              Las funciones de un <strong>diputado federal</strong> se reduce a:
            </p>
            <ul>
              <li>
                <strong>Crear</strong> leyes nuevas.
              </li>
              <li>
                <strong>Revisar</strong> y <strong>modificar</strong> leyes existentes.
              </li>
              <li>
                Son los <strong>representantes</strong> del pueblo mexicano.
              </li>
              <li>
                Cada año revisa y aprueba la ley de ingresos: como planea el gobierno federal{' '}
                <strong>recaudar</strong> ingresos y cuánto <strong>piensa</strong> recaudar.
              </li>
              <li>
                Revisa y aprueba la ley de <strong>egresos</strong>: cuanto y como planea el
                gobierno federal gastar los ingresos.
              </li>
              <li>Revisa la cuenta pública: evalúa el ejercicio fiscal del año anterior.</li>
              <li>
                Aprueba el{' '}
                <a
                  target="_blank"
                  href="http://www5.diputados.gob.mx/index.php/camara/Parlamento-Abierto-Plan-Nacional-de-Desarrollo/Plan-Nacional-de-Desarrollo"
                  rel="noreferrer">
                  Plan Nacional de Desarrollo.
                </a>
              </li>
              <li>
                Ratificación de{' '}
                <a
                  href="http://sil.gobernacion.gob.mx/Glosario/definicionpop.php?ID=200"
                  target="_blank"
                  rel="noreferrer">
                  funcionarios federales
                </a>
                .
              </li>
              <li>
                Deben de atender denuncias{' '}
                <a
                  href="http://sil.gobernacion.gob.mx/Glosario/definicionpop.php?ID=138"
                  target="_blank"
                  rel="noreferrer">
                  ciudadanas de juicios políticos
                </a>
                .
              </li>
            </ul>
            <h2>¿Para qué sirve un diputado local?</h2>
            <p>
              Vivimos en una república representativa y democrática. Cada estado de la república
              tiene autonomía para ejecutar el presupuesto. Las personas que aprueban el presupuesto
              estatal, son los diputados locales.
            </p>
            <p>La lista completa de facultades son:</p>
            <ul>
              <li>
                <strong>Crear</strong> nuevas leyes. <strong>Modificar</strong> y{' '}
                <strong>revisar</strong> leyes <strong>estatales</strong> existentes. Solo en
                materias que no sean competencia exclusiva de la federación.
              </li>
              <li>
                Revisar ingresos y egresos de los <strong>municipios</strong>. Asegurarse que se
                pueden cubrir gastos.
              </li>
              <li>
                Aprobar el presupuesto <strong>estatal</strong> anualmente.
              </li>
              <li>Fiscalizar (revisar) el gasto público estatal.</li>
              <li>
                Aprobar reformas a la Constitución Federal aprobadas por el Congreso de la Unión.
              </li>
              <li>
                Deben de atender denuncias{' '}
                <a
                  href="http://sil.gobernacion.gob.mx/Glosario/definicionpop.php?ID=138"
                  target="_blank"
                  rel="noreferrer">
                  ciudadanas de juicios políticos
                </a>
                .
              </li>
            </ul>
            <h2>¿Cómo evaluar a un diputado?</h2>
            <p>
              La tarea principal de los diputados es cumplir con las facultades que ya se
              describieron. El acto de cumplir todas esas facultades se le llama legislar.{' '}
              <strong>
                Entregar apoyos, gestionar recursos, limpiar, arreglar baches, resolver trámites,
                etcétera no es su trabajo.
              </strong>{' '}
              Realizar esas actividades son un actividades extracurriculares a su trabajo como
              diputados y diputadas.
            </p>

            <p>
              Evaluar a un diputado debe estar relacionado con su trabajo legislativo. Es una tarea
              difícil el evaluar a un diputado porque los diputados y diputadas se pueden
              especializar para avanzar en su carrera política. Algunos se enfocan en la creación y
              promoción de nuevas leyes. Otros en llevar a juicio político a algún funcionario
              público. Otros se dedican a empujar la agenda del ejecutivo, ya sea estatal o federal.
              Y algunos otros no hacen nada.
            </p>
            <p>
              Por lo tanto, como ciudadanos podemos{' '}
              <strong>revisar sus propuestas antes de ser electos</strong> y cuando acabe la
              legislatura, revisar si <strong>cumplieron sus promesas</strong>. Nuestra tarea es
              encontrar cuales son sus propuestas. Cuando las propuestas son específicas, será más
              fácil evaluarlos.
            </p>

            <h3>Más información</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>¿Quién me representa?</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=U1f6Er0gAeA"
                  target="_blank"
                  rel="noreferrer">
                  Diferencias entre un Diputado Federal y Diputado Local
                </a>
              </li>
              <li>
                <a
                  href="https://buroparlamentario.org/home"
                  target="_blank
            ">
                  https://buroparlamentario.org/home
                </a>
              </li>
              <li>
                <a
                  href="https://www.sinembargo.mx/02-07-2015/3036384"
                  target="_blank"
                  rel="noreferrer">
                  ¿Cómo se puede evaluar a un legislador?
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}
