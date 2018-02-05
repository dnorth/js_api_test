require('isomorphic-fetch')

/* Attempt #3 */
const fetchRequest = async (url) => await fetch(url)
const getData = async (url) => await fetchRequest(url).then((res) => res.json())

const getBrownHairedPeople = (data) => {
    return data.filter(d => d.hair_color.includes("brown"))
}

const getHomeWorlds = (data) => Promise.all(data.map(d => getData(d.homeworld)))

getData("https://swapi.co/api/people")
    .then((data) => {
        const peeps = getBrownHairedPeople(data.results)
        const planets = getHomeWorlds(peeps).then((planets) => console.log(planets))
    })
    .catch((error) => console.log("Error: ", error.message))