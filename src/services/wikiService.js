const BASE_URL = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=extracts&gsrsearch=`
// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&gsrlimit=1&prop=extracts&gsrsearch=

// Second: https://en.wikipedia.org/w/api.php?action=query&generator=search&prop=extract&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=

export async function fetchCountyInfo(selectedCounty) {
  const spaceReplace = selectedCounty.replaceAll(' ', '_')
  const fullReplace = spaceReplace.replaceAll(',', '%2C')
  const endpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&origin=*&exchar=250&gsrlimit=1&prop=extracts&gsrsearch=${fullReplace}`;
  const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      let data = json.query.pages
      let pageId = Object.keys(json.query.pages)[0]
      let extract = data[pageId].extract
      let fixExtract = extract.replace(/<\/?[^>]+(>|$)/g, "");
      return fixExtract;
    }
