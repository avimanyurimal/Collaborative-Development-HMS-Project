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

  const [BreakFast, setBreakFast] = useState(false);
  const [launch, setLaunch] = useState(false);
  const [dinner, setDinner] = useState(false);

  const handelBreakFast = () => {
    setBreakFast(!BreakFast);
  };

  const handelBreakFastPost = async () => {
    try {
      // Send POST request to save breakfast data
      await axios.post("http://localhost:5175/api/breakfast", {
        // Include any relevant data for breakfast here
      });
      console.log("Breakfast POST successful");
    } catch (error) {
      console.error("Error posting breakfast data:", error);
    }
  };

  const handelLaunchPost = async () => {
    try {
      // Send POST request to save lunch data
      await axios.post("http://localhost:5175/api/lunch", {
        // Include any relevant data for lunch here
      });
      console.log("Lunch POST successful");
    } catch (error) {
      console.error("Error posting lunch data:", error);
    }
  };

  const handelDinnerPost = async () => {
    try {
      // Send POST request to save dinner data
      await axios.post("http://localhost:5175/api/dinner", {
        // Include any relevant data for dinner here
      });
      console.log("Dinner POST successful");
    } catch (error) {
      console.error("Error posting dinner data:", error);
    }
  };
  const handelLaunch = () => {
    setLaunch(!launch);
  };

  const handelDinner = () => {
    setDinner(!dinner);
  };

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
        setResidentData(response.data.visitors); // Update to set the entire response data
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
          onClick={handelBreakFast}>
          BreakFast
        </button>
        {BreakFast ? (
          <TimeForm onclick={handelBreakFastPost} type={"BreakFast"} />
        ) : null}
        <button
          id={style["BUTTON"]}
          className="bg-green-300 rounded text-black font-bold"
          onClick={handelLaunch}>
          Launch
        </button>
        {launch ? (
          <TimeForm onclick={handelLaunchPost} type={"Launch"} />
        ) : null}
        <button
          id={style["BUTTON"]}
          className="bg-blue-300 rounded text-black font-bold"
          onClick={handelDinner}>
          Dinner
        </button>
        {dinner ? (
          <TimeForm onclick={handelDinnerPost} type={"Dinner"} />
        ) : null}
      </div>
    </div>
  );
}

export default Resident;
