import { useState } from 'react'
import Map from '../components/Map'
import Nav from '../components/Nav'
import LocationMarker from '../components/LocationMarker'
import Informacion from '../components/Informacion'
import Footer from '../components/Footer'
import { gql } from '@apollo/client'
import Head from 'next/head'

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
      <Head>
        <title>¿Quién me representa?</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="¿Quién me representa?" key="title" />
        <meta charSet="UTF-8" />

        <meta
          name="description"
          content="¿Quiénes son mis representantes políticos? ¿Quién es mi diputado? ¿Quién es mi senador?"></meta>
        <meta
          property="og:description"
          content="¿Quiénes son mis representantes políticos? ¿Quién es mi diputado? ¿Quién es mi senador?"
          key="ogdesc"
        />
      </Head>
      <div className="h-screen w-screen bg-gray-100 flex flex-col justify-between">
        <Nav />
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="font-extrabold tracking-tight text-gray-900 lg:text-4xl">
            <span className="block sm:hidden">¿Quiénes me representan en México?</span>
            <span className="hidden sm:block">
              ¿Quiénes son mis representantes políticos en México?
            </span>
            <span className="block text-indigo-600">Busca tu ubicación y da click en el mapa.</span>
          </h2>
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
