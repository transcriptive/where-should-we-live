const BASE_URL = '/model'


export function fetchData(incomeRangeVal, climateRangeVal, popRangeVal) {
  return fetch(BASE_URL, {
    method:"POST", 
    cache: "no-cache", 
    headers:{
      "Content-Type":"application/json", 
    }, 
    body:JSON.stringify({incomeRangeVal,climateRangeVal,popRangeVal})
  })
  .then(response => response.json())
}


// useEffect(() => {
//   async function fetchData() {
//       try {
//           const response = await fetch(
//               `/model`
//           );
//           const data = await response.json();
//           console.log(data, 'json data')

//           const results = Object.entries(data.model_results.county).map(
//             ([key, val]) => Object.fromEntries([
//               ['row_number', key],
//               ['county', val]
//             ]))
//           console.log(results, "results")
//           SetModelData(results);
//       } catch (e) {
//           console.error(e);
//       }
//   };
//   fetchData();