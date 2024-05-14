import React, { useEffect, useState } from "react";
import style from "./Resident.module.css";
import axios from "axios";

function ResidentHome() {
  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const response = await axios.get("http://localhost:5175/api/mealData");
        const { data } = response;
        setMealData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meal data:", error);
        setLoading(false);
      }
    };

    fetchMealData();
  }, []);

  // Function to format date as MM/DD/YYYY
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate()-1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Function to filter meal data by date
  const filterByDate = (date) => {
    if (!mealData) {
      return [];
    }

    const targetDate = new Date(date).toISOString().split("T")[0];

    const allMeals = Object.values(mealData);
    const filteredMeals = allMeals.flatMap(meals => meals.filter(item => {
      const itemDate = new Date(item.Date).toISOString().split("T")[0]; 
      return itemDate === targetDate;
    }));

    return filteredMeals;
  };

  const renderMealTable = (time, mealType, mealData) => {
    return (
      <div className="table-container" key={`${time}-${mealType}`}>
        <h3>{`${time}'s ${mealType}`}</h3>
        <table className="meal-table">
          <thead>
            <tr>
              <th className={style["table-header"]}>Date</th>
              <th className={style["table-header"]}>Time</th>
              <th className={style["table-header"]}>Meals</th>
            </tr>
          </thead>
          <tbody>
            {mealData.map((item, index) => (
              <tr key={`${time}-${mealType}-${index}`}>
                <td>{formatDate(item.Date)}</td>
                <td>{item.Time}</td>
                <td>{item.Items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return <p>Loading meal data...</p>;
  }

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1); 
  const yesterdayDate = yesterday.toISOString().split("T")[0];

  const todayData = filterByDate(today);
  const yesterdayData = filterByDate(yesterdayDate);

  return (
    <div className={style["MAIN"]}>
      <div className={style["content-box"]}>
        <div className={style["ResidentHome"]}>
          <div id={style["OtherProperty"]} className="text-black text-3xl font-bold">
            Resident's Dashboard
          </div>
          <div className={style["Form"]}>
            {loading ? (
              <p>Loading meal data...</p>
            ) : (
              <>
                <div>
                  {renderMealTable("Yesterday", "Breakfast", yesterdayData.filter(item => item.Meal === 'Breakfast'))}
                  <br />
                  <br />
                  {renderMealTable("Yesterday", "Lunch", yesterdayData.filter(item => item.Meal === 'Lunch'))}
                  <br />
                  <br />
                  {renderMealTable("Yesterday", "Dinner", yesterdayData.filter(item => item.Meal === 'Dinner'))}
                </div>
                <div>
                  {renderMealTable("Today", "Breakfast", todayData.filter(item => item.Meal === 'Breakfast'))}
                  <br />
                  <br />
                  {renderMealTable("Today", "Lunch", todayData.filter(item => item.Meal === 'Lunch'))}
                  <br />
                  <br />
                  {renderMealTable("Today", "Dinner", todayData.filter(item => item.Meal === 'Dinner'))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResidentHome;
