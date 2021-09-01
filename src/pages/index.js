import { gql } from '@apollo/client'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

import Footer from '../components/Footer'
import Informacion from '../components/Informacion'
import LocationMarker from '../components/LocationMarker'
import Map from '../components/Map'
import Nav from '../components/Nav'

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
        senadores {
          nombre
          imgUrl
          link
        }
        presidenciaMunicipal {
          nombre
          imgUrl
          link
        }
        gobernante {
          nombre
          imgUrl
        }
      }
    }
  }
`

export default function Home() {
  const [data, setData] = useState({ status: 'pristine' })
  const [position, setPosition] = useState(null)

  return (
    <>
      <NextSeo
        title="¿Quién me representa?"
        description="¿Quién es mi diputado? ¿quién es mi senador? ¿quién es mi gobernador?"
        canonical="https://www.quienmerepresenta.com.mx/"
        openGraph={{
          url: 'https://www.quienmerepresenta.com.mx/',
          locale: 'es-MX',
          title: '¿Quién me representa?',
          description: '¿Quién es mi diputado? ¿quién es mi senador? ¿quién es mi gobernador?',
          article: {
            publishedTime: '2021-05-09T13:00:00Z',
            modifiedTime: '2021-08-27T13:00:00Z',
            section: 'politic',
            tags: [
              'diputados',
              'quien es mi diputado',
              'quien es mi diputado federal',
              'quien es mi diputado local',
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
      <div className="h-screen w-screen bg-gray-100 flex flex-col justify-between">
        <Nav />
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h1 className="font-extrabold tracking-tight text-gray-900 lg:text-4xl">
            <span className="block sm:hidden">¿Quiénes me representan en México?</span>
            <span className="hidden sm:block">
              ¿Quiénes son mis representantes políticos en México?
            </span>
            <span className="block text-indigo-600">Busca tu ubicación y da click en el mapa.</span>
          </h1>
        </div>
        <div className="relative w-full h-full">
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

        <Footer />
      </div>
    </>
  )
}
