import React from "react";
import "./Admin.css";
import { Link, NavLink } from "react-router-dom";

import {
  BsCart3,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function SideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <div>
            <BsCart3 className="icon_header" />
          </div>
          <span className="h1">
            Hostel <br /> Management <br />
            System
          </span>
          <div className="closee">
            <span className="icon close_icon" id="close" onClick={OpenSidebar}>
              X
            </span>
          </div>
        </div>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink className={({isActive}) => `${"link"} ${isActive ? "text-orange-400" : "text-white"}`} to="/admin">
            <BsListCheck className="icon" />
            <h2>ADMIN</h2>
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink
            className={({ isActive }) =>
              `${"link"} ${
                isActive ? "text-orange-400 font-bold" : "text-white"
              }`
            }
            to="/visitor">
            <BsListCheck className="icon" />
            <h2>VISITOR</h2>
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink
            className={({ isActive }) =>
              `${"link"} ${
                isActive ? "text-orange-400 font-bold" : "text-white"
              }`
            }
            to={"/booked"}>
            <BsMenuButtonWideFill className="icon" />
            <h2>BOOKED</h2>
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink
            className={({ isActive }) =>
              `${"link"} ${
                isActive ? "text-orange-400 font-bold" : "text-white"
              }`
            }
            to={"/resident"}>
            <BsMenuButtonWideFill className="icon" />
            <h2>RESEDENT</h2>
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink
            className={({ isActive }) =>
              `${"link"} ${
                isActive ? "text-orange-400 font-bold" : "text-white"
              }`
            }
            to={"/setting"}>
            <BsFillGearFill className="icon" />
            <h2>SETTING</h2>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
