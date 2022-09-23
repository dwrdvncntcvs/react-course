import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const useAuthContext = () => useContext(AuthContext);
