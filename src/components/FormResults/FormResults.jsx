import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./FormResults.css"
import { fetchCountyID } from "../../services/googleService";
import { fetchCountyInfo } from "../../services/wikiService";
import ResultsCarousel from "../../components/Carousel/Carousel"

export default function FormResults(props) {
    const [selectedID, SetSelectedID] = useState(null)

    console.log(props.modelData, 'form result props')
    const countyTEST = "Tarrant County, TX"
    // console.log(selectedID, "Waiting for ID...")

    // useEffect(() => {
    //   async function getPlaceID() {
    //     const countyPlaceID = await fetchCountyID(countyTEST)
    //     console.log(countyPlaceID, "returning county Place ID")
    //     SetSelectedID(countyPlaceID)
    //   }
    //   getPlaceID()
    // }, [])

    return (
      <div>
        
        <div className="grid grid-cols-1">
            <div className=" mb-2">
              <h1>Your County Results</h1>
              <h2>Click to preview </h2>
            </div>
            <div className='results-div my-10'>
            <ResultsCarousel results={props.modelData}/>
            </div>
            
              {/* <div className="results-div grid grid-flow-col">
              {props.modelData
               ? props.modelData.map((value, index) => {
                   return ( 
                     <div  className="county-card col-span-1" key={index}>
                         <p className="smallMap"></p>
                         <p>{value.county}</p>
                     </div>
                   );
                 })
               : "searching..."}
             </div> */}

            <div className="grid grid-cols-3">
              <div className="col-span-2 result-map-div">
                <GoogleMap countyResults={props.modelData} />
                </div>
                <div className="result-info-div col-span-1">
                  <div className="info-div">
                    <h1>County Info</h1>
                    <p>Median Income: $123,123</p>
                    <p>Average Yearly Temperature: 55</p>
                    <p>Population: 435,435</p>
                    <p>Elevation: +100ft</p>
                  </div>
                  <div className="facts-div">
                    <h1>Quick Facts</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p><button className="fav-btn bg-blue-500 font-bold py-2 px-4 rounded">Save County</button></p>
                  </div>
                </div>
            </div>

            <div className="grid grid-cols-1">
              {/* <div className="col-span-1 pics-div">
              <div className="carousel relative shadow-2xl bg-white">
                <div className="carousel-inner relative overflow-hidden w-full">

                  <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />
                  <div className="carousel-item absolute opacity-0">
                    <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">Slide 1</div>
                  </div>
                  <label for="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                  <label for="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                  <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""c/>
                  <div className="carousel-item absolute opacity-0">
                    <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">Slide 2</div>
                  </div>
                  <label for="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                  <label for="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> 


                  <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
                  <div className="carousel-item absolute opacity-0">
                    <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">Slide 3</div>
                  </div>
                  <label for="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                  <label for="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>


                  <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                      <label for="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                      <label for="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                      <label for="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                  </ol>

                </div>
                </div>
                
                </div> */}
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
    </div>
    );
}