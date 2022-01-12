import React from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";

function SearchResults(props) {
  const { results } = props;
  return (
    <Container sx={{ ml: "2.5rem", mt: "1rem" }}>
      {results.map((result) => (
        <>
          <h4>{result.username}</h4>
          <p>{result.description}</p>
        </>
      ))}
    </Container>
  );
}

export default SearchResults;
