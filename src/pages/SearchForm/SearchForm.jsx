import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";
import {fetchData} from "../../services/modelService"

import "./SearchForm.css";

export default function SearchForm(props) {
    const [modelData, SetModelData] = useState([]);
    const [incomeRangeVal, setIncomeRangeVal] = useState(500000);
    const [climateRangeVal, setClimateRangeVal] = useState(50);
    const [popRangeVal, setPopRangeVal] = useState(500000);

  //   async function handleSubmit(e) {

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await fetchData(incomeRangeVal, climateRangeVal, popRangeVal)
    console.log(json, "json data")
    const results = Object.entries(json.model_results.county).map(
                    ([key, val]) => ({
                      'row_number': key,
                      'county': val
                    }))
    console.log(results, "results")
      
    SetModelData(results)
    console.log(modelData, "model data in state")
  }


  return (
    <div className="container">
      <div>
          {modelData ? modelData.map((value, index) => {
                    return (<div key={index}>
                            <p>{value.county}</p>
                            </div>)
                  }): "searching..."
          }
      </div>   
      <div className="mapPic">
      </div>
    <div id="container" className="w-4/5 mx-auto">
    <form onSubmit={handleSubmit} >
      <div className="searchDiv flex flex-col sm:flex-row">

        <div className="sm:w-1/3 p-2">
          <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div className="mb-3">
            </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Median Income</h2>
            <input 
              type="range" 
              min="50000" 
              max="1000000" 
              defaultValue="500000" 
              className="slider" 
              id="myRange" 
              onChange={(event) => setIncomeRangeVal(event.target.value)} 
            />
            <p><span className="sliderLeft">&#36;</span><span id="demo"></span><span>&#36;&#36;&#36;</span></p>
            <p>{incomeRangeVal}</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Climate</h2>
            <input type="range" 
              min="1" 
              max="100" 
              defaultValue="50" 
              className="slider" 
              id="myRange" 
              onChange={(event) => setClimateRangeVal(event.target.value)} 
            />
            <p><span className="sliderLeft">0&#176;F</span><span>100&#176;F</span></p>
            <p>{climateRangeVal}</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Population</h2>
            <input type="range" 
              min="10000" 
              max="1000000" 
              defaultValue="500000" 
              className="slider" 
              id="myRange" 
              onChange={(event) => setPopRangeVal(event.target.value)} 
            />
            <p><span className="sliderLeft">&#128100;</span><span>&#128101;</span></p>
            <p>{popRangeVal}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="buttonDiv">
      <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Reset</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
    </form>
    </div>
  </div>
    )
}