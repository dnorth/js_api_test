require('isomorphic-fetch')

/* Attempt #4 */
const fetchRequest = async (url) => await fetch(url).then((res) => res.json())

const getBrownHairedPeople = (data) => {
    return data.filter(d => d.hair_color.includes("brown"))
}

const getHomeWorlds = (data) => Promise.all(data.map(d => fetchRequest(d.homeworld)))

const getPeopleAndHomeworld = async (url) => {
    const people = await fetchRequest(url)
    const brownHaired = getBrownHairedPeople(people.results)
    const planets = await getHomeWorlds(brownHaired)

    console.log(planets)
}

getPeopleAndHomeworld("https://swapi.co/api/people")