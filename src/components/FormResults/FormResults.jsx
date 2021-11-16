import React, { useState, useEffect } from "react";
import CountyMap from "../../components/GoogleMap/GoogleMap";
import "./FormResults.css"
import { fetchCountyInfo } from "../../services/wikiService";
import Photos from "../../components/Photos/Photos"
import PreLoader from "../../components/PreLoader/PreLoader";



export default function FormResults( {user, results, selected, resultsRef} ) {
    const [county, setCounty] = useState()
    const [photos, setPhotos] = useState([]);
    const [countyFacts, setCountyFacts] = useState(null)
    const [loading, setLoading] = useState(false);
    const [wikiLink, setWikiLink] = useState(null)
    
    useEffect(() => {
      setCounty(results[selected])
      const selectedCounty = Object.values(results[selected])[1]
      const spaceReplace = selectedCounty.replaceAll(' ', '_')
      const fullReplace = spaceReplace.replaceAll(',', '%2C')
      const wikiLinkChange = `https://en.wikipedia.org/wiki/${fullReplace}`
      setWikiLink(wikiLinkChange)
      }, [selected]
    )
 
    useEffect(() => {
    const fetchWiki = async() => {
      const searchQuery = Object.values(results[selected])[1]
      try {
        const results = await fetchCountyInfo(searchQuery);
        const textToShow = results.substring(0, 500) + "...  ";
        setCountyFacts(textToShow);
      } catch (err) {
        console.log(err);
      }
    }
    fetchWiki()
    }, [selected])

   
    // formatting for dollars
    const money = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD', maximumFractionDigits:0 }
    ) 
    const number = new Intl.NumberFormat('en-US' , {maximumFractionDigits:0})

  return (
    <div className="container mx-auto" >
      <div className="grid grid-cols-1" id='scroll'>
        <div className="grid grid-cols-3">
          <div className="col-span-2 result-map-div" >
            <CountyMap setLoading={setLoading} county={county} setPhotos={setPhotos} />
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
              <p>{countyFacts}</p>
                <div className='mt-2 flex justify-center'>
                  <a className="underline" style={{display: "table-cell"}} href={wikiLink} target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photos mt-6 grid grid-cols-1"> 
        <h1 className='mb-4'>Photos from {county?.county}</h1>
        <Photos photos={photos}/>
      </div>
    </div>
  );
}