import React from "react";
import style from "./Resident.module.css";
import eating from "../../assets/ResidentHome/eating.jpg";

function ResidentHome() {
  return (
    <div className={style["ResidentHome"]}>
      <div id={style["OtherProperty"]} className="text-black text-3xl font-bold"> Hello From Resident </div>
      <div className={style["Form"]}>
        <div>BreakFast</div>
        <div>Launch</div>
        <div>Dinner</div>
      </div>
    </div>
  );
}

export default ResidentHome;
