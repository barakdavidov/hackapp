import { createContext } from "react";
const InfoContext = createContext({
  user: {},
  setUser: () => {},
});

export default InfoContext;
