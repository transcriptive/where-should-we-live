import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { fetchCountyID, fetchCoords } from "../../services/googleService";


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 50,
  lng: -101
};

const libraries = ["places"]

export default function CountyMap({county}) {
  const [placeID, setPlaceID] = useState(null);
  const [placesBox, setPlacesChanged] = useState(null);

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




  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDD6p-ZVUZ6NEM4m365ERb0MgpFPnTas74'
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
      >
          <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px"
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
}

