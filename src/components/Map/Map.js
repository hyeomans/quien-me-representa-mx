import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { useEffect } from 'react'
import * as ReactLeaflet from 'react-leaflet'

const { MapContainer } = ReactLeaflet

const Map = ({ children, className, ...rest }) => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
  }, [])

  return (
    <MapContainer className={className} {...rest}>
      {children(ReactLeaflet)}
    </MapContainer>
  )
}

export default Map
