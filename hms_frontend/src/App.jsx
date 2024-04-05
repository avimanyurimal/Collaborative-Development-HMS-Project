// import { useState } from "react";
// import "./App.css";
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import LodingSignUp from "./Components/Loding/lodingSignUp";
// import LodingLogIn from "./Components/Loding/lodingLogIn";

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   return (
//     <>
//       {/* <Navbar /> */}
//       {/* <Loding /> */}
//       {/* <LodingLogIn /> */}
//       <Outlet />
//     </>
//   );
// }

// export default App;

// App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '/src/Navbar.jsx';
import AppRoutes from '/src/routes.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;