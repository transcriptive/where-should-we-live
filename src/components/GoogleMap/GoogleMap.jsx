import React, { useState, useEffect } from "react";

const containerStyle = {
  width: '100%',
  height: '100%'
};

export default function CountyMap({county , setPhotos}) {
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

  useEffect(() => {
    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode({ address: county?.county})
      .then((response) => {
      console.log("response", response)
      if (response.results[0]) {
        setPlaceID(response.results[0].place_id)
        map.fitBounds(response.results[0].geometry.bounds)
      }
    }) 
    const places = new window.google.maps.places.PlacesService(map)
    places.getDetails({placeId: placeID}, 
      response => {
      if(response.photos.length){
        const photoURLS = response.photos.map(photo => photo.getUrl())
        setPhotos(photoURLS)
        console.log(photoURLS, 'urls bitch')
      }
      })
    
  },[county])


  return (
      <div id='map-div' style={containerStyle}>
        Loading... 
      </div>
  )
}

