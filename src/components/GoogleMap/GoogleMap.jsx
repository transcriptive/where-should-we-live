import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { fetchCountyID, fetchCoords } from "../../services/googleService";


const containerStyle = {
  width: '100%',
  height: '100%'
};



const libraries = ["places"]

export default function CountyMap({county , setPhotos}) {
  const [placeID, setPlaceID] = useState(null);
  const [map, setMap] = useState(null);
  
  
  const center = {
    lat: 40,
    lng: -101
  };


  const test_county = "Tarrant County, TX"

  // useEffect(() => {
  //   // const name = encodeURI(county?.county)
  //   // console.log(name, 'name')
  //   async function getPlaceID() {
  //     const countyPlaceID = await fetchCountyID(test_county)
  //     console.log(countyPlaceID, "returning county Place ID")
  //     setPlaceID(countyPlaceID)
  //   }
  //   // if (county?.county) 
  //   getPlaceID()
  // }, [test_county])

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
    // <LoadScript
    //   googleMapsApiKey='AIzaSyDD6p-ZVUZ6NEM4m365ERb0MgpFPnTas74'
    //   libraries={libraries}
    // >

      // <GoogleMap
      //   mapContainerStyle={containerStyle}
      //   center={center}
      //   zoom={5}
      // >
      <div id='map-div' style={containerStyle}>
        Loading... 
      </div>
          
        
        
      // </GoogleMap>
    // </LoadScript>
  )
}

