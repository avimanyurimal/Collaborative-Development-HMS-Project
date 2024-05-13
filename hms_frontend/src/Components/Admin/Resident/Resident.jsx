import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import SideBar from "../SideBar";
import style from "./Resident.module.css";
import Table from "../Table";
// import Graph from "../Graph";
import Card from "../Card";
import { BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Resident() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [residentCount, setResidentCount] = useState(0);
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mealData, setMealData] = useState({ date: "", meal: "", items: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResidentCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5175/api/admin/residents/count"
        );
        setResidentCount(response.data.count);
      } catch (error) {
        console.error("Error fetching resident count:", error);
      }
    };

    const fetchResidentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5175/api/admin/residents"
        );
        setResidentData(response.data.visitors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resident data:", error);
        setLoading(false);
      }
    };

    fetchResidentCount();
    fetchResidentData();
  }, []);

  const handleSetting = () => {
    navigate("/setting");
  };

  const handleMealPost = async () => {
    try {
      await axios.post("http://localhost:5175/api/meal", mealData);
      setMessage("Meal data saved successfully");
    } catch (error) {
      setMessage("Please enter the correct meal data");
      console.error("Error posting meal data:", error);
    }
  };

  return (
    <div className={style["MAIN"]}>
      <Header OpenSidebar={setOpenSidebarToggle} />
      <div className={style["container"]}>
        <div className={style["container1"]}>
          <SideBar openSidebarToggle={openSidebarToggle} />
        </div>
        <div className={style["container2"]}>
          <Card
            onClick={handleSetting}
            CARD={"CARD"}
            card={"card"}
            icon={BsPeopleFill}
            type={"RESIDENT"}
            number={residentCount}
            color={"blue"}
          />
          <div className={style["body"]}>
            {loading ? (
              <p>Loading resident data...</p>
            ) : (
              <>
                {/* <Graph
                  name={"Residents"}
                  nextName={"pageViews"}
                  data={[]} // Provide data for the graph here
                /> */}
                <div className={style["Table"]}>
                  <Table forWho={"Residents"} data={residentData} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={style["EatingForm"]}>
        <div className={style["form-box"]}>
          {" "}
          {/* New div box */}
          <input
          className={style["date-box"]}
            type="date"
            value={mealData.date}
            onChange={(e) => setMealData({ ...mealData, date: e.target.value })}
            placeholder="Enter Date (YYYY-MM-DD)"
          />
          <input
          className={style["meal-type-box"]}
            type="text"
            value={mealData.meal}
            onChange={(e) => setMealData({ ...mealData, meal: e.target.value })}
            placeholder="Enter Meal Type (e.g., Breakfast, Lunch, Dinner)"
          />
          <input
          className={style["items-box"]}
            type="text"
            value={mealData.items}
            onChange={(e) =>
              setMealData({ ...mealData, items: e.target.value })
            }
            placeholder="Enter Items"
          />
          <button className="savemealbtn" onClick={handleMealPost}>Save Meal</button>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Resident;
