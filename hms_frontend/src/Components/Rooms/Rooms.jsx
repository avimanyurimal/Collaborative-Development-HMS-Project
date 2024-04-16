import React from "react";
import style from "./rooms.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Rooms() {
  return (
    <div className={style["ALL"]}>
      <NavBar userName={"username"} />
      <div className={style["Home"]}>
        <div className={style["first"]}>
          <button className={style["btn-one"]}></button>
          <button className={style["btn-two"]}></button>
        </div>
        <div className={style["second"]}>
          <button className={style["btn-four"]}></button>
          <button className={style["btn-three"]}></button>
        </div>
      </div>
      <Footer userName={"Username"} />
    </div>
  );
}

export default Rooms;
