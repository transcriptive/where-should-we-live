const GOOGLE_API = process.env.REACT_APP_GOOGLE_PLACES_API_KEY

const BASE_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=`

const EXT_URL = `&inputtype=textquery&key=${GOOGLE_API}`

export function fetchCountyID(selectedCounty) {
  console.log()
  return fetch(BASE_URL + selectedCounty + EXT_URL, {
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