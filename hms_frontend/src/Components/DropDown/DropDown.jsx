import React, { useContext } from "react";
import style from "./dropDown.module.css";
import { UserContext } from "../Login/isLogin";
import { useNavigate } from "react-router-dom";

import { MdOutlinePortrait } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { GrStatusUnknownSmall } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";

function DropDown({ setOnProfile }) {
  const { isResident, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handelProfile = () => {
    setOnProfile(false);
    navigate("/profile");
  };
  const handelSetting = () => {
    setOnProfile(false);
    navigate("/profilesetting");
  };

  const handleAlert = () => {
    const result = window.confirm("Are you sure you want to Log Out?");
    if (result) {
      setIsLogin(false);
      console.log("User clicked OK");
    } else {
      console.log("User clicked Cancel");
    }
  };

  const handelLogOut = () => {
    setOnProfile(false);
    handleAlert();
  };

  return (
    <div onClick={handleClick}>
      <div className={style["Profile"]}>
        <div className={style["WHO"]}>
          <GrStatusUnknownSmall /> {isResident ? "Resident" : "Visitor"}
        </div>
        <hr />
        <hr />
        <hr />
        <div className={style["LIS"]}>
          <Lis
            what={"Profile"}
            icon={MdOutlinePortrait}
            Click={handelProfile}
          />
          <Lis what={"Setting"} icon={IoSettings} Click={handelSetting} />
          <Lis what={"Log Out"} icon={IoIosLogOut} Click={handelLogOut} />
        </div>
      </div>
    </div>
  );
}

export default DropDown;

function Lis(props) {
  return (
    <button className={style["card"]} onClick={props.Click}>
      <props.icon />
      {props.what}
    </button>
  );
}
