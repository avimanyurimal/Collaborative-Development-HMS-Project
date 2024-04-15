import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "/src/Components/Login/Login";
import Signup from "/src/Components/Signup/Signup";
import Home from "/src/Components/Home/home";
import Loading from "/src/Components/Loading/loadingLogIn"; // Import the Loading component
// import Loading from '/src/Components/Loading/loadingSignUp'; // Import the Loading component
import Control from "./Components/Admin/Control";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/loading" element={<Loading />} /> {/* Add this route */}
      {/* <Route path="/admin" element={<Control />} /> */}
    </Routes>
  );
};

export default AppRoutes;
