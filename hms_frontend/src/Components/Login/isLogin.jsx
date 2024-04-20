import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState(""); // Adding state for first name

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, firstName, setFirstName }}>
      {children}
    </UserContext.Provider>
  );
};
