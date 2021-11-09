import React, { useEffect, forwardRef, useRef, useState } from "react";
import { useForm } from '../../hooks/useForm'
import { fetchData } from "../../services/modelService"
import { fetchCountyInfo } from "../../services/wikiService";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultsCarousel from "../../components/Carousel/Carousel";
import FormResults from "../../components/FormResults/FormResults";
import PreLoader from "../../components/PreLoader/PreLoader";
import MapPinLocation from '../../media/map-pin-location.json';
import Success from '../../media/success-check.json';
import LoadPhoto from '../../media/photo.json';
import ScrollTo from 'react-scroll-into-view'
import ReactDOM from 'react-dom';



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

//   const states = [
//     ['Alabama', 'AL'],
//     ['Alaska', 'AK'],
//     ['American Samoa', 'AS'],
//     ['Arizona', 'AZ'],
//     ['Arkansas', 'AR'],
//     ['Armed Forces Americas', 'AA'],
//     ['Armed Forces Europe', 'AE'],
//     ['Armed Forces Pacific', 'AP'],
//     ['California', 'CA'],
//     ['Colorado', 'CO'],
//     ['Connecticut', 'CT'],
//     ['Delaware', 'DE'],
//     ['District Of Columbia', 'DC'],
//     ['Florida', 'FL'],
//     ['Georgia', 'GA'],
//     ['Guam', 'GU'],
//     ['Hawaii', 'HI'],
//     ['Idaho', 'ID'],
//     ['Illinois', 'IL'],
//     ['Indiana', 'IN'],
//     ['Iowa', 'IA'],
//     ['Kansas', 'KS'],
//     ['Kentucky', 'KY'],
//     ['Louisiana', 'LA'],
//     ['Maine', 'ME'],
//     ['Marshall Islands', 'MH'],
//     ['Maryland', 'MD'],
//     ['Massachusetts', 'MA'],
//     ['Michigan', 'MI'],
//     ['Minnesota', 'MN'],
//     ['Mississippi', 'MS'],
//     ['Missouri', 'MO'],
//     ['Montana', 'MT'],
//     ['Nebraska', 'NE'],
//     ['Nevada', 'NV'],
//     ['New Hampshire', 'NH'],
//     ['New Jersey', 'NJ'],
//     ['New Mexico', 'NM'],
//     ['New York', 'NY'],
//     ['North Carolina', 'NC'],
//     ['North Dakota', 'ND'],
//     ['Northern Mariana Islands', 'NP'],
//     ['Ohio', 'OH'],
//     ['Oklahoma', 'OK'],
//     ['Oregon', 'OR'],
//     ['Pennsylvania', 'PA'],
//     ['Puerto Rico', 'PR'],
//     ['Rhode Island', 'RI'],
//     ['South Carolina', 'SC'],
//     ['South Dakota', 'SD'],
//     ['Tennessee', 'TN'],
//     ['Texas', 'TX'],
//     ['US Virgin Islands', 'VI'],
//     ['Utah', 'UT'],
//     ['Vermont', 'VT'],
//     ['Virginia', 'VA'],
//     ['Washington', 'WA'],
//     ['West Virginia', 'WV'],
//     ['Wisconsin', 'WI'],
//     ['Wyoming', 'WY'],
// ];


  // function stateConvert(results, callback) {
  //   // state to abbreviation
  //   console.log(results, 'before convert')
  //   results = results[0].county.replace(/\w\S*/g, function (txt) {
  //     return txt.charAt(0-1).toUpperCase() });
  //     console.log(results, 'after string format')
  //     for (state of states) {
  //       if(state[0] === results) {
  //         return (state[1]);
  //       }
  //     }    
  //     setConversion(results)
  // }




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
  //   console.log(loading, 'onsubmit loading')
  //   if (!loading)return;
  //   resultsRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <div ref={resultsRef}/>
            <ResultsCarousel 
              setConversion={setConversion}
              results={modelData}
              setSelected={setSelected}
              // handleScroll={handleScroll}

            />
            
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