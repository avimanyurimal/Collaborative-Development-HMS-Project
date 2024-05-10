import React, { useContext } from "react";
import style from "./rooms.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Room from "./Room";
import Room2 from "./Room2";
import first from "../../assets/Rooms/first.png";
import firstRight from "../../assets/Rooms/firstRight.png";
import second from "../../assets/Rooms/second.png";
import secondRight from "../../assets/Rooms/secondRight.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Login/isLogin";

function Rooms() {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const handelNavigation = () => {
    if (isLogin){
      navigate("/booknow");
    } else {
      navigate("/login")
    }
  };
  return (
    <div className={style["ALL"]}>
      <NavBar />
      <div className={style["Rooms"]}>
        <Room onclick={handelNavigation} left={first} right={firstRight} />
        <Room2 onclick={handelNavigation} left={second} right={secondRight} />
      </div>
      <Footer userName={"Username"} />
    </div>
  );
}

export default Rooms;

{
  /* <div className={style["second"]}>
          <button className={style["btn-four"]}></button>
          <button className={style["btn-three"]}></button>
        </div> */
}
