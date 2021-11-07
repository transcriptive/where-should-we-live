const BASE_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts&gsrsearch=`

export async function fetchCountyInfo(selectedCounty) {
  const spaceReplace = selectedCounty.replaceAll(' ', '_')
  const fullReplace = spaceReplace.replaceAll(',', '%2C')
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${fullReplace}`;


  const response = await fetch(endpoint);
      console.log(response, 'response from wiki')
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log(json, 'wiki response')
      return json;
    }

