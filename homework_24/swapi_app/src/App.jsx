import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharacterCard from "./components/characterCard";
import { fetchPeople } from "./services/charactersApi";

function App() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPeople()
            .then(setPeople)
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-primary">Star Wars Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row">
                    {people.map((person, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <CharacterCard
                                name={person.name}
                                birth_year={person.birth_year}
                                planetName={person.planetName}
                                height={person.height}
                                mass={person.mass}
                                gender={person.gender}
                            ></CharacterCard>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
