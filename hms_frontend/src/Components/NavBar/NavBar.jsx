import React, { useContext } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { UserContext } from "../Login/isLogin";

function NavBar() {
  const { isLogin, firstName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  // If user is logged in, display the first name on the navbar, otherwise display "Login"
  const displayName = isLogin ? firstName : "Login";

  return (
    <div className={style["main-main"]}>
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
                  className={({ isActive }) =>
                    ` ${style["LIS"]} ${
                      isActive ? "text-green-500 font-bold" : "text-white"
                    }`
                  }>
                  HOME
                </NavLink>
                <li>
                  <NavLink
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
            <div>
              <button className="font-bold text-white bg-yel" id={style["login"]}>
                {/* Render displayName variable */}
                {isLogin ? (
                  <Link to={"/"}>{displayName}</Link>
                ) : (
                  <Link onClick={handleLogin}>Log in</Link>
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
