import React from "react";
import style from "./loading.module.css";

function LoadingSignUp() {
  return (
    <div className={style["main"]}>
      <div className={style["🤚"]}>
        <div className={style["👉"]}></div>
        <div className={style["👉"]}></div>
        <div className={style["👉"]}></div>
        <div className={style["👉"]}></div>
        <div className={style["🌴"]}></div>
        <div className={style["👍"]}></div>
      </div>
      <h1 id={style["Heading"]} className="text-orange-700">
        Registered Completed
      </h1>
    </div>
  );
}

export default LoadingSignUp;
