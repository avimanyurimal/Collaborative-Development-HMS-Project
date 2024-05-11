import React, { useEffect, useState } from "react";
import style from "./ResidentHome.module.css";
import eating from "../../assets/ResidentHome/eating.jpg";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
import axios from "axios";

function ResidentHome() {
  const [breakfastData, setBreakfastData] = useState([]);
  const [lunchData, setLunchData] = useState([]);
  const [dinnerData, setDinnerData] = useState([]);
  // const [DateData, setDateData] = useState([]);

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
        // setDateData(Date);
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };
    // Calling the fetchMealData function when the component mounts
    fetchMealData();
  }, []);

  return (
    <div className={style["MAIN"]}>
      <div className={style["content-box"]}>
        <div className={style["ResidentHome"]}>
          <div
            id={style["OtherProperty"]}
            className="text-black text-3xl font-bold">
            Hello From Resident
          </div>
          <div className={style["Form"]}>
            {/* <div>
              <h3>Date</h3>
              <ul>
                {DateData.map((item, index) => (
                  <li key={index}>{item.Items}</li>
                ))}
              </ul>
            </div> */}

            <div className={style["BreakFast"]}>
              <h3>Breakfast</h3>
              <ul className={style["ULS"]}>
                {breakfastData.map((item, index) => (
                  <li className={style["LIS"]} key={index}>
                    {index + 1} <span>{item.Items}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style["Lunch"]}>
              <h3>Lunch</h3>
              <ul className={style["ULS"]}>
                {lunchData.map((item, index) => (
                  <li className={style["LIS"]} key={index}>
                    {index + 1} <span>{item.Items}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style["Dinner"]}>
              <h3>Dinner</h3>
              <ul className={style["ULS"]}>
                {dinnerData.map((item, index) => (
                  <li className={style["LIS"]} key={index}>
                    {index + 1} <span>{item.Items}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResidentHome;
