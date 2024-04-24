import React, { useContext } from "react";
import style from "./dropDown.module.css";
import { UserContext } from "../Login/isLogin";

import { MdOutlinePortrait } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { GrStatusUnknownSmall } from "react-icons/gr";

function DropDown() {
  const { isResident } = useContext(UserContext);

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handelProfile = () => {
    console.log("Profile");
  };
  const handelSetting = () => {
    console.log("Setting");
  };
  return (
    <div onClick={handleClick}>
      <div className={style["Profile"]} >
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
