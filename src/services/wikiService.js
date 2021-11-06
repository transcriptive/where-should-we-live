const WIKI_API = process.env.REACT_APP_GOOGLE_PLACES_API_KEY

const BASE_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=`

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