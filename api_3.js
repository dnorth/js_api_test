require('isomorphic-fetch')

/* Attempt #3 */
const fetchRequest = async (url) => await fetch(url).then((res) => res.json())

const getBrownHairedPeople = (data) => {
    return data.filter(d => d.hair_color.includes("brown"))
}

const getHomeWorlds = (data) => Promise.all(data.map(d => fetchRequest(d.homeworld)))

fetchRequest("https://swapi.co/api/people")
    .then((data) => {
        const peeps = getBrownHairedPeople(data.results)
        const planets = getHomeWorlds(peeps).then((planets) => console.log(planets))
    })
    .catch((error) => console.log("Error: ", error.message))