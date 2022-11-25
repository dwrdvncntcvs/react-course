import { createContext, useState } from "react";

const initialContext = {
  isAuth: false,
  loginAction: () => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginAction = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
