import React from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
const GOOGLE_API = process.env.REACT_APP_GOOGLE_API;

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 40,
  lng: -101
};

const onLoad = ref => this.searchBox = ref;
const onPlacesChanged = () => console.log(this.searchBox.getPlaces());
const inputStyle = {
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
  position: 'absolute',
  top: '10px',
  right: '10px',
}

function TestMap() {

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_API}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3.7}
      >
      {/* <StandaloneSearchBox>
            <input
              type='text'
              placeholder='Customized your placeholder'
              style={inputStyle}
            />
          </StandaloneSearchBox> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(TestMap)