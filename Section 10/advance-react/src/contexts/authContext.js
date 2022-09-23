import { createContext, useEffect, useState } from "react";

const AUTH_STATE = { isLoggedIn: false, onLogout: () => {}, onLogin: () => {} };

const AuthContext = createContext(AUTH_STATE);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(AUTH_STATE);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) setState((prev) => ({ ...state, isLoggedIn: true }));
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isAuthenticated", true);
    setState((prev) => ({ ...state, isLoggedIn: true }));
  };

  const logoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    setState((prev) => ({ ...state, isLoggedIn: false }));
  };

  return (
    <AuthContext.Provider
      value={{ ...state, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
