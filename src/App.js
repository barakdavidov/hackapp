import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Signin from "./components/signin"
import InfoContext from "./components/InfoContext";
import AppBar from "./components/AppBar";
import Welcome from "./components/Welcome";
import Search from "./components/Search";

function App() {
  const navigation = useNavigate();
  const getUser = () => JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    if (!user.email) {
      navigation("/welcome");
    }
  }, [user]);

  return (
    <div className="container">
      <InfoContext.Provider value={{ user, setUser }}>
        <AppBar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signin signIn={false} />} />
        </Routes>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
