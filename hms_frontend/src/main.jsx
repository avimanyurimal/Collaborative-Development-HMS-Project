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
import Control from "./Components/Admin/Control.jsx";
import Visitor from "./Components/Admin/Visitor/Visitor.jsx";
import Resident from "./Components/Admin/Resident/Resident.jsx";
import Booked from "./Components/Admin/Booked/Booked.jsx";
import Setting from "./Components/Admin/Setting/setting.jsx";
import About from "./Components/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { UserProvider } from "./Components/Login/isLogin.jsx";
import BookNow from "./Components/BookNow/BookNow.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<App />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Home />} />
      <Route path="/booknow" element={<BookNow />}/>
      <Route path="/contact" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loading" element={<LoadingSignUp />} />
      <Route path="/loadingLoin" element={<LoadingLogIn />} />
      <Route path="/admin" element={<Control />} />
      <Route path="/admin/visitor" element={<Visitor />} />
      <Route path="/admin/resident" element={<Resident />} />
      <Route path="/admin/booked" element={<Booked />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path="/footer" element={<Footer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
