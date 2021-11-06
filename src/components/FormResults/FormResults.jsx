import React, { useState } from "react";
import { Link,  } from "react-router-dom";
import Map from "../../components/Map/Map";
import TestMap from "../../components/TestMap/TestMap";
import { fetchCounty } from "../../services/googleService";
import { fetchCountyInfo } from "../../services/wikiService";
import "./FormResults.css"


export default function FormResults(props) {
  const [quickFacts, SetQuickFacts] = useState(null)

  // const getFacts = async (e) => {

  //   const countyFACTS = await fetchCounty(props.modelData[1].county)
  //   console.log(countyFACTS, "return first county")
  //   SetQuickFacts(countyFACTS)
  // }

  const getFacts = async () => {
    console.log(props.modelData);
    const countyFacts = await fetchCountyInfo(props.modelData[0].county)
    console.log(countyFacts);
    SetQuickFacts(countyFacts)
  }

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
                <p>{ quickFacts }</p>
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