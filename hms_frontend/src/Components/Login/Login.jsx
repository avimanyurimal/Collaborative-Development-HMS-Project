// import style from "./Login.module.css";
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorPassword, setErrorPassword] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [emailError, setEmailError] = useState(true);
//   const [matched, setMatched] = useState(false);
//   const [hideMatched, setHideMatched] = useState(false);
//   const navigate = useNavigate();

//   // let matched;
//   const gmail = "samyog@gmail.com"; //? Sample gmail
//   const userPassword = "Strong123@"; //? Sample password

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     if (newEmail === gmail) {
//       setEmailError(false);
//     } else {
//       setEmailError(true);
//     }
//   };
//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     if (newPassword === userPassword) {
//       setErrorPassword(false);
//     } else {
//       setErrorPassword(true);
//     }
//   };

//   const handleSubmit = () => {
//     if (emailError || errorPassword) {
//       console.error("Error");
//       setHideMatched(true);
//     } else {
//       setHideMatched(true);
//       setMatched(true);
//     }
//   };

//   useEffect(() => {
//     if (matched) {
//       console.log("Login successfully");
//       console.log("Email: ", email);
//       console.log("Password: ", password);
//       navigate("/lodingLoin");
//       setTimeout(() => {
//         navigate("/home");
//       }, 2000);
//     }
//   }, [matched, email, password]);
//   // const userShow = () => {
//   //   {matched ? <p>Login Successfull</p> : <p>Failed to Login</p>}
//   // }

//   return (
//     <>
//       <div className={style["wrapper"]}>
//         <div className={style["background"]}></div>
//         <div className={style["inner"]}>
//           <form action="">
//             <h3 className=" underline">Welcome Back</h3>
//             <div className={style["form-wrapper"]}>
//               <label htmlFor="">Email</label>
//               <input
//                 className={style["form-control"]}
//                 type="text"
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <div className={style["form-wrapper"]}>
//               <label htmlFor="">Password</label>
//               <div className={style["First_Password"]}>
//                 <input
//                   className={style["form-control"]}
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   onChange={handlePasswordChange}
//                   value={password}
//                 />
//                 <button type="button" onClick={togglePassword}>
//                   {showPassword ? (
//                     <FontAwesomeIcon id={style["eye"]} icon={faEye} />
//                   ) : (
//                     <FontAwesomeIcon id={style["eye"]} icon={faEyeSlash} />
//                   )}
//                 </button>
//               </div>
//             </div>
//             <div style={{ display: hideMatched ? "block" : "none" }}>
//               {matched ? (
//                 <div>
//                   <p>Login Successful</p>
//                   <p>Redirecting...</p>
//                 </div>
//               ) : (
//                 <p className=" text-red-600">Email/Password didn't matched</p>
//               )}
//             </div>
//             <button
//               className={style["BTN"]}
//               onClick={() => {
//                 handleSubmit();
//               }}
//               type="button">
//               Login
//             </button>
//             <div className={style["Login"]}>
//               <span className="mr-5">Not Registered?</span>
//               <Link id={style["LINK"]} to={"/"}>
//                 Sign Up
//               </Link>
//             </div>
//           </form>
//           <div className={style["Error"]}></div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;

import style from "./Login.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post("http://localhost:5175/api/login", {
        email,
        password,
      });
      if (response.data.success) {
        console.log("Login successful");
        // "/home" is the correct route to redirect after successful login
        navigate("/");
      } else {
        // the error message is provided in the response data
        setError(response.data.message);
      }
    } catch (error) {
      // If there's an error with the request (e.g., network error), handle it here
      console.error("Error logging in:", error.message);
      setError("Fucking Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style["wrapper"]}>
        <div className={style["background"]}></div>
        <div className={style["inner"]}>
          <form>
            <h3 className="underline">Welcome Back</h3>
            <div className={style["form-wrapper"]}>
              <label htmlFor="">Email</label>
              <input
                className={style["form-control"]}
                type="text"
                onChange={handleEmailChange}
              />
            </div>
            <div className={style["form-wrapper"]}>
              <label htmlFor="">Password</label>
              <div className={style["First_Password"]}>
                <input
                  className={style["form-control"]}
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  value={password}
                />
                <button type="button" onClick={togglePassword}>
                  {showPassword ? (
                    <FontAwesomeIcon id={style["eye"]} icon={faEye} />
                  ) : (
                    <FontAwesomeIcon id={style["eye"]} icon={faEyeSlash} />
                  )}
                </button>
              </div>
            </div>
            {error && <p className={style["error"]}>{error}</p>}
            <button
              className={style["BTN"]}
              onClick={handleSubmit}
              type="button"
              disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className={style["Login"]}>
              <span className="mr-5">Not Registered?</span>
              <Link id={style["LINK"]} to="/Signup">
                Sign Up
              </Link>
            </div>
          </form>
          <div className={style["Error"]}></div>
        </div>
      </div>
    </>
  );
}

export default Login;
