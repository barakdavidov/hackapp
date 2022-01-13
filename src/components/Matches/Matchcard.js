import React, { useContext } from "react";
import { Grid, CardMedia, List, ListItem } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalContext";

function Matchcard() {
  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    try {
      const res = await axios.get(`http://localHost:5050/users/`);
      const userListData = res.data;
      setUserList(userListData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <Grid container spacing={2}>
      {userList.map((user) => (
        <Grid
          item
          key={uuidv4()}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardMedia
            component="img"
            image={user.profilePicture}
            alt="user"
            style={{ width: "80px", height: "80px", marginRight: "0.5rem" }}
          />
          <Link
            to={`/admin-user-card/${user._id}`}
            style={{
              display: "flex",
              alignItems: "center ",
              justifyContent: "center",
              fontSize: "18px",
              textDecoration: "none",
              color: "black",
              linkVisited: "black",
            }}
          >
            {user.firstName} {user.lastName}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
