import React, {  } from "react";
import "./SearchForm.css";
import usMap from "./usMap.webp";

export default function SearchForm({slider, handleChange, handleSubmit, handleScroll, resultsRef}) {
   

  return (
    <div className="">
      <img src={usMap} 
        alt={'img'} 
        className="mapPic -my-6" />
      <div id="container" className="mx-auto">
        <div className='mb-6'></div>
        <form onSubmit={handleSubmit} >
        <h1>Move the sliders to your desired preferences</h1>

          <div className="searchDiv flex flex-row sm:flex-row">
            {/* Median Income Slider */}
            <div className="sm:w-1/3 p-2">
              <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3"></div>
                  <div className="slidecontainer">
                    <h2 className="text-xl font-medium text-gray-700">
                    Median Income
                    </h2>
                    <input 
                      type="range" 
                      name="income"
                      min="20000" 
                      max="125000" 
                      className="slider" 
                      id="myRange" 
                      onChange={handleChange} 
                      value={slider.income}
                    />
                    <p><span className="sliderLeft">💲</span><span id="demo"></span><span>💲💲💲</span></p>
                    {/* <p>{slider.income}</p> */}
                  </div>
            </div>
            </div>

            {/* Climate Slider */}
            <div className="sm:w-1/3 p-2">
              <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3"></div>
                  <div className="slidecontainer">
                    <h2 className="text-xl font-medium text-gray-700">
                    Climate
                    </h2>
                    <input 
                      type="range"
                      name="climate" 
                      min="32" 
                      max="89" 
                      className="slider" 
                      id="myRange" 
                      onChange={handleChange} 
                      value={slider.climate}
                    />
                    <p><span className="sliderLeft">&#x2744;&#xfe0f;</span><span>&#127774;</span></p>
                    {/* <p>{slider.climate}</p> */}
                  </div>
              </div>
            </div>

            {/* Population Slider */}
            <div className="sm:w-1/3 p-2">
              <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3"></div>
                  <div className="slidecontainer">
                    <h2 className="text-xl font-medium text-gray-700">
                    Population
                    </h2>
                    <input 
                      type="range"
                      name="pop" 
                      min="265000" 
                      max="5000000" 
                      className="slider" 
                      id="myRange" 
                      onChange={handleChange}
                      value={slider.pop} 
                    />
                    <p><span className="sliderLeft">&#128100;</span><span>&#128101;</span></p>
                    {/* <p>{slider.pop}</p> */}
                  </div>
              </div>
            </div>

            {/* Elevation Slider */}
            <div className="sm:w-1/3 p-2">
              <div className="searchCard bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3"></div>
                  <div className="slidecontainer">
                    <h2 className="text-xl font-medium text-gray-700">
                    Elevation
                    </h2>
                    <input 
                      type="range"
                      name="elevation" 
                      min="-620" 
                      max="10000" 
                      className="slider" 
                      id="myRange" 
                      onChange={handleChange}
                      value={slider.elevation} 
                    />
                    <p><span className="sliderLeft">🌊</span><span>&#128507;</span></p>
                    {/* <p>{slider.elevation}</p> */}
                  </div>
              </div>
            </div>
          </div>

          {/* Reset / Search Buttons */}
          <div className="buttonDiv">
            <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-3 px-6 rounded">
              <p className='text-4xl'>Search</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}