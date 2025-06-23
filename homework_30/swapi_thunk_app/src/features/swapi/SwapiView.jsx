import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchPerson } from "./swapiSlice";

const BASE_URL = "https://swapi.py4e.com/api/";

export default function SwapiView() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.swapi);
  const [endpoint, setEndpoint] = useState("people/1");

  const handleFetch = () => {
    dispatch(fetchPerson(endpoint));
  };

  return (
    <div className="swapi-container">
      <h1>SWAPI</h1>

      <div className="input-bar">
        <input
          type="text"
          value={BASE_URL}
          disabled
          className="base-url"
        />
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="endpoint-input"
        />
        <button onClick={handleFetch}>Get info</button>
      </div>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="error-msg">Error: {error}</p>}

      {data && (
        <pre className="swapi-output">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
