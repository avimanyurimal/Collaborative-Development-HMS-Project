import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import SideBar from "../SideBar";
import style from "./Resident.module.css";
import Table from "../Table";
import Graph from "../Graph";
import Card from "../Card";
import { BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TimeForm from "../TimeForm/TimeForm";

function Resident() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [residentCount, setResidentCount] = useState(0);
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [breakfastData, setBreakfastData] = useState({});
  const [launchData, setLaunchData] = useState({});
  const [dinnerData, setDinnerData] = useState({});

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
        const response = await axios.get("http://localhost:5175/api/admin/residents");
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

  const navigate = useNavigate();
  const handleSetting = () => {
    navigate("/setting");
  };

  const handleBreakfastPost = async () => {
    try {
      await axios.post("http://localhost:5175/api/breakfast", breakfastData);
      console.log("Breakfast POST successful");
    } catch (error) {
      console.error("Error posting breakfast data:", error);
    }
  };

  const handleLaunchPost = async () => {
    try {
      await axios.post("http://localhost:5175/api/launch", launchData);
      console.log("Launch POST successful");
    } catch (error) {
      console.error("Error posting launch data:", error);
    }
  };

  const handleDinnerPost = async () => {
    try {
      await axios.post("http://localhost:5175/api/dinner", dinnerData);
      console.log("Dinner POST successful");
    } catch (error) {
      console.error("Error posting dinner data:", error);
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
                <Graph
                  name={"Residents"}
                  nextName={"pageViews"}
                  data={[]} // Provide data for the graph here
                />
                <div className={style["Table"]}>
                  <Table forWho={"Residents"} data={residentData} /> {/* Pass fetched resident data to the table */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={style["EatingForm"]}>
        <button
          id={style["BUTTON"]}
          className="bg-red-300 rounded text-black font-bold"
          onClick={() => setBreakfastData({ date: new Date(), meal: "Breakfast" })}
        >
          Breakfast
        </button>
        {breakfastData.date && breakfastData.meal ? (
          <TimeForm onclick={handleBreakfastPost} type={"Breakfast"} />
        ) : null}
        <button
          id={style["BUTTON"]}
          className="bg-green-300 rounded text-black font-bold"
          onClick={() => setLaunchData({ date: new Date(), meal: "Launch" })}
        >
          Launch
        </button>
        {launchData.date && launchData.meal ? (
          <TimeForm onclick={handleLaunchPost} type={"Launch"} />
        ) : null}

        <button
          id={style["BUTTON"]}
          className="bg-blue-300 rounded text-black font-bold"
          onClick={() => setDinnerData({ date: new Date(), meal: "Dinner" })}
        >
          Dinner
        </button>
        {dinnerData.date && dinnerData.meal ? (
          <TimeForm onclick={handleDinnerPost} type={"Dinner"} />
        ) : null}
      </div>
    </div>
  );
}

export default Resident;

