import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

function LocationMarker({
  Marker,
  useMapEvents,
  useMap,
  position,
  setPosition,
  setData,
  graphqlQuery,
}) {
  const { data, loading, error } = useQuery(graphqlQuery, {
    variables: {
      latitud: position && position.lat.toString(),
      longitud: position && position.lng.toString(),
    },
    skip: position === null,
  })
  const map = useMap()

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

  useEffect(() => {
    map.locate()
  }, [map])

  useMapEvents({
    click(e) {
      setPosition(e.latlng)
      setData({
        status: 'loading',
      })
    },
    locationfound(location) {
      map.setView(location.latlng, 16)
      setPosition(location.latlng)
      setData({
        status: 'loading',
      })
    },
  })
  return position === null ? null : <Marker position={position} />
}

export default LocationMarker
