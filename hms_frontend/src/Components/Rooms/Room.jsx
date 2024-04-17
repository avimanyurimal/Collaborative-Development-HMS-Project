import React from "react";
import style from "./rooms.module.css";

function Room(props) {
  return (
    <button className={style["first"]} onClick={props.onclick}>
      <div
        className={style["btn-one"]}
        style={{ backgroundImage: `url(${props.left})` }}></div>
      <div
        className={style["btn-two"]}
        style={{ backgroundImage: `url(${props.right})` }}></div>
    </button>
  );
}

export default Room;
