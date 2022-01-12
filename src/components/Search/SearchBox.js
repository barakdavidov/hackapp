import React, { useState } from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SearchBox(props) {
  const { setResults } = props;
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // for now is setting the results to an example
    const res = ["Person A", "Person B", "Person C"].map((p) => ({
      username: p,
      description: "Person's description here",
    }));

    setResults(res);
  };

  const handleChange = (event) => {};

  return (
    <Container>
      {" "}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ bgcolor: "primary.main", borderRadius: "1rem" }}
      >
        <Typography
          variant="h6"
          sx={{
            margin: "2rem 1rem 0 2rem",
            paddingTop: ".5rem",
            color: "white",
          }}
        >
          Route Search
        </Typography>
        <TextField
          sx={{
            margin: "1rem",
            width: "20rem",
            bgcolor: "white",
            borderRadius: "0.5rem",
          }}
          variant="outlined"
        />
        <FormControl
          sx={{
            margin: "1rem",
            width: "20rem",
            bgcolor: "white",
            borderRadius: "0.5rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">Hobbies</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hobbies}
            label="Hobbies"
            onChange={handleChange}
          >
            <MenuItem value={10}>Hello</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
}
