import React, { useState } from "react";
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
const GOOGLE_API = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 50,
  lng: -101
};

const libraries = ["places"]

function TestMap() {
  const [searchResult, setSearchResult] = useState(null);
  const [placesBox, setPlacesChanged] = useState(null);

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
        <StandaloneSearchBox
        onLoad={setSearchResult}
        onPlacesChanged={
          setPlacesChanged
        }
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
        </StandaloneSearchBox> 
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(TestMap)