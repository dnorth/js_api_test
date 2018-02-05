require('isomorphic-fetch')

/* Attempt #2 */
const fetchRequest = async (url) => await fetch(url).then((res) => res.json())
//const getData = async (url) => await fetchRequest(url)

console.log(fetchRequest("https://swapi.co/api/people/1")
    .then((data) => console.log(data))
    .catch((error) => console.log("Error: ", error.message)))