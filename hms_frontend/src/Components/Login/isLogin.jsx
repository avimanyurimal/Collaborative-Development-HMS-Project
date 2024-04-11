import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserContext.Provider>
  );
};
