require('isomorphic-fetch')

const getBrownHairedPeople = data =>
  data.filter(d => d.hair_color.includes('brown'))

const fetchAll = async () => {
  const peopleDataFetch = await fetch('https://swapi.co/api/people')
  const people = await peopleDataFetch.json()
  const brownHairPeople = getBrownHairedPeople(people.results)

  const allPeople = await Promise.all(
    brownHairPeople.map(async (d) => {
        const fetchResult = await fetch(d.homeworld)
        const { name } = await fetchResult.json()
        return {
          name: d.name,
          homeWorld: name
        }
      })
    )
  console.log(allPeople)
}

fetchAll()