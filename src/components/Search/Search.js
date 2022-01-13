import { Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import InfoContext from "../InfoContext";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

export default function Search() {
  const { user } = useContext(InfoContext);
  console.log(user);

  const [results, setResults] = useState([]);
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ margin: "1rem 1rem 1rem 2rem", fontWeight: "bold" }}
      >
        Welcome, {user.first_name}
      </Typography>
      <SearchBox setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}
