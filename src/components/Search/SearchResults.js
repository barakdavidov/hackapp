import React from "react";

function SearchResults(props) {
  const { results } = props;
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

export default SearchResults;
