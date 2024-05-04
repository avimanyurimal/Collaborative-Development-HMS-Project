import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import "react-tooltip/dist/react-tooltip.css";

import logo from "./logo.png";
import { UserContext } from "../Login/isLogin";
import DropDown from "../DropDown/DropDown";

function NavBar({}) {
  const [onProfile, setOnProfile] = useState(false);
  const { isLogin, firstName, isResident } = useContext(UserContext);
  const navigate = useNavigate();
  let MenuRef = useRef();

  // If user is not logged in, redirect to login page

  const handleLogin = () => {
    navigate("/login");
  };

  // If user is logged in, display the first name on the navbar, otherwise display "Login"
  const displayName = isLogin ? <div>{firstName} </div> : "Login";
  const displayPlace = isLogin ? (
    <div>
      {isResident ? (
        <span className={style["Who"]}>Resident</span>
      ) : (
        <span className={style["Who"]}>Visitor</span>
      )}
    </div>
  ) : null;

  const handelProfile = () => {
    setOnProfile(!onProfile);
  };

  useEffect(() => {
    const handelOutsideClick = (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setOnProfile(false);
      }
    };
    document.addEventListener("mousedown", handelOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handelOutsideClick);
    };
  });

  return (
    <div className={style["main-main"]}>
      <div ref={MenuRef}>
        <div className={style["WhoDiv"]} onClick={handelProfile}>
          {displayPlace}
          {onProfile ? <DropDown /> : null}
        </div>
      </div>
      <div className={style["picture"]}>
        <div className={style["logo"]}>
          <img src={logo} alt="" className={style["LOGO"]} />
        </div>
        <div className={style["main"]}>
          <div className={style["Navigation"]}>
            <div>
              <ul className="text-white" id={style["uls"]}>
                <NavLink
                  to="/"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Home!"
                  data-tooltip-place="top"
                  className={({ isActive }) =>
                    ` ${style["LIS"]} ${
                      isActive ? "text-green-500 font-bold" : "text-white"
                    }`
                  }>
                  {isResident ? "DashBoard" : "HOME"}
                  {/* Home */}
                </NavLink>
                <li>
                  <NavLink
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="About Us!"
                    data-tooltip-place="top"
                    className={({ isActive }) =>
                      ` ${style["LIS"]} 
                    ${isActive ? "text-green-500 font-bold" : "text-white"}`
                    }
                    to={"/about"}>
                    ABOUT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Rooms!"
                    data-tooltip-place="top"
                    className={({ isActive }) =>
                      `  ${style["LIS"]}  ${
                        isActive ? "text-green-500 font-bold" : "text-white"
                      }`
                    }
                    to={"/rooms"}>
                    ROOMS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Contact!"
                    data-tooltip-place="top"
                    to={"/contact"}
                    className={({ isActive }) =>
                      ` ${style["LIS"]}  ${
                        isActive ? "text-green-500 font-bold" : "text-white"
                      }`
                    }>
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={style["name-login"]}>
              <button
                className="font-bold text-white bg-yel"
                id={style["login"]}>
                {isLogin ? (
                  <Link
                    className={style["Profile-Name"]}
                    to={"/profile"}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Profile!"
                    data-tooltip-place="top">
                    {displayName}
                  </Link>
                ) : (
                  <Link
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Log in!"
                    data-tooltip-place="top"
                    className={style["LOGIN"]}
                    onClick={handleLogin}>
                    Log in
                  </Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
