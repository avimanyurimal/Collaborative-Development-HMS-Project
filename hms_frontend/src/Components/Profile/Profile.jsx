import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handelProfileEdit = () => {
    navigate("/profilesetting");
  };
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <div
            id="firstName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
            John
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>
          <div
            id="lastName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
            Doe
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <div
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
            johndoe@gmail.com
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="Address"
            className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <div
            id="address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
            brammakhel
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <div
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white font-black">
            **********
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-bold mb-2">
            Contact Number
          </label>
          <div
            id="contactNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
            1234567890
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handelProfileEdit}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
            Edit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
