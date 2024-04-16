import React from "react";
import style from "./home.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className={style["ALL"]}>
      <NavBar userName={"Samyog"} />
      <div className={style["Home"]}>
        <h1>Home</h1>
      </div>
      <Footer userName={"Username"} />
    </div>
  );
}

export default Home;
