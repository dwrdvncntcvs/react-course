import { createContext, useState } from "react";

const initialContext = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
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
