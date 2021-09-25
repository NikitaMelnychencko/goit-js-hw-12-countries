export default function fetchCountries(searchQuery) {
 const r = fetch(`https://restcountries.com/v2/name/{searchQuery}`)
  .then(response => {
    return response.json()
  })
  .then(country => {
    console.log(country);
  }

  ) 
}


