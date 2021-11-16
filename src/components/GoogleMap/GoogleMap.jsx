import React, { useState, useEffect } from "react";

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function CountyMap({setLoading, county , setPhotos}) {
  const [placeID, setPlaceID] = useState(null);
  const [map, setMap] = useState(null);
  
  const center = {
    lat: 40,
    lng: -101
  };

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map-div"), {
      center: center,
      zoom: 9,
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
    })
    setMap(map)
  },[])

  // The purpose of this hook is to use the GeoCoder, Places and Photo Google API to retrieve county map bounds in order to set the map, and retrieve county photos to populate the carousel. 
  useEffect(() => {
    const fetchGoogleData = async () => {
      setLoading(true)
      const geocoder = new window.google.maps.Geocoder()
      // send county.county string to Google Geocoder service
      const response = await geocoder.geocode({ address: county?.county})
      if (response.results[0]) {
        // results found, update placeID state, change map bounds
        setPlaceID(response.results[0].place_id)
        map.fitBounds(response.results[0].geometry.bounds)
        // send placeID to PlacesPhotos function, only called after PlaceID found
        fetchPlacesPhotos(response.results[0].place_id)
      }
      else { console.log("no geocode results found") }
    }
  // 
    const fetchPlacesPhotos = async (placeId) => {
      // new placesService object, takes current map object (stored in state)
      const placeService = new window.google.maps.places.PlacesService(map)
      placeService.getDetails( { placeId }, 
        // callback function for API request
        response => {
          if(response.photos.length){
            // call getUrl() on each photo object, map to new array, update state
            const photoURLS = response.photos.map(photo => photo.getUrl())
            setPhotos(photoURLS)
            console.log("Places Photo URLS:", photoURLS)
          } else { console.log("no places photos found") }
      })
    }
    if (county?.county) fetchGoogleData()
  },[county])

  return (
      <div id='map-div' style={containerStyle}>
        Loading... 
      </div>
  )
}

