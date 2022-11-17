import { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer;

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
  console.table({ currentTime, adjExpirationTime });

  const remainingTime = adjExpirationTime - currentTime;

  return remainingTime;
};

const retrieveStoredToken = () => {
  const token = localStorage.getItem("auth_token");
  const exp_time = localStorage.getItem("exp_time");

  const remainingTime = calculateRemainingTime(exp_time);
  console.table({ remainingTime });

  if (remainingTime <= 3600) {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("exp_time");
    return null;
  } else return { token, remainingTime: +remainingTime };
};

const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) initialToken = tokenData.token;

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logout = useCallback(() => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("exp_time");
    setToken(null);

    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  const login = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem("exp_time", expirationTime);
    localStorage.setItem("auth_token", token);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.remainingTime);
      logoutTimer = setTimeout(logout, tokenData.remainingTime);
    }
  }, [tokenData, logout]);

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn: userIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
