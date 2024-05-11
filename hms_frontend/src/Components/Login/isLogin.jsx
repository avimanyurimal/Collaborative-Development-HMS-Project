import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') ? true : false);
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [isResident, setIsResident] = useState(localStorage.getItem('isResident') === 'true'); // Read from localStorage for residency status
  
  useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem('isResident', isResident); // Save residency status to localStorage
  }, [isResident]);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, firstName, setFirstName, isResident, setIsResident }}>
      {children}
    </UserContext.Provider>
  );
};
