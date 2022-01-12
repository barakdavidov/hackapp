import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Signin from "./components/Signin";
import InfoContext from "./components/InfoContext";
import AppBar from "./components/AppBar";
import Welcome from "./components/Welcome";
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  console.log(process.env);
  const navigation = useNavigate();
  const getUser = () => JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(getUser());

  const theme = createTheme({
    palette: {
      primary: {
        light: "#FFA487",
        main: "#F99861",
        dark: "#FA8099",
        contrastText: "#fff",
      },
    },
  });

  useEffect(() => {
    if (!user.email) {
      navigation("/welcome");
    }
  }, [user]);

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <InfoContext.Provider value={{ user, setUser }}>
          <AppBar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signin signIn={false} />} />
          </Routes>
          <NavBar />
        </InfoContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
