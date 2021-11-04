import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function Map() {
    const [map, setMap] = React.useState(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD1c4mX7C-TnzTVLqniOxXIqyuncIfEjUI"
    })


    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>
}
