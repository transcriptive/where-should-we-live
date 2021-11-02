const BASE_URL = '/model'



export function getModelResults() {
  async function fetchData() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data, 'json data')

        const results = Object.entries(data.model_results.county).map(
          ([key, val]) => Object.fromEntries([
            ['row_number', key],
            ['county', val]
          ]))
        console.log(results, "results")
        // SetModelData(results);
    } catch (e) {
        console.error(e);
    }
  };
  fetchData();
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