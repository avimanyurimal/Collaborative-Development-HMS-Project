import React, { useContext } from "react";
import style from "./NavBar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
// import gmail from "./gmail.png";
// import whatapp from "./whatapp.png";
// import call from "./call.png";
import { UserContext } from "../Login/isLogin";

function NavBar() {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();

  // if You want to use Login in when you click BookNow Button
  const handelLogin = () => {
    navigate("/login");
  };

  // If you want to use Signup when you click BookNow button
  const handelSignup = () => {
    navigate("/signup");
  };
  return (
    <div className={style["main-main"]}>
      <div className={style["picture"]}>
        <div className={style["logo"]}>
          <img src={logo} alt="" className=" w-72" />
        </div>
        {/* </div> */}
        <div className={style["main"]}>
          {/* <div className={style["logo"]}> */}
          {/* <img src={logo} alt="" className=" w-72" /> */}
          {/* </div> */}
          {/* <div className={style["info"]}>
            <div className={style["gmail"]}>
              <img className="w-8" src={gmail} alt="" />
              <span className={style["contact"]}>
                Email: moonlighthostel76@gmail.com
              </span>
            </div>
            <div className={style["call"]}>
              <img className="w-8" src={call} alt="" />
              <span className={style["contact"]}>+01-4140412</span>
            </div>
            <div className={style["whatapp"]}>
              <img className="w-8" src={whatapp} alt="" />
              <span className={style["contact"]}>+977 9847582934</span>
            </div>
          </div> */}
          {/* </div> */}
          <div className={style["Navigation"]}>
            <div>
              <ul className="text-white text-xl" id={style["uls"]}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` ${style["LIS"]} ${
                      isActive ? "text-green-500 font-bold" : "text-white"
                    }`
                  }>
                  HOME
                </NavLink>
                {/* <li>
                  <NavLink
                    className={({ isActive }) =>
                      ` ${style["LIS"]} 
                    ${isActive ? "text-green-500 font-bold" : "text-white"}`
                    }
                    to={"/about"}>
                    ABOUT US
                  </NavLink>
                </li> */}
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
              <button className="font-bold text-white text-2xl bg-yel">
                {isLogin ? (
                  <Link to={"/"}>UserName</Link>
                ) : (
                  <Link
                    onClick={handelLogin} // FOr Signup to open when Booknow is Clicked
                    // onClick={handelLogin} // For Login to open when Booknow is Clicked
                  >
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
