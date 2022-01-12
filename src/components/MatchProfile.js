import "../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const res = await axios.get("http://localhost:8000/users");
      setUserList(res.data);
    }
    getUsers();
  }, []);

  const { id } = useParams();

  const number = Number(id);
  const user = userList.find((user) => user.id === number);
  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 545, margin: "1rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.email}
        </Typography>
        <Typography variant="body2" color="GrayText.secondary">
          {user.firstName}
        </Typography>
        <Typography variant="body2" color="GrayText.secondary">
          {user.lastName}
        </Typography>
        <Typography variant="body2" color="GrayText.secondary">
          {user.phone}
        </Typography>
        <Typography variant="body2" color="GrayText.secondary">
          {user.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}
