import React from "react";
import style from "./Resident.module.css";
import eating from "../../assets/ResidentHome/eating.jpg";

function ResidentHome() {
  return (
    <div className={style["ResidentHome"]}>
      <div className={style["Image"]}>
        <img className={style["Image1"]} src={eating} alt="People eating thnigs" />
        <img className={style["Image1"]} src={eating} alt="People eating thnigs" />
      </div>
      <div id={style["OtherProperty"]} className="text-black text-3xl font-bold"> Hello From Resident </div>
    </div>
  );
}

export default ResidentHome;
