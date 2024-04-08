import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "/src/Components/Login/Login";
import Signup from "/src/Components/Signup/Signup";
import Home from "/src/Components/Home/home";
import Loading from "/src/Components/Loading/loadingLogIn"; // Import the Loading component
// import Loading from '/src/Components/Loading/loadingSignUp'; // Import the Loading component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/loading" element={<Loading />} /> {/* Add this route */}
    </Routes>
  );
};

export default AppRoutes;
