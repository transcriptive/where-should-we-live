import React, { useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";
import PreLoader from "../../components/PreLoader/PreLoader";
import MapPinLocation from '../../media/map-pin-location.json';
import { Wrapper } from "@googlemaps/react-wrapper";

const GOOGLE_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Search = ({user}) => {
  const [modelData, setModelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selected, setSelected] =useState(null);
  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })

  // To render the preloader, we are setting conditional logic on loading and completed. After the model improvements, we are setting the timeout at 2500 ms, in order to show the model "thinking". // The results array comes back in a illformated dict object, so we map over the results to reform into an easier to tranverse object
  const handleSubmit = async (e) => {
    e.preventDefault() 
    setSelected(null)
    setCompleted(false)
    setLoading(true)
    const json = await fetchData(state) 
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
    }, 2500);
  }

  return (
    <> 
    <main className='container mx-auto'> 
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
            <></>
          )}
        </>
      ) : (
        <>
          {!loading ? (
            <>
            <div id='resultsRef'>
              <ResultsCarousel 
                results={modelData}
                setSelected={setSelected}
              />
            </div>
            {selected != null && 
            <>
            <div/>
              <FormResults 
                results={modelData}
                selected={selected}
                user={user} 
              />
            </>
            }
          </>
          ) : (
            <PreLoader data={MapPinLocation} key={'success'}/> 
          )}    
        </>
      )}
      </Wrapper>
    </main>
    </>
  )
}

export default Search;