import React, { useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";

export default function Search() {
  const [modelData, SetModelData] = useState([]);
  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })


  // fetchData submits slider values to data model on flask backend. Flask returns response with all county information, values stored in modelData -cm
  const handleSubmit = async (e) => {
    e.preventDefault();
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


  return (
    <>
        
      <SearchForm 
        slider={state}
        results={modelData}
        handleSubmit={handleSubmit} 
        handleChange={handleChange}
      />
      
      { modelData.length === true 
        ? 
        (<>
          <ResultsCarousel 
            results={modelData}
          />
          <FormResults 
          results={modelData}
          />
        </>
        )
        :
        <div></div>
        
      }
      

    </>
  )
}