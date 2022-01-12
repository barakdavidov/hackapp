import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "react-router-dom";

export default function NavBar() {
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
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <ForumIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ fontSize: "large" }}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
