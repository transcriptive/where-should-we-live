const BASE_URL = 'https://product-club-us-census.herokuapp.com//model'


// fetchData() posts a request to the data model with user input values on SearchForm. Flask backend, locally at port 5000, processes values through county(), sends the results back as the response, converts to json, returns result to handleSubmit()
export function fetchData(state) {
  console.log(state)
  return fetch(BASE_URL, {
    method:"POST", 
    cache: "no-cache", 
    headers:{
      "Content-Type":"application/json", 
      "Access-Control-Allow-Credentials": true,
    }, 
    mode: "no-cors",
    body:JSON.stringify({state})
  })
  .then(response => response.json())
}