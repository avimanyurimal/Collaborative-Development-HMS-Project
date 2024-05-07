import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function ProfileSetting() {
  const navigate = useNavigate();

  const handelSave = () => {
    navigate("/profile");
    alert("Updated Data");
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

  const handelCancel = () => {
    handleAlert();
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 font-bold mb-2">
              Contact Number
            </label>
            <input
              id="contactNumber"
              type="tel"
              placeholder="Enter your contact number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Password"
              className="block text-gray-700 font-bold mb-2">
              Current Password
            </label>
            <input
              id="Password"
              type="password"
              placeholder="Enter your Current Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 font-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ConfirmPassword"
              className="block text-gray-700 font-bold mb-2">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="Enter your New Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 font-black"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handelCancel}
              type="cancel"
              className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 mr-9">
              Cancel
            </button>
            <button
              onClick={handelSave}
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 ml-9">
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
