import { useState, useEffect } from 'react'
import Map from '../components/Map'
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

const PuestoPolitico = ({ puestoPolitico, mensajeNoExiste }) => {
  if (!puestoPolitico) {
    return <p>{mensajeNoExiste}</p>
  }

  return (
    <>
      <p>
        Nombre: <span>{puestoPolitico.nombre}</span>
      </p>
      <p>
        Período: <span>{puestoPolitico.periodo}</span>
      </p>
    </>
  )
}

const Senadores = ({ senadores }) => {
  if (!senadores || senadores.length === 0) {
    return <p>Aun no tengo información de los senadores de este estado</p>
  }

  return senadores.map((s) => (
    <div key={s.nombre}>
      <p>
        Nombre: <span>{s.nombre}</span>
      </p>
      <p>
        Período: <span>{s.periodo}</span>
      </p>
    </div>
  ))
}

const Informacion = ({ data }) => {
  if (data.status === 'pristine') {
    return null
  }

  if (data.status === 'loading') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    return <div>error</div>
  }

  const {
    data: {
      locacion: {
        info,
        representantes: {
          diputacionLocal,
          diputacionFederal,
          senadores,
          presidenciaMunicipal,
          gobernante,
        },
      },
    },
  } = data

  return (
    <div>
      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Información del punto en el mapa</h2>
        <p>
          Distrito Local: <span>{info.distritoLocal}</span>
        </p>
        <p>
          Distrito Federal: <span>{info.distritoFederal}</span>
        </p>
        <p>
          Municipio: <span>{info.municipio}</span>
        </p>
        <p>
          Estado: <span>{info.estado}</span>
        </p>
        <p>
          Latitud: <span>{info.latitud}</span>
        </p>
        <p>
          Longitud: <span>{info.longitud}</span>
        </p>
      </div>
      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Presidencia Municipal</h2>
        <PuestoPolitico
          puestoPolitico={presidenciaMunicipal}
          mensajeNoExiste="Aun no tengo información de la presidencia municipal de este municipio"
        />
      </div>

      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Diputación Local</h2>
        <PuestoPolitico
          puestoPolitico={diputacionLocal}
          mensajeNoExiste="Aun no tengo información de la diputación local para este distrito"
        />
      </div>

      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Diputación federal</h2>
        <PuestoPolitico
          puestoPolitico={diputacionFederal}
          mensajeNoExiste="Aun no tengo información de la diputación federal para este distrito"
        />
      </div>

      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Gobernación</h2>
        <PuestoPolitico
          puestoPolitico={gobernante}
          mensajeNoExiste="Aun no tengo información del gobernante del estado"
        />
      </div>

      <div className="mb-2 pb-2 border-b-2 space-y-1">
        <h2 className="text-xl">Senadores</h2>
        <Senadores senadores={senadores} />
      </div>
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
    },
  })
  return position === null ? null : <Marker position={position} />
}

export default function Home() {
  const [data, setData] = useState({ status: 'pristine' })
  const [position, setPosition] = useState(null)

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-center flex-wrap bg-indigo-400 p-3 shadow w-full mb-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
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
          <span className="font-semibold text-xl ml-1">¿Quién me representa?</span>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 px-5">
        <p className="text-lg text-bold text-center mb-2">
          Conoce a tu diputado local y federal, presidente municipal, senador y gobernador.
        </p>

        <p className="text-bold text-center">
          Busca tu dirección en el mapa y da click en tu casa:
        </p>

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
    </div>
  )
}
