// MainComponent.jsx
import React from "react";
import ControlTable from "./ControlTable";

function MainComponent() {
  return (
    <div>
      <h2>Visitors Table</h2>
      <ControlTable forWho="visitors" />
      
      <h2>Booked Rooms Table</h2>
      <ControlTable forWho="booked" />
      
      <h2>Residents Table</h2>
      <ControlTable forWho="residents" />
    </div>
  );
}

export default MainComponent;
