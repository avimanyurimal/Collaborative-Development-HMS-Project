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
    <div>
      {/* <div className="main-cards"> */}
      <div className={`card ${props.color}`}>
        <div className="card-inner">
          <h3>{props.type}</h3>
          <IconComponent className="card_icon" />
        </div>
        <h1>{props.number}</h1>
      </div>
    </div>
    // </div>
  );
}

export default Card;
