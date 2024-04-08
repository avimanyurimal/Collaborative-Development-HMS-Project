import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <div class={style["main"]}>
        <div class={style["navbar"]}>
          <div class={style["icon"]}>
            <h2 class={style["logo"]}>Logo</h2>
          </div>
          <div class={style["menu"]}>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ff7200]" : "text-black"}`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ff7200]" : "text-black"}`
                  }>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hobbies"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ff7200]" : "text-black"}`
                  }>
                  HOBBIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/family"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ff7200]" : "text-black"}`
                  }>
                  FAMILY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ff7200]" : "text-black"}`
                  }>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
