import React from "react";
import "./Admin.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

function Card(props) {
  const IconComponent = props.icon;
  return (
    <button className={`${props.CARD}`} onClick={props.onclick}>
      {/* <div className="main-cards"> */}
      <div className={`${props.card} ${props.color}`}>
        <div className="card-inner">
          <div>
            <h3>{props.type}</h3>
            <h1>{props.number}</h1>
          </div>
          <IconComponent className="card_icon" />
        </div>
      </div>
    </button>
    // </div>
  );
}

export default Card;
