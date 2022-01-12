import React, { useState } from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Switch from "@mui/material/Switch";
import Fade from "@mui/material/Fade";
import SearchAdvanced from "./SearchAdvanced";

export default function SearchBox(props) {
  const { setResults } = props;
  const [hobbies, setHobbies] = useState("");
<<<<<<< Updated upstream
=======
  const [checked, setChecked] = useState(false);
>>>>>>> Stashed changes
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // for now is setting the results to an example
    const res = ["Person A", "Person B", "Person C"].map((p) => ({
      username: p,
      description: "Person's description here",
    }));

    setResults(res);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setHobbies(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
<<<<<<< Updated upstream
=======

  const handleOpen = () => {
    setChecked(!checked);
  };
>>>>>>> Stashed changes

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ bgcolor: "primary.main", borderRadius: "1rem" }}
      >
        <Typography
          variant="h6"
          sx={{
            margin: "1rem 1rem 0 2rem",
            paddingTop: "1rem",
            color: "white",
          }}
        >
          Route Search
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="What route are you on?"
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
              margin: "1rem 1rem 2rem 1rem",
              width: "20rem",
              bgcolor: "white",
              borderRadius: "0.5rem",
            }}
          >
            <InputLabel id="demo-multiple-chip-label">Hobbies</InputLabel>
            <Select
              required
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={hobbies}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
<<<<<<< Updated upstream
              {hobbies.map((hobby) => (
                <MenuItem key={hobby} value={hobby}>
                  {hobby}
                </MenuItem>
              ))}
=======
              {/* {hobbies.map((hobby) => (
                <MenuItem key={hobby} value={hobby}>
                  {hobby}
                </MenuItem>
              ))} */}
>>>>>>> Stashed changes
            </Select>
          </FormControl>
        </Container>
        <Container>
          <IconButton
            color="inherit"
            sx={{ fontSize: "large", mt: "-2rem" }}
            onClick={handleOpen}
          >
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
          {checked && <SearchAdvanced />}
        </Container>
      </Box>
    </Container>
  );
}
