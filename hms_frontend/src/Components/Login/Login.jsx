import style from "./Login.module.css";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./isLogin";
import axios from "axios";

function Login() {
  const { setIsLogin, setFirstName } = useContext(UserContext);

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

      if (response.data.isAdmin) {
        console.log("Login successful");
        setIsLogin(true);
        localStorage.setItem('token', response.data.token);
        navigate("/adminDashboard");
      } else if (response.data.isResidents) {
        console.log("Login successful");
        setIsLogin(true);
        localStorage.setItem('token', response.data.token);
        // Fetching user's first name
        const firstNameResponse = await axios.post(
          "http://localhost:5175/api/residents/firstname",
          {
            email,
            password,
          }
        );
        const firstName = firstNameResponse.data.firstName;
        console.log("Resident's first name:", firstName);
        setFirstName(firstName); // Set the first name in the context
        navigate("/residenthome");
      } else if (response.data.success) {
        console.log("Login successful");
        setIsLogin(true);
        localStorage.setItem('token', response.data.token);
        // Fetching user's first name
        const firstNameResponse = await axios.post(
          "http://localhost:5175/api/visitors/firstname",
          {
            email,
            password,
          }
        );
        const firstName = firstNameResponse.data.firstName;
        console.log("Visitor's first name:", firstName);
        setFirstName(firstName); // Set the first name in the context
        navigate("/");
      } else {
        setError(response.data.message || "Login failed"); // Default error message
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Invalid email or password.");
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
