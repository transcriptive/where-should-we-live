import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import Map from "../../components/Map/Map";

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
        <Map />
        <div className="grid grid-cols-3">
          <div className="col-span-3 result-map-div">
            
            <div className="mt-6">
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
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 surrounding-div">Surrounding Towns</div>
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
        <div className="grid grid-cols-1">
          <div className="col-span-1 recent-div">Recently Browsed</div>
        </div>
      </div>
    );
}