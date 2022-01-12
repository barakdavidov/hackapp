import { Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import InfoContext from "./InfoContext";

export default function Search() {
  const { user } = useContext(InfoContext);
  const [results, setResults] = useState([]);
  return (
    <div>
      <Typography variant="h4" sx={{ marginLeft: "1rem", fontWeight: "bold" }}>
        Welcome, {user.firstName}
      </Typography>
      <SearchBox setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

function SearchBox({ setResults }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    // for now is setting the results to an example
    const res = ["Person A", "Person B", "Person C"].map((p) => ({
      username: p,
      description: "Person's description here",
    }));

    setResults(res);
  };

  return (
    <>
      <h2>Route Search</h2>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="route" />
        <input type="text" placeholder="habits" />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

function SearchResults({ results }) {
  return (
    <>
      <h2>Search Results</h2>
      {results.map((result) => (
        <>
          <h4>{result.username}</h4>
          <p>{result.description}</p>
        </>
      ))}
    </>
  );
}
