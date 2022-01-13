import React from "react";
import { Container, Typography, Button } from "@mui/material";

function SearchResults(props) {
  const { results } = props;
  return (
    <Container sx={{ ml: "2.5rem", mt: "1rem" }}>
      {results.map((result) => (
        <>
          <Typography>{result.username}</Typography>
          <Typography>{result.description}</Typography>
        </>
      ))}

      {results.length >= 1 && (
        <Button>Start a chat with {results.username}</Button>
      )}
    </Container>
  );
}

export default SearchResults;
