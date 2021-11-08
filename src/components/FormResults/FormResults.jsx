import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";
import CountyMap from "../../components/GoogleMap/GoogleMap";
import "./FormResults.css"
import { fetchCountyID } from "../../services/googleService";
import { fetchCountyInfo } from "../../services/wikiService";
import ResultsCarousel from "../../components/Carousel/Carousel"

export default function FormResults( {user, results, selected} ) {
    const [county, setCounty] = useState()
    const [photos, setPhotos] = useState([]);
    
    const countyTEST = "Westchester_County"

    useEffect(() => {
    const fetchWiki = async() => {
      const searchQuery = countyTEST
      try {
        const results = await fetchCountyInfo(searchQuery);
        const textToShow = results.substring(0, 500) + "...  ";
        SetCountyFacts(textToShow);
      } catch (err) {
        console.log(err);
        alert('Failed to search wikipedia');
      }
    }
      fetchWiki()
    }, [])


    useEffect(() => {
      setCounty(results[selected])
      }, [selected]

    )

    const money = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD', maximumFractionDigits:0 }
    ) 
    const number = new Intl.NumberFormat('en-US' , {maximumFractionDigits:0})

    return (
      <div>
        <div className="grid grid-cols-1">
            <div className="grid grid-cols-3">
              <div className="col-span-2 result-map-div">
                <CountyMap county={county} setPhotos={setPhotos} />
              </div>
              <div className="result-info-div col-span-1">
                <div className="info-div">
                  <h1>{county?.county}</h1>
                  <p>Median Income:  {money.format(county?.median_income)}</p>
                  <p>Average Yearly Temperature: {county?.temp}&#8457;</p>
                  <p>Population: {number.format(county?.total_population)}</p>
                  <p>Elevation: {number.format(county?.elev_in_ft)}ft</p>
                </div>

                  <div className="facts-div">
                    <h1>Quick Facts</h1>
                    <p>{countyFacts}<a class="underline" style={{display: "table-cell"}} href="https://en.wikipedia.org/wiki/Westchester_County%2C_New_York" target="_blank">Read More</a></p>
                    {/* <button onClick={getFacts()}>See Facts</button> */}
                    <p><button className="fav-btn bg-blue-500 font-bold py-2 px-4 rounded">Save County</button></p>
                  </div>

                </div>
              </div>
            </div>

            <div className="grid grid-cols-1">  
              <div className="col-span-1 saved-div">
                <h1>Saved Cities</h1>
                {/* conditional render for logged in/out users */}
                {user ? 
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