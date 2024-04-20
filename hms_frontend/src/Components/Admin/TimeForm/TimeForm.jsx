import React from "react";
import style from "./timefrom.module.css";

function TimeForm(props) {

  return (
    <>
      <div className={style["main"]}>
        <div className={style["Date"]}>
          <label htmlFor="Date" className="text-white">
            Date
          </label>
          <input
            type="date"
            className="text-black cursor-pointer rounded p-2"
          />
        </div>
        <div className={style["type"]}>
          <label htmlFor="" className="text-white text-[1.5em] font-bold">
            {props.type}
          </label>
          <textarea
            name="type"
            className="text-black rounded p-3"
            id={style["textarea"]}
            cols="60"
            rows="10"></textarea>
        </div>
        <button onClick={props.onclick} className={style["POST"]}>POST</button>
      </div>
    </>
  );
}

export default TimeForm;
