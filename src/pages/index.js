import { useState, useEffect } from 'react'
import Map from '../components/Map'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PuntoEnElMapa from '../components/PuntoEnElMapa'
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
          imgUrl
          link
        }
        diputacionFederal {
          nombre
          imgUrl
        }
        senadores {
          nombre
          imgUrl
          link
        }
        presidenciaMunicipal {
          nombre
          imgUrl
        }
        gobernante {
          nombre
          imgUrl
        }
      }
    }
  }
`

const Informacion = ({ data, setData }) => {
  if (data.status === 'pristine') {
    return null
  }

  if (data.status === 'loading') {
    return (
      <div className="z-10 absolute inset-0 bg-indigo-300 opacity-30 transition duration-75 ease-in">
        <div className="flex flex-col items-center justify-center">
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
        </div>
      </div>
    )
  }

  if (data.status === 'error') {
    return (
      <div className="absolute w-10/12 z-10 top-0 left-0 mx-3 mt-1 sm:w-6/12 lg:w-4/12 overflow-x-auto mb-2">
        <div className="flex flex-col rounded shadow-lg overflow-hidden">
          <div className="bg-red-500 flex items-start justify-between px-3 py-2">
            <div className="text-white">
              <h2 className="text-sm font-bold">Hubó un error al tratar de localizar el punto</h2>
            </div>

            <button className="text-white" onClick={() => setData({ status: 'pristine' })}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="bg-white px-2">
            <ul className="list-disc pl-5 text-red-500">
              <li className="py-1">Intenta dando click de nuevo en el mapa</li>
              <li className="py-1">Si no funciona, por favor contáctanos</li>
            </ul>
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

  return <PuntoEnElMapa info={info} representantes={representantes} setData={setData} />
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
          {({ TileLayer, Marker, useMapEvents }) => (
            <>
              <TileLayer
                url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
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

        <Informacion data={data} setData={setData} />
      </div>

      <Footer />
    </div>
  )
}
