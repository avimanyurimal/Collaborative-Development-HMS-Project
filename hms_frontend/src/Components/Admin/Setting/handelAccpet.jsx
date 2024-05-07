import React, { useState } from "react";
import style from "../../Login/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function HandelAccept({ firstName, lastName, phonenumber, address }) {
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
    const requestBody = {
      firstName: firstName,
      lastName: lastName,
      phonenumber: phonenumber,
      address: address,
      email: email,
      password: password
    };
    try {
      // Here you can add validation functions if needed
      const response = await axios.post('http://localhost:5175/api/acceptBooking', requestBody);
      console.log("Booking Details: ", response.data);
      if (!response.ok) {
        throw new Error('Failed to accept booking');
      } else {
        console.log("Submitted");
      }
      // Handle success response
    } catch (error) {
      console.error('Error accepting booking:', error);
      // Handle error
    }
  };

  return (
    <form>
      <div className={style["form-wrapper"]}>
        <label htmlFor="">First Name</label>
        <input
          className={style["form-control"]}
          type="text"
          value={firstName}
          readOnly
        />
      </div>
      <div className={style["form-wrapper"]}>
        <label htmlFor="">Last Name</label>
        <input
          className={style["form-control"]}
          type="text"
          value={lastName}
          readOnly
        />
      </div>
      <div className={style["form-wrapper"]}>
        <label htmlFor="">Phone Number</label>
        <input
          className={style["form-control"]}
          value={phonenumber}
          type="text"
          onChange={(e) => handlePhonenumberChange(e)} // Add onChange handler if needed
        />
      </div>
      <div className={style["form-wrapper"]}>
        <label htmlFor="">Address</label>
        <input
          className={style["form-control"]} 
          value={address}
          type="text"
          onChange={(e) => handleAddressChange(e)} // Add onChange handler if needed
        />
      </div>
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

export default HandelAccept;
