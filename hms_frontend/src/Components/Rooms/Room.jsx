import React from "react";
import style from "./rooms.module.css";
import room2 from "../../assets/Rooms/secondRight.png";

function Room(props) {
  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Executive Double Private"
      data-tooltip-place="top"
      className={style["second"]}
      onClick={props.onclick}>
      <div
        className={style["btn-four"]}
        style={{ backgroundImage: `url(${props.left})` }}></div>
      <div className={style["btn-three"]}>
        <img className={style["Feature"]} src={room2} alt="" />
      </div>
    </button>
  );
}

export default Room;
