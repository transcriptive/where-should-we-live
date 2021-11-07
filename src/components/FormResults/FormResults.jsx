import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./FormResults.css"
import { fetchCountyID } from "../../services/googleService";
import { fetchCountyInfo } from "../../services/wikiService";
import ResultsCarousel from "../../components/Carousel/Carousel"

export default function FormResults(props) {
    const [selectedID, SetSelectedID] = useState(null)
    const [countyFacts, SetCountyFacts] = useState(null)

    const countyTEST = "Tarrant County,"

    useEffect(() => {
    const fetchWiki = async() => {
      const searchQuery = countyTEST
      try {
        const results = await fetchCountyInfo(searchQuery);
        SetCountyFacts(results);
      } catch (err) {
        console.log(err);
        alert('Failed to search wikipedia');
      }
    }
      fetchWiki()
    }, [])


    return (
      <div>
        <div className="grid grid-cols-1">
            
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
                  <p></p>
                  {/* <button onClick={getFacts()}>See Facts</button> */}
                  <p><button className="fav-btn bg-blue-500 font-bold py-2 px-4 rounded">Save County</button></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">  
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
      </div>
    </div>
    );
}