import React, { useEffect, useState } from "react";
import style from "./Resident.module.css";
import eating from "../../assets/ResidentHome/eating.jpg";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import axios from "axios";

function ResidentHome() {
  const [breakfastData, setBreakfastData] = useState([]);
  const [lunchData, setLunchData] = useState([]);
  const [dinnerData, setDinnerData] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        // Sending GET request to the backend endpoint to fetch meal data
        const response = await axios.get("http://localhost:5175/api/meal");
        // Destructuring the response data to extract breakfast, lunch, and dinner data
        const { breakfast, lunch, dinner } = response.data;
        // Updating state variables with fetched data
        setBreakfastData(breakfast);
        setLunchData(lunch);
        setDinnerData(dinner);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };
    // Calling the fetchMealData function when the component mounts
    fetchMealData();
  }, []);

  const renderMealTable = (mealData, mealType) => {
    return (
      <div>
        <h3>{mealType}</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Meals</th>
            </tr>
          </thead>
          <tbody>
            {mealData.map((item, index) => (
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.Time}</td>
                <td>{item.Meals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={style["MAIN"]}>
      <div className={style["content-box"]}>
        <div className={style["ResidentHome"]}>
          <div
            id={style["OtherProperty"]}
            className="text-black text-3xl font-bold"
          >
            Resident's Dashboard
          </div>
          <div className={style["Form"]}>
            {renderMealTable(breakfastData, "Breakfast")}
            {renderMealTable(lunchData, "Lunch")}
            {renderMealTable(dinnerData, "Dinner")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentHome;
