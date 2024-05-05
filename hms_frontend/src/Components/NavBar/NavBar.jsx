import React, { useContext, useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { UserContext } from "../Login/isLogin";

function NavBar() {
  const { isLogin, firstName } = useContext(UserContext);
  console.log(isLogin);
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem("token");
  console.log(token);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5175/user-info", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data);
      if (data.success) {
        setUserData(data.results);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  console.log(userData);

  useEffect(() => {
    getUser();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  // If user is logged in, display the first name on the navbar, otherwise display "Login"
  const displayName = userData.length > 0 ? userData[0].firstName : "Login";

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
                  }
                >
                  {/* {isResident ? "DashBoard" : "HOME"} */}
                  Home
                </NavLink>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      ` ${style["LIS"]} 
                    ${isActive ? "text-green-500 font-bold" : "text-white"}`
                    }
                    to={"/about"}
                  >
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
                    to={"/rooms"}
                  >
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
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div>
                {token && userData
                  ? displayName // Correct usage: directly use displayName variable
                  : "login"}
              </div>

              {/* <button
                className="font-bold text-white bg-yel"
                id={style["login"]}>
                {isLogin ? (
                  <Link to={"/"}>{displayName}</Link>
                ) : (
                  <Link onClick={handleLogin}>Log in</Link>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
