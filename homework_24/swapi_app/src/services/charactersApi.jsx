export async function fetchPeople() {
    const response = await fetch("https://swapi.info/api/people");
    if (!response.ok) {
        throw new Error("Data fetching error: " + response.statusText);
    }
    const data = await response.json();

    const peopleWithPlanets = await Promise.all(
        data.map(async (person) => {
            const planetRes = await fetch(person.homeworld);
            if (!response.ok) {
                throw new Error("Data fetching error: " + planetRes.statusText);
            }
            const planetData = await planetRes.json();
            return {
                ...person,
                planetName: planetData.name,
            };
        })
    );
    return peopleWithPlanets;
}
