// import React, { useState, createContext } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [firstName, setFirstName] = useState(""); // Adding state for first name

//   return (
//     <UserContext.Provider value={{ isLogin, setIsLogin, firstName, setFirstName }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState(""); // Adding state for first name
  const [isResident, setIsResident] = useState(false); // Adding state for resident

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, firstName, setFirstName, isResident, setIsResident }}>
      {children}
    </UserContext.Provider>
  );
};
