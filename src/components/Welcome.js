import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import InfoContext from "./InfoContext";

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
      <h1>Welcome yada yad yada</h1>
      <Link to={"/signup"}>
        <button>Create Account</button>
      </Link>
      <Link to={"/signin"}>
        <button>Sign in</button>
      </Link>
    </div>
  );
}
