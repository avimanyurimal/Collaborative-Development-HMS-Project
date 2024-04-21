import React, { useState } from "react";
import style from "../Signup/Signup.module.css";
import Select from "react-select";
import { GiCrossMark } from "react-icons/gi";
import { validEmail } from "../Signup/regex";
import axios from "axios"; // Import Axios for making HTTP requests

const options = [
  { value: "Big", label: "big" },
  { value: "Normal", label: "normal" },
  { value: "Small", label: "small" },
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
  const [roomNumber, setRoomNumber] = useState("");
  const [optionRoom, setOptionRoom] = useState(null);
  const [optionError, setOptionError] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const HandelFirstNameChange = (event) => {
    const FIRSTNAME = event.target.value;
    setFirstName(FIRSTNAME);
    setFirstNameError(FIRSTNAME.length === 0);
  };

  const HandelLastNameChange = (event) => {
    const LASTNAME = event.target.value;
    setLastName(LASTNAME);
    setLastNameError(LASTNAME.length === 0);
  };

  const handleNumberChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setPhoneNumber(input);
      setPhoneNumberError(input.length !== 10);
    }
  };

  const HandelAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!validEmail.test(newEmail));
  };

  const handleRoomNumberChange = (e) => {
    setRoomNumber(e.target.value);
  };

  const handelOptionError = () => {
    setOptionError(optionRoom === null);
  };
  
  const handelClose = () => {
    setForm(false);
    console.log("Closed");
  };


  const handelSubmit = async () => {
    // Check if there are any errors in the form fields
    if (!firstName || !lastName || !email || !phoneNumber || !roomNumber || !optionRoom) {
      console.log("Error: Form validation failed - Please fill in all fields");
      return;
    }

    // Check if email is invalid
    if (!validEmail.test(email)) {
      console.log("Error: Form validation failed - Invalid email");
      return;
    }

    // Check if phone number is not exactly 10 digits
    if (phoneNumber.length !== 10) {
      console.log("Error: Form validation failed - Phone number must be 10 digits");
      return;
    }

    // Prepare booking data
    const bookingData = {
      firstName: capitalizeFirstLetter(firstName),
      lastName: capitalizeFirstLetter(lastName),
      phoneNumber,
      email,
      address,
      roomNumber,
      roomType: optionRoom.value // Assuming you want to send the value of the selected room type
    };

    try {
      // Send booking data to backend
      const response = await axios.post("http://localhost:5175/api/booknow", bookingData);
      console.log("Booking successful:", response.data.message);
      // Handle success (e.g., show success message to user)
    } catch (error) {
      console.error("Error booking room:", error);
      // Handle error (e.g., show error message to user)
    } finally {
      // Close the form regardless of success or failure
      handelClose();
    }
  };

  return (
    <div className="text-white p-5" id={style["BOOKNOWFORM"]}>
      <button onClick={handelClose} id={style["crossButton"]}>
        <GiCrossMark />
      </button>
      <div className={style["Form"]}>
        <div className={style["form-wrapper"]}>
          <label htmlFor="">First Name</label>
          <input
            value={firstName}
            type="text"
            onChange={HandelFirstNameChange}
            className={style["form-control"]}
          />
          {firstNameError && <p className="text-red-700">Enter First Name</p>}
        </div>
        <div className={style["form-wrapper"]}>
          <label htmlFor="">Last Name</label>
          <input
            value={lastName}
            type="text"
            onChange={HandelLastNameChange}
            className={style["form-control"]}
          />
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
          {PhoneNumberError && <p className="text-red-700">Enter a Phone Number</p>}
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
        <div className={style["form-wrapper"]}>
          <label htmlFor="">Room Number</label>
          <input
            value={roomNumber}
            type="text"
            onChange={handleRoomNumberChange}
            className={style["form-control"]}
          />
        </div>
        <div>
          <label htmlFor="roomType">Room Type</label>
          <Select
            className={style["OPTIONBOOK"]}
            onChange={(selectedOption) => {
              handelOptionError(); 
              setOptionRoom(selectedOption);
            }}
            options={options}
          />
          {optionError && <p style={{ color: "red" }}>Please select a room type</p>}
        </div>
        <div>
          <button onClick={handelSubmit} className={style["BTN"]}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookNowForm;