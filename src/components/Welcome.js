import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoContext from "./InfoContext";
import Button from '@mui/material/Button';


export default function Welcome() {
  const { user } = useContext(InfoContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (user.email) {
      navigation("/");
    }
  }, [user]);

  return (
    <div>
      <h1>Public transport doesn't have to be lonely</h1>
      <p>Travelling on public transport doesn't have to be lonley.
        <br></br>
        Start making connections now.</p>
      <Button variant="contained" disableElevation to='/signup' component={Link} style={{ textTransform: 'none' }}>
        Create account
      </Button>
      <br></br>
      <br></br>
      <Button variant="contained" disableElevation component={Link} to='/Signin' style={{ textTransform: 'none' }}>
        Login
      </Button>
    </div >
  );
}
