import React from "react";
import style from "./rooms.module.css";
import room1 from "../../assets/Rooms/firstRight.png";

function Room2(props) {
  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Premium Triple Room"
      data-tooltip-place="top"
      className={style["second"]}
      onClick={props.onclick}>
      <div className={style["btn-three"]}>
        <img className={style["Feature"]} src={room1} alt="" />
      </div>
      <div
        className={style["btn-four"]}
        style={{ backgroundImage: `url(${props.left})` }}></div>
    </button>
  );
}

export default Room2;
