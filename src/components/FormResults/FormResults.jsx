import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import Map from "../../components/Map/Map";
import TestMap from "../../components/TestMap/TestMap";
import "./FormResults.css"

export default function FormResults(props) {
    const history = useHistory();    
    const [list, setList] = useState([])
    const [formValue, handleChange] = useForm({
        
    });

    const handleSubmit = async (e) => {

    }

    return (
      <div>
        {/* <TestMap countyResults={props.modelData}/> */}
        <div className="grid grid-cols-1">
        </div>

              <div className="results-div grid grid-flow-col">{props.modelData
                ? props.modelData.map((value, index) => {
                    return (
                      <div  className="county-card col-span-1" key={index}>
                          <p className="smallMap"></p>
                          <p>{value.county}</p>
                          <input className="ml-4" type="checkbox"></input>
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
                <h1>County Info</h1>
                <p>Income Needed: .0025M</p>
                <p>Approx Ethnicity: </p>
                <p>Business: 10%</p>
                <p>Natural Disasters: 18%</p>
                </div>
              <div className="facts-div">
                <h1>Quick Facts</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p><button className="bg-blue-500 font-bold py-2 px-4 rounded">Save County</button></p>
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