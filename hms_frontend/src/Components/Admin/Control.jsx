import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import Home from "./Home";
import "./Admin.css";

function Control() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
      <Header OpenSidebar={OpenSidebar} />
      <div className="grid-container">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Home />
      </div>
    </div>
  );
}

export default Control;
