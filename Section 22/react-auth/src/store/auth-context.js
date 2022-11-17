import { createContext, useState } from "react";

const initialContext = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(initialContext);

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = Math.abs(currentTime - adjExpirationTime);

  return remainingTime;
};

const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("auth_token") || null;
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
  };

  const login = (token, expirationTime) => {
    localStorage.setItem(
      "remainingTime",
      calculateRemainingTime(expirationTime)
    );
    setToken(token);
    const remainingTime = calculateRemainingTime(expirationTime);
    setTimeout(logout, remainingTime);
  };

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn: userIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
