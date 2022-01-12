import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ChatRoom from "./components/Chat/ChatRoom";
import SignUser from "./components/Auths/SignUser";
import InfoContext from "./components/InfoContext";
import AppBar from "./components/AppBar";
import Welcome from "./components/Welcome";
import Search from "./components/Search/Search";
import UserProfile from "./components/Matches/MatchProfile";
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RideHistory from "./components/RideHistory";
import AdminPage from "./components/AdminPage";
import MatchProfile from "./components/Matches/MatchProfile";
import Interests from "./components/Interests";

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
            <Route path="/signin" element={<SignUser />} />
            <Route path="/signup" element={<SignUser signIn={false} />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/ride-history" element={<RideHistory />} />
            <Route path="/admin-page" element={<AdminPage />} />
            <Route path="/matches" element={<MatchProfile />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
          <NavBar />
        </InfoContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
