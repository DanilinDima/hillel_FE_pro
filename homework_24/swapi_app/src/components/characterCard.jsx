const CharacterCard = ({ name, mass, gender, birth_year, height, planetName }) => {
    if (mass === "unknown") {
        mass = "n/a";
    } else {
        mass = `${mass} kg`;
    }

    if (birth_year === "unknown") {
        birth_year = "n/a";
    }
    return (
        <div className="card mb-3 shadow">
            <div className="card-body h-100">
                <h3 className="card-title">{name}</h3>
                <p className="card-text"><strong>Birth year:</strong> {birth_year}</p>
                <p className="card-text"><strong>Planet:</strong> {planetName}</p>
                <p className="card-text"><strong>Gender:</strong> {gender}</p>
                <p className="card-text"><strong>Height:</strong> {height} cm</p>
                <p className="card-text"><strong>Mass:</strong> {mass}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
