const BASE_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts&gsrsearch=`

export function fetchCountyInfo(selectedCounty) {
  const spaceReplace = selectedCounty.replaceAll(' ', '_')
  const fullReplace = spaceReplace.replaceAll(',', '%2C')
  console.log(fullReplace)
  return fetch(BASE_URL + fullReplace, {
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Access-Control-Allow-Credentials": true,
    },
    mode:"no-cors"
  })
  .then(response => (response.json()))
}