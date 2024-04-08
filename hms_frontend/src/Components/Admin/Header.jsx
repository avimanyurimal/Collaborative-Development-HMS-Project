import React from "react";
import "./Admin.css";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>

      <div className="header-right">
        <h1 className="text-right xl:text-3xl lg:text-2xl md:text-1xl font-bold">
          Wellcome to Admin DashBoard
        </h1>
      </div>
    </header>
  );
}

export default Header;
