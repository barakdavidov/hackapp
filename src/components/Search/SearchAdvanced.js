import React, { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

function SearchAdvanced(props) {
  const [people, setPeople] = useState([0, 20]);
  const [age, setAge] = useState([18, 100]);

  function peopleValueText(value) {
    return `${value}`;
  }

  function ageValueText(value) {
    return `${value}`;
  }

  const handlePeopleChange = (event, peopleValue) => {
    setPeople(peopleValue);
  };

  const handleAgeChange = (event, ageValue) => {
    setAge(ageValue);
  };

  return (
    <Container
      sx={{
        mt: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>
        {" "}
        <Typography id="input-slider" gutterBottom sx={{ fontSize: "14px" }}>
          How many people would you like to bond with?
        </Typography>
      </>
      <Slider
        getAriaLabel={() => "People Range"}
        value={people}
        onChange={handlePeopleChange}
        valueLabelDisplay="auto"
        getAriaValueText={peopleValueText}
        track={false}
        sx={{ color: "white", display: "flex" }}
      />
      <>
        {" "}
        <Typography id="input-slider" gutterBottom sx={{ fontSize: "14px" }}>
          What ages would you like to talk to?
        </Typography>
        <Slider
          getAriaLabel={() => "Age Range"}
          value={age}
          onChange={handleAgeChange}
          valueLabelDisplay="auto"
          getAriaValueText={ageValueText}
          track={false}
          sx={{ color: "white", display: "flex", alignSelf: "center" }}
        />
      </>
    </Container>
  );
}

export default SearchAdvanced;
