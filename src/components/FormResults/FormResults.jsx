import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from '../../hooks/useForm'

import "./FormResults.css"

export default function FormResults (props) {
    const history = useHistory();    
    const [list, setList] = useState([])
    const [formValue, handleChange] = useForm({
        
    });

    const handleSubmit = async (e) => {

    }

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 result-map-div">Map Results 
                    {props.modelData ? props.modelData.map((value, index) => {
                        return (<div key={index}>
                                <p>{value.county}</p>
                                </div>)
                      }): "searching..."
                    }     
                </div>
                <div className="col-span-1 result-info-div">
                    <h1><strong>Results</strong></h1>
                    <h3><strong>Income Needed:</strong></h3>
                    <h3><strong>Approximate Population:</strong></h3>
                    <h3><strong>Business Investment:</strong></h3>
                    <h3><strong>Natural Disaster Index:</strong></h3>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-1 surrounding-div">Surrounding Towns</div>
                <div className="col-span-1 saved-div">Saved Cities</div>
            </div>
            <div className="grid grid-cols-1">
                <div className="col-span-1 recent-div">Recently Browsed</div>
            </div>
        </div>
    )
}