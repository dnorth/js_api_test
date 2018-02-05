require('isomorphic-fetch')

/* Attempt #2 */
const fetchRequest = async (url) => await fetch(url)
const getData = async (url) => await fetchRequest(url).then((res) => res.json())

getData("https://swapi.co/api/people/1")
    .then((data) => console.log(data))
    .catch((error) => console.log("Error: ", error.message))