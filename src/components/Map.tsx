import React, { useState } from "react"
import GoogleMap from "google-map-react"
import Loader from "./Loader"

import marker from "../assets/images/marker.svg"

type MapProps = {
  lat: any
  lng: any
}

const MapMarker: React.FC<MapProps> = () => (
  <div>
    <img style={{ width: "25px" }} src={marker} alt="marker-icon" />
  </div>
)

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  /**
   * Initial state
   */
  const [isLoading, setLoading] = useState(true)

  const latitude = parseFloat(lat)
  const longitude = parseFloat(lng)
  const coordinates = { lat: latitude, lng: longitude }

  return (
    <>
      <Loader loading={isLoading} />
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyB9vNHTqdZTK1NDN_dDrbnrxqSEKUDy8aY" }}
        defaultCenter={coordinates}
        zoom={1}
        center={coordinates}
        onTilesLoaded={() => setLoading(false)}
      >
        <MapMarker lat={latitude} lng={longitude} />
      </GoogleMap>
    </>
  )
}

export default Map
