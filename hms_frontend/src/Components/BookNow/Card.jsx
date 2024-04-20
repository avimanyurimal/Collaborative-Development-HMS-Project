import React, { useState } from "react";
import style from "./booknow.module.css";
import { IoAccessibility } from "react-icons/io5";
import BookNowForm from "./BookNowForm";

function Card(props) {
  const [form, setForm] = useState();

  const handelForm = () => {
    setForm(!form);
  };
  return (
    <div className={style["Main-Card"]}>
      <div className={style["Card"]}>
        <div className={style["Image"]}>
          <img
            className="rounded"
            src={props.photo}
            alt="Hotel Image"
            height="152px"
            width="204px"
          />
          <span className="text-center" id={style["Imgaefotter"]}>
            {props.type}
          </span>
        </div>
        <div id={style["box"]} className="rounded-xl">
          <div className={style["Text"]}>
            <h3>{props.type}</h3>
            <p className={style["capacity"]}>
              Room Capacity: {props.capacity} <IoAccessibility />
            </p>
            <p>Room Rates Inclusive of Tax</p>
          </div>
          <div className={style["Control"]}>
            <h3>NRP RS {props.price}</h3>
            <button onClick={handelForm}>Book Now</button>
            {form ? <BookNowForm setForm={setForm} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
