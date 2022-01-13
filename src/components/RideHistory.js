import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InfoContext from "./InfoContext";
import { Card, Container, Typography } from "@mui/material";

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
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Ride History
      </Typography>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {routeData.map((route) => (
          <Card>
            <Typography>{route.route}</Typography>
            <Typography>{route.startCity}</Typography>
            <Typography>{route.endCity}</Typography>
            <Typography>{route.rideMatch}</Typography>
          </Card>
        ))}
      </Container>
    </>
  );
}
