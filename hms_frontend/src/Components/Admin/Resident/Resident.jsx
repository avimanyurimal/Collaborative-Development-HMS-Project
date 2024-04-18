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

  useEffect(() => {
    const fetchResidentCount = async () => {
      try {
        const response = await axios.get("http://localhost:5175/api/admin/residents/count");
        setResidentCount(response.data.count);
      } catch (error) {
        console.error("Error fetching resident count:", error);
      }
    };

    fetchResidentCount();
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
            <Graph
              name={"Residents"}
              nextName={"pageViews"}
              data={[]} // Provide data for the graph here
            />
            <div className={style["Table"]}>
              <Table forWho={"Residents"} data={[]} /> {/* Provide data for the table here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resident;

