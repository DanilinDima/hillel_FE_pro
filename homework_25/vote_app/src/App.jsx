import { useEffect, useState } from "react";
import "./App.css";
import droids from "./droids";

function App() {
    const [votes, setVotes] = useState({});
    const [winners, setWinners] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("votes")) || {};
        setVotes(stored);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("votes", JSON.stringify(votes));
        }
    }, [votes, isInitialized]);

    const handleVote = (id) => {
        setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const showResults = () => {
        if (!Object.keys(votes).length) return;

        const maxVotes = Math.max(...Object.values(votes));

        const winnersList = droids
            .filter((d) => votes[d.id] === maxVotes)
            .map((d) => ({
                ...d,
                votes: maxVotes,
            }));

        setWinners(winnersList);
    };

    const clearResults = () => {
        localStorage.removeItem("votes");
        setVotes({});
        setWinners(null);
    };

    return (
        <div className="container">
            <h1>Vote for the Best Star Wars Droid</h1>

            <div className="grid">
                {droids.map((d) => (
                    <div key={d.id} className="card">
                        <img src={d.img} alt={d.name} />
                        <h3>{d.name}</h3>
                        <p>Votes: {votes[d.id] || 0}</p>
                        <button onClick={() => handleVote(d.id)}>Vote</button>
                    </div>
                ))}
            </div>

            <div className="buttons">
                <button onClick={showResults}>Show Results</button>
                <button onClick={clearResults}>Clear Results</button>
            </div>

            {winners && (
                <div className="winner">
                    <h2>{winners.length > 1 ? "Winners (Tie):" : "Winner:"}</h2>
                    <div className="grid">
                        {winners.map((w) => (
                            <div key={w.id} className="card">
                                <img src={w.img} alt={w.name} />
                                <h3>{w.name}</h3>
                                <p>{w.votes} votes</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
