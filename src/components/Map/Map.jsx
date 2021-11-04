import React, { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function setMap() {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 37.0902, lng: 95.7129}}
        />
    )
}

const fullMap = withScriptjs(withGoogleMap(setMap));

export default function Map(props) {
    return (
        <>
            <fullMap
                googleMapURL={""}
            />
        </>
    )
}