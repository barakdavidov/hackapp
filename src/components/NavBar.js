import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

export default function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    linkHover: "fec1a5",
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/profile/:id" sx={{ linkStyle }}>
              <AccountCircleOutlinedIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/search" sx={{ linkStyle }}>
              <SearchIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/chat" sx={{ linkStyle }}>
              <ForumIcon />
            </Link>
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <Link to="/notifications" sx={{ linkStyle }}>
              <NotificationsIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
