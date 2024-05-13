import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from your backend API using the token from local storage
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    } else {
      // Handle case when token is not found in local storage
      navigate("/login"); // Redirect to login page or handle the scenario accordingly
    }
  }, []);

  const fetchUserData = (token) => {
    // Example: Fetch user data from your backend API
    // Replace this with your actual API endpoint
    fetch("http://localhost:5175/api/user-profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, update the state
        setUserData(data.userProfileData); // Assuming the user profile data is returned under userProfileData field
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle error scenarios
      });
  };

  const handleProfileEdit = () => {
    navigate("/profilesetting");
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        {userData && (
          <>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <div id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                {userData.firstName}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <div id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                {userData.lastName}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <div id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                {userData.email}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <div id="address" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                {userData.address}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <div id="phoneNumber" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white">
                {userData.phoneNumber}
              </div>
            </div>
            {/* Add other fields as needed */}
          </>
        )}
        <div className="flex justify-end">
          <button
            onClick={handleProfileEdit}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
