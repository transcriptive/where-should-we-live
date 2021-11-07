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
  const [modelData, SetModelData] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })


  // fetchData submits slider values to data model on flask backend. Flask returns response with all county information, values stored in modelData -cm
  useEffect(() =>  {
    async function updateResults() {
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
      SetModelData(results)
    }
      updateResults().catch(error => console.log(error))
  }, [state])


  const handleSubmit = (e) => {
    e.preventDefault();
    SetModelData(modelData)
    console.log(state, 'state')
    console.log(modelData, 'modeldata')
  };

     
 


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
            <PreLoader data={MapPinLocation} />
          ) : (
            <PreLoader data={Success} />
          )}
        </>
      ) : (
        <>
          <ResultsCarousel 
            results={modelData}
          />
          <FormResults 
             results={modelData}
          />
        </>
      )}

     
   
     

    </>
  )
}