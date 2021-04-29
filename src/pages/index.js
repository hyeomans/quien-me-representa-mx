import { useState, useEffect } from 'react'
import Map from '../components/Map'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PuntoEnElMapa from '../components/PuntoMapaDescriptionList'
import { useQuery, gql } from '@apollo/client'

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
      }

      representantes {
        diputacionLocal {
          nombre
          periodo
        }
        diputacionFederal {
          nombre
          periodo
        }
        senadores {
          nombre
          periodo
        }
        presidenciaMunicipal {
          nombre
          periodo
        }
        gobernante {
          nombre
          periodo
        }
      }
    }
  }
`

const Informacion = ({ data }) => {
  if (data.status === 'pristine') {
    return null
  }

  if (data.status === 'loading') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    )
  }

  if (data.status === 'error') {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Hubó un error al tratar de localizar el punto
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Intenta dando click de nuevo en el mapa</li>
                <li>Si no funciona, por favor contáctanos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const {
    data: {
      locacion: { info, representantes },
    },
  } = data

  return (
    <div className="mb-5">
      <PuntoEnElMapa info={info} representantes={representantes} />
    </div>
  )
}

function LocationMarker({ Marker, useMapEvents, position, setPosition, setData }) {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      latitud: position && position.lat.toString(),
      longitud: position && position.lng.toString(),
    },
    skip: position === null,
  })
  useEffect(() => {
    if (data) {
      setData({
        status: 'loaded',
        data,
      })
    }

    if (loading) {
      setData({
        status: 'loading',
      })
    }

    if (error) {
      setData({
        status: 'error',
        error,
      })
    }
  }, [data, loading, error, setData])

  useMapEvents({
    click(e) {
      setPosition(e.latlng)
      setData({
        status: 'loading',
      })
    },
  })
  return position === null ? null : <Marker position={position} />
}

export default function Home() {
  const [data, setData] = useState({ status: 'pristine' })
  const [position, setPosition] = useState(null)

  return (
    <div className=" bg-gray-100">
      <Nav />
      <main className="flex flex-col items-center justify-center flex-1 px-5 bg-gray-100">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Quiénes son mis representantes políticos?</span>
            <span className="block text-indigo-600">Busca tu ubicación y da click en el mapa.</span>
          </h2>
        </div>

        <Map
          className="h-72 w-full mb-2 lg:h-96"
          center={[23.681406310669356, -103.31439396326121]}
          zoom={4}
          scrollWheelZoom={true}>
          {({ TileLayer, Marker, useMapEvents }) => (
            <>
              <TileLayer
                url={`https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png`}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker
                Marker={Marker}
                useMapEvents={useMapEvents}
                position={position}
                setPosition={setPosition}
                setData={setData}
              />
            </>
          )}
        </Map>

        <Informacion data={data} />
      </main>
      <Footer />
    </div>
  )
}
