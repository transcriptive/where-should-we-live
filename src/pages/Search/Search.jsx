import React, { useEffect, forwardRef, useRef, useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";
import PreLoader from "../../components/PreLoader/PreLoader";
import MapPinLocation from '../../media/map-pin-location.json';
import Success from '../../media/success-check.json';
import LoadPhoto from '../../media/photo.json';



import { Wrapper } from "@googlemaps/react-wrapper";
const GOOGLE_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Search = ({user}) => {
  const [modelData, setModelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [selected, setSelected] =useState(null);
  const [converted, setConversion] = useState();
  const [state, handleChange] = useForm({
    income: 250000,
    climate: 75,  
    pop: 500000,
    elevation: 100
  })



  const handleSubmit = async (e) => {
    console.log(state, 'submit fire')
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

  const resultsRef = useRef()
  const selectedRef = useRef()

  // function handleScroll(ref) {
  //   console.log(ref, 'onsubmit loading')
  //   // if (!loading) return;
  //   ref.current?.scrollTop({top:295, behavior: 'smooth' });
  //   }

  // function handleScroll(ref) {
  //   if(selected != null) return;
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // }



  return (
    <> 
    <main className='container mx-auto'> 
      <SearchForm 
        slider={state}
        results={modelData}
        resultsRef={resultsRef}
        // handleScroll={handleScroll}
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
            <div ref={resultsRef} id='resultsRef'>
            <ResultsCarousel 
              setConversion={setConversion}
              results={modelData}
              setSelected={setSelected}
              // ref={resultsRef}
              // handleScroll={handleScroll}

            />
            </div>
            {selected != null && 
            <>
            <div ref={selectedRef}/>
            <FormResults 
              results={modelData}
              selected={selected}
              user={user} 
            />
            </>
            }
          </>
          ) : (
            <PreLoader data={LoadPhoto} key={'success'}/> 
          )}
          
        </>
      )}
      </Wrapper>
    </main>
    </>
  )
}

export default Search;