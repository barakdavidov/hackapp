import React from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SearchBox(props) {
  const { setResults } = props;
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
    <Container>
      {" "}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ bgcolor: "primary.main", radius: "2rem" }}
      >
        <Typography
          variant="h6"
          sx={{ margin: "1rem 1rem 1rem 2rem", color: "white" }}
        >
          Route Search balhadsfhalsdkfjal
        </Typography>
        <TextField sx={{ bgcolor: "white", margin: "1rem", width: "22rem" }} />
        <TextField sx={{ bgcolor: "white", margin: "1rem", width: "20rem" }} />
      </Box>
    </Container>
  );
}
