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

function Resident() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [residentCount, setResidentCount] = useState(0);
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResidentCount = async () => {
      try {
        const response = await axios.get("http://localhost:5175/api/admin/residents/count");
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
    <>
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
    </>
  );
}

export default Resident;
