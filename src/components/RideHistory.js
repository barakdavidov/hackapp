import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import InfoContext from "./InfoContext";

export default function RideHistory() {
  const [routeData, setRouteData] = useState([]);
  const { user } = useContext(InfoContext);

  const getRides = async () => {
    try {
      const res = await axios.get(`http://localHost:5500/route/history`);
      const routeData = res.data;
      setRouteData(routeData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRides();
  }, [user]);
  return <div></div>;
}
