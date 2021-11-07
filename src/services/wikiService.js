const BASE_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=extracts&gsrsearch=`
// `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&gsrsearch=`
export function fetchCountyInfo(selectedCounty) {
  console.log()
  return fetch(BASE_URL + selectedCounty, {
    method:"GET",
    cache: "no-cache",
    headers:{
      "Content-Type":"application/json",
      "Access-Control-Allow-Credentials": true,
    },
    mode:"no-cors"
  })
  .then(response => (response.json()))
}