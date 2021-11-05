import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
  lat: 40,
  lng: -101
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function Map(props) {
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
      <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        // onLoad={onLoad}
        onLoad={map => {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
        }}
        onUnmount={onUnmount}
      >
      </GoogleMap>
      </>
  ) : <></>
}
