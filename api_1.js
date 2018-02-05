require('isomorphic-fetch')

//why do I have to call .then() on response.json()? 
// Because you receive the response when all headers have arrived. Calling .json() gets you a promise for the body of the http response that is yet to be loaded

/* Attempt #1 */
const fetchRequest = async (url) => await fetch(url)

fetchRequest("https://swapi.co/api/people/1")
    .then((response) => response.json().then((data) => return data))
    .catch((error) => console.log("Error: ", error.message))