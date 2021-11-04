import React, { useState, useRef, useEffect } from "react";
import { useForm } from '../../hooks/useForm'
import {fetchData} from "../../services/modelService"
import FormResults from "../../components/FormResults/FormResults";

import "./SearchForm.css";

export default function SearchForm(props) {
    const [modelData, SetModelData] = useState([]);
    const [incomeRangeVal, setIncomeRangeVal] = useState(500000);
    const [climateRangeVal, setClimateRangeVal] = useState(50);
    const [popRangeVal, setPopRangeVal] = useState(500000);
    const [state, handleChange] = useForm({
      income: 100000,
      climate: 75,  
      pop: 500000,
  })

  // handleSubmit function takes in input values, then uses modelService fetchData API call to submit values to data model running on flask backend. Flask sends back a response after model runs with county names as a result, and those values are stored in modelData state. -cm
  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = await fetchData(state)
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
              name="income"
              min="50000" 
              max="1000000" 
              defaultValue="500000" 
              className="slider" 
              id="myRange" 
              onChange={handleChange} 
              value={state.income}
            />
            <p><span className="sliderLeft">&#36;</span><span id="demo"></span><span>&#36;&#36;&#36;</span></p>
            <p>{state.income}</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Climate</h2>
            <input 
              type="range"
              name="climate" 
              min="1" 
              max="100" 
              defaultValue="50" 
              className="slider" 
              id="myRange" 
              onChange={handleChange} 
              value={state.climate}
            />
            <p><span className="sliderLeft">0&#176;F</span><span>100&#176;F</span></p>
            <p>{state.climate}</p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Population</h2>
            <input 
              type="range"
              name="pop" 
              min="10000" 
              max="1000000" 
              defaultValue="500000" 
              className="slider" 
              id="myRange" 
              onChange={handleChange}
              value={state.pop} 
            />
            <p><span className="sliderLeft">&#128100;</span><span>&#128101;</span></p>
            <p>{state.pop}</p>
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
    <div className='mt-12'>
    <FormResults modelData={modelData} />
      
    
    
    </div>
  </div>
    )
}