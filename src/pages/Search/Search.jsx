import React, { useEffect, useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import { fetchCountyInfo } from "../../services/wikiService";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";
import PreLoader from "../../components/PreLoader/PreLoader";
import MapPinLocation from '../../media/map-pin-location.json';
import Success from '../../media/success-check.json';
import { Wrapper } from "@googlemaps/react-wrapper";
const GOOGLE_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function Search({user}) {
  const [modelData, setModelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selected, setSelected] =useState(null);
  const [countyFacts, SetCountyFacts] = useState(null)

  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })

  // useEffect(() => {
  //   const fetchWiki = async() => {
  //     const searchQuery = selected
  //     console.log(selected)
  //     console.log(searchQuery)
  //     try {
  //       const results = await fetchCountyInfo(searchQuery);
  //       const textToShow = results.substring(0, 500) + "...  ";
  //       SetCountyFacts(textToShow);
  //     } catch (err) {
  //       console.log(err);
  //       console.log('Failed to search wikipedia');
  //     }
  //   }
  //   fetchWiki()
  //   }, [countyFacts])

  const handleSubmit = async (e) => {
    e.preventDefault() 
    setSelected(null)
    setCompleted(false)
    setLoading(true)
    const json = await fetchData(state) 
    console.log(json, 'json returned')
    const arr = Object.entries(json.model_results)
    const results = []
      for (const i in Object.entries(arr[0][1])) {
        const entry = arr.reduce((acc, item) => {
          acc[item[0]] = item[1][i]
          return acc
        }, {})
        results.push(entry)
      }
    setCompleted(true)
    setModelData(results)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  
  return (
    <>  
      <SearchForm 
        slider={state}
        results={modelData}
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
      />
      <Wrapper 
          apiKey={GOOGLE_API} 
          version="weekly"
          libraries={["places"]}
        >
          
      {!completed ? (
        <>
          {!loading ? (
            <></>
          ) : (
            <PreLoader data={MapPinLocation} key={'map'} />     
          )}
        </>
      ) : (
        <>
          {!loading ? (
          <>
            <ResultsCarousel 
              results={modelData}
              setSelected={setSelected}
            />
            {selected != null && 
            <FormResults 
              results={modelData}
              selected={selected}
              user={user}
            />
            }
          </>
          ) : (
            <PreLoader data={Success} key={'success'}/> 
          )}
          
        </>
      )}
      </Wrapper>
    </>
  )
}