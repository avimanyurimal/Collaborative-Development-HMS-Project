import React, { useState } from "react";
import style from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ValidPassword, validEmail } from "./regex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Signup() {
  // todo: For First Name and Last Name
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(true);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(true);

  // todo:  For Password and confirm Password
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfrimPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // todo: For Phone Number and Address
  const [phoneNumber, setPhoneNumber] = useState("");
  const [PhoneNumberError, setPhoneNumberError] = useState(true);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(true);

  // todo: For Email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  // ! Making first letter Capital
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  // ! For First Name onChange
  const HandelFirstNameChange = (event) => {
    const FIRSTNAME = event.target.value;
    setFirstName(FIRSTNAME);
    if (FIRSTNAME.length !== 0) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };
  // ! For Last Name onChange
  const HandelLastNameChange = (event) => {
    const LASTNAME = event.target.value;
    setLastName(LASTNAME);
    if (LASTNAME.length !== 0) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  // ! For Number change in number field
  const handleNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      if (input.length <= 10) {
        // Limit input length to 10 characters
        setPhoneNumber(input);
        if (input.length === 10) {
          setPhoneNumberError(false); // Set error to false if input length is 10
        } else {
          setPhoneNumberError(true); // Set error to true if input length is not 10
        }
      }
    }
  };

  const HandelNumberCheck = () => {
    // if (phoneNumber.length === 0 || phoneNumber.length !== 10) {
    //   setPhoneNumberError(true);
    // } else {
    //   setPhoneNumberError(false);
    // }
    if (phoneNumber === 0) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  };

  // ! For Address change in number field
  const HandelAddressChange = (e) => {
    const input = e.target.value;
    setAddress(input);
    if (address.length === 0) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  };

  const HandelAddressCheck = () => {
    if (address.length === 0) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  };

  // ! Hide and show password for Password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  // ! Hide and show password for Confirm Password
  const toggleConfirmPassword = () => {
    setShowConfrimPassword(!showConfirmPassword);
  };
  // ! For Email onChnage and Check Email With Regex
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validEmail.test(newEmail));
  };
  // ! For Password onChnage and Check Password with Regex
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!ValidPassword.test(newPassword));
    if (confirmPassword === newPassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
  };
  // ! For Checking value of Confirm password and Password
  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    if (password === newPassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
  };
  // * Checking Error for Email
  const EmailCheck = () => {
    if (validEmail.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  // * Checking Error For Password
  const PasswordCheck = () => {
    if (ValidPassword.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // * Main FUnction
  const handleSubmit = async () => {
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
    };

    try {
      // Perform asynchronous form validation checks
      await EmailCheck();
      await PasswordCheck();
      await HandelNumberCheck();
      await HandelAddressCheck();

      // Check if any validation errors exist
      if (
        firstNameError ||
        lastNameError ||
        emailError ||
        passwordError ||
        confirmPasswordError ||
        PhoneNumberError ||
        addressError
      ) {
        throw new Error("Error in form validation");
      }

      // If validation passes, proceed with form submission
      // const response = await axios.post("/api/register", userData);
      const response = await axios.post(
        "http://localhost:5175/api/register",
        userData
      );

      console.log("Signup successful:", response.data);
      // Optionally, you can handle the success response here, e.g., show a success message or redirect to login page
      navigate("/loading");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error registering user:", error.message);
      // Optionally, you can handle the error here, e.g., show an error message to the user
    }
  };

  return (
    <>
      <div className={style["wrapper"]}>
        <div className={style["background"]}></div>
        <div className={style["inner"]}>
          <form action="" className={style["form"]}>
            <h3 id={style["heading"]} className="underline">
              Registration Form
            </h3>
            <div className={style["form-group"]}>
              <div className={style["form-wrapper"]}>
                <label htmlFor="">First Name</label>
                <input
                  value={capitalizeFirstLetter(firstName)}
                  type="text"
                  onChange={HandelFirstNameChange}
                  className={style["form-control"]}
                />
                {firstNameError && (
                  <p className=" text-red-700">Enter First Name</p>
                )}
              </div>
              <div className={style["form-wrapper"]}>
                <label htmlFor="">Last Name</label>
                <input
                  value={capitalizeFirstLetter(lastName)}
                  type="text"
                  onChange={HandelLastNameChange}
                  className={style["form-control"]}
                />
                {lastNameError && (
                  <p className="text-red-700">Enter Last Name</p>
                )}
              </div>
            </div>
            <div className={style["form-group"]}>
              <div className={style["form-wrapper"]}>
                <label htmlFor="">Phone Number</label>
                <input
                  value={phoneNumber}
                  type="text"
                  onChange={handleNumberChange}
                  className={style["form-control"]}
                />
                {PhoneNumberError ? (
                  <p className=" text-red-700">Enter a Phone Number</p>
                ) : null}
              </div>
              <div className={style["form-wrapper"]}>
                <label htmlFor="">Address</label>
                <input
                  value={address}
                  type="text"
                  onChange={HandelAddressChange}
                  className={style["form-control"]}
                />
                {addressError && (
                  <p className="text-red-700">Enter an Address</p>
                )}
              </div>
            </div>
            <div className={style["form-wrapper"]}>
              <label htmlFor="">Email</label>
              <input
                value={email}
                className={style["form-control"]}
                type="text"
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-700">Email is not valid</p>}
            </div>
            <div className={style["form-wrapper"]}>
              <label htmlFor="">Password</label>
              <div className={style["First_Password"]}>
                <input
                  className={style["form-control"]}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={handlePasswordChange}
                />
                <button type="button" onClick={togglePassword}>
                  {showPassword ? (
                    <FontAwesomeIcon id={style["eye"]} icon={faEye} />
                  ) : (
                    <FontAwesomeIcon id={style["eye"]} icon={faEyeSlash} />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-white-700">
                  Length 8 with capital, small letter, number and special
                  character
                </p>
              )}
            </div>
            <div className={style["form-wrapper"]}>
              <label htmlFor="">Confirm Password</label>
              <div className={style["First_Password"]}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={style["form-control"]}
                  id="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                />
                <button type="button" onClick={toggleConfirmPassword}>
                  {showConfirmPassword ? (
                    <FontAwesomeIcon id={style["eye"]} icon={faEye} />
                  ) : (
                    <FontAwesomeIcon id={style["eye"]} icon={faEyeSlash} />
                  )}
                </button>
              </div>
              {confirmPasswordError && (
                <p className="text-red-700">Password didn't Matched!</p>
              )}
            </div>
            <button
              className={style["BTN"]}
              onClick={handleSubmit}
              type="button">
              Register Now
            </button>
            <div className={style["Login"]}>
              Already Registered?{" "}
              <Link id={style["LINK"]} to={"/login"}>
                Log In
              </Link>
            </div>
          </form>
          <div className={style["Error"]}></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
