import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import LoadingSignUp from "./Components/Loading/loadingSignUp.jsx";
import LoadingLogIn from "./Components/Loading/loadingLogIn.jsx";
import Home from "./Components/Home/home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loading" element={<LoadingSignUp />} />
      <Route path="/loadingLoin" element={<LoadingLogIn />} />
      <Route path="/home" element={<Home />} />
      <Route element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
