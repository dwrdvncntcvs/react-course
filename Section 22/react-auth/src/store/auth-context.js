import { createContext, useState } from "react";

const initialContext = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("auth_token") || null;
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const login = (token) => {
    localStorage.setItem("auth_token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
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
