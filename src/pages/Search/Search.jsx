import React, { useEffect, useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";
import PreLoader from "../../components/PreLoader/PreLoader";
import MapPinLocation from '../../media/map-pin-location.json';
import Success from '../../media/success-check.json';

export default function Search() {
  const [modelData, setModelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  console.log(loading, 'loading ')
  console.log(completed, 'completed ')

  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })

  const handleSubmit = async (e) => {
    e.preventDefault() 
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
    }, 1000);
  }

  
  return (
    <>
        
      <SearchForm 
        slider={state}
        results={modelData}
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
      />

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
            />
            <FormResults 
              results={modelData}
            />
          </>
          ) : (
            <PreLoader data={Success} key={'success'}/> 
          )}
          
        </>
      )}
    </>
  )
}