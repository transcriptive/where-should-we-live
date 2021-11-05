import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import Map from "../../components/Map/Map";
import TestMap from "../../components/TestMap/TestMap";
import "./FormResults.css"
var axios = require('axios');
const sampleCounty = "Tarrant County, TX"

const GOOGLE_API = process.env.REACT_APP_GOOGLE_PLACES_API_KEY

const BASE_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Tarrant County &inputtype=textquery&key=${GOOGLE_API}`

function fetchPlace() {
  console.log()
  return fetch(BASE_URL, {
    method:"GET",
    cache: "no-cache",
    headers:{
      "Content-Type":"application/json",
    
      "Access-Control-Allow-Credentials": true,
    },
    mode:"no-cors"
  })
  .then(response => console.log(response.json()))
}


export default function FormResults(props) {
  



    return (
      <div>
        <div className="grid grid-cols-1">
          <div className="results-div">Your results</div>
          {props.modelData
                ? props.modelData.map((value, index) => {
                    return (
                      <div className="" key={index}>
                        <p>
                          {value.county}
                          <input className="ml-4" type="checkbox"></input>
                        </p>
                      </div>
                    );
                  })
                : "searching..."}
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 result-map-div">
            <TestMap countyResults={props.modelData} />
            </div>
            <div className="result-info-div col-span-1">
              <div className="info-div">
                <h1>Dummy data div</h1>
                <p>Dummy Data: 1</p>
                <p>DUmmy Data: 2</p>
                <p>Dummy Data: 3</p>
                </div>
              <div className="facts-div">
                <h1>Quick Facts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div className="save-favs-div">
                <h1>Saved to favorites</h1>
                <p>Dummy Data: 1</p>
                <p>DUmmy Data: 2</p>
                <p>Dummy Data: 3</p>
              </div>
              
            </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span-1 pics-div">
            <h1>Pics Carousel</h1>
            
            </div>
          <div className="col-span-1 saved-div">
            <h1>Saved Cities</h1>
            {/* conditional render for logged in/out users */}
            {props.user ? 
            <div>Pull in saved cities to display here</div>
            : 
            <div className="mt-14  text-xl italic">
              <Link to="/profile" className='text-blue-500 underline'>Sign up</Link> to save your county results
            </div>
            }
          </div>
        </div>
        {/* <div className="grid grid-cols-1">
          <div className="col-span-1 recent-div">Recently Browsed</div>
        </div> */}
      </div>
    );
}