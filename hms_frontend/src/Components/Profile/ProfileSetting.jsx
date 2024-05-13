import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function ProfileSetting() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 // ! Hide and show password for Password
 const togglePassword = () => {
  setShowPassword(!showPassword);
};
// ! Hide and show password for Confirm Password
const toggleConfirmPassword = () => {
  setShowConfirmPassword(!showConfirmPassword);
};
  

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    fetchUserData(token);
  } else {
    navigate("/login");
  }
}, []);

  const fetchUserData = (token) => {
    fetch("http://localhost:5175/api/user-profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.userProfileData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };


  // Update state variables for currentPassword and newPassword
const handleCurrentPasswordChange = (e) => {
  setUserData({ ...userData, currentPassword: e.target.value });
};

const handleNewPasswordChange = (e) => {
  setUserData({ ...userData, newPassword: e.target.value });
};

  const handleSave = () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      const updatedUserData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
        currentPassword: userData.currentPassword,
        newPassword: userData.newPassword,
      };

      console.log(updatedUserData);
  
      // Send PUT request to update user data
      fetch("http://localhost:5175/api/userProfile/setting", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUserData),
      })
        .then((response) => {
          console.log(response);  //this line gives undefined 
          if (response.ok) {
            // If the request is successful, notify the user and redirect to profile page
            alert("User details updated successfully");
            navigate("/profile");
          } else {
            // If there's an error, handle it accordingly
            throw new Error("Failed to update user details");
          }
        })
        .catch((error) => {
          console.error("Error updating user details:", error);
          // Handle error scenarios (e.g., display error message to the user)
          alert("Failed to update user details. Please try again later.");
        });
    } else {
      // Handle case when token is not found in local storage
      navigate("/login");
    }
  };
  


  const handleAlert = () => {
    const result = window.confirm(
      "Changes are not saved. Do you want to leave?"
    );
    if (result) {
      navigate("/profile");
      console.log("User clicked OK");
    } else {
      console.log("User clicked Cancel");
    }
  };

  const handleCancel = () => {
    handleAlert();
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Setting</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={userData.address}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Number
            </label>
            <input
              id="contactNumber"
              type="tel"
              placeholder="Enter your contact number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
              value={userData.phoneNumber}
              onChange={(e) =>
                setUserData({ ...userData, contactNumber: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Current Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={userData.currentPassword}
                onChange={(e) =>
                  setUserData({ ...userData, currentPassword: e.target.value })
                }
              />
              {/* Eye button for current password */}
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={togglePassword}
                style={{ color: 'black' }} 
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your New Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={userData.newPassword}
                onChange={(e) =>
                  setUserData({ ...userData, newPassword: e.target.value })
                }
              />
              {/* Eye button for new password */}
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                onClick={toggleConfirmPassword}
                style={{ color: 'black' }} 
              >
                {showConfirmPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleCancel}
              type="button"
              className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 mr-9"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 ml-9"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileSetting;
