import React, { useState } from "react";
import { GoogleMap } from "react-google-maps";

function Map() {
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{ lat: 37.0902, lng: 95.7129}}
        />
    )
}