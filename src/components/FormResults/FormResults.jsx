import React, { useState, useEffect } from "react";
import CountyMap from "../../components/GoogleMap/GoogleMap";
import "./FormResults.css"
import { fetchCountyInfo } from "../../services/wikiService";
import * as profileService from "../../services/profileService";
import Signup from "../../pages/Signup/Signup";
import Photos from "../../components/Photos/Photos"
import LoadPhoto from '../../media/photo.json';
import PreLoader from "../../components/PreLoader/PreLoader";



export default function FormResults( {user, results, selected} ) {
    const [county, setCounty] = useState()
    const [photos, setPhotos] = useState([]);
    const [countyFacts, SetCountyFacts] = useState(null)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState()
    
    const countyTEST = "Westchester_County"

    useEffect(() => {
      setCounty(results[selected])
      }, [selected]
    )
    
    useEffect(() => {
    const fetchWiki = async() => {
      const searchQuery = Object.values(results[selected])[1]
      console.log(searchQuery)
      try {
        const results = await fetchCountyInfo(searchQuery);
        console.log(results)
        const textToShow = results.substring(0, 500) + "...  ";
        SetCountyFacts(textToShow);
      } catch (err) {
        console.log(err);
        console.log('Failed wiki fetch');
      }
    }
    fetchWiki()
    console.log(countyFacts)
    }, [selected])

    // async function handleSaveCounty(e) {
    //   e.preventDefault()
    //   console.log(user, 'user')
    //   if (!user) {
    //     setOpen(true) 
    //     const hasData = await profileService.getAllByCurrentUser(user._id)
    //     setProfile(hasData)
    //   }
    // }
    



    const money = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD', maximumFractionDigits:0 }
    ) 
    const number = new Intl.NumberFormat('en-US' , {maximumFractionDigits:0})

    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
            <div className="grid grid-cols-3">
              <div className="col-span-2 result-map-div">
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
                    <p>{countyFacts}<a class="underline" style={{display: "table-cell"}} href="https://en.wikipedia.org/wiki/{}" target="_blank" rel="noreferrer" >Read More</a></p>
                    {/* <button onClick={getFacts()}>See Facts</button> */}
                    
                    {/* <p><button name="savedCounties" className="fav-btn bg-blue-500 font-bold py-2 px-4 rounded" onClick={handleSaveCounty}>Save County</button></p> */}
                  </div>
                {/* {open ? (
                <Signup/>
                ) : null } */}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1"> 
            <h1>Photos From the County</h1>
            {!loading ? ( 
            <Photos photos={photos}/>
            ):(
            <PreLoader data={LoadPhoto} key={'photo'}/>
            )
            } 
            </div>
      </div>
    );
}