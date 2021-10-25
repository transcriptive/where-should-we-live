import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../../services/authService";

import "./SearchForm.css";

export default function SearchForm(props) {
    const [modelData, SetModelData] = useState([]);

    useEffect(() => {
      async function fetchData() {
          try {
              const response = await fetch(
                  `/model`
              );
              const data = await response.json();
              console.log(data, 'json data')
              SetModelData(data.model_results.county);
              console.log(data.model_results, 'model data')

              // .map(it => it.data)
              // SetModelData(json.results.county.map(it => it.data));
          } catch (e) {
              console.error(e);
          }
      };
      fetchData();
  }, []);
  
    return (
    <div className="container">
        <div className="mapPic">
        <div>
          {modelData.map(item => (
            // <div key={item}>
              <p>{item}</p>
            // </div>
          ))}
        </div>
        <div><p>{modelData[1]}</p></div>
    </div>
    <div id="container" className="w-4/5 mx-auto">
      <div className="searchDiv flex flex-col sm:flex-row">

        <div className="sm:w-1/3 p-2">
          <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div className="mb-3">
            </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Median Income</h2>
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
            <p><span className="sliderLeft">&#36;</span><span>&#36;&#36;&#36;</span></p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Climate</h2>
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
            <p><span className="sliderLeft">0&#176;F</span><span>100&#176;F</span></p>
          </div>
        </div>
      </div>

      <div className="sm:w-1/3 p-2">
        <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div className="mb-3">
          </div>
          <div className="slidecontainer">
          <h2 className="text-xl font-medium text-gray-700">Population</h2>
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
            <p><span className="sliderLeft">	
&#128100;</span><span>&#128101;</span></p>
          </div>
        </div>
      </div>
    </div>
    <div className="buttonDiv">
      <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Reset</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
  </div>
        </div>
    )
}