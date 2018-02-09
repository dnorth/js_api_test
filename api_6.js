require('isomorphic-fetch')

const getBrownHairedPeople = data => data.filter(d => d.hair_color.includes('brown'))

const fetchRequest = async (url) => {
  const data = await fetch(url)
  return data.json()
}

const mapHomePlanet = async (person) => {
  const { name } = await fetchRequest(person.homeworld)
  return {
    name: person.name,
    homeworld: name
  }
}

const mapHomePlanets = people => {
  const planets = people.map(mapHomePlanet)
  
  return Promise.all(planets)
}

const fetchAll = async () => {
  const people = await fetchRequest('https://swapi.co/api/people')
  const brownHairPeople = getBrownHairedPeople(people.results)
  const allPeople = await mapHomePlanets(brownHairPeople)
  
  console.log(allPeople)
}

fetchAll()