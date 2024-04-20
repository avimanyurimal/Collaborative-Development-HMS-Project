import React, { useState } from "react";
import style from "../Signup/Signup.module.css";
import Select from "react-select";
import { GiCrossMark } from "react-icons/gi";
import { validEmail } from "../Signup/regex";

const options = [
  { value: "Room1", label: "big" },
  { value: "Room2", label: "normal" },
  { value: "Room3", label: "small" },
];

function BookNowForm({ setForm }) {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [PhoneNumberError, setPhoneNumberError] = useState(true);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [address, setAddress] = useState("");

  const [optionRoom, setOptionRoom] = useState(null);
  const [optionError, setOptionError] = useState(true);

  const handelOptionError = () => {
    setOptionRoom(options);
    if (optionRoom === "") {
      setOptionError(true);
    } else {
      setOptionError(false);
    }
  };

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

  // ! For Address change in number field
  const HandelAddressChange = (e) => {
    const input = e.target.value;
    setAddress(input);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validEmail.test(newEmail));
  };

  const handelClose = () => {
    setForm(false);
    console.log("Closed");
  };
  //! JUST CHAGE IT -->
  const handelSubmit = () => {
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      PhoneNumberError ||
      optionError
    ) {
      console.log("Error");
    } else {
      console.log("Booked");
    }
  };

  return (
    <div className="text-white p-5" id={style["BOOKNOWFORM"]}>
      <button onClick={handelClose} id={style["crossButton"]}>
        <GiCrossMark />
      </button>
      <div className={style["Form"]}>
        <div className={style["Form"]}>
          <div className={style["form-wrapper"]}>
            <label htmlFor="">First Name</label>
            <input
              value={capitalizeFirstLetter(firstName)}
              type="text"
              onChange={HandelFirstNameChange}
              className={style["form-control"]}
            />
          </div>
          {firstNameError && <p className=" text-red-700">Enter First Name</p>}
          <div className={style["form-wrapper"]}>
            <label htmlFor="">Last Name</label>
            <input
              value={capitalizeFirstLetter(lastName)}
              type="text"
              onChange={HandelLastNameChange}
              className={style["form-control"]}
            />
          </div>
          {lastNameError && <p className="text-red-700">Enter Last Name</p>}
        </div>
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
        <div>
          <label htmlFor="roomType">Room Type</label>
          <Select
            className={style["OPTIONBOOK"]}
            onChange={handelOptionError}
            options={options}
          />
          {optionError && <p style={{ color: "red" }}>Plese Select</p>}
        </div>
        <div>
          <button
            onClick={() => {
              handelSubmit();
              handelClose();
            }}
            className={style["BTN"]}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookNowForm;
