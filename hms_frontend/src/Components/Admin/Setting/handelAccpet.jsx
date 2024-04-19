import React, { useState } from "react";
import style from "../../Login/Login.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function HandelAccpet() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    console.log("Submitted");
  };

  return (
    <form>
      <div className={style["form-wrapper"]}>
        <label htmlFor="">Email</label>
        <input
          className={style["form-control"]}
          value={email}
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
      <button className={style["BTN"]} onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default HandelAccpet;
