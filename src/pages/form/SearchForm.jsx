import React, { useState } from "react";


import "./SearchForm.css";

export default function SearchForm(props) {
  const [incomeRangeVal, setIncomeRangeVal] = useState(null);
  const [climateRangeVal, setClimateRangeVal] = useState(null);
  const [popRangeVal, setPopRangeVal] = useState(null);

    return (
    <div className="container">
        <div className="mapPic">
    </div>
    <div id="container" class="w-4/5 mx-auto">
      <div class="searchDiv flex flex-col sm:flex-row">

        <div class="sm:w-1/3 p-2">
          <div class="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div class="mb-3">
            </div>
          <div class="slidecontainer">
          <h2 class="text-xl font-medium text-gray-700">Median Income</h2>
            <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" onChange={(event) => setIncomeRangeVal(event.target.value)} />
            <p><span className="sliderLeft">&#36;</span><span id="demo"></span><span>&#36;&#36;&#36;</span></p>
            <p>Income: {incomeRangeVal}</p>
          </div>
        </div>
      </div>

      <div class="sm:w-1/3 p-2">
        <div class="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
          </div>
          <div class="slidecontainer">
          <h2 class="text-xl font-medium text-gray-700">Climate</h2>
            <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" onChange={(event) => setClimateRangeVal(event.target.value)} />
            <p><span className="sliderLeft">0&#176;F</span><span>100&#176;F</span></p>
            <p>Temperature: {climateRangeVal}</p>
          </div>
        </div>
      </div>

      <div class="sm:w-1/3 p-2">
        <div class="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3">
          </div>
          <div class="slidecontainer">
          <h2 class="text-xl font-medium text-gray-700">Population</h2>
            <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange" onChange={(event) => setPopRangeVal(event.target.value)} />
            <p><span className="sliderLeft">&#128100;</span><span>&#128101;</span></p>
            <p>Population: {popRangeVal}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="buttonDiv">
      <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Reset</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
  </div>
        </div>
    )
}