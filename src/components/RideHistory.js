import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InfoContext from "./InfoContext";
import { Typography } from "@mui/material";

export default function RideHistory() {
  const [routeData, setRouteData] = useState([]);
  const { user } = useContext(InfoContext);

  const getRides = async () => {
    try {
      const res = await axios.get(`http://localHost:6000/route/history`);
      const routeData = res.data;
      setRouteData(routeData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRides();
  }, [user]);
  return (
    <>
      <Typography variant="h3">Ride History</Typography>
    </>
  );
}
